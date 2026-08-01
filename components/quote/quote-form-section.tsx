import { Suspense } from "react";

import type { QuotePageDictionary } from "@/lib/quote/types";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { DetailedQuoteForm } from "@/components/quote/detailed-quote-form";
import { QuoteFormSkeleton } from "@/components/quote/quote-form-skeleton";

export function QuoteFormSection({
  dict,
  locale,
}: {
  dict: QuotePageDictionary;
  locale: Locale;
}) {
  return (
    <section
      id="quote-form"
      aria-labelledby="quote-form-heading"
      className="relative z-10 -mt-12 scroll-mt-20 pb-20 sm:-mt-16 sm:pb-28"
    >
      <Container className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/5 sm:p-8">
          <h2 id="quote-form-heading" className="font-heading text-2xl font-semibold text-foreground">
            {dict.form.sectionTitle}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{dict.form.sectionDescription}</p>
          <Suspense fallback={<QuoteFormSkeleton />}>
            <DetailedQuoteForm dict={dict.form} locale={locale} className="mt-6" />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
