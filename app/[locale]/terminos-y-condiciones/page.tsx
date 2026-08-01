import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getTermsDictionary } from "@/lib/i18n/get-legal-dictionary";
import { buildLegalMetadata } from "@/lib/i18n/legal-metadata";
import { LegalPageContent } from "@/components/legal/legal-page-content";

const PATH = "/es/terminos-y-condiciones/";
const EN_PATH = "/terms-and-conditions/";

export function generateStaticParams() {
  return [{ locale: "es" }];
}

export function generateMetadata(): Metadata {
  const dict = getTermsDictionary("es");
  return buildLegalMetadata({ dict, locale: "es", path: PATH, enPath: EN_PATH, esPath: PATH });
}

export default async function TerminosYCondicionesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  const dict = getTermsDictionary("es");

  return <LegalPageContent locale="es" dict={dict} path={PATH} />;
}
