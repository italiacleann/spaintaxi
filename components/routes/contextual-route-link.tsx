import Link from "next/link";

import type { RouteRecord } from "@/lib/routes/types";
import { getRoutePath } from "@/lib/routes/data";
import { findReverseRoute, getRelatedRoutes } from "@/lib/routes/related";
import type { Locale } from "@/lib/i18n/config";

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  return hash;
}

type Phrase = { before: string; link: string; after: string };

const REVERSE_TEMPLATES: Record<Locale, ((origin: string, destination: string) => Phrase)[]> = {
  en: [
    (o, d) => ({ before: "Traveling the other way? A ", link: `private transfer from ${d} to ${o}`, after: " runs on the same fixed-price basis." }),
    (o, d) => ({ before: "This route also runs in reverse — a ", link: `${d}–${o} private car service`, after: " is booked the same way." }),
    (o, d) => ({ before: "For the return leg, book a ", link: `private car from ${d} to ${o}`, after: "." }),
    (o, d) => ({ before: "Need to go back? A ", link: `transfer between ${d} and ${o}`, after: " is available in both directions." }),
  ],
  es: [
    (o, d) => ({ before: "¿Viaja en sentido contrario? Un ", link: `traslado privado de ${d} a ${o}`, after: " funciona con el mismo precio cerrado." }),
    (o, d) => ({ before: "Esta ruta también funciona a la inversa — reserve un ", link: `servicio de coche privado ${d}–${o}`, after: " de la misma manera." }),
    (o, d) => ({ before: "Para el trayecto de vuelta, reserve un ", link: `coche privado de ${d} a ${o}`, after: "." }),
    (o, d) => ({ before: "¿Necesita volver? Un ", link: `traslado entre ${d} y ${o}`, after: " está disponible en ambos sentidos." }),
  ],
};

const RELATED_TEMPLATES: Record<Locale, ((label: string) => Phrase)[]> = {
  en: [
    (label) => ({ before: "Travelers combining destinations often also book a ", link: label, after: "." }),
    (label) => ({ before: "You may also want a ", link: label, after: " for the rest of your trip." }),
    (label) => ({ before: "Many visitors pair this with a ", link: label, after: "." }),
  ],
  es: [
    (label) => ({ before: "Muchos viajeros que combinan destinos también reservan un ", link: label, after: "." }),
    (label) => ({ before: "También puede interesarle un ", link: label, after: " para el resto de su viaje." }),
    (label) => ({ before: "Es habitual combinar esta ruta con un ", link: label, after: "." }),
  ],
};

/**
 * A single natural, varied-phrasing sentence linking to the reverse route
 * (or, failing that, the top context-ranked related route) — rendered as
 * real crawlable prose content, not a sidebar card. Anchor text and
 * surrounding phrasing rotate per route (seeded by slug) so the same
 * sentence doesn't appear on every page. Generic across every cluster.
 */
export function ContextualRouteLink({ route, locale }: { route: RouteRecord; locale: Locale }) {
  const isEs = locale === "es";
  const originName = isEs ? route.originNameEs : route.originNameEn;
  const destinationName = isEs ? route.destinationNameEs : route.destinationNameEn;

  const reverse = findReverseRoute(route);
  if (reverse) {
    const templates = REVERSE_TEMPLATES[locale];
    const template = templates[hashString(route.slugEn) % templates.length];
    const { before, link, after } = template(originName, destinationName);
    return (
      <p className="text-sm leading-relaxed text-muted-foreground">
        {before}
        <Link href={getRoutePath(locale, reverse)} className="font-medium text-primary underline-offset-4 hover:underline">
          {link}
        </Link>
        {after}
      </p>
    );
  }

  const [related] = getRelatedRoutes(route, { count: 1 });
  if (!related) return null;
  const label = isEs ? related.titleEs : related.titleEn;
  const templates = RELATED_TEMPLATES[locale];
  const template = templates[hashString(route.slugEn) % templates.length];
  const { before, link, after } = template(label);
  return (
    <p className="text-sm leading-relaxed text-muted-foreground">
      {before}
      <Link href={getRoutePath(locale, related)} className="font-medium text-primary underline-offset-4 hover:underline">
        {link}
      </Link>
      {after}
    </p>
  );
}
