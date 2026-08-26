import type { RouteRecord } from "@/lib/routes/types";
import { routes as allRoutes, routesByOriginCitySlug } from "@/lib/routes/data";
import { getRelatedRoutes, pickDiverseRoutes } from "@/lib/routes/related";

// Computed once at module load: every route referenced by at least one
// OTHER route's own related-routes sidebar (lib/routes/related.ts). A
// route not in this set has no incoming link from anywhere on the site
// except its city/airport hub page — so the hub selection below
// guarantees those specific routes are included, rather than relying on
// probabilistic diversity alone to eventually cover everything.
const sidebarCoveredSlugs: Set<string> = (() => {
  const covered = new Set<string>();
  for (const route of allRoutes) {
    for (const related of getRelatedRoutes(route, { count: 6 })) {
      covered.add(related.slugEn);
    }
  }
  return covered;
})();

/**
 * Routes to show on a city/airport hub page's "More Transfers" section.
 * Every route belonging to `citySlug` that isn't already reachable via
 * another route's sidebar is force-included here — the hub page is every
 * route's link of last resort, so this deterministically guarantees zero
 * orphan pages instead of hoping diversity rotation happens to cover
 * everything. Remaining slots up to `baseCount` are filled with the usual
 * kind-diverse rotated pick for a varied, non-repetitive display.
 */
export function getHubRouteSelection(citySlug: string, baseCount = 12): RouteRecord[] {
  const cityRoutes = routesByOriginCitySlug.get(citySlug) ?? [];
  const mustInclude = cityRoutes.filter((route) => !sidebarCoveredSlugs.has(route.slugEn));
  const seen = new Set(mustInclude.map((route) => route.slugEn));
  const fillerNeeded = Math.max(0, baseCount - mustInclude.length);
  const filler = pickDiverseRoutes(
    cityRoutes.filter((route) => !seen.has(route.slugEn)),
    fillerNeeded,
    citySlug
  );
  return [...mustInclude, ...filler];
}
