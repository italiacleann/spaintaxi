import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getTermsDictionary } from "@/lib/i18n/get-legal-dictionary";
import { buildLegalMetadata } from "@/lib/i18n/legal-metadata";
import { LegalPageContent } from "@/components/legal/legal-page-content";

const PATH = "/terms-and-conditions/";
const ES_PATH = "/es/terminos-y-condiciones/";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  const dict = getTermsDictionary("en");
  return buildLegalMetadata({ dict, locale: "en", path: PATH, enPath: PATH, esPath: ES_PATH });
}

export default async function TermsAndConditionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  const dict = getTermsDictionary("en");

  return <LegalPageContent locale="en" dict={dict} path={PATH} />;
}
