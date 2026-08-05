import type { RouteRecord } from "@/lib/routes/types";
import { getRoutePath } from "@/lib/routes/data";
import type { RoutePageDictionary } from "@/lib/routes/dictionary";
import { getQuotePagePath } from "@/lib/quote/config";
import { localeHome, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

// A small, static set of the most broadly relevant existing articles, linked
// from every Barcelona route page. Hardcoded rather than queried at render
// time so these pages stay fully static (no Supabase fetch per route page).
const RELATED_BLOG_LINKS: Record<Locale, { label: string; href: string }[]> = {
  en: [
    { label: "Complete Guide to Airport Transfers in Spain (2026)", href: "/blog/complete-guide-airport-transfers-spain-2026/" },
    { label: "Best Way from Barcelona Airport to the City Centre", href: "/blog/barcelona-airport-to-city-centre-transfer-guide/" },
    { label: "How Much Does an Airport Transfer Cost in Spain?", href: "/blog/airport-transfer-cost-spain/" },
  ],
  es: [
    { label: "Guía Completa de Traslados al Aeropuerto en España (2026)", href: "/es/blog/guia-completa-traslados-aeropuerto-espana-2026/" },
    { label: "La Mejor Forma de Ir del Aeropuerto de Barcelona al Centro", href: "/es/blog/guia-traslado-aeropuerto-barcelona-centro-ciudad/" },
    { label: "¿Cuánto Cuesta un Traslado al Aeropuerto en España?", href: "/es/blog/precio-traslado-aeropuerto-espana/" },
  ],
};

export function buildRouteRelatedLinks({
  locale,
  route,
  otherRoutes,
  cityHref,
  cityLabel,
  airportHref,
  airportLabel,
  homeDict,
  dict,
}: {
  locale: Locale;
  route: RouteRecord;
  otherRoutes: RouteRecord[];
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

  const related = otherRoutes.filter((candidate) => candidate !== route).slice(0, 4);
  for (const candidate of related) {
    const label = locale === "es" ? candidate.titleEs : candidate.titleEn;
    items.push({ label, href: getRoutePath(locale, candidate) });
  }

  items.push(...RELATED_BLOG_LINKS[locale]);

  return items;
}
