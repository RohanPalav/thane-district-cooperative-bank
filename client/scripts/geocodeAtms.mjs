import { branches } from "../src/data/branchData.js";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.resolve(__dirname, "../src/data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "geocodedAtms.json");
const REPORT_FILE = path.join(OUTPUT_DIR, "atmGeocodingReport.json");

// IMPORTANT:
// Replace YOUR_EMAIL with a valid contact email before running.
const USER_AGENT =
  "TDCCBankWebsiteGeocoder/1.0 (ATM directory geocoding; contact: rohanpalav2004@gmail.com)";

const REQUEST_DELAY = 1100;

const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractPinCode(address) {
  return address.match(/\b\d{6}\b/)?.[0] || null;
}

function checkLocationMatch(branch, result) {
  const displayName = normalize(result.display_name);
  const branchName = normalize(branch.name);
  const pinCode = extractPinCode(branch.address);

  const nameMatched =
    branchName.length >= 4 && displayName.includes(branchName);

  const pinMatched = pinCode && result.display_name.includes(pinCode);

  return {
    nameMatched,
    pinMatched,
    matched: Boolean(nameMatched || pinMatched),
  };
}

async function geocodeAddress(branch) {
  const query = `${branch.name}, ${branch.address}, Maharashtra, India`;

  const params = new URLSearchParams({
    q: query,
    format: "jsonv2",
    limit: "1",
    addressdetails: "1",
    countrycodes: "in",
  });

  const url = `https://nominatim.openstreetmap.org/search?${params}`;

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

    if (!results.length) {
      return {
        id: branch.id,
        name: branch.name,
        latitude: null,
        longitude: null,
        matchedAddress: null,
        locationAccuracy: "unmatched",
        reason: "No result returned by Nominatim",
      };
    }

    const result = results[0];
    const match = checkLocationMatch(branch, result);

    // Do not put an unrelated search result on the map.
    if (!match.matched) {
      return {
        id: branch.id,
        name: branch.name,
        latitude: null,
        longitude: null,
        matchedAddress: result.display_name,
        locationAccuracy: "needs-review",
        reason: "Result did not match the ATM name or PIN code",
        candidateLatitude: Number(result.lat),
        candidateLongitude: Number(result.lon),
      };
    }

    return {
      id: branch.id,
      name: branch.name,
      latitude: Number(result.lat),
      longitude: Number(result.lon),
      matchedAddress: result.display_name,
      locationAccuracy: "approximate-needs-verification",
      matchType: match.nameMatched
        ? "ATM locality/name matched"
        : "PIN code matched",
      reason: "Search result is approximate and requires manual verification",
    };
  } catch (error) {
    console.error(`Error geocoding ${branch.name}:`, error.message);

    return {
      id: branch.id,
      name: branch.name,
      latitude: null,
      longitude: null,
      matchedAddress: null,
      locationAccuracy: "error",
      reason: error.message,
    };
  }
}

async function main() {
  if (USER_AGENT.includes("YOUR_EMAIL")) {
    console.error(
      "\nPlease replace YOUR_EMAIL in the script with a valid contact email before running it.\n",
    );
    process.exit(1);
  }

  if (!Array.isArray(branches) || branches.length === 0) {
    console.error("No ATM records found in branchData.js.");
    process.exit(1);
  }

  await mkdir(OUTPUT_DIR, { recursive: true });

  const results = [];

  let matched = 0;
  let unmatched = 0;
  let errors = 0;

  console.log("\n======================================");
  console.log(" TDCC BANK - ATM GEOCODING");
  console.log("======================================");
  console.log(`Total ATM records: ${branches.length}\n`);

  for (let index = 0; index < branches.length; index++) {
    const branch = branches[index];

    console.log(`[${index + 1}/${branches.length}] Searching: ${branch.name}`);

    const result = await geocodeAddress(branch);

    results.push(result);

    if (result.locationAccuracy === "approximate-needs-verification") {
      matched++;
      console.log(`  Approximate match: ${result.matchType}`);
    } else if (result.locationAccuracy === "error") {
      errors++;
      console.log(`  Error: ${result.reason}`);
    } else {
      unmatched++;
      console.log(`  Needs review: ${result.reason}`);
    }

    // Save progress after every record.
    await writeFile(OUTPUT_FILE, JSON.stringify(results, null, 2), "utf8");

    // Respect Nominatim's maximum of one request per second.
    if (index < branches.length - 1) {
      await sleep(REQUEST_DELAY);
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    provider: "OpenStreetMap Nominatim",
    totalRecords: branches.length,
    approximateMatches: matched,
    unmatchedOrNeedsReview: unmatched,
    errors,
    note: "Approximate matches are not verified ATM locations. All coordinates must be manually checked before being presented as exact ATM locations.",
    results: results.map((item) => ({
      id: item.id,
      name: item.name,
      status: item.locationAccuracy,
      matchType: item.matchType || null,
      reason: item.reason || null,
      matchedAddress: item.matchedAddress,
    })),
  };

  await writeFile(REPORT_FILE, JSON.stringify(report, null, 2), "utf8");

  console.log("\n======================================");
  console.log(" GEOCODING COMPLETED");
  console.log("======================================");
  console.log(`Total records:             ${branches.length}`);
  console.log(`Approximate matches:       ${matched}`);
  console.log(`Unmatched / review needed: ${unmatched}`);
  console.log(`Errors:                    ${errors}`);
  console.log("\nGenerated files:");
  console.log(`1. ${OUTPUT_FILE}`);
  console.log(`2. ${REPORT_FILE}`);
  console.log("\nRemember to verify approximate coordinates manually.");
}

main().catch((error) => {
  console.error("\nGeocoding process failed:", error);
  process.exitCode = 1;
});
