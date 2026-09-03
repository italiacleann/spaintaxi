import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import type { CityPageDictionary } from "@/lib/cities/city-page-types";
import { getServiceSharedContent } from "@/lib/i18n/service-shared-content";
import { buildServiceJsonLd } from "@/lib/i18n/structured-data";
import { processContentHtml } from "@/lib/shared/html-content";

import { ServiceHero } from "@/components/services/service-hero";
import { ServiceBenefits } from "@/components/services/service-benefits";
import { ServiceOverview } from "@/components/services/service-overview";
import { CityAirportLink } from "@/components/cities/city-airport-link";
import { ServiceWhyChoose } from "@/components/services/service-why-choose";
import { ServiceRoutes } from "@/components/services/service-routes";
import { ServiceFleet } from "@/components/services/service-fleet";
import { ServiceProcess } from "@/components/services/service-process";
import { ServiceTestimonials } from "@/components/services/service-testimonials";
import { ServiceFaq } from "@/components/services/service-faq";
import { RelatedServicesSection } from "@/components/shared/related-services-section";
import { RouteRelatedTransfersSection } from "@/components/routes/route-related-transfers-section";
import { ServiceCta } from "@/components/services/service-cta";
import { Container } from "@/components/shared/container";
import { ProseContent } from "@/components/shared/prose-content";

export function CityPageContent({
  locale,
  dict,
  homeDict,
  path,
  breadcrumbHome,
  citySlug,
}: {
  locale: Locale;
  dict: CityPageDictionary;
  homeDict: Dictionary;
  path: string;
  breadcrumbHome: string;
  citySlug?: string;
}) {
  const shared = getServiceSharedContent(locale);
  const jsonLd = buildServiceJsonLd(locale, dict, path, breadcrumbHome);
  const richContentHtml = dict.richContent ? processContentHtml(dict.richContent.html).html : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceHero
        dict={dict}
        homeDict={homeDict}
        shared={shared}
        locale={locale}
        breadcrumbHome={breadcrumbHome}
      />
      <ServiceBenefits items={shared.benefits} />
      <CityAirportLink dict={dict} />
      <ServiceOverview dict={dict} />
      <ServiceWhyChoose dict={dict} />
      {dict.richContent && richContentHtml ? (
        <section className="py-16 sm:py-20">
          <Container className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              {dict.richContent.title}
            </h2>
            <ProseContent html={richContentHtml} />
          </Container>
        </section>
      ) : null}
      <ServiceRoutes dict={dict} />
      <ServiceFleet dict={dict} shared={shared} />
      <ServiceProcess shared={shared} />
      <ServiceTestimonials testimonials={homeDict.testimonials} />
      <ServiceFaq dict={dict} shared={shared} />
      <RelatedServicesSection title={dict.relatedServices.title} items={dict.relatedServices.items} />
      {citySlug ? <RouteRelatedTransfersSection citySlug={citySlug} locale={locale} /> : null}
      <ServiceCta dict={dict} />
    </>
  );
}
