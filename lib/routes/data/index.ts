import type { RouteRecord } from "@/lib/routes/types";
import { barcelonaRoutes } from "@/lib/routes/data/barcelona";
import { madridRoutes } from "@/lib/routes/data/madrid";
import { malagaRoutes } from "@/lib/routes/data/malaga";
import { valenciaRoutes } from "@/lib/routes/data/valencia";
import { alicanteRoutes } from "@/lib/routes/data/alicante";
import { sevilleRoutes } from "@/lib/routes/data/seville";
import { granadaRoutes } from "@/lib/routes/data/granada";
import { palmaRoutes } from "@/lib/routes/data/palma";
import { ibizaRoutes } from "@/lib/routes/data/ibiza";
import { zaragozaRoutes } from "@/lib/routes/data/zaragoza";
import { bilbaoRoutes } from "@/lib/routes/data/bilbao";

export const routes: RouteRecord[] = [
  ...barcelonaRoutes,
  ...madridRoutes,
  ...malagaRoutes,
  ...valenciaRoutes,
  ...alicanteRoutes,
  ...sevilleRoutes,
  ...granadaRoutes,
  ...palmaRoutes,
  ...ibizaRoutes,
  ...zaragozaRoutes,
  ...bilbaoRoutes,
];

export function findRouteBySlug(locale: "en" | "es", slug: string): RouteRecord | undefined {
  return routes.find((route) => (locale === "es" ? route.slugEs : route.slugEn) === slug);
}

export function getRoutePath(locale: "en" | "es", route: RouteRecord): string {
  const slug = locale === "es" ? route.slugEs : route.slugEn;
  return locale === "es" ? `/es/${slug}/` : `/${slug}/`;
}

function normalizeKey(name: string): string {
  return name.trim().toLowerCase();
}

function indexBy<K>(items: RouteRecord[], keyOf: (route: RouteRecord) => K): Map<K, RouteRecord[]> {
  const map = new Map<K, RouteRecord[]>();
  for (const route of items) {
    const key = keyOf(route);
    const bucket = map.get(key);
    if (bucket) bucket.push(route);
    else map.set(key, [route]);
  }
  return map;
}

// Built once at module load (not per-request/per-page) — every route page
// render and every related-routes calculation reads from these instead of
// re-filtering the full `routes` array each time.
export const routesByOriginCitySlug = indexBy(routes, (r) => r.originCitySlug);
export const routesByOriginName = indexBy(routes, (r) => normalizeKey(r.originNameEn));
export const routesByDestinationName = indexBy(routes, (r) => normalizeKey(r.destinationNameEn));

export const reverseRouteMap: Map<string, RouteRecord> = (() => {
  const map = new Map<string, RouteRecord>();
  for (const route of routes) {
    const originKey = normalizeKey(route.originNameEn);
    const destinationKey = normalizeKey(route.destinationNameEn);
    const candidates = routesByOriginName.get(destinationKey);
    const reverse = candidates?.find(
      (c) => c !== route && normalizeKey(c.destinationNameEn) === originKey
    );
    if (reverse) map.set(route.slugEn, reverse);
  }
  return map;
})();

export function getRoutesForCity(citySlug: string): RouteRecord[] {
  return routesByOriginCitySlug.get(citySlug) ?? [];
}
