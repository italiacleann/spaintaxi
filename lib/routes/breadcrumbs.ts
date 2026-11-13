import type { Locale } from "@/lib/i18n/config";
import type { RouteRecord } from "@/lib/routes/types";
import { cities, getCityPath } from "@/lib/cities/data";
import { airports, getAirportPath } from "@/lib/airports/data";

export interface Crumb {
  label: string;
  href: string;
}

/**
 * The real parent page of a route page, used by both the visible breadcrumb
 * and the BreadcrumbList structured data so they always match:
 *   - airport routes (to or from the airport) → that airport's transfer page
 *   - everything else → the route's origin-city page
 * Returns undefined when no such page exists, rather than inventing one.
 */
export function getRouteParentCrumb(locale: Locale, route: RouteRecord): Crumb | undefined {
  const isEs = locale === "es";
  const city = cities.find((c) => c.slugEn === route.originCitySlug);
  const isAirportRoute = route.direction === "from-airport" || route.direction === "to-airport";

  if (isAirportRoute && city) {
    const airport = airports.find((a) => a.iata === city.mainAirportIata);
    if (airport) return { label: isEs ? airport.shortNameEs : airport.shortNameEn, href: getAirportPath(locale, airport) };
  }
  if (city) return { label: isEs ? city.nameEs : city.nameEn, href: getCityPath(locale, city) };
  return undefined;
}

/** Short label for the current route in breadcrumbs, e.g. "Málaga Airport → Granada". */
export function getRouteCrumbLabel(locale: Locale, route: RouteRecord): string {
  const isEs = locale === "es";
  return `${isEs ? route.originNameEs : route.originNameEn} → ${isEs ? route.destinationNameEs : route.destinationNameEn}`;
}
