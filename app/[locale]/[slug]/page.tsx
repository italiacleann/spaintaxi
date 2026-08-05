import type { Metadata } from "next";
import { notFound } from "next/navigation";

import type { Locale } from "@/lib/i18n/config";
import { airports, findAirportBySlug, getAirportPath } from "@/lib/airports/data";
import { composeAirportEn } from "@/lib/airports/content-composer.en";
import { composeAirportEs } from "@/lib/airports/content-composer.es";
import { cities, findCityBySlug, getCityPath } from "@/lib/cities/data";
import { composeCityEn } from "@/lib/cities/content-composer.en";
import { composeCityEs } from "@/lib/cities/content-composer.es";
import { routes, findRouteBySlug, getRoutePath } from "@/lib/routes/data";
import { buildRouteMetadata } from "@/lib/routes/metadata";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getAboutDictionary } from "@/lib/i18n/get-about-dictionary";
import { buildServiceMetadata } from "@/lib/i18n/service-metadata";
import { AirportPageContent } from "@/components/airports/airport-page-content";
import { CityPageContent } from "@/components/cities/city-page-content";
import { RoutePageContent } from "@/components/routes/route-page-content";

export function generateStaticParams() {
  const airportParams = airports.flatMap((airport) => [
    { locale: "en", slug: airport.slugEn },
    { locale: "es", slug: airport.slugEs },
  ]);
  const cityParams = cities.flatMap((city) => [
    { locale: "en", slug: city.slugEn },
    { locale: "es", slug: city.slugEs },
  ]);
  const routeParams = routes.flatMap((route) => [
    { locale: "en", slug: route.slugEn },
    { locale: "es", slug: route.slugEs },
  ]);
  return [...airportParams, ...cityParams, ...routeParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en" && locale !== "es") notFound();

  const airport = findAirportBySlug(locale as Locale, slug);
  if (airport) {
    const dict = locale === "en" ? composeAirportEn(airport) : composeAirportEs(airport);
    const path = getAirportPath(locale as Locale, airport);
    const enPath = getAirportPath("en", airport);
    const esPath = getAirportPath("es", airport);
    return buildServiceMetadata({ dict, locale: locale as Locale, path, enPath, esPath });
  }

  const city = findCityBySlug(locale as Locale, slug);
  if (city) {
    const dict = locale === "en" ? composeCityEn(city) : composeCityEs(city);
    const path = getCityPath(locale as Locale, city);
    const enPath = getCityPath("en", city);
    const esPath = getCityPath("es", city);
    return buildServiceMetadata({ dict, locale: locale as Locale, path, enPath, esPath });
  }

  const route = findRouteBySlug(locale as Locale, slug);
  if (route) {
    const path = getRoutePath(locale as Locale, route);
    const enPath = getRoutePath("en", route);
    const esPath = getRoutePath("es", route);
    return buildRouteMetadata({ route, locale: locale as Locale, path, enPath, esPath });
  }

  notFound();
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (locale !== "en" && locale !== "es") notFound();

  const homeDict = getDictionary(locale as Locale);
  const breadcrumbHome = getAboutDictionary(locale as Locale).breadcrumb.home;

  const airport = findAirportBySlug(locale as Locale, slug);
  if (airport) {
    const dict = locale === "en" ? composeAirportEn(airport) : composeAirportEs(airport);
    const path = getAirportPath(locale as Locale, airport);
    const originCitySlug = cities.find((c) => c.mainAirportIata === airport.iata)?.slugEn;
    return (
      <AirportPageContent
        locale={locale as Locale}
        dict={dict}
        homeDict={homeDict}
        path={path}
        breadcrumbHome={breadcrumbHome}
        originCitySlug={originCitySlug}
      />
    );
  }

  const city = findCityBySlug(locale as Locale, slug);
  if (city) {
    const dict = locale === "en" ? composeCityEn(city) : composeCityEs(city);
    const path = getCityPath(locale as Locale, city);
    return (
      <CityPageContent
        locale={locale as Locale}
        dict={dict}
        homeDict={homeDict}
        path={path}
        breadcrumbHome={breadcrumbHome}
        citySlug={city.slugEn}
      />
    );
  }

  const route = findRouteBySlug(locale as Locale, slug);
  if (route) {
    const path = getRoutePath(locale as Locale, route);
    return (
      <RoutePageContent
        locale={locale as Locale}
        route={route}
        homeDict={homeDict}
        breadcrumbHome={breadcrumbHome}
        path={path}
      />
    );
  }

  notFound();
}
