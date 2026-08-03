import type { Metadata } from "next";

import { siteUrl, localeConfig, type Locale } from "@/lib/i18n/config";
import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import type { LocalizedBlogPost } from "@/lib/blog/types";

export function buildBlogHubMetadata({
  dict,
  locale,
  path,
  enPath,
  esPath,
}: {
  dict: BlogHubDictionary;
  locale: Locale;
  path: string;
  enPath: string;
  esPath: string;
}): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: dict.meta.title },
    description: dict.meta.description,
    alternates: {
      canonical: path,
      languages: {
        en: enPath,
        "es-ES": esPath,
        "x-default": enPath,
      },
    },
    openGraph: {
      type: "website",
      locale: localeConfig[locale].ogLocale,
      url: path,
      siteName: "Spain Private Transfers",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildBlogPostMetadata({
  post,
  locale,
  path,
  enPath,
  esPath,
}: {
  post: LocalizedBlogPost;
  locale: Locale;
  path: string;
  enPath: string;
  esPath: string;
}): Metadata {
  const ogImage = post.ogImageUrl ?? post.featuredImageUrl ?? undefined;

  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: post.seoTitle },
    description: post.metaDescription,
    alternates: {
      canonical: post.canonicalUrlOverride ?? path,
      languages: {
        en: enPath,
        "es-ES": esPath,
        "x-default": enPath,
      },
    },
    openGraph: {
      type: "article",
      locale: localeConfig[locale].ogLocale,
      url: path,
      siteName: "Spain Private Transfers",
      title: post.seoTitle,
      description: post.metaDescription,
      publishedTime: post.publishedAt ?? undefined,
      authors: [post.authorName],
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
