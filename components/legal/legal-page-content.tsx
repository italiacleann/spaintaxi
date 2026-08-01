import type { Locale } from "@/lib/i18n/config";
import type { LegalPageDictionary } from "@/lib/i18n/legal-types";
import { buildLegalJsonLd } from "@/lib/i18n/structured-data";

import { Container } from "@/components/shared/container";
import { LegalHero } from "@/components/legal/legal-hero";
import { LegalToc } from "@/components/legal/legal-toc";
import { LegalSectionCard } from "@/components/legal/legal-section-card";
import { LegalCta } from "@/components/legal/legal-cta";

export function LegalPageContent({
  locale,
  dict,
  path,
}: {
  locale: Locale;
  dict: LegalPageDictionary;
  path: string;
}) {
  const jsonLd = buildLegalJsonLd(locale, dict, path);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalHero dict={dict} locale={locale} />
      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:items-start lg:gap-14">
          <aside className="hidden lg:sticky lg:top-28 lg:block">
            <LegalToc title={dict.tocTitle} sections={dict.sections} />
          </aside>
          <div className="flex flex-col gap-6">
            {dict.sections.map((section) => (
              <LegalSectionCard key={section.id} section={section} />
            ))}
          </div>
        </Container>
      </section>
      <LegalCta dict={dict} />
    </>
  );
}
