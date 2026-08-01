import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPrivacyDictionary } from "@/lib/i18n/get-legal-dictionary";
import { buildLegalMetadata } from "@/lib/i18n/legal-metadata";
import { LegalPageContent } from "@/components/legal/legal-page-content";

const PATH = "/es/politica-de-privacidad/";
const EN_PATH = "/privacy-policy/";

export function generateStaticParams() {
  return [{ locale: "es" }];
}

export function generateMetadata(): Metadata {
  const dict = getPrivacyDictionary("es");
  return buildLegalMetadata({ dict, locale: "es", path: PATH, enPath: EN_PATH, esPath: PATH });
}

export default async function PoliticaDePrivacidadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  const dict = getPrivacyDictionary("es");

  return <LegalPageContent locale="es" dict={dict} path={PATH} />;
}
