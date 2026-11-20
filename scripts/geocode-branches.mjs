import { branches } from "../src/data/branchData.js";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.resolve(__dirname, "../src/data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "geocodedBranches.json");

const USER_AGENT = "TDCCBankWebsiteBranchLocator/1.0";
const REQUEST_DELAY = 1100;

const sleep = (milliseconds) =>
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
        "User-Agent": USER_AGENT,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
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

    console.log(`Candidate found: ${branch.id}. ${branch.name}`);

    return {
      ...branch,
      latitude: Number(result.lat),
      longitude: Number(result.lon),
      matchedAddress: result.display_name,
      locationAccuracy: "approximate-needs-verification",
    };
  } catch (error) {
    console.error(`Failed: ${branch.name} - ${error.message}`);

    return {
      ...branch,
      latitude: null,
      longitude: null,
      matchedAddress: null,
      locationAccuracy: "error",
      geocodingError: error.message,
    };
  }
}

async function main() {
  if (!Array.isArray(branches) || branches.length === 0) {
    throw new Error(
      "No branch records found. Check that branchData.js exports a non-empty 'branches' array.",
    );
  }

  await mkdir(OUTPUT_DIR, { recursive: true });

  const results = [];

  console.log("\n======================================");
  console.log(" TDCC BANK - BRANCH GEOCODING");
  console.log("======================================");
  console.log(`Total branch records: ${branches.length}\n`);

  for (let index = 0; index < branches.length; index += 1) {
    const branch = branches[index];

    console.log(`[${index + 1}/${branches.length}] ${branch.name}`);

    const result = await geocodeBranch(branch);
    results.push(result);

    // Save progress after every branch.
    await writeFile(OUTPUT_FILE, JSON.stringify(results, null, 2), "utf8");

    if (index < branches.length - 1) {
      await sleep(REQUEST_DELAY);
    }
  }

  const matched = results.filter(
    (branch) =>
      Number.isFinite(branch.latitude) && Number.isFinite(branch.longitude),
  ).length;

  console.log("\nGeocoding completed.");
  console.log(`Candidate coordinates: ${matched}`);
  console.log(`Unmatched / errors: ${branches.length - matched}`);
  console.log(`Output: ${OUTPUT_FILE}`);

  console.log(
    "All returned coordinates are candidates and must be checked before being presented as exact branch locations.",
  );
}

main().catch((error) => {
  console.error("\nBranch geocoding process failed:", error);

  process.exitCode = 1;
});
