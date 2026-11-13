// Generates lib/seo/lastmod.json: the date each sitemap URL's content last
// changed, taken from git history (uncommitted edits use the file's own
// modification date). Runs automatically before every build via the
// "prebuild" npm script, and can be run by hand:
//
//   node scripts/generate-lastmod.mjs
//
// Deterministic: the same commits and files always give the same dates, and
// the JSON is only rewritten when a date actually changes. Commit the JSON
// together with the content change, because a shallow CI clone can't
// regenerate it (the script then keeps the committed file unchanged).
//
// Why a generated file: the sitemap is regenerated on the server
// (revalidate = 900), where git history isn't available.
//
// Granularity is per record, not per file: a route's date only moves when a
// commit actually touched that route's object in lib/routes/data/*.ts, so
// editing one Málaga route doesn't make all 71 Málaga routes look fresh.
// City and airport pages also take the date of their shared templates
// (composers, shared service copy, page component) and any hand-written
// content file for that page, because those change the rendered text.

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const repo = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1")), "..");
const git = (...args) => execFileSync("git", args, { cwd: repo, encoding: "utf8", maxBuffer: 256 * 1024 * 1024 });
/** Date (UTC) a file was last written on disk, used for uncommitted edits so
 *  re-running the script on a later day never moves a date. */
const mtimeDate = (file) => fs.statSync(path.join(repo, file)).mtime.toISOString().slice(0, 10);
const max = (a, b) => (!a ? b : !b ? a : a > b ? a : b);

/** Last date a file changed: its modification date if it has uncommitted changes, else its last commit. */
function fileDate(file) {
  const abs = path.join(repo, file);
  if (!fs.existsSync(abs)) return null;
  const dirty = git("status", "--porcelain", "--", file).trim();
  if (dirty) return mtimeDate(file);
  return git("log", "-1", "--format=%ad", "--date=short", "--", file).trim() || null;
}
const filesDate = (files) => files.reduce((acc, f) => max(acc, fileDate(f)), null);

/** Line ranges (1-based, inclusive start) of each record in a data file, keyed by slugEn. */
function recordRanges(content) {
  const lines = content.split(/\r?\n/);
  const starts = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s*slugEn:\s*"([^"]+)"/);
    if (!m) continue;
    let s = i;
    while (s > 0 && !/^\s*\{\s*$/.test(lines[s])) s--;
    starts.push({ slug: m[1], start: s + 1 });
  }
  return starts.map((r, i) => ({ slug: r.slug, start: r.start, end: i + 1 < starts.length ? starts[i + 1].start - 1 : lines.length }));
}

/** Map of new-file line ranges touched by a unified=0 diff. */
function touchedRanges(diff) {
  const out = [];
  for (const m of diff.matchAll(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/gm)) {
    const start = Number(m[1]);
    const count = m[2] === undefined ? 1 : Number(m[2]);
    out.push([start, Math.max(start, start + count - 1)]);
  }
  return out;
}

function markTouched(dates, ranges, touched, date) {
  for (const r of ranges) {
    if (touched.some(([a, b]) => a <= r.end && b >= r.start)) dates[r.slug] = max(dates[r.slug], date);
  }
}

/** Per-record last-change dates for a data file holding many `slugEn` records. */
function recordDates(file) {
  const dates = {};
  const commits = git("log", "--reverse", "--format=%H %ad", "--date=short", "--", file)
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((l) => l.split(" "));
  for (const [sha, date] of commits) {
    let content;
    try {
      content = git("show", `${sha}:${file}`);
    } catch {
      continue; // file deleted in this commit
    }
    const diff = git("show", "--unified=0", "--format=", sha, "--", file);
    markTouched(dates, recordRanges(content), touchedRanges(diff), date);
  }
  // Uncommitted edits are dated by the file's modification date.
  const abs = path.join(repo, file);
  if (fs.existsSync(abs)) {
    const current = fs.readFileSync(abs, "utf8");
    const tracked = git("ls-files", "--", file).trim();
    const edited = mtimeDate(file);
    if (!tracked) {
      for (const r of recordRanges(current)) dates[r.slug] = edited;
    } else {
      const diff = git("diff", "--unified=0", "HEAD", "--", file);
      if (diff) markTouched(dates, recordRanges(current), touchedRanges(diff), edited);
    }
  }
  return dates;
}

// Without full git history (no git, or a shallow CI clone) the dates would be
// wrong, so keep the committed lastmod.json exactly as it is.
try {
  if (git("rev-parse", "--is-shallow-repository").trim() === "true") {
    console.log("generate-lastmod: shallow clone, keeping committed lib/seo/lastmod.json");
    process.exit(0);
  }
} catch {
  console.log("generate-lastmod: git unavailable, keeping committed lib/seo/lastmod.json");
  process.exit(0);
}

