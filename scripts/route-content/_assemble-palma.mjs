import fs from "node:fs";

import { routeRecords as h1 } from "./palma-batch-h1.mjs";
import { routeRecords as h2 } from "./palma-batch-h2.mjs";
import { routeRecords as h3 } from "./palma-batch-h3.mjs";
import { routeRecords as h4 } from "./palma-batch-h4.mjs";
import { routeRecords as d1 } from "./palma-batch-d1.mjs";
import { routeRecords as p1 } from "./palma-batch-p1.mjs";
import { routeRecords as a1 } from "./palma-batch-a1.mjs";
import { routeRecords as a2 } from "./palma-batch-a2.mjs";
import { routeRecords as a3 } from "./palma-batch-a3.mjs";
import { routeRecords as a4 } from "./palma-batch-a4.mjs";
import { routeRecords as cc1 } from "./palma-batch-cc1.mjs";
import { routeRecords as dt1 } from "./palma-batch-dt1.mjs";

const all = [...h1, ...h2, ...h3, ...h4, ...d1, ...p1, ...a1, ...a2, ...a3, ...a4, ...cc1, ...dt1];

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

// The Palma de Mallorca + Mallorca route cluster: airport-to-city, hotels,
// cruise port, train station, island-wide destination transfers, day
// trips, and Palma-based city-to-city routes, all originating from or
// ending at Palma de Mallorca.
//
// Core hub pages are NOT duplicated here — /palma/ and /palma-airport-transfer/
// already exist as CityRecord/AirportRecord entries (lib/cities/data.ts,
// lib/airports/data.ts, slug "palma") and light up automatically via the
// shared RouteRelatedTransfersSection once this file's routes exist.
//
// Mainland cross-cluster transfers (Palma <-> Barcelona/Madrid/Valencia/
// Malaga/Alicante) are intentionally NOT built as direct private-car
// transfer pages: Mallorca is an island, so there is no single private
// vehicle journey between Palma and a mainland city the way there is
// between two mainland cities (e.g. Granada <-> Barcelona). Building such
// a page would misrepresent the actual service (it would require a flight
// or ferry leg that isn't part of what this site offers). The genuine
// island-side complement to those clusters is the standard Palma Airport
// transfer itself, which travelers connecting from any mainland city
// already reach via /palma-airport-transfer/.
//
// None of the 15 Mallorca towns covered here (Magaluf, Santa Ponsa,
// Alcudia, Port d'Alcudia, Pollenca, Port de Pollenca, Soller, Port de
// Soller, Cala d'Or, Cala Millor, Manacor, Porto Cristo, Andratx, Deia,
// Valldemossa) have their own CityRecord/city page on the site, so they
// are covered as route-cluster destination pages (matching the existing
// Ronda/Jerez precedent from the Granada/Seville clusters) rather than as
// new standalone city hubs.
//
// Internal linking (reverse-route priority, cross-cluster relevance, hub
// coverage guarantees) is handled entirely by the shared, generic engine
// in lib/routes/related.ts and lib/routes/coverage.ts — no per-cluster
// reordering or manual link curation is needed for this file.
//
// Generated content, assembled from scripts/route-content/palma-batch-*.mjs.
export const palmaRoutes: RouteRecord[] = [
${body}
];
`;

const outPath = "../../lib/routes/data/palma.ts";
fs.writeFileSync(new URL(outPath, import.meta.url), output, "utf8");
console.log(`Wrote ${all.length} records to lib/routes/data/palma.ts`);

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
