import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";
import { getBlogHubDictionary } from "@/lib/blog/get-hub-dictionary";
import { buildBlogPostMetadata } from "@/lib/blog/metadata";
import {
  getBlogPostPath,
  getPostBySlug,
  getPublishedPosts,
  getRelatedPosts,
  getAllSlugsForStaticParams,
} from "@/lib/blog/queries";
import { getAboutDictionary } from "@/lib/i18n/get-about-dictionary";
import { BlogPostContent } from "@/components/blog/blog-post-content";

export const revalidate = 900;

export async function generateStaticParams() {
  return getAllSlugsForStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  const post = await getPostBySlug(locale, slug);
  if (!post) notFound();

  const path = getBlogPostPath(locale, post.slug);
  const enPath = "/blog/" + slug + "/";
  const esPath = "/es/blog/" + slug + "/";

  return buildBlogPostMetadata({ post, locale, path, enPath, esPath });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  const post = await getPostBySlug(locale, slug);
  if (!post) notFound();

  const dict = getBlogHubDictionary(locale);
  const breadcrumbHome = getAboutDictionary(locale).breadcrumb.home;
  const path = getBlogPostPath(locale, post.slug);

  const [relatedPosts, allPosts] = await Promise.all([
    getRelatedPosts(post, locale, 3),
    getPublishedPosts(locale),
  ]);

  const index = allPosts.findIndex((item) => item.id === post.id);
  const previous = index >= 0 ? (allPosts[index + 1] ?? null) : null;
  const next = index > 0 ? (allPosts[index - 1] ?? null) : null;

  return (
    <BlogPostContent
      locale={locale}
      post={post}
      dict={dict}
      breadcrumbHome={breadcrumbHome}
      path={path}
      relatedPosts={relatedPosts}
      previous={previous}
      next={next}
    />
  );
}
