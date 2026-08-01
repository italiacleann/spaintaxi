import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getQuoteDictionary } from "@/lib/quote/get-quote-dictionary";
import { buildQuoteMetadata } from "@/lib/quote/quote-metadata";
import { QuotePageContent } from "@/components/quote/quote-page-content";

const PATH = "/es/solicitar-presupuesto/";
const EN_PATH = "/get-a-quote/";

export function generateStaticParams() {
  return [{ locale: "es" }];
}

export function generateMetadata(): Metadata {
  const dict = getQuoteDictionary("es");
  return buildQuoteMetadata({ dict, locale: "es", path: PATH, enPath: EN_PATH, esPath: PATH });
}

export default async function SolicitarPresupuestoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  const dict = getQuoteDictionary("es");

  return <QuotePageContent locale="es" dict={dict} path={PATH} />;
}
