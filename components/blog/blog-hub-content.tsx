import type { LocalizedBlogPost } from "@/lib/blog/types";
import type { BlogCategory } from "@/lib/blog/queries";
import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import { buildBlogHubJsonLd } from "@/lib/i18n/structured-data";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFeaturedCard } from "@/components/blog/blog-featured-card";
import { BlogDirectory } from "@/components/blog/blog-directory";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { BlogCtaBanner } from "@/components/blog/blog-cta-banner";

export function BlogHubContent({
  locale,
  dict,
  posts,
  categories,
  path,
}: {
  locale: Locale;
  dict: BlogHubDictionary;
  posts: LocalizedBlogPost[];
  categories: BlogCategory[];
  path: string;
}) {
  const jsonLd = buildBlogHubJsonLd(locale, dict, path, posts);
  const featured = posts.find((post) => post.isFeatured) ?? posts[0];
  const rest = posts.filter((post) => post.id !== featured?.id);
  const popularPosts = rest.slice(0, 5);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogHero dict={dict} locale={locale} />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-16">
          {featured ? <BlogFeaturedCard post={featured} locale={locale} dict={dict.directory} /> : null}

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
            <div className="flex flex-col gap-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground">{dict.directory.latestTitle}</h2>
              <BlogDirectory posts={rest} categories={categories} dict={dict.directory} locale={locale} />
            </div>
            <BlogSidebar popularPosts={popularPosts} dict={dict.sidebar} locale={locale} />
          </div>
        </Container>
      </section>

      <BlogCtaBanner dict={dict.cta} locale={locale} />
    </>
  );
}
