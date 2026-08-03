import type { LocalizedBlogPost } from "@/lib/blog/types";
import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import { buildBlogPostJsonLd } from "@/lib/i18n/structured-data";
import { processContentHtml } from "@/lib/blog/content";
import { absoluteUrl, type Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { BlogPostHero } from "@/components/blog/blog-post-hero";
import { BlogProgressBar } from "@/components/blog/blog-progress-bar";
import { BlogToc } from "@/components/blog/blog-toc";
import { BlogSocialShare } from "@/components/blog/blog-social-share";
import { BlogContent } from "@/components/blog/blog-content";
import { BlogFaq } from "@/components/blog/blog-faq";
import { BlogAuthorBox } from "@/components/blog/blog-author-box";
import { BlogRelatedPosts } from "@/components/blog/blog-related-posts";
import { BlogPrevNext } from "@/components/blog/blog-prev-next";
import { BlogCtaBanner } from "@/components/blog/blog-cta-banner";

export function BlogPostContent({
  locale,
  post,
  dict,
  breadcrumbHome,
  path,
  relatedPosts,
  previous,
  next,
}: {
  locale: Locale;
  post: LocalizedBlogPost;
  dict: BlogHubDictionary;
  breadcrumbHome: string;
  path: string;
  relatedPosts: LocalizedBlogPost[];
  previous: LocalizedBlogPost | null;
  next: LocalizedBlogPost | null;
}) {
  const { toc } = processContentHtml(post.contentHtml);
  const jsonLd = buildBlogPostJsonLd(locale, post, path, breadcrumbHome, dict.breadcrumb.current);
  const url = absoluteUrl(path);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogProgressBar />
      <BlogPostHero post={post} dict={dict} locale={locale} breadcrumbHome={breadcrumbHome} />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_260px]">
          <div className="flex min-w-0 flex-col gap-10">
            <BlogSocialShare url={url} title={post.title} dict={dict.post} />
            <BlogContent html={post.contentHtml} />
            <BlogFaq items={post.faq} title={dict.post.faqTitle} />
            <BlogAuthorBox post={post} dict={dict.post} />
            <BlogPrevNext previous={previous} next={next} dict={dict.post} locale={locale} />
            <BlogRelatedPosts posts={relatedPosts} dict={dict.directory} locale={locale} title={dict.post.relatedTitle} />
          </div>

          <div className="hidden lg:block">
            <BlogToc toc={toc} title={dict.post.tocTitle} />
          </div>
        </Container>
      </section>

      <BlogCtaBanner dict={dict.cta} locale={locale} />
    </>
  );
}
