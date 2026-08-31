import fs from "node:fs";

import { routeRecords as h1 } from "./ibiza-batch-h1.mjs";
import { routeRecords as h2 } from "./ibiza-batch-h2.mjs";
import { routeRecords as h3 } from "./ibiza-batch-h3.mjs";
import { routeRecords as h4 } from "./ibiza-batch-h4.mjs";
import { routeRecords as d1 } from "./ibiza-batch-d1.mjs";
import { routeRecords as a1 } from "./ibiza-batch-a1.mjs";
import { routeRecords as a2 } from "./ibiza-batch-a2.mjs";
import { routeRecords as dt1 } from "./ibiza-batch-dt1.mjs";

const all = [...h1, ...h2, ...h3, ...h4, ...d1, ...a1, ...a2, ...dt1];

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
    if (value === undefined) continue;
    if (typeof value === "string") {
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

// The Ibiza route cluster: airport-to-town, hotels, cruise/ferry port,
// island-wide destination transfers, day trips, and villa transfers, all
// originating from or ending at Ibiza.
//
// Core hub pages are NOT duplicated here — /ibiza/ and /ibiza-airport-transfer/
// already exist as CityRecord/AirportRecord entries (lib/cities/data.ts,
// lib/airports/data.ts, slug "ibiza"). The CityRecord's own nameEn is
// "Ibiza Town", so /ibiza/ already represents the Ibiza Town intent — no
// separate /ibiza-town/ page is created (see AGENTS spec's own flagged
// cannibalization check).
//
// Mainland/inter-island cross-cluster transfers (Ibiza <-> Barcelona/
// Valencia/Palma/Madrid/Malaga/Alicante) are intentionally NOT built as
// direct private-car transfer pages, for the same reason established in
// palma.ts: Ibiza is an island, so there is no single private vehicle
// journey between it and another city the way there is between two
// mainland cities. The genuine complement is the Ibiza Airport transfer
// itself, already reached via /ibiza-airport-transfer/.
//
// Uses the Ibiza-specific visual template (components/routes/ibiza/) via
// the originCitySlug === "ibiza" branch in app/[locale]/[slug]/page.tsx —
// presentation-layer only; the shared relationship engine
// (lib/routes/related.ts, coverage.ts) has zero city-specific logic.
//
// Generated content, assembled from scripts/route-content/ibiza-batch-*.mjs.
export const ibizaRoutes: RouteRecord[] = [
${body}
];
`;

const outPath = "../../lib/routes/data/ibiza.ts";
fs.writeFileSync(new URL(outPath, import.meta.url), output, "utf8");
console.log(`Wrote ${all.length} records to lib/routes/data/ibiza.ts`);

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
