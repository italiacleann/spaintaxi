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
console.log("Total records:", all.length);

const allowedTags = new Set(["p", "h2", "h3", "ul", "ol", "li", "strong", "em", "a", "blockquote"]);

const internalWhitelist = new Set([
  "/get-a-quote/", "/airports/", "/cities/", "/", "/airport-transfers/", "/city-to-city-transfers/",
  "/hourly-chauffeur/", "/corporate-travel/", "/group-event-transfers/", "/cruise-port-transfers/",
  "/barcelona-airport-transfer/", "/barcelona/",
  "/es/solicitar-presupuesto/", "/es/aeropuertos/", "/es/ciudades/", "/es/", "/es/traslados-aeropuerto/",
  "/es/traslados-entre-ciudades/", "/es/chauffeur-por-horas/", "/es/transporte-corporativo/",
  "/es/traslados-para-grupos-y-eventos/", "/es/traslados-puertos-cruceros/", "/es/traslado-aeropuerto-barcelona/",
  "/es/barcelona/",
  // city-to-city extras
  "/madrid/", "/es/madrid/", "/valencia/", "/es/valencia/", "/zaragoza/", "/es/zaragoza/",
  "/alicante/", "/es/alicante/", "/seville/", "/es/sevilla/", "/malaga/", "/es/malaga/",
  "/bilbao/", "/es/bilbao/", "/girona/", "/es/girona/",
  // legitimate sibling links within the batch-9 city-to-city cluster
  "/barcelona-to-madrid-transfer/", "/es/barcelona-a-madrid-traslado/",
  "/barcelona-to-valencia-transfer/", "/es/barcelona-a-valencia-traslado/",
  "/barcelona-to-zaragoza-transfer/", "/es/barcelona-a-zaragoza-traslado/",
]);
const externalWhitelist = ["https://www.aena.es", "https://www.spain.info"];
const imagePool = new Set([
  "https://images.unsplash.com/photo-1784646744123-94bee07bc09c?w=1600&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1722612199461-dce07abb7555?w=1600&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1722612129910-ec3eefabc836?w=1600&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1600&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1589148938909-4d241c91ee52?w=1600&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1577372794873-e6b8efa7dcc3?w=1600&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1543785734-4b6e564642f8?w=1600&h=1400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1751834740962-9c41fe457858?w=1600&h=1400&fit=crop&q=80",
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

  if (r.seoTitleEn.length < 45 || r.seoTitleEn.length > 65) issues.push(`${r.slugEn}: seoTitleEn length ${r.seoTitleEn.length}: "${r.seoTitleEn}"`);
  if (r.seoTitleEs.length < 45 || r.seoTitleEs.length > 65) issues.push(`${r.slugEn}: seoTitleEs length ${r.seoTitleEs.length}: "${r.seoTitleEs}"`);
  if (r.metaDescriptionEn.length < 135 || r.metaDescriptionEn.length > 170) issues.push(`${r.slugEn}: metaDescriptionEn length ${r.metaDescriptionEn.length}`);
  if (r.metaDescriptionEs.length < 135 || r.metaDescriptionEs.length > 170) issues.push(`${r.slugEn}: metaDescriptionEs length ${r.metaDescriptionEs.length}`);

  if (r.faqEn.length < 4 || r.faqEn.length > 6) issues.push(`${r.slugEn}: faqEn has ${r.faqEn.length} items`);
  if (r.faqEs.length < 4 || r.faqEs.length > 6) issues.push(`${r.slugEn}: faqEs has ${r.faqEs.length} items`);

  for (const field of ["contentEn", "contentEs"]) {
    const html = r[field];
    const words = wordCount(html);
    if (words < 500) issues.push(`${r.slugEn} ${field}: only ${words} words (below 700-1100 target)`);

    const tags = [...html.matchAll(/<([a-zA-Z0-9]+)[^>]*>/g)].map((m) => m[1].toLowerCase());
    for (const t of tags) if (!allowedTags.has(t)) issues.push(`${r.slugEn} ${field}: disallowed tag <${t}>`);
    if (/class=|style=/.test(html)) issues.push(`${r.slugEn} ${field}: has class/style attribute`);

    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
    for (const href of hrefs) {
      if (href.startsWith("http")) {
        if (!externalWhitelist.some((w) => href.startsWith(w))) issues.push(`${r.slugEn} ${field}: bad external link ${href}`);
      } else if (!internalWhitelist.has(href)) {
        issues.push(`${r.slugEn} ${field}: bad internal link ${href}`);
      }
    }

    // tag balance
    for (const tag of ["p", "h2", "h3", "ul", "ol", "li", "a", "strong", "em", "blockquote"]) {
      const opens = (html.match(new RegExp("<" + tag + "(\\s[^>]*)?>", "g")) || []).length;
      const closes = (html.match(new RegExp("</" + tag + ">", "g")) || []).length;
      if (opens !== closes) issues.push(`${r.slugEn} ${field}: <${tag}> mismatch ${opens} open vs ${closes} close`);
    }
  }
}

console.log("\nTotal issues:", issues.length);
issues.forEach((i) => console.log(" -", i));
