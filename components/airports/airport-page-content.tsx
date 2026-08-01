import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import type { AirportPageDictionary } from "@/lib/airports/airport-page-types";
import { getServiceSharedContent } from "@/lib/i18n/service-shared-content";
import { buildServiceJsonLd } from "@/lib/i18n/structured-data";

import { ServiceHero } from "@/components/services/service-hero";
import { ServiceBenefits } from "@/components/services/service-benefits";
import { ServiceOverview } from "@/components/services/service-overview";
import { ServiceWhyChoose } from "@/components/services/service-why-choose";
import { ServiceRoutes } from "@/components/services/service-routes";
import { AirportNearbyCities } from "@/components/airports/airport-nearby-cities";
import { ServiceFleet } from "@/components/services/service-fleet";
import { ServiceProcess } from "@/components/services/service-process";
import { ServiceTestimonials } from "@/components/services/service-testimonials";
import { ServiceFaq } from "@/components/services/service-faq";
import { AirportRelatedServices } from "@/components/airports/airport-related-services";
import { ServiceCta } from "@/components/services/service-cta";

export function AirportPageContent({
  locale,
  dict,
  homeDict,
  path,
  breadcrumbHome,
}: {
  locale: Locale;
  dict: AirportPageDictionary;
  homeDict: Dictionary;
  path: string;
  breadcrumbHome: string;
}) {
  const shared = getServiceSharedContent(locale);
  const jsonLd = buildServiceJsonLd(locale, dict, path, breadcrumbHome);

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
      <ServiceOverview dict={dict} />
      <ServiceWhyChoose dict={dict} />
      <ServiceRoutes dict={dict} />
      <AirportNearbyCities dict={dict} />
      <ServiceFleet dict={dict} shared={shared} />
      <ServiceProcess shared={shared} />
      <ServiceTestimonials testimonials={homeDict.testimonials} />
      <ServiceFaq dict={dict} shared={shared} />
      <AirportRelatedServices dict={dict} />
      <ServiceCta dict={dict} />
    </>
  );
}
