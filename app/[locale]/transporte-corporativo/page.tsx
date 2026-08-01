import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceDictionary } from "@/lib/i18n/get-service-dictionary";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getAboutDictionary } from "@/lib/i18n/get-about-dictionary";
import { buildServiceMetadata } from "@/lib/i18n/service-metadata";
import { ServicePageContent } from "@/components/services/service-page-content";

const PATH = "/es/transporte-corporativo/";
const EN_PATH = "/corporate-travel/";

export function generateStaticParams() {
  return [{ locale: "es" }];
}

export function generateMetadata(): Metadata {
  const dict = getServiceDictionary("corporate-travel", "es");
  return buildServiceMetadata({ dict, locale: "es", path: PATH, enPath: EN_PATH, esPath: PATH });
}

export default async function TransporteCorporativoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  const dict = getServiceDictionary("corporate-travel", "es");
  const homeDict = getDictionary("es");
  const breadcrumbHome = getAboutDictionary("es").breadcrumb.home;

  return (
    <ServicePageContent
      locale="es"
      dict={dict}
      homeDict={homeDict}
      path={PATH}
      breadcrumbHome={breadcrumbHome}
    />
  );
}