const out = {};
const set = (urlPath, date) => {
  if (date) out[urlPath] = max(out[urlPath], date);
};

// --- Routes -----------------------------------------------------------------
const routeDir = "lib/routes/data";
const routeTemplate = filesDate(["lib/routes/dictionary.ts"]);
for (const f of fs.readdirSync(path.join(repo, routeDir)).filter((f) => f.endsWith(".ts") && f !== "index.ts")) {
  const file = `${routeDir}/${f}`;
  const dates = recordDates(file);
  const content = fs.readFileSync(path.join(repo, file), "utf8");
  for (const m of content.matchAll(/slugEn:\s*"([^"]+)",\s*slugEs:\s*"([^"]+)"/g)) {
    const date = max(dates[m[1]], routeTemplate);
    set(`/${m[1]}/`, date);
    set(`/es/${m[2]}/`, date);
  }
}

// --- Cities and airports ----------------------------------------------------
function hubRecords({ dataFile, templateFiles, contentFiles }) {
  const dates = recordDates(dataFile);
  const template = filesDate(templateFiles);
  const content = fs.readFileSync(path.join(repo, dataFile), "utf8");
  for (const m of content.matchAll(/slugEn:\s*"([^"]+)",\s*slugEs:\s*"([^"]+)"/g)) {
    const extra = contentFiles[m[1]] ? filesDate(contentFiles[m[1]]) : null;
    const date = max(max(dates[m[1]], template), extra);
    set(`/${m[1]}/`, date);
    set(`/es/${m[2]}/`, date);
  }
}

hubRecords({
  dataFile: "lib/cities/data.ts",
  templateFiles: [
    "lib/cities/content-composer.en.ts",
    "lib/cities/content-composer.es.ts",
    "lib/i18n/service-shared-content.ts",
    "components/cities/city-page-content.tsx",
  ],
  contentFiles: {
    cordoba: ["lib/cities/cordoba-content.ts"],
    zaragoza: ["lib/cities/zaragoza-content.ts"],
    malaga: ["lib/cities/malaga-content.ts"],
    toledo: ["lib/cities/toledo-content.ts"],
    bilbao: ["lib/cities/bilbao-content.ts"],
  },
});

hubRecords({
  dataFile: "lib/airports/data.ts",
  templateFiles: [
    "lib/airports/content-composer.en.ts",
    "lib/airports/content-composer.es.ts",
    "lib/i18n/service-shared-content.ts",
    "components/airports/airport-page-content.tsx",
  ],
  contentFiles: {
    "valencia-airport-transfer": ["lib/airports/valencia-content.ts"],
    "malaga-airport-transfer": ["lib/airports/malaga-content.ts"],
    "lanzarote-airport-transfer": ["lib/airports/lanzarote-content.ts"],
    "fuerteventura-airport-transfer": ["lib/airports/fuerteventura-content.ts"],
    "cordoba-airport-transfer": ["lib/airports/cordoba-content.ts"],
    "logrono-airport-transfer": ["lib/airports/logrono-content.ts"],
  },
});

// --- Static pages ------------------------------------------------------------
const pair = (en, es, files) => {
  const date = filesDate(files);
  set(en, date);
  set(es, date);
};
pair("/", "/es/", ["lib/i18n/dictionaries/en.ts", "lib/i18n/dictionaries/es.ts", "app/[locale]/page.tsx"]);
pair("/about-us/", "/es/sobre-nosotros/", ["lib/i18n/dictionaries/about.en.ts", "lib/i18n/dictionaries/about.es.ts", "components/about/about-page-content.tsx"]);
pair("/terms-and-conditions/", "/es/terminos-y-condiciones/", ["lib/i18n/dictionaries/terms.en.ts", "lib/i18n/dictionaries/terms.es.ts"]);
pair("/privacy-policy/", "/es/politica-de-privacidad/", ["lib/i18n/dictionaries/privacy.en.ts", "lib/i18n/dictionaries/privacy.es.ts"]);
pair("/get-a-quote/", "/es/solicitar-presupuesto/", ["lib/quote/quote.en.ts", "lib/quote/quote.es.ts"]);
pair("/airports/", "/es/aeropuertos/", ["lib/airports/hub.en.ts", "lib/airports/hub.es.ts", "lib/airports/data.ts"]);
pair("/cities/", "/es/ciudades/", ["lib/cities/hub.en.ts", "lib/cities/hub.es.ts", "lib/cities/data.ts"]);
pair("/blog/", "/es/blog/", ["lib/blog/hub.en.ts", "lib/blog/hub.es.ts"]);
const serviceShared = ["lib/i18n/service-shared-content.ts", "components/services/service-page-content.tsx"];
for (const [en, es, key] of [
  ["/airport-transfers/", "/es/traslados-aeropuerto/", "airport-transfers"],
  ["/city-to-city-transfers/", "/es/traslados-entre-ciudades/", "city-to-city-transfers"],
  ["/hourly-chauffeur/", "/es/chauffeur-por-horas/", "hourly-chauffeur"],
  ["/corporate-travel/", "/es/transporte-corporativo/", "corporate-travel"],
  ["/group-event-transfers/", "/es/traslados-para-grupos-y-eventos/", "group-event-transfers"],
  ["/cruise-port-transfers/", "/es/traslados-puertos-cruceros/", "cruise-port-transfers"],
]) {
  pair(en, es, [`lib/i18n/dictionaries/service-${key}.en.ts`, `lib/i18n/dictionaries/service-${key}.es.ts`, ...serviceShared]);
}

