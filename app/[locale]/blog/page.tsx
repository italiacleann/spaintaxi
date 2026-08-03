import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";
import { getBlogHubDictionary } from "@/lib/blog/get-hub-dictionary";
import { buildBlogHubMetadata } from "@/lib/blog/metadata";
import { getBlogHubPath } from "@/lib/blog/config";
import { getPublishedPosts, getCategories } from "@/lib/blog/queries";
import { BlogHubContent } from "@/components/blog/blog-hub-content";

const EN_PATH = "/blog/";
const ES_PATH = "/es/blog/";

export const revalidate = 900;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const dict = getBlogHubDictionary(rawLocale);
  const path = getBlogHubPath(rawLocale);
  return buildBlogHubMetadata({ dict, locale: rawLocale, path, enPath: EN_PATH, esPath: ES_PATH });
}

export default async function BlogHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;
  const dict = getBlogHubDictionary(locale);
  const path = getBlogHubPath(locale);

  const [posts, categories] = await Promise.all([getPublishedPosts(locale), getCategories(locale)]);

  return <BlogHubContent locale={locale} dict={dict} posts={posts} categories={categories} path={path} />;
}
