import { routeRecords as h1 } from "./ibiza-batch-h1.mjs";
import { routeRecords as h2 } from "./ibiza-batch-h2.mjs";
import { routeRecords as h3 } from "./ibiza-batch-h3.mjs";
import { routeRecords as h4 } from "./ibiza-batch-h4.mjs";
import { routeRecords as d1 } from "./ibiza-batch-d1.mjs";
import { routeRecords as a1 } from "./ibiza-batch-a1.mjs";
import { routeRecords as a2 } from "./ibiza-batch-a2.mjs";
import { routeRecords as dt1 } from "./ibiza-batch-dt1.mjs";

const all = [...h1, ...h2, ...h3, ...h4, ...d1, ...a1, ...a2, ...dt1];
console.log("Total records:", all.length);

const allowedTags = new Set(["p", "h2", "h3", "ul", "ol", "li", "strong", "em", "a", "blockquote"]);

const internalWhitelist = new Set([
  "/get-a-quote/", "/airports/", "/cities/", "/", "/airport-transfers/", "/city-to-city-transfers/",
  "/hourly-chauffeur/", "/corporate-travel/", "/group-event-transfers/", "/cruise-port-transfers/",
  "/ibiza-airport-transfer/", "/ibiza/",
  "/es/solicitar-presupuesto/", "/es/aeropuertos/", "/es/ciudades/", "/es/", "/es/traslados-aeropuerto/",
  "/es/traslados-entre-ciudades/", "/es/chauffeur-por-horas/", "/es/transporte-corporativo/",
  "/es/traslados-para-grupos-y-eventos/", "/es/traslados-puertos-cruceros/", "/es/traslado-aeropuerto-ibiza/",
  "/es/ibiza/",
]);
const externalWhitelist = ["https://www.aena.es", "https://www.spain.info"];
const imagePool = new Set([
  "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1600&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1784646744123-94bee07bc09c?w=1600&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1589148938909-4d241c91ee52?w=1600&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1577372794873-e6b8efa7dcc3?w=1600&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1785250949631-d7fef6d5f529?w=1600&h=1400&fit=crop&q=80",
]);

const issues = [];
const seenSlugEn = new Map();
const seenSlugEs = new Map();

function stripTags(html) {
  return html.replace(/<[^>]+>/g, "").trim();
}
function wordCount(html) {
  return stripTags(html).split(/\s+/).filter(Boolean).length;
}

for (const r of all) {
  if (seenSlugEn.has(r.slugEn)) issues.push(`DUPLICATE slugEn: ${r.slugEn} (also in ${seenSlugEn.get(r.slugEn)})`);
  seenSlugEn.set(r.slugEn, r.slugEn);
  if (seenSlugEs.has(r.slugEs)) issues.push(`DUPLICATE slugEs: ${r.slugEs} (also in ${seenSlugEs.get(r.slugEs)})`);
  seenSlugEs.set(r.slugEs, r.slugEs);

  if (!imagePool.has(r.imageUrl)) issues.push(`${r.slugEn}: image not in approved pool: ${r.imageUrl}`);

  if (r.seoTitleEn.length < 50 || r.seoTitleEn.length > 60) issues.push(`${r.slugEn}: seoTitleEn length ${r.seoTitleEn.length}: "${r.seoTitleEn}"`);
  if (r.seoTitleEs.length < 50 || r.seoTitleEs.length > 60) issues.push(`${r.slugEn}: seoTitleEs length ${r.seoTitleEs.length}: "${r.seoTitleEs}"`);
  if (r.metaDescriptionEn.length < 145 || r.metaDescriptionEn.length > 160) issues.push(`${r.slugEn}: metaDescriptionEn length ${r.metaDescriptionEn.length}`);
  if (r.metaDescriptionEs.length < 145 || r.metaDescriptionEs.length > 160) issues.push(`${r.slugEn}: metaDescriptionEs length ${r.metaDescriptionEs.length}`);

  if (r.faqEn.length < 4 || r.faqEn.length > 6) issues.push(`${r.slugEn}: faqEn has ${r.faqEn.length} items`);
  if (r.faqEs.length < 4 || r.faqEs.length > 6) issues.push(`${r.slugEn}: faqEs has ${r.faqEs.length} items`);

  for (const field of ["contentEn", "contentEs"]) {
    const html = r[field];
    const words = wordCount(html);
    if (words < 1050) issues.push(`${r.slugEn} ${field}: only ${words} words (below 1050 minimum)`);

    const tags = [...html.matchAll(/<([a-zA-Z0-9]+)[^>]*>/g)].map((m) => m[1].toLowerCase());
    for (const t of tags) if (!allowedTags.has(t)) issues.push(`${r.slugEn} ${field}: disallowed tag <${t}>`);
    if (/class=|style=/.test(html)) issues.push(`${r.slugEn} ${field}: has class/style attribute`);

    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
    let internalCount = 0;
    let externalCount = 0;
    for (const href of hrefs) {
      if (href.startsWith("http")) {
        externalCount++;
        if (!externalWhitelist.some((w) => href.startsWith(w))) issues.push(`${r.slugEn} ${field}: bad external link ${href}`);
      } else {
        internalCount++;
        if (!internalWhitelist.has(href)) issues.push(`${r.slugEn} ${field}: bad internal link ${href}`);
      }
    }
    if (internalCount < 2 || internalCount > 4) issues.push(`${r.slugEn} ${field}: ${internalCount} internal links (expected 2-4)`);
    if (externalCount > 1) issues.push(`${r.slugEn} ${field}: ${externalCount} external links (expected 0-1)`);

    for (const tag of ["p", "h2", "h3", "ul", "ol", "li", "a", "strong", "em", "blockquote"]) {
      const opens = (html.match(new RegExp("<" + tag + "(\\s[^>]*)?>", "g")) || []).length;
      const closes = (html.match(new RegExp("</" + tag + ">", "g")) || []).length;
      if (opens !== closes) issues.push(`${r.slugEn} ${field}: <${tag}> mismatch ${opens} open vs ${closes} close`);
    }
  }
}

console.log("\nTotal issues:", issues.length);
issues.forEach((i) => console.log(" -", i));
