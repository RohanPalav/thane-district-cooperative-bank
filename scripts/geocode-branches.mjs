import { writeFile } from "node:fs/promises";
import { branches } from "../client/src/data/branchData.js";

const OUTPUT_PATH = new URL(
  "../client/src/data/geocodedBranches.json",
  import.meta.url,
);

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function geocodeBranch(branch) {
  const query = [branch.name, branch.address, "Maharashtra", "India"].join(
    ", ",
  );

  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("limit", "1");
  url.searchParams.set("countrycodes", "in");
  url.searchParams.set("addressdetails", "1");
  url.searchParams.set("q", query);

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "ThaneDCCBankBranchLocator/1.0",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const results = await response.json();
    const result = results[0];

    if (!result) {
      console.log(`No match: ${branch.id}. ${branch.name}`);

      return {
        ...branch,
        latitude: null,
        longitude: null,
        matchedAddress: null,
        locationAccuracy: "unmatched",
      };
    }

    console.log(`Matched: ${branch.id}. ${branch.name}`);

    return {
      ...branch,
      latitude: Number(result.lat),
      longitude: Number(result.lon),
      matchedAddress: result.display_name,
      locationAccuracy: "approximate",
    };
  } catch (error) {
    console.error(`Failed: ${branch.name} - ${error.message}`);

    return {
      ...branch,
      latitude: null,
      longitude: null,
      matchedAddress: null,
      locationAccuracy: "unmatched",
    };
  }
}

async function main() {
  const results = [];

  console.log(`Starting geocoding for ${branches.length} branches...`);
  console.log("This process will take approximately one minute.");

  for (let index = 0; index < branches.length; index += 1) {
    const branch = branches[index];

    console.log(`[${index + 1}/${branches.length}] ${branch.name}`);

    const result = await geocodeBranch(branch);
    results.push(result);

    // Respect the public Nominatim service's one-request-per-second limit.
    if (index < branches.length - 1) {
      await delay(1100);
    }
  }

  await writeFile(OUTPUT_PATH, JSON.stringify(results, null, 2), "utf8");

  const matched = results.filter(
    (branch) => branch.latitude !== null && branch.longitude !== null,
  ).length;

  console.log("\nGeocoding completed.");
  console.log(`Matched: ${matched}`);
  console.log(`Unmatched: ${branches.length - matched}`);
  console.log(`Output: ${OUTPUT_PATH.pathname}`);
  console.log(
    "All returned coordinates are candidates and must be checked before being presented as exact branch locations.",
  );
}

main();
