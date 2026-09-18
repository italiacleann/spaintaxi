import type { RouteRecord } from "@/lib/routes/types";
import { getRoutePath } from "@/lib/routes/data";
import { getRelatedRoutes } from "@/lib/routes/related";
import type { RoutePageDictionary } from "@/lib/routes/dictionary";
import { getQuotePagePath } from "@/lib/quote/config";
import { localeHome, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

// Small, static sets of the most relevant blog posts, linked from every
// route page. Hardcoded rather than queried at render time so these pages
// stay fully static (no Supabase fetch per route page).
//
// Keyed by originCitySlug so each city's route pages surface blog posts
// actually about that city/airport once one exists, rather than the same
// three generic Spain-wide posts on every one of the ~656 route pages
// regardless of topic. Cities with no dedicated post yet fall back to
// GENERIC_BLOG_LINKS below — update this map as each new cluster post from
// docs/seo-topic-clusters-plan.md ships, rather than leaving it to drift.
const GENERIC_BLOG_LINKS: Record<Locale, { label: string; href: string }[]> = {
  en: [
    { label: "Complete Guide to Airport Transfers in Spain (2026)", href: "/blog/complete-guide-airport-transfers-spain-2026/" },
    { label: "How Much Does an Airport Transfer Cost in Spain?", href: "/blog/airport-transfer-cost-spain/" },
    { label: "Are Private Airport Transfers Worth It in Spain?", href: "/blog/are-private-airport-transfers-worth-it/" },
  ],
  es: [
    { label: "Guía Completa de Traslados al Aeropuerto en España (2026)", href: "/es/blog/guia-completa-traslados-aeropuerto-espana-2026/" },
    { label: "¿Cuánto Cuesta un Traslado al Aeropuerto en España?", href: "/es/blog/precio-traslado-aeropuerto-espana/" },
    { label: "¿Merece la Pena el Traslado Privado al Aeropuerto?", href: "/es/blog/merece-la-pena-el-traslado-privado-al-aeropuerto/" },
  ],
};

const CITY_BLOG_LINKS: Partial<Record<string, Record<Locale, { label: string; href: string }[]>>> = {
  barcelona: {
    en: [
      { label: "Private Transport and Transfer Services in Barcelona: The Complete Guide", href: "/blog/private-transfer-barcelona-guide/" },
      { label: "Best Way from Barcelona Airport to the City Centre", href: "/blog/barcelona-airport-to-city-centre-transfer-guide/" },
      { label: "Barcelona Cruise Port Transfers: The Complete Guide", href: "/blog/barcelona-cruise-port-transfer-guide/" },
    ],
    es: [
      { label: "Transporte y Traslados Privados en Barcelona: La Guía Completa", href: "/es/blog/traslado-privado-barcelona-guia/" },
      { label: "La Mejor Forma de Ir del Aeropuerto de Barcelona al Centro", href: "/es/blog/guia-traslado-aeropuerto-barcelona-centro-ciudad/" },
      { label: "Puerto de Cruceros de Barcelona: Cómo Llegar y Qué Debes Saber", href: "/es/blog/guia-puerto-cruceros-barcelona/" },
    ],
  },
  madrid: {
    en: [
      { label: "Private Transport in Madrid: The Complete Guide", href: "/blog/private-transfer-madrid-guide/" },
      { label: "Where Do You Meet Your Driver at Madrid and Barcelona Airport?", href: "/blog/meet-driver-madrid-barcelona-airport/" },
    ],
    es: [
      { label: "Transporte Privado en Madrid: La Guía Completa", href: "/es/blog/transporte-privado-madrid-guia/" },
      { label: "¿Dónde Te Recoge tu Conductor en el Aeropuerto de Madrid o Barcelona?", href: "/es/blog/donde-recoge-conductor-aeropuerto-madrid-barcelona/" },
    ],
  },
  valencia: {
    en: [
      { label: "Private Transport in Valencia: The Complete Guide", href: "/blog/private-transfer-valencia-guide/" },
    ],
    es: [
      { label: "Transporte Privado en Valencia: La Guía Completa", href: "/es/blog/transporte-privado-valencia-guia/" },
    ],
  },
  palma: {
    en: [
      { label: "Private Transport in Palma de Mallorca: The Complete Guide", href: "/blog/private-transfer-palma-guide/" },
    ],
    es: [
      { label: "Transporte Privado en Palma de Mallorca: La Guía Completa", href: "/es/blog/transporte-privado-palma-guia/" },
    ],
  },
};

/** City-specific posts first (when they exist), topped up with generic
 *  Spain-wide posts so every route page still gets 3 links. */
function blogLinksFor(locale: Locale, originCitySlug: string): { label: string; href: string }[] {
  const cityLinks = CITY_BLOG_LINKS[originCitySlug]?.[locale] ?? [];
  const filler = GENERIC_BLOG_LINKS[locale].slice(0, Math.max(0, 3 - cityLinks.length));
  return [...cityLinks, ...filler];
}

export function buildRouteRelatedLinks({
  locale,
  route,
  cityHref,
  cityLabel,
  airportHref,
  airportLabel,
  homeDict,
  dict,
}: {
  locale: Locale;
  route: RouteRecord;
  cityHref?: string;
  cityLabel?: string;
  airportHref?: string;
  airportLabel?: string;
  homeDict: Dictionary;
  dict: RoutePageDictionary["relatedLabels"];
}): { label: string; href: string }[] {
  const items: { label: string; href: string }[] = [
    { label: dict.home, href: localeHome(locale) },
    { label: dict.quote, href: getQuotePagePath(locale) },
  ];

  if (cityHref && cityLabel) items.push({ label: cityLabel, href: cityHref });
  if (airportHref && airportLabel) items.push({ label: airportLabel, href: airportHref });

  for (const service of homeDict.services) {
    items.push({ label: service.title, href: service.href });
  }

  items.push(
    { label: dict.cityHub, href: locale === "es" ? "/es/ciudades/" : "/cities/" },
    { label: dict.airportHub, href: locale === "es" ? "/es/aeropuertos/" : "/airports/" }
  );

  // Context-aware, priority-ranked related routes (reverse pair, same
  // origin, same destination [including cross-cluster], same airport/hub,
  // same-cluster filler, cross-cluster fallback) — see lib/routes/related.ts.
  // Capped at 6: highly relevant links, not a long tail.
  const related = getRelatedRoutes(route, { count: 6 });
  for (const candidate of related) {
    const label = locale === "es" ? candidate.titleEs : candidate.titleEn;
    items.push({ label, href: getRoutePath(locale, candidate) });
  }

  items.push(...blogLinksFor(locale, route.originCitySlug));

  return items;
}
