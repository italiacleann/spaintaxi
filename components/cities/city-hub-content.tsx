import type { CityRecord } from "@/lib/cities/types";
import type { CityHubDictionary } from "@/lib/cities/hub-types";
import { buildCityHubJsonLd } from "@/lib/i18n/structured-data";
import { getServiceSharedContent } from "@/lib/i18n/service-shared-content";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

import { ServiceHero } from "@/components/services/service-hero";
import { ServiceBenefits } from "@/components/services/service-benefits";
import { CityHubIntro } from "@/components/cities/city-hub-intro";
import { CityDirectory } from "@/components/cities/city-directory";
import { CityPopularRoutes } from "@/components/cities/city-popular-routes";
import { CityWhyChoose } from "@/components/cities/city-why-choose";
import { CityMapSection } from "@/components/cities/city-map-section";
import { CityHubFaq } from "@/components/cities/city-hub-faq";
import { CityHubCta } from "@/components/cities/city-hub-cta";

export function CityHubContent({
  locale,
  dict,
  homeDict,
  cities,
  path,
}: {
  locale: Locale;
  dict: CityHubDictionary;
  homeDict: Dictionary;
  cities: CityRecord[];
  path: string;
}) {
  const shared = getServiceSharedContent(locale);
  const jsonLd = buildCityHubJsonLd(locale, dict, path, cities);

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
        breadcrumbHome={dict.breadcrumb.home}
      />
      <ServiceBenefits items={shared.benefits} />
      <CityHubIntro dict={dict.intro} />
      <CityDirectory cities={cities} dict={dict.directory} locale={locale} />
      <CityPopularRoutes dict={dict.popularRoutes} locale={locale} />
      <CityWhyChoose dict={dict.whyChoose} />
      <CityMapSection dict={dict.map} locale={locale} />
      <CityHubFaq dict={dict.faq} />
      <CityHubCta dict={dict.cta} />
    </>
  );
}
