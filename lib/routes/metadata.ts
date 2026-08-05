import type { Metadata } from "next";

import { siteUrl, localeConfig, type Locale } from "@/lib/i18n/config";
import type { RouteRecord } from "@/lib/routes/types";

export function buildRouteMetadata({
  route,
  locale,
  path,
  enPath,
  esPath,
}: {
  route: RouteRecord;
  locale: Locale;
  path: string;
  enPath: string;
  esPath: string;
}): Metadata {
  const title = locale === "es" ? route.seoTitleEs : route.seoTitleEn;
  const description = locale === "es" ? route.metaDescriptionEs : route.metaDescriptionEn;

  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: title },
    description,
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
      title,
      description,
      images: [{ url: route.imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [route.imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
