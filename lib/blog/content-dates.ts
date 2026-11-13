import blogDates from "@/lib/seo/blog-dates.json";

/**
 * Date a blog post's content was last changed after it was first published,
 * or null if it hasn't been updated since. Generated from git history of
 * scripts/blog-content/*.mjs by scripts/generate-lastmod.mjs (runs on
 * prebuild). The database's updated_at isn't used because seeding used to
 * rewrite every row, which would make unchanged posts look updated.
 */
export function getContentUpdatedAt(slugEn: string | null): string | null {
  if (!slugEn) return null;
  const entry = (blogDates as Record<string, { updated?: string }>)[slugEn];
  return entry?.updated ?? null;
}
