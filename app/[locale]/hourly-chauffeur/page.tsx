import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceDictionary } from "@/lib/i18n/get-service-dictionary";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getAboutDictionary } from "@/lib/i18n/get-about-dictionary";
import { buildServiceMetadata } from "@/lib/i18n/service-metadata";
import { ServicePageContent } from "@/components/services/service-page-content";

const PATH = "/hourly-chauffeur/";
const ES_PATH = "/es/chauffeur-por-horas/";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  const dict = getServiceDictionary("hourly-chauffeur", "en");
  return buildServiceMetadata({ dict, locale: "en", path: PATH, enPath: PATH, esPath: ES_PATH });
}

export default async function HourlyChauffeurPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  const dict = getServiceDictionary("hourly-chauffeur", "en");
  const homeDict = getDictionary("en");
  const breadcrumbHome = getAboutDictionary("en").breadcrumb.home;

  return (
    <ServicePageContent
      locale="en"
      dict={dict}
      homeDict={homeDict}
      path={PATH}
      breadcrumbHome={breadcrumbHome}
    />
  );
}
