import { absoluteUrl, type Locale } from "@/lib/i18n/config";
import { getPublishedPosts, getBlogPostPath } from "@/lib/blog/queries";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function buildBlogRssFeed(locale: Locale): Promise<string> {
  const posts = (await getPublishedPosts(locale)).slice(0, 20);
  const hubUrl = absoluteUrl(locale === "es" ? "/es/blog/" : "/blog/");
  const title = locale === "es" ? "Blog de Spain Private Transfers" : "Spain Private Transfers Blog";
  const description =
    locale === "es"
      ? "Guías de traslados al aeropuerto, taxis y viajes en España."
      : "Airport transfer, taxi, and travel guides for Spain.";

  const items = posts
    .map((post) => {
      const url = absoluteUrl(getBlogPostPath(locale, post.slug));
      const pubDate = post.publishedAt ? new Date(post.publishedAt).toUTCString() : new Date().toUTCString();
      return `<item>
  <title>${escapeXml(post.title)}</title>
  <link>${url}</link>
  <guid>${url}</guid>
  <pubDate>${pubDate}</pubDate>
  <description>${escapeXml(post.excerpt)}</description>
</item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${escapeXml(title)}</title>
  <link>${hubUrl}</link>
  <description>${escapeXml(description)}</description>
  <language>${locale === "es" ? "es-ES" : "en"}</language>
  ${items}
</channel>
</rss>`;
}
