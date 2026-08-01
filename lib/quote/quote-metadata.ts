import type { Metadata } from "next";

import { siteUrl, localeConfig, type Locale } from "@/lib/i18n/config";
import type { QuotePageDictionary } from "@/lib/quote/types";

export function buildQuoteMetadata({
  dict,
  locale,
  path,
  enPath,
  esPath,
}: {
  dict: QuotePageDictionary;
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
