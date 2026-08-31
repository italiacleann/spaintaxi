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
import { IbizaRouteHero } from "@/components/routes/ibiza/ibiza-route-hero";
import { RouteFactsPanel } from "@/components/routes/route-facts-panel";
import { RouteVehicleOptions } from "@/components/routes/route-vehicle-options";
import { ContextualRouteLink } from "@/components/routes/contextual-route-link";

/**
 * Ibiza's distinct visual template — a warm "White Isle" palette (scoped
 * via the .ibiza-theme wrapper class, see app/globals.css) plus a
 * kind-grouped section order/framing, instead of reusing the standard
 * RoutePageContent layout with just the destination name swapped. Still
 * consumes the exact same RouteRecord data shape and the same generic
 * relationship engine (getRelatedRoutes/buildRouteRelatedLinks/coverage.ts)
 * as every other cluster — nothing about internal-link calculation is
 * Ibiza-specific, only the presentation layer branches by kind/city.
 */
export function IbizaRoutePageContent({
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

  const chips = getRelatedRoutes(route, { count: 4 }).map((r) => ({
    label: `${isEs ? r.originNameEs : r.originNameEn} → ${isEs ? r.destinationNameEs : r.destinationNameEn}`,
    href: getRoutePath(locale, r),
  }));

  const originHref =
    route.direction === "to-airport" || route.direction === "to-city" ? (cityHref ?? airportHref) : undefined;

  const isStay = route.kind === "hotel";
  const isExperience = route.kind === "day-trip";

  return (
    <div className="ibiza-theme">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <IbizaRouteHero route={route} locale={locale} breadcrumbHome={breadcrumbHome} originHref={originHref} chips={chips} />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          <div className="flex min-w-0 flex-col gap-12">
            {isExperience ? (
              <div className="flex flex-col gap-4 border-l-4 border-secondary/40 pl-6">
                <h2 className="font-heading text-2xl font-semibold text-foreground">{dict.aboutTitle}</h2>
                <ProseContent html={contentHtml} />
                <ContextualRouteLink route={route} locale={locale} />
              </div>
            ) : isStay ? (
              <div className="flex flex-col gap-4 rounded-3xl bg-accent/60 p-6 sm:p-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground">{dict.aboutTitle}</h2>
                <ProseContent html={contentHtml} />
                <ContextualRouteLink route={route} locale={locale} />
              </div>
            ) : (
              <div className="flex flex-col gap-4">
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
    </div>
  );
}
