// Seeds the 10 cornerstone blog articles directly into Supabase.
//
// Usage: node --env-file=.env scripts/seed-blog.mjs
//
// Upserts on slug_en so re-running this script after editing an article's
// content in scripts/blog-content/*.mjs updates the existing row instead of
// duplicating it.

import { createClient } from "@supabase/supabase-js";

import { articles as batch1 } from "./blog-content/batch-1.mjs";
import { articles as batch2 } from "./blog-content/batch-2.mjs";
import { articles as batch3 } from "./blog-content/batch-3.mjs";

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

const articles = [...batch1, ...batch2, ...batch3];

console.log(`Seeding ${articles.length} blog posts...`);

for (const article of articles) {
  const row = {
    status: "published",
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

  const { error } = await supabase.from("blog_posts").upsert(row, { onConflict: "slug_en" });

  if (error) {
    console.error(`Failed to seed "${article.slugEn}":`, error.message);
    process.exitCode = 1;
    continue;
  }

  console.log(`Seeded: ${article.slugEn}`);
}

console.log("Done.");
