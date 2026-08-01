import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildHomeJsonLd } from "@/lib/i18n/structured-data";

import { HeroSection } from "@/components/sections/hero-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { AirportsSection } from "@/components/sections/airports-section";
import { DestinationsSection } from "@/components/sections/destinations-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { ProcessSection } from "@/components/sections/process-section";
import { FleetSection } from "@/components/sections/fleet-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const jsonLd = buildHomeJsonLd(locale, dict);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection dict={dict} />
      <TrustBar dict={dict} />
      <AirportsSection dict={dict} />
      <DestinationsSection dict={dict} />
      <ServicesSection dict={dict} />
      <WhyChooseSection dict={dict} />
      <ProcessSection dict={dict} />
      <FleetSection dict={dict} />
      <TestimonialsSection dict={dict} />
      <FaqSection dict={dict} />
      <CtaSection dict={dict} />
    </>
  );
}
