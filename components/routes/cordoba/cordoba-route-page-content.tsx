import { TrainFrontIcon, MapPinIcon, ArrowRightIcon, ClockIcon, FlagIcon } from "lucide-react";

import type { RouteRecord } from "@/lib/routes/types";
import { getRoutePath } from "@/lib/routes/data";
import { getRelatedRoutes } from "@/lib/routes/related";
import { getRoutePageDictionary } from "@/lib/routes/dictionary";
import { buildRouteRelatedLinks } from "@/lib/routes/related-links";
import { buildRouteJsonLd } from "@/lib/i18n/structured-data";
import { processContentHtml } from "@/lib/shared/html-content";
import { getServiceSharedContent } from "@/lib/i18n/service-shared-content";
import { getQuotePagePath } from "@/lib/quote/config";
import { cities, getCityPath } from "@/lib/cities/data";
import { airports, getAirportPath } from "@/lib/airports/data";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

import { Container } from "@/components/shared/container";
import { ProseContent } from "@/components/shared/prose-content";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaBanner } from "@/components/shared/cta-banner";
import { RelatedServicesSection } from "@/components/shared/related-services-section";
import { CordobaRouteHero } from "@/components/routes/cordoba/cordoba-route-hero";
import { RouteFactsPanel } from "@/components/routes/route-facts-panel";
import { RouteVehicleOptions } from "@/components/routes/route-vehicle-options";
import { ContextualRouteLink } from "@/components/routes/contextual-route-link";

const TIMELINE_LABELS: Record<Locale, { pickup: string; destination: string; free: string; return: string }> = {
  en: { pickup: "Pickup in Córdoba", destination: "Arrival & Visit", free: "Time to Explore", return: "Return Transfer" },
  es: { pickup: "Recogida en Córdoba", destination: "Llegada y Visita", free: "Tiempo Libre", return: "Traslado de Vuelta" },
};

/**
 * Córdoba's distinct visual template — the same RouteRecord data shape and
 * generic relationship engine as every other cluster (see cordoba.ts's own
 * header comment), gated on route.originCitySlug === "cordoba" exactly
 * like Ibiza's template, but the middle section's composition genuinely
 * varies by route.kind instead of reusing one fixed section order:
 *   - train-station: a station-info strip + an onward-journey chip row
 *     pointing at the pre-existing Seville/Málaga/Granada/Madrid pages
 *   - hotel: a location/area card ahead of the prose, premium-boutique framing
 *   - day-trip: a pickup -> visit -> free time -> return timeline
 *   - city (city-to-city, incl. the Málaga Airport pair): a bold
 *     origin -> destination summary strip
 */
