import { atms } from "../src/data/atmData.js";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.resolve(__dirname, "../src/data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "geocodedAtms.json");
const REPORT_FILE = path.join(OUTPUT_DIR, "atmGeocodingReport.json");

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
  return String(address || "").match(/\b\d{6}\b/)?.[0] || null;
}

function checkLocationMatch(atm, result) {
  const displayName = normalize(result.display_name);
  const atmName = normalize(atm.name);
  const pinCode = extractPinCode(atm.address);

  const nameMatched = atmName.length >= 4 && displayName.includes(atmName);

  const pinMatched =
    Boolean(pinCode) && String(result.display_name || "").includes(pinCode);

  return {
    nameMatched,
    pinMatched,
    matched: Boolean(nameMatched),
  };
}

async function geocodeAtm(atm) {
  const query = `${atm.name}, ${atm.address}, Maharashtra, India`;

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

    if (!Array.isArray(results) || results.length === 0) {
      return {
        id: atm.id,
        name: atm.name,
        latitude: null,
        longitude: null,
        matchedAddress: null,
        locationAccuracy: "unmatched",
        reason: "No result returned by Nominatim",
      };
    }

    const result = results[0];
    const match = checkLocationMatch(atm, result);

    // Reject unrelated results instead of placing them on the map.
    if (!match.matched) {
      return {
        id: atm.id,
        name: atm.name,
        latitude: null,
        longitude: null,
        matchedAddress: result.display_name || null,
        locationAccuracy: "needs-review",
        reason: "Result did not match the ATM name or PIN code",
        candidateLatitude: Number(result.lat),
        candidateLongitude: Number(result.lon),
      };
    }

    return {
      id: atm.id,
      name: atm.name,
      latitude: Number(result.lat),
      longitude: Number(result.lon),
      matchedAddress: result.display_name || null,
      locationAccuracy: "approximate-needs-verification",
      matchType: match.nameMatched
        ? "ATM locality/name matched"
        : "PIN code matched",
      reason: "Search result is approximate and requires manual verification",
    };
  } catch (error) {
    console.error(`Error geocoding ${atm.name}:`, error.message);

    return {
      id: atm.id,
      name: atm.name,
      latitude: null,
      longitude: null,
      matchedAddress: null,
      locationAccuracy: "error",
      reason: error.message,
    };
  }
}

async function main() {
  if (!Array.isArray(atms) || atms.length === 0) {
    throw new Error(
      "No ATM records found. Check that atmData.js exports a non-empty 'atms' array.",
    );
  }

  for (const [index, atm] of atms.entries()) {
    if (atm.id === undefined || !atm.name || !atm.address) {
      throw new Error(
        `Invalid ATM record at index ${index}. Each record must contain id, name, and address.`,
      );
    }
  }

  await mkdir(OUTPUT_DIR, { recursive: true });

  const results = [];

  let matched = 0;
  let unmatched = 0;
  let errors = 0;

  console.log("\n======================================");
  console.log(" TDCC BANK - ATM GEOCODING");
  console.log("======================================");
  console.log(`Total ATM records: ${atms.length}\n`);

  for (let index = 0; index < atms.length; index += 1) {
    const atm = atms[index];

    console.log(`[${index + 1}/${atms.length}] Searching: ${atm.name}`);

    const result = await geocodeAtm(atm);
    results.push(result);

    if (result.locationAccuracy === "approximate-needs-verification") {
      matched += 1;
      console.log(`  Approximate match: ${result.matchType}`);
    } else if (result.locationAccuracy === "error") {
      errors += 1;
      console.log(`  Error: ${result.reason}`);
    } else {
      unmatched += 1;
      console.log(`  Needs review: ${result.reason}`);
    }

    // Save progress after every ATM record.
    await writeFile(OUTPUT_FILE, JSON.stringify(results, null, 2), "utf8");

    // Respect Nominatim's public service request limit.
    if (index < atms.length - 1) {
      await sleep(REQUEST_DELAY);
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    provider: "OpenStreetMap Nominatim",
    totalRecords: atms.length,
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
  console.log(`Total records:             ${atms.length}`);
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
