import type { QuotePageDictionary } from "@/lib/quote/types";
import { buildQuoteJsonLd } from "@/lib/i18n/structured-data";
import { getServiceSharedContent } from "@/lib/i18n/service-shared-content";
import type { Locale } from "@/lib/i18n/config";

import { QuoteHero } from "@/components/quote/quote-hero";
import { QuoteFormSection } from "@/components/quote/quote-form-section";
import { QuoteWhyRequest } from "@/components/quote/quote-why-request";
import { ServiceProcess } from "@/components/services/service-process";
import { QuoteFaq } from "@/components/quote/quote-faq";
import { RelatedServicesSection } from "@/components/shared/related-services-section";
import { QuoteCta } from "@/components/quote/quote-cta";

export function QuotePageContent({
  locale,
  dict,
  path,
}: {
  locale: Locale;
  dict: QuotePageDictionary;
  path: string;
}) {
  const shared = getServiceSharedContent(locale);
  const jsonLd = buildQuoteJsonLd(locale, dict, path);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <QuoteHero dict={dict} locale={locale} />
      <QuoteFormSection dict={dict} locale={locale} />
      <QuoteWhyRequest dict={dict.whyRequest} />
      <ServiceProcess shared={shared} />
      <QuoteFaq dict={dict.faq} />
      <RelatedServicesSection title={dict.relatedLinks.title} items={dict.relatedLinks.items} />
      <QuoteCta dict={dict.cta} />
    </>
  );
}