// --- Blog posts --------------------------------------------------------------
// Blog content lives in scripts/blog-content/*.mjs and is seeded into
// Supabase. The database's updated_at is not usable as a content date (every
// seed run used to rewrite every row), so the real dates come from git: for
// each article (by slugEn), the first and last time its record changed in any
// batch file. A post counts as updated only if it changed on a later day
// than it first appeared. Output: lib/seo/blog-dates.json.
function recordFirstLast(file) {
  const first = {}, last = {};
  const touch = (slug, date) => {
    first[slug] = first[slug] && first[slug] < date ? first[slug] : date;
    last[slug] = max(last[slug], date);
  };
  const commits = git("log", "--reverse", "--format=%H %ad", "--date=short", "--", file).trim().split("\n").filter(Boolean).map((l) => l.split(" "));
  for (const [sha, date] of commits) {
    let content;
    try { content = git("show", `${sha}:${file}`); } catch { continue; }
    const diff = git("show", "--unified=0", "--format=", sha, "--", file);
    const touched = touchedRanges(diff);
    for (const r of recordRanges(content)) if (touched.some(([a, b]) => a <= r.end && b >= r.start)) touch(r.slug, date);
  }
  const abs = path.join(repo, file);
  if (fs.existsSync(abs)) {
    const current = fs.readFileSync(abs, "utf8");
    const edited = mtimeDate(file);
    if (!git("ls-files", "--", file).trim()) {
      for (const r of recordRanges(current)) touch(r.slug, edited);
    } else {
      const diff = git("diff", "--unified=0", "HEAD", "--", file);
      if (diff) {
        const touched = touchedRanges(diff);
        for (const r of recordRanges(current)) if (touched.some(([a, b]) => a <= r.end && b >= r.start)) touch(r.slug, edited);
      }
    }
  }
  return { first, last };
}
const blogFirst = {}, blogLast = {};
const blogDir = "scripts/blog-content";
for (const f of fs.readdirSync(path.join(repo, blogDir)).filter((f) => f.endsWith(".mjs")).sort()) {
  const { first, last } = recordFirstLast(`${blogDir}/${f}`);
  for (const [slug, d] of Object.entries(first)) blogFirst[slug] = blogFirst[slug] && blogFirst[slug] < d ? blogFirst[slug] : d;
  for (const [slug, d] of Object.entries(last)) blogLast[slug] = max(blogLast[slug], d);
}
const blogDates = Object.fromEntries(
  Object.keys(blogFirst).sort().map((slug) => [slug, blogLast[slug] > blogFirst[slug] ? { updated: blogLast[slug] } : {}])
);

/** Write a JSON file only when its content changes, so builds stay deterministic. */
function writeIfChanged(rel, data) {
  const target = path.join(repo, rel);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const next = JSON.stringify(data, null, 2) + "\n";
  if (fs.existsSync(target) && fs.readFileSync(target, "utf8") === next) {
    console.log(`generate-lastmod: no date changes, ${rel} left untouched`);
    return false;
  }
  fs.writeFileSync(target, next);
  return true;
}

const sorted = Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
if (writeIfChanged("lib/seo/lastmod.json", sorted)) {
  const byDate = {};
  for (const d of Object.values(sorted)) byDate[d] = (byDate[d] ?? 0) + 1;
  console.log(`Wrote ${Object.keys(sorted).length} URL dates to lib/seo/lastmod.json`);
  console.log(Object.fromEntries(Object.entries(byDate).sort()));
}
if (writeIfChanged("lib/seo/blog-dates.json", blogDates)) {
  const updated = Object.entries(blogDates).filter(([, v]) => v.updated);
  console.log(`Wrote lib/seo/blog-dates.json: ${updated.length} of ${Object.keys(blogDates).length} posts updated after first publication`);
  for (const [slug, v] of updated) console.log(`  ${slug}: updated ${v.updated}`);
}
