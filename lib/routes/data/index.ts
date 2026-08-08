import type { RouteRecord } from "@/lib/routes/types";
import { barcelonaRoutes } from "@/lib/routes/data/barcelona";
import { madridRoutes } from "@/lib/routes/data/madrid";

export const routes: RouteRecord[] = [...barcelonaRoutes, ...madridRoutes];

export function findRouteBySlug(locale: "en" | "es", slug: string): RouteRecord | undefined {
  return routes.find((route) => (locale === "es" ? route.slugEs : route.slugEn) === slug);
}

export function getRoutePath(locale: "en" | "es", route: RouteRecord): string {
  const slug = locale === "es" ? route.slugEs : route.slugEn;
  return locale === "es" ? `/es/${slug}/` : `/${slug}/`;
}

export function getRoutesForCity(citySlug: string): RouteRecord[] {
  return routes.filter((route) => route.originCitySlug === citySlug);
}
