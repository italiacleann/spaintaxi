import type { RouteRecord } from "@/lib/routes/types";
import {
  routes as allRoutes,
  routesByOriginCitySlug,
  routesByOriginName,
  routesByDestinationName,
  reverseRouteMap,
} from "@/lib/routes/data";

function normalizeKey(name: string): string {
  return name.trim().toLowerCase();
}

function isAirportPoint(name: string): boolean {
  return /airport/i.test(name);
}

/** The true reverse-direction counterpart of `route` (same pair, opposite direction), if one exists. O(1) via the prebuilt index. */
export function findReverseRoute(route: RouteRecord): RouteRecord | undefined {
  return reverseRouteMap.get(route.slugEn);
}

/** Deterministic small hash so rotation is stable across renders/builds but varies per seed. */
function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  return hash;
}

/**
 * Picks up to `count` routes from `pool`, stratified across `kind` and
 * rotated by `seed` so a short list still represents the whole set instead
 * of whichever routes happen to sit first in file order. Different seeds
 * land on different circular offsets within each kind's bucket, so across
 * many pages the site collectively references far more of a cluster than
 * a fixed `.slice(0, n)` ever could. Used as the generic filler once the
 * priority chain in `getRelatedRoutes` runs out of more specific matches.
 */
export function pickDiverseRoutes(pool: RouteRecord[], count: number, seed = ""): RouteRecord[] {
  if (pool.length === 0 || count <= 0) return [];

  const buckets = new Map<string, RouteRecord[]>();
  for (const route of pool) {
    const bucket = buckets.get(route.kind);
    if (bucket) bucket.push(route);
    else buckets.set(route.kind, [route]);
  }
  const kinds = [...buckets.keys()];

  const kindOffset = hashString(seed) % kinds.length;
  const rotatedKinds = [...kinds.slice(kindOffset), ...kinds.slice(0, kindOffset)];

  const startOffsets = new Map<string, number>();
  for (const kind of kinds) {
    const bucket = buckets.get(kind)!;
    startOffsets.set(kind, hashString(`${seed}|${kind}`) % bucket.length);
  }

  const picked: RouteRecord[] = [];
  const takenCount = new Map<string, number>();
  let guard = 0;
  while (picked.length < count && guard <= pool.length + kinds.length) {
    guard++;
    let pickedThisRound = false;
    for (const kind of rotatedKinds) {
      if (picked.length >= count) break;
      const bucket = buckets.get(kind)!;
      const taken = takenCount.get(kind) ?? 0;
      if (taken >= bucket.length) continue;
      const start = startOffsets.get(kind)!;
      const index = (start + taken) % bucket.length;
      picked.push(bucket[index]);
      takenCount.set(kind, taken + 1);
      pickedThisRound = true;
    }
    if (!pickedThisRound) break;
  }
  return picked;
}

export interface RelatedRouteOptions {
  count?: number;
}

/**
 * Context-aware related-route selection, generic across every cluster (no
 * per-city special-casing). Ranks candidates by relevance to `route`
 * rather than a fixed slice of the same array positions every time:
 *
 *   1. Reverse route (same pair, opposite direction)
 *   2. Same-origin siblings (share this route's exact origin point —
 *      e.g. other "Granada Airport -> X" routes)
 *   3. Same-destination siblings, searched across the ENTIRE site (not
 *      just this route's own cluster) — this is what surfaces genuine
 *      cross-cluster relevance, e.g. "Seville -> Malaga" for a
 *      "Granada -> Malaga" page
 *   4. Same airport/hub siblings (both endpoints involve the same named
 *      airport as origin or destination)
 *   5. Same-cluster filler (share originCitySlug), kind-diverse and
 *      rotated so different pages within a cluster don't converge on the
 *      same filler set
 *   6. Cross-cluster fallback sharing a destination name
 *
 * Deduplicated by slug, self excluded, capped at `count` (default 6 —
 * "highly relevant links," not a long tail).
 */
export function getRelatedRoutes(route: RouteRecord, { count = 6 }: RelatedRouteOptions = {}): RouteRecord[] {
  const seen = new Set<string>([route.slugEn]);
  const picked: RouteRecord[] = [];

  function add(candidate: RouteRecord | undefined) {
    if (!candidate || picked.length >= count) return;
    if (seen.has(candidate.slugEn)) return;
    seen.add(candidate.slugEn);
    picked.push(candidate);
  }

  function addMany(candidates: RouteRecord[]) {
    for (const candidate of candidates) {
      if (picked.length >= count) break;
      add(candidate);
    }
  }

  // 1. Reverse route
  add(findReverseRoute(route));
  if (picked.length >= count) return picked;

  // 2. Same-origin siblings
  addMany(routesByOriginName.get(normalizeKey(route.originNameEn)) ?? []);
  if (picked.length >= count) return picked;

  // 3. Same-destination siblings, searched globally (cross-cluster relevance)
  addMany(routesByDestinationName.get(normalizeKey(route.destinationNameEn)) ?? []);
  if (picked.length >= count) return picked;

  // 4. Same airport/hub siblings
  const hubName = isAirportPoint(route.originNameEn)
    ? route.originNameEn
    : isAirportPoint(route.destinationNameEn)
      ? route.destinationNameEn
      : undefined;
  if (hubName) {
    const hubKey = normalizeKey(hubName);
    addMany(routesByOriginName.get(hubKey) ?? []);
    addMany(routesByDestinationName.get(hubKey) ?? []);
  }
  if (picked.length >= count) return picked;

  // 5. Same-cluster filler, kind-diverse and rotated per route
  const sameCluster = (routesByOriginCitySlug.get(route.originCitySlug) ?? []).filter(
    (candidate) => !seen.has(candidate.slugEn)
  );
  addMany(pickDiverseRoutes(sameCluster, count - picked.length, route.slugEn));
  if (picked.length >= count) return picked;

  // 6. Cross-cluster fallback sharing a destination name (broader net than
  // step 3, in case step 3 already exhausted itself against same-cluster
  // matches only)
  const crossCluster = allRoutes.filter(
    (candidate) =>
      !seen.has(candidate.slugEn) &&
      candidate.originCitySlug !== route.originCitySlug &&
      normalizeKey(candidate.destinationNameEn) === normalizeKey(route.destinationNameEn)
  );
  addMany(crossCluster);

  return picked;
}
