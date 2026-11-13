// Syncs the blog articles in scripts/blog-content/*.mjs into Supabase.
//
// Usage: node --env-file=.env scripts/seed-blog.mjs [--dry-run]
//
// Only writes real changes: new posts are inserted, changed posts are
// updated in the changed columns only (published_at is never touched), and
// unchanged posts are skipped. Run with --dry-run first to see the plan.

import { createClient } from "@supabase/supabase-js";

import { articles as batch1 } from "./blog-content/batch-1.mjs";
import { articles as batch2 } from "./blog-content/batch-2.mjs";
import { articles as batch3 } from "./blog-content/batch-3.mjs";
import { articles as batch4Madrid } from "./blog-content/batch-4-madrid.mjs";
import { articles as batch4Barcelona } from "./blog-content/batch-4-barcelona.mjs";
import { articles as batch5ValenciaPalma } from "./blog-content/batch-5-valencia-palma.mjs";
import { articles as batch6BarcelonaCruise } from "./blog-content/batch-6-barcelona-cruise.mjs";
import { articles as batch6MeetDriver } from "./blog-content/batch-6-meet-driver.mjs";
import { articles as batch7MalagaTransport } from "./blog-content/batch-7-malaga-transport.mjs";
import { articles as batch7MalagaCruise } from "./blog-content/batch-7-malaga-cruise.mjs";
import { articles as batch8SevilleTransport } from "./blog-content/batch-8-seville-transport.mjs";
import { articles as batch9AlicanteTransport } from "./blog-content/batch-9-alicante-transport.mjs";
import { articles as batch10MadridAirport } from "./blog-content/batch-10-madrid-airport.mjs";
import { articles as batch11PalmaCruise } from "./blog-content/batch-11-palma-cruise.mjs";
import { articles as batch12ValenciaCruise } from "./blog-content/batch-12-valencia-cruise.mjs";
import { articles as batch13MalagaAirportGranada } from "./blog-content/batch-13-malaga-airport-granada.mjs";
import { articles as batch14Consolidation, archivedSlugs } from "./blog-content/batch-14-consolidation.mjs";

function firstEnv(...names) {
  for (const name of names) {
    const value = process.env[name];
    if (value) return value;
  }
  return undefined;
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, "").trim();
}

