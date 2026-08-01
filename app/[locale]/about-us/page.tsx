import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteUrl, localeConfig } from "@/lib/i18n/config";
import { getAboutDictionary } from "@/lib/i18n/get-about-dictionary";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { AboutPageContent } from "@/components/about/about-page-content";

const PATH = "/about-us/";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  const dict = getAboutDictionary("en");

  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: dict.meta.title },
    description: dict.meta.description,
    alternates: {
      canonical: PATH,
      languages: {
        en: PATH,
        "es-ES": "/es/sobre-nosotros/",
        "x-default": PATH,
      },
    },
    openGraph: {
      type: "website",
      locale: localeConfig.en.ogLocale,
      url: PATH,
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

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  const dict = getAboutDictionary("en");
  const homeDict = getDictionary("en");

  return <AboutPageContent locale="en" dict={dict} homeDict={homeDict} path={PATH} />;
}
