import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getQuoteDictionary } from "@/lib/quote/get-quote-dictionary";
import { buildQuoteMetadata } from "@/lib/quote/quote-metadata";
import { QuotePageContent } from "@/components/quote/quote-page-content";

const PATH = "/get-a-quote/";
const ES_PATH = "/es/solicitar-presupuesto/";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  const dict = getQuoteDictionary("en");
  return buildQuoteMetadata({ dict, locale: "en", path: PATH, enPath: PATH, esPath: ES_PATH });
}

export default async function GetAQuotePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  const dict = getQuoteDictionary("en");

  return <QuotePageContent locale="en" dict={dict} path={PATH} />;
}
