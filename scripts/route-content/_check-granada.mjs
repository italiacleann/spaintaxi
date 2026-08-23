import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));

const batches = [
  ["granada-batch-h1", 4],
  ["granada-batch-h2", 4],
  ["granada-batch-h3", 4],
  ["granada-batch-h4", 4],
  ["granada-batch-d1", 8],
  ["granada-batch-sn1", 10],
  ["granada-batch-a1", 6],
  ["granada-batch-cc1", 7],
  ["granada-batch-cc2", 5],
  ["granada-batch-dt1", 7],
];

function wordCount(html) {
  if (!html) return 0;
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (!text) return 0;
  return text.split(" ").length;
}

let totalExpected = 0;
let totalFound = 0;

for (const [name, expected] of batches) {
  totalExpected += expected;
  const file = path.join(dir, `${name}.mjs`);
  if (!existsSync(file)) {
    console.log(`${name}: MISSING FILE (expected ${expected} records)`);
    continue;
  }
  try {
    const mod = await import(`${pathToFileURL(file).href}?t=${Date.now()}`);
    const records = mod.routeRecords;
    if (!Array.isArray(records)) {
      console.log(`${name}: NO routeRecords EXPORT`);
      continue;
    }
    totalFound += records.length;
    console.log(`${name}: ${records.length}/${expected} records`);
    records.forEach((r, i) => {
      const en = wordCount(r.contentEn);
      const es = wordCount(r.contentEs);
      const flagEn = en < 1050 ? " <== LOW" : "";
      const flagEs = es < 1050 ? " <== LOW" : "";
      const slug = r.slugEn ?? "(no slug)";
      console.log(`  [${i}] ${slug}: EN=${en}${flagEn} ES=${es}${flagEs}`);
    });
  } catch (err) {
    console.log(`${name}: ERROR loading - ${err.message}`);
  }
}

console.log(`\nTOTAL: ${totalFound}/${totalExpected} records found on disk`);