function readingTimeMinutes(html) {
  const words = stripTags(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

const url = firstEnv("NEXT_PUBLIC_SUPABASE_URL", "SUPABASE_URL");
const serviceRoleKey = firstEnv("SUPABASE_SERVICE_ROLE_KEY", "SUPABASE_SECRET_KEY");

if (!url || !serviceRoleKey) {
  console.error(
    "Missing Supabase credentials. Expected NEXT_PUBLIC_SUPABASE_URL/SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY/SUPABASE_SECRET_KEY in the environment."
  );
  process.exit(1);
}

const supabase = createClient(url, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const allArticles = [...batch1, ...batch2, ...batch3, ...batch4Madrid, ...batch4Barcelona, ...batch5ValenciaPalma, ...batch6BarcelonaCruise, ...batch6MeetDriver, ...batch7MalagaTransport, ...batch7MalagaCruise, ...batch8SevilleTransport, ...batch9AlicanteTransport, ...batch10MadridAirport, ...batch11PalmaCruise, ...batch12ValenciaCruise, ...batch13MalagaAirportGranada, ...batch14Consolidation];

// Later batches replace earlier versions of the same post (batch 14 rewrites
// the taxi/Uber/transfer comparison), so keep only the last entry per slug.
const articles = [...new Map(allArticles.map((article) => [article.slugEn, article])).values()];

// Posts merged into another article: kept in the table but unpublished.
// Their URLs redirect to the surviving article (lib/seo/redirects.ts).
const archived = new Set(archivedSlugs);

const DRY_RUN = process.argv.includes("--dry-run");

function buildRow(article) {
  return {
    status: archived.has(article.slugEn) ? "archived" : "published",
    published_at: article.publishedAt,
    is_featured: Boolean(article.isFeatured),

    category: article.category,
    category_label_en: article.categoryLabelEn,
    category_label_es: article.categoryLabelEs,
    tags: article.tags,

    slug_en: article.slugEn,
    slug_es: article.slugEs,
    title_en: article.titleEn,
    title_es: article.titleEs,
    seo_title_en: article.seoTitleEn,
    seo_title_es: article.seoTitleEs,
    meta_description_en: article.metaDescriptionEn,
    meta_description_es: article.metaDescriptionEs,
    focus_keyword_en: article.focusKeywordEn,
    focus_keyword_es: article.focusKeywordEs,
    excerpt_en: article.excerptEn,
    excerpt_es: article.excerptEs,
    content_en: article.contentEn,
    content_es: article.contentEs,
    faq_en: article.faqEn,
    faq_es: article.faqEs,
    reading_time_minutes_en: readingTimeMinutes(article.contentEn),
    reading_time_minutes_es: readingTimeMinutes(article.contentEs),

    featured_image_url: article.featuredImageUrl,
    featured_image_alt_en: article.featuredImageAltEn,
    featured_image_alt_es: article.featuredImageAltEs,

    author_name: "Spain Private Transfers Editorial Team",
    author_title_en: "Local Travel Experts",
    author_title_es: "Expertos en Viajes Locales",
    author_bio_en:
      "Our editorial team writes from firsthand experience coordinating airport transfers and chauffeur services across Spain, working closely with our driver network to keep every guide accurate and practical.",
    author_bio_es:
      "Nuestro equipo editorial escribe desde la experiencia directa coordinando traslados al aeropuerto y servicios de chófer en toda España, trabajando junto a nuestra red de conductores para que cada guía sea precisa y práctica.",
  };
}

/** JSON with object keys sorted, so key order (jsonb reorders keys) never counts as a change. */
function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value ?? null);
}

/** Whether a stored value equals the value we would write. */
const same = (a, b) => canonical(a) === canonical(b);

// Read what is already in the table, so we only write real changes:
// - new posts are inserted with their publication date;
// - existing posts are updated only in the columns that changed, and their
//   published_at is never touched (a post is never "published again");
// - unchanged posts are skipped entirely, so their timestamps don't move.
const { data: existingRows, error: readError } = await supabase.from("blog_posts").select("*");
if (readError) {
  console.error("Could not read existing blog posts:", readError.message);
  process.exit(1);
}
const existingBySlug = new Map(existingRows.map((row) => [row.slug_en, row]));

console.log(`${DRY_RUN ? "[dry run] " : ""}Checking ${articles.length} blog posts against ${existingRows.length} existing rows...`);
const summary = { inserted: [], updated: [], unchanged: [] };

for (const article of articles) {
  const row = buildRow(article);
  const existing = existingBySlug.get(article.slugEn);

  if (!existing) {
    if (!DRY_RUN) {
      const { error } = await supabase.from("blog_posts").insert(row);
      if (error) { console.error(`Failed to insert "${article.slugEn}":`, error.message); process.exitCode = 1; continue; }
    }
    summary.inserted.push(article.slugEn);
    console.log(`NEW        ${article.slugEn} (published ${row.published_at.slice(0, 10)})`);
    continue;
  }

  // published_at is never compared or overwritten for existing posts.
  const candidate = { ...row };
  delete candidate.published_at;
  const changes = Object.fromEntries(Object.entries(candidate).filter(([column, value]) => !same(existing[column], value)));
  const changedColumns = Object.keys(changes);
  if (changedColumns.length === 0) {
    summary.unchanged.push(article.slugEn);
    continue;
  }
  if (!DRY_RUN) {
    const { error } = await supabase.from("blog_posts").update(changes).eq("slug_en", article.slugEn);
    if (error) { console.error(`Failed to update "${article.slugEn}":`, error.message); process.exitCode = 1; continue; }
  }
  summary.updated.push(article.slugEn);
  console.log(`UPDATED    ${article.slugEn}: ${changedColumns.join(", ")}`);
}

console.log(`${DRY_RUN ? "[dry run] would insert" : "Inserted"} ${summary.inserted.length}, ${DRY_RUN ? "would update" : "updated"} ${summary.updated.length}, unchanged ${summary.unchanged.length}.`);
console.log("Done.");
