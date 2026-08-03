import type { Locale } from "@/lib/i18n/config";
import { createSupabasePublicClient } from "@/lib/supabase/public";
import { processContentHtml } from "@/lib/blog/content";
import type { BlogPost, LocalizedBlogPost } from "@/lib/blog/types";

const SELECT_COLUMNS = "*";

function mapRow(row: Record<string, unknown>): BlogPost {
  return {
    id: row.id as string,
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
    status: row.status as BlogPost["status"],
    publishedAt: (row.published_at as string) ?? null,
    isFeatured: Boolean(row.is_featured),

    category: row.category as string,
    categoryLabelEn: row.category_label_en as string,
    categoryLabelEs: (row.category_label_es as string) ?? null,
    tags: (row.tags as string[]) ?? [],

    slugEn: (row.slug_en as string) ?? null,
    slugEs: (row.slug_es as string) ?? null,
    titleEn: (row.title_en as string) ?? null,
    titleEs: (row.title_es as string) ?? null,
    seoTitleEn: (row.seo_title_en as string) ?? null,
    seoTitleEs: (row.seo_title_es as string) ?? null,
    metaDescriptionEn: (row.meta_description_en as string) ?? null,
    metaDescriptionEs: (row.meta_description_es as string) ?? null,
    focusKeywordEn: (row.focus_keyword_en as string) ?? null,
    focusKeywordEs: (row.focus_keyword_es as string) ?? null,
    excerptEn: (row.excerpt_en as string) ?? null,
    excerptEs: (row.excerpt_es as string) ?? null,
    contentEn: (row.content_en as string) ?? null,
    contentEs: (row.content_es as string) ?? null,
    faqEn: (row.faq_en as BlogPost["faqEn"]) ?? [],
    faqEs: (row.faq_es as BlogPost["faqEs"]) ?? [],
    readingTimeMinutesEn: (row.reading_time_minutes_en as number) ?? null,
    readingTimeMinutesEs: (row.reading_time_minutes_es as number) ?? null,

    featuredImageUrl: (row.featured_image_url as string) ?? null,
    featuredImageAltEn: (row.featured_image_alt_en as string) ?? null,
    featuredImageAltEs: (row.featured_image_alt_es as string) ?? null,
    galleryImages: (row.gallery_images as BlogPost["galleryImages"]) ?? [],

    authorName: row.author_name as string,
    authorAvatarUrl: (row.author_avatar_url as string) ?? null,
    authorTitleEn: (row.author_title_en as string) ?? null,
    authorTitleEs: (row.author_title_es as string) ?? null,
    authorBioEn: (row.author_bio_en as string) ?? null,
    authorBioEs: (row.author_bio_es as string) ?? null,

    canonicalUrlOverride: (row.canonical_url_override as string) ?? null,
    ogImageUrl: (row.og_image_url as string) ?? null,
  };
}

/** Resolves a BlogPost into the locale-specific shape the rendering layer uses. Returns null if this post has no content in that locale. */
export function localizePost(post: BlogPost, locale: Locale): LocalizedBlogPost | null {
  const slug = locale === "es" ? post.slugEs : post.slugEn;
  const title = locale === "es" ? post.titleEs : post.titleEn;
  const content = locale === "es" ? post.contentEs : post.contentEn;
  if (!slug || !title || !content) return null;

  const { html: contentHtml } = processContentHtml(content);

  return {
    id: post.id,
    publishedAt: post.publishedAt,
    isFeatured: post.isFeatured,
    category: post.category,
    categoryLabel: (locale === "es" ? post.categoryLabelEs : post.categoryLabelEn) ?? post.categoryLabelEn,
    tags: post.tags,
    slug,
    title,
    seoTitle: (locale === "es" ? post.seoTitleEs : post.seoTitleEn) ?? title,
    metaDescription: (locale === "es" ? post.metaDescriptionEs : post.metaDescriptionEn) ?? (locale === "es" ? post.excerptEs : post.excerptEn) ?? "",
    focusKeyword: (locale === "es" ? post.focusKeywordEs : post.focusKeywordEn) ?? "",
    excerpt: (locale === "es" ? post.excerptEs : post.excerptEn) ?? "",
    contentHtml,
    faq: (locale === "es" ? post.faqEs : post.faqEn) ?? [],
    readingTimeMinutes: (locale === "es" ? post.readingTimeMinutesEs : post.readingTimeMinutesEn) ?? 5,
    featuredImageUrl: post.featuredImageUrl,
    featuredImageAlt: (locale === "es" ? post.featuredImageAltEs : post.featuredImageAltEn) ?? title,
    galleryImages: post.galleryImages,
    authorName: post.authorName,
    authorAvatarUrl: post.authorAvatarUrl,
    authorTitle: (locale === "es" ? post.authorTitleEs : post.authorTitleEn) ?? null,
    authorBio: (locale === "es" ? post.authorBioEs : post.authorBioEn) ?? null,
    canonicalUrlOverride: post.canonicalUrlOverride,
    ogImageUrl: post.ogImageUrl,
  };
}

export function getBlogPostPath(locale: Locale, slug: string): string {
  return locale === "es" ? `/es/blog/${slug}/` : `/blog/${slug}/`;
}

export async function getPublishedPosts(locale: Locale): Promise<LocalizedBlogPost[]> {
  const supabase = createSupabasePublicClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blog_posts")
    .select(SELECT_COLUMNS)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false });

  if (error || !data) return [];

  return data
    .map((row) => localizePost(mapRow(row), locale))
    .filter((post): post is LocalizedBlogPost => post !== null);
}

export async function getPostBySlug(locale: Locale, slug: string): Promise<LocalizedBlogPost | null> {
  const supabase = createSupabasePublicClient();
  if (!supabase) return null;

  const column = locale === "es" ? "slug_es" : "slug_en";
  const { data, error } = await supabase
    .from("blog_posts")
    .select(SELECT_COLUMNS)
    .eq(column, slug)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .maybeSingle();

  if (error || !data) return null;
  return localizePost(mapRow(data), locale);
}

export async function getAllSlugsForStaticParams(): Promise<{ locale: Locale; slug: string }[]> {
  const supabase = createSupabasePublicClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug_en, slug_es")
    .eq("status", "published")
    .lte("published_at", new Date().toISOString());

  if (error || !data) return [];

  const params: { locale: Locale; slug: string }[] = [];
  for (const row of data as { slug_en: string | null; slug_es: string | null }[]) {
    if (row.slug_en) params.push({ locale: "en", slug: row.slug_en });
    if (row.slug_es) params.push({ locale: "es", slug: row.slug_es });
  }
  return params;
}

export async function getRelatedPosts(
  post: LocalizedBlogPost,
  locale: Locale,
  limit = 3
): Promise<LocalizedBlogPost[]> {
  const all = await getPublishedPosts(locale);
  return all.filter((candidate) => candidate.id !== post.id && candidate.category === post.category).slice(0, limit);
}

export interface BlogCategory {
  slug: string;
  label: string;
}

export async function getCategories(locale: Locale): Promise<BlogCategory[]> {
  const posts = await getPublishedPosts(locale);
  const seen = new Map<string, string>();
  for (const post of posts) {
    if (!seen.has(post.category)) seen.set(post.category, post.categoryLabel);
  }
  return [...seen.entries()].map(([slug, label]) => ({ slug, label }));
}
