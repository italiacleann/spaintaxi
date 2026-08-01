import type { AboutDictionary } from "@/lib/i18n/about-types";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { QuoteDialog } from "@/components/sections/quote-dialog";
import { Button } from "@/components/ui/button";

export function AboutCta({
  dict,
  homeDict,
  locale,
}: {
  dict: AboutDictionary;
  homeDict: Dictionary;
  locale: Locale;
}) {
  const t = dict.cta;

  return (
    <section aria-labelledby="book-transfer-heading" className="bg-primary py-20 sm:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2
          id="book-transfer-heading"
          className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl"
        >
          {t.title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          {t.description}
        </p>
        <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row">
          <QuoteDialog
            dict={homeDict}
            locale={locale}
            trigger={
              <Button
                size="lg"
                className="h-12 bg-cta px-8 text-base text-cta-foreground hover:bg-cta/90"
              >
                {t.button}
              </Button>
            }
          />
        </div>
      </Container>
    </section>
  );
}
