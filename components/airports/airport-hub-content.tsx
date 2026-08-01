import type { AirportRecord } from "@/lib/airports/types";
import type { AirportHubDictionary } from "@/lib/airports/hub-types";
import { buildAirportHubJsonLd } from "@/lib/i18n/structured-data";
import type { Locale } from "@/lib/i18n/config";

import { AirportHubHero } from "@/components/airports/airport-hub-hero";
import { AirportDirectory } from "@/components/airports/airport-directory";
import { AirportHubCta } from "@/components/airports/airport-hub-cta";

export function AirportHubContent({
  locale,
  dict,
  airports,
  path,
}: {
  locale: Locale;
  dict: AirportHubDictionary;
  airports: AirportRecord[];
  path: string;
}) {
  const jsonLd = buildAirportHubJsonLd(locale, dict, path, airports);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AirportHubHero dict={dict} locale={locale} />
      <AirportDirectory airports={airports} dict={dict} locale={locale} />
      <AirportHubCta dict={dict} locale={locale} />
    </>
  );
}
