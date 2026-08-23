import fs from "node:fs";

import { routeRecords as h1 } from "./granada-batch-h1.mjs";
import { routeRecords as h2 } from "./granada-batch-h2.mjs";
import { routeRecords as h3 } from "./granada-batch-h3.mjs";
import { routeRecords as h4 } from "./granada-batch-h4.mjs";
import { routeRecords as d1 } from "./granada-batch-d1.mjs";
import { routeRecords as sn1 } from "./granada-batch-sn1.mjs";
import { routeRecords as a1 } from "./granada-batch-a1.mjs";
import { routeRecords as cc1 } from "./granada-batch-cc1.mjs";
import { routeRecords as cc2 } from "./granada-batch-cc2.mjs";
import { routeRecords as dt1 } from "./granada-batch-dt1.mjs";

const combined = [...h1, ...h2, ...h3, ...h4, ...d1, ...sn1, ...a1, ...cc1, ...cc2, ...dt1];

// The shared RouteRelatedTransfersSection/related-links widgets only surface
// the first 9 (hub pages) / 4 (sidebar) records per city, in array order —
// a pre-existing sitewide behavior, not specific to Granada. Left in raw
// batch order, that window would be 9 hotel records only. Front-load one
// record per `kind` (and both hub-relevant directions) so the Granada city
// and airport pages showcase the full cluster, not just hotels.
const featuredSlugs = [
  "granada-airport-to-city-centre", // attraction (hub-style)
  "granada-to-sierra-nevada", // Sierra Nevada priority sub-cluster
  "granada-airport-to-sierra-nevada",
  "granada-airport-to-alhambra", // top attraction
  "granada-to-cordoba-transfer", // priority cross-cluster city-to-city
  "granada-to-cordoba-day-trip", // day-trip
  "granada-airport-to-alhambra-palace-hotel", // top hotel
  "granada-to-barcelona-transfer", // the genuinely new missing pair
  "granada-airport-to-train-station", // train-station kind
];
const bySlugEn = new Map(combined.map((r) => [r.slugEn, r]));
const featured = featuredSlugs.map((slug) => {
  const record = bySlugEn.get(slug);
  if (!record) throw new Error(`Featured slug not found in batches: ${slug}`);
  return record;
});
const featuredSet = new Set(featuredSlugs);
const rest = combined.filter((r) => !featuredSet.has(r.slugEn));
const all = [...featured, ...rest];

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

// The Granada + Sierra Nevada route cluster: airport-to-city, hotels, train
// station, the Sierra Nevada sub-cluster, attractions, Andalusia +
// Barcelona city-to-city routes, and day trips, all originating from or
// ending at Granada.
//
// Granada <-> Madrid, Granada <-> Málaga, Granada <-> Valencia, Granada <->
// Alicante, and Granada <-> Seville are intentionally NOT duplicated here —
// both directions of each already exist in lib/routes/data/madrid.ts,
// malaga.ts, valencia.ts, alicante.ts, and seville.ts. Only Granada <->
// Barcelona was genuinely missing and is built here (both directions).
//
// Granada Airport -> [Málaga/Córdoba/Seville/Almería] is intentionally NOT
// built as a separate arrival-transfer page — none of these are close
// enough to be a "land and bypass the city" resort-stay pattern; the
// genuine search intent is already captured by the city-to-city pages
// below, avoiding a near-duplicate third framing (matches the precedent
// set in seville.ts).
//
// Córdoba and Málaga each get BOTH a city-to-city page (one-way
// relocation/onward-travel framing) AND a day-trip page (round-trip
// sightseeing, driver waits) — mirroring the proven precedent from
// malaga.ts and seville.ts, where these two framings serve genuinely
// different travelers. Jerez and Ronda (no standalone city page on the
// site) get one direction only, matching the lower-demand precedent set
// for these same two towns in seville.ts.
//
// Generated content, assembled from scripts/route-content/granada-batch-*.mjs.
export const granadaRoutes: RouteRecord[] = [
${body}
];
`;

const outPath = "../../lib/routes/data/granada.ts";
fs.writeFileSync(new URL(outPath, import.meta.url), output, "utf8");
console.log(`Wrote ${all.length} records to lib/routes/data/granada.ts`);

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
