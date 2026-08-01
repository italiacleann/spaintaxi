import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteUrl, localeConfig } from "@/lib/i18n/config";
import { getAboutDictionary } from "@/lib/i18n/get-about-dictionary";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { AboutPageContent } from "@/components/about/about-page-content";

const PATH = "/es/sobre-nosotros/";

export function generateStaticParams() {
  return [{ locale: "es" }];
}

export function generateMetadata(): Metadata {
  const dict = getAboutDictionary("es");

  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: dict.meta.title },
    description: dict.meta.description,
    alternates: {
      canonical: PATH,
      languages: {
        en: "/about-us/",
        "es-ES": PATH,
        "x-default": "/about-us/",
      },
    },
    openGraph: {
      type: "website",
      locale: localeConfig.es.ogLocale,
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

export default async function SobreNosotrosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  const dict = getAboutDictionary("es");
  const homeDict = getDictionary("es");

  return <AboutPageContent locale="es" dict={dict} homeDict={homeDict} path={PATH} />;
}
