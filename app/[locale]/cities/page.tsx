import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { cities } from "@/lib/cities/data";
import { getCityHubDictionary } from "@/lib/cities/get-hub-dictionary";
import { buildCityHubMetadata } from "@/lib/cities/hub-metadata";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { CityHubContent } from "@/components/cities/city-hub-content";

const PATH = "/cities/";
const ES_PATH = "/es/ciudades/";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  const dict = getCityHubDictionary("en");
  return buildCityHubMetadata({ dict, locale: "en", path: PATH, enPath: PATH, esPath: ES_PATH });
}

export default async function CitiesHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  const dict = getCityHubDictionary("en");
  const homeDict = getDictionary("en");

  return <CityHubContent locale="en" dict={dict} homeDict={homeDict} cities={cities} path={PATH} />;
}
