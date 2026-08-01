import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import type { AboutDictionary } from "@/lib/i18n/about-types";
import { buildAboutJsonLd } from "@/lib/i18n/structured-data";

import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutStats } from "@/components/about/about-stats";
import { AboutWhyChoose } from "@/components/about/about-why-choose";
import { AboutServices } from "@/components/about/about-services";
import { AboutCoverage } from "@/components/about/about-coverage";
import { AboutDrivers } from "@/components/about/about-drivers";
import { AboutFleet } from "@/components/about/about-fleet";
import { AboutProcess } from "@/components/about/about-process";
import { AboutTrust } from "@/components/about/about-trust";
import { AboutFaq } from "@/components/about/about-faq";
import { AboutCta } from "@/components/about/about-cta";

export function AboutPageContent({
  locale,
  dict,
  homeDict,
  path,
}: {
  locale: Locale;
  dict: AboutDictionary;
  homeDict: Dictionary;
  path: string;
}) {
  const jsonLd = buildAboutJsonLd(locale, dict, path);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutHero dict={dict} homeDict={homeDict} locale={locale} />
      <AboutStory dict={dict} />
      <AboutStats dict={dict} />
      <AboutWhyChoose dict={dict} />
      <AboutServices dict={dict} />
      <AboutCoverage dict={dict} />
      <AboutDrivers dict={dict} />
      <AboutFleet dict={dict} />
      <AboutProcess dict={dict} />
      <AboutTrust dict={dict} />
      <AboutFaq dict={dict} />
      <AboutCta dict={dict} homeDict={homeDict} />
    </>
  );
}
