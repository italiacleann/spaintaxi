import Image from "next/image";

import type { QuotePageDictionary } from "@/lib/quote/types";
import { localeHome, type Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function QuoteHero({
  dict,
  locale,
}: {
  dict: QuotePageDictionary;
  locale: Locale;
}) {
  const t = dict.hero;

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src={t.image}
          alt={t.imageAlt}
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover blur-md"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/78 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-[#062A3A]" />
      </div>

      <Container className="relative flex flex-col gap-5 py-20 sm:py-24 lg:py-28">
        <Breadcrumb
          variant="dark"
          items={[
            { label: dict.breadcrumb.home, href: localeHome(locale) },
            { label: dict.breadcrumb.current },
          ]}
        />

        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase ring-1 ring-white/20 backdrop-blur-sm">
          {t.badge}
        </span>
        <h1 className="max-w-2xl text-4xl leading-[1.1] font-bold text-balance text-white sm:text-5xl">
          {t.title}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-white/85">{t.description}</p>

        <a
          href="#quote-form"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-2 h-12 w-fit bg-cta px-8 text-base text-cta-foreground hover:bg-cta/90"
          )}
        >
          {t.cta}
        </a>
      </Container>
    </section>
  );
}
