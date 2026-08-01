import type { Metadata } from "next";
import { notFound } from "next/navigation";

import type { Locale } from "@/lib/i18n/config";
import { airports, findAirportBySlug, getAirportPath } from "@/lib/airports/data";
import { composeAirportEn } from "@/lib/airports/content-composer.en";
import { composeAirportEs } from "@/lib/airports/content-composer.es";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getAboutDictionary } from "@/lib/i18n/get-about-dictionary";
import { buildServiceMetadata } from "@/lib/i18n/service-metadata";
import { AirportPageContent } from "@/components/airports/airport-page-content";

export function generateStaticParams() {
  return airports.flatMap((airport) => [
    { locale: "en", airportSlug: airport.slugEn },
    { locale: "es", airportSlug: airport.slugEs },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; airportSlug: string }>;
}): Promise<Metadata> {
  const { locale, airportSlug } = await params;
  if (locale !== "en" && locale !== "es") notFound();

  const airport = findAirportBySlug(locale as Locale, airportSlug);
  if (!airport) notFound();

  const dict = locale === "en" ? composeAirportEn(airport) : composeAirportEs(airport);
  const path = getAirportPath(locale as Locale, airport);
  const enPath = getAirportPath("en", airport);
  const esPath = getAirportPath("es", airport);

  return buildServiceMetadata({ dict, locale: locale as Locale, path, enPath, esPath });
}

export default async function AirportPage({
  params,
}: {
  params: Promise<{ locale: string; airportSlug: string }>;
}) {
  const { locale, airportSlug } = await params;
  if (locale !== "en" && locale !== "es") notFound();

  const airport = findAirportBySlug(locale as Locale, airportSlug);
  if (!airport) notFound();

  const dict = locale === "en" ? composeAirportEn(airport) : composeAirportEs(airport);
  const path = getAirportPath(locale as Locale, airport);
  const homeDict = getDictionary(locale as Locale);
  const breadcrumbHome = getAboutDictionary(locale as Locale).breadcrumb.home;

  return (
    <AirportPageContent
      locale={locale as Locale}
      dict={dict}
      homeDict={homeDict}
      path={path}
      breadcrumbHome={breadcrumbHome}
    />
  );
}
