import fs from "node:fs";

import { routeRecords as b1 } from "./batch-1.mjs";
import { routeRecords as b2 } from "./batch-2.mjs";
import { routeRecords as b3 } from "./batch-3.mjs";
import { routeRecords as b4 } from "./batch-4.mjs";
import { routeRecords as b5 } from "./batch-5.mjs";
import { routeRecords as b6 } from "./batch-6.mjs";
import { routeRecords as b7 } from "./batch-7.mjs";
import { routeRecords as b8 } from "./batch-8.mjs";
import { routeRecords as b9 } from "./batch-9.mjs";
import { routeRecords as b10 } from "./batch-10.mjs";

const all = [...b1, ...b2, ...b3, ...b4, ...b5, ...b6, ...b7, ...b8, ...b9, ...b10];

const fieldOrder = [
  "kind", "direction", "originCitySlug", "slugEn", "slugEs",
  "originNameEn", "originNameEs", "destinationNameEn", "destinationNameEs",
  "areaEn", "areaEs", "driveTime", "distanceKm",
  "titleEn", "titleEs", "seoTitleEn", "seoTitleEs",
  "metaDescriptionEn", "metaDescriptionEs",
  "contentEn", "contentEs", "faqEn", "faqEs",
  "imageUrl", "imageAltEn", "imageAltEs",
];

function serializeRecord(r, indent = "  ") {
  const lines = [`${indent}{`];
  for (const key of fieldOrder) {
    if (!(key in r)) continue;
    const value = r[key];
    if (typeof value === "string") {
      // Use a JS template literal for multi-line HTML content fields, plain
      // JSON string otherwise (JSON.stringify handles all escaping safely).
      if (key === "contentEn" || key === "contentEs") {
        const escaped = value.replaceAll("\\", "\\\\").replaceAll("`", "\\`").replaceAll("${", "\\${");
        lines.push(`${indent}  ${key}: \`${escaped}\`,`);
      } else {
        lines.push(`${indent}  ${key}: ${JSON.stringify(value)},`);
      }
    } else {
      lines.push(`${indent}  ${key}: ${JSON.stringify(value)},`);
    }
  }
  lines.push(`${indent}},`);
  return lines.join("\n");
}

const body = all.map((r) => serializeRecord(r)).join("\n");

const output = `import type { RouteRecord } from "@/lib/routes/types";

// The Barcelona route cluster: hotels, cruise port, train station,
// attractions, day trips, and city-to-city transfers, all originating from
// or ending at Barcelona. Generated content, assembled from
// scripts/route-content/batch-*.mjs.
export const barcelonaRoutes: RouteRecord[] = [
${body}
];
`;

const outPath = "../../lib/routes/data/barcelona.ts";
fs.writeFileSync(new URL(outPath, import.meta.url), output, "utf8");
console.log(`Wrote ${all.length} records to lib/routes/data/barcelona.ts`);

// Sanity: duplicate slug check across the assembled set
const seenEn = new Set();
const seenEs = new Set();
let dupes = 0;
for (const r of all) {
  if (seenEn.has(r.slugEn)) { console.log("DUPLICATE slugEn:", r.slugEn); dupes++; }
  seenEn.add(r.slugEn);
  if (seenEs.has(r.slugEs)) { console.log("DUPLICATE slugEs:", r.slugEs); dupes++; }
  seenEs.add(r.slugEs);
}
console.log(dupes === 0 ? "No duplicate slugs." : `${dupes} duplicate slug(s) found!`);
