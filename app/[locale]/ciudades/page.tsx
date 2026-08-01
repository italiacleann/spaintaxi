import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { cities } from "@/lib/cities/data";
import { getCityHubDictionary } from "@/lib/cities/get-hub-dictionary";
import { buildCityHubMetadata } from "@/lib/cities/hub-metadata";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { CityHubContent } from "@/components/cities/city-hub-content";

const PATH = "/es/ciudades/";
const EN_PATH = "/cities/";

export function generateStaticParams() {
  return [{ locale: "es" }];
}

export function generateMetadata(): Metadata {
  const dict = getCityHubDictionary("es");
  return buildCityHubMetadata({ dict, locale: "es", path: PATH, enPath: EN_PATH, esPath: PATH });
}

export default async function CiudadesHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  const dict = getCityHubDictionary("es");
  const homeDict = getDictionary("es");

  return <CityHubContent locale="es" dict={dict} homeDict={homeDict} cities={cities} path={PATH} />;
}
