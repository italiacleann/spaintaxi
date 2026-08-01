import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPrivacyDictionary } from "@/lib/i18n/get-legal-dictionary";
import { buildLegalMetadata } from "@/lib/i18n/legal-metadata";
import { LegalPageContent } from "@/components/legal/legal-page-content";

const PATH = "/privacy-policy/";
const ES_PATH = "/es/politica-de-privacidad/";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  const dict = getPrivacyDictionary("en");
  return buildLegalMetadata({ dict, locale: "en", path: PATH, enPath: PATH, esPath: ES_PATH });
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  const dict = getPrivacyDictionary("en");

  return <LegalPageContent locale="en" dict={dict} path={PATH} />;
}