export function CordobaRoutePageContent({
  locale,
  route,
  homeDict,
  breadcrumbHome,
  path,
}: {
  locale: Locale;
  route: RouteRecord;
  homeDict: Dictionary;
  breadcrumbHome: string;
  path: string;
}) {
  const isEs = locale === "es";
  const dict = getRoutePageDictionary(locale);
  const shared = getServiceSharedContent(locale);
  const jsonLd = buildRouteJsonLd(locale, route, path, breadcrumbHome);
  const content = isEs ? route.contentEs : route.contentEn;
  const { html: contentHtml } = processContentHtml(content);

  const city = cities.find((c) => c.slugEn === route.originCitySlug);
  const airport = city ? airports.find((a) => a.iata === city.mainAirportIata) : undefined;
  const cityHref = city ? getCityPath(locale, city) : undefined;
  const cityLabel = city ? (isEs ? city.nameEs : city.nameEn) : undefined;
  const airportHref = airport ? getAirportPath(locale, airport) : undefined;
  const airportLabel = airport ? (isEs ? airport.shortNameEs : airport.shortNameEn) : undefined;

  const relatedItems = buildRouteRelatedLinks({
    locale,
    route,
    cityHref,
    cityLabel,
    airportHref,
    airportLabel,
    homeDict,
    dict: dict.relatedLabels,
  });

  // Reuses the exact same generic engine Ibiza's hero chips use — since
  // the pre-existing Seville/Málaga/Granada<->Córdoba pages share
  // originNameEn "Córdoba" with every route in this cluster, they surface
  // here automatically via getRelatedRoutes' same-origin-siblings step,
  // with zero Córdoba-specific lookup code.
  const chips = getRelatedRoutes(route, { count: 4 }).map((r) => ({
    label: `${isEs ? r.originNameEs : r.originNameEn} → ${isEs ? r.destinationNameEs : r.destinationNameEn}`,
    href: getRoutePath(locale, r),
  }));

  const originHref =
    route.direction === "to-airport" || route.direction === "to-city" ? (cityHref ?? airportHref) : undefined;

  const destinationName = isEs ? route.destinationNameEs : route.destinationNameEn;
  const originName = isEs ? route.originNameEs : route.originNameEn;
  const areaLabel = isEs ? route.areaEs : route.areaEn;
  const t = TIMELINE_LABELS[locale];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CordobaRouteHero route={route} locale={locale} breadcrumbHome={breadcrumbHome} originHref={originHref} chips={chips} />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          <div className="flex min-w-0 flex-col gap-12">
            {route.kind === "train-station" ? (
              <div className="flex flex-col gap-4 rounded-3xl bg-primary/5 p-6 ring-1 ring-primary/10 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <TrainFrontIcon className="size-5" />
                  </span>
                  <h2 className="font-heading text-2xl font-semibold text-foreground">{dict.aboutTitle}</h2>
                </div>
                <ProseContent html={contentHtml} />
                <ContextualRouteLink route={route} locale={locale} />
              </div>
            ) : route.kind === "hotel" ? (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-black/5">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    <MapPinIcon className="size-4" />
                    {areaLabel ?? destinationName}
                  </span>
                  <h2 className="font-heading text-2xl font-semibold text-foreground">{dict.aboutTitle}</h2>
                </div>
                <ProseContent html={contentHtml} />
                <ContextualRouteLink route={route} locale={locale} />
              </div>
            ) : route.kind === "day-trip" ? (
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[t.pickup, t.destination, t.free, t.return].map((label, i) => (
                    <div key={label} className="flex flex-col items-center gap-2 rounded-2xl bg-accent/50 p-4 text-center">
                      <span className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        {i + 1}
                      </span>
                      <span className="text-xs font-medium text-foreground">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">{dict.aboutTitle}</h2>
                  <ProseContent html={contentHtml} />
                  <ContextualRouteLink route={route} locale={locale} />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-primary/5 p-5 ring-1 ring-primary/10">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                    <FlagIcon className="size-4 text-primary" />
                    {originName}
                  </span>
                  <ArrowRightIcon className="size-4 text-primary" />
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                    <MapPinIcon className="size-4 text-primary" />
                    {destinationName}
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ClockIcon className="size-3.5" />
                    {route.driveTime}
                  </span>
                </div>
                <h2 className="font-heading text-2xl font-semibold text-foreground">{dict.aboutTitle}</h2>
                <ProseContent html={contentHtml} />
                <ContextualRouteLink route={route} locale={locale} />
              </div>
            )}

            <RouteVehicleOptions shared={shared} title={dict.vehiclesTitle} description={dict.vehiclesDescription} />
            <FaqAccordion items={isEs ? route.faqEs : route.faqEn} title={dict.faqTitle} />
          </div>

          <RouteFactsPanel route={route} dict={dict.factsPanel} locale={locale} />
        </Container>
      </section>

      <RelatedServicesSection title={dict.relatedTitle} items={relatedItems} />

      <CtaBanner
        headingId="route-cta-heading"
        title={dict.cta.title}
        description={dict.cta.description}
        buttonLabel={dict.cta.button}
        buttonHref={getQuotePagePath(locale)}
      />
    </>
  );
}
