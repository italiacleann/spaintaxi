import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { airports } from "@/lib/airports/data";
import { getAirportHubDictionary } from "@/lib/airports/get-hub-dictionary";
import { buildAirportHubMetadata } from "@/lib/airports/hub-metadata";
import { AirportHubContent } from "@/components/airports/airport-hub-content";

const PATH = "/airports/";
const ES_PATH = "/es/aeropuertos/";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata(): Metadata {
  const dict = getAirportHubDictionary("en");
  return buildAirportHubMetadata({ dict, locale: "en", path: PATH, enPath: PATH, esPath: ES_PATH });
}

export default async function AirportsHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  const dict = getAirportHubDictionary("en");

  return <AirportHubContent locale="en" dict={dict} airports={airports} path={PATH} />;
}
