import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { airports } from "@/lib/airports/data";
import { getAirportHubDictionary } from "@/lib/airports/get-hub-dictionary";
import { buildAirportHubMetadata } from "@/lib/airports/hub-metadata";
import { AirportHubContent } from "@/components/airports/airport-hub-content";

const PATH = "/es/aeropuertos/";
const EN_PATH = "/airports/";

export function generateStaticParams() {
  return [{ locale: "es" }];
}

export function generateMetadata(): Metadata {
  const dict = getAirportHubDictionary("es");
  return buildAirportHubMetadata({ dict, locale: "es", path: PATH, enPath: EN_PATH, esPath: PATH });
}

export default async function AeropuertosHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  const dict = getAirportHubDictionary("es");

  return <AirportHubContent locale="es" dict={dict} airports={airports} path={PATH} />;
}
