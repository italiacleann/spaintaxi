import { buildBlogRssFeed } from "@/lib/blog/rss";

export const revalidate = 900;

export async function GET() {
  const xml = await buildBlogRssFeed("es");
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
