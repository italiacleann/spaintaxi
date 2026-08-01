import Image from "next/image";
import Link from "next/link";

import type { ServicePageDictionary } from "@/lib/i18n/service-types";
import type { Dictionary } from "@/lib/i18n/types";
import type { ServiceSharedContent } from "@/lib/i18n/service-shared-content";
import { localeHome, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { QuoteForm } from "@/components/sections/quote-form";
import { buttonVariants } from "@/components/ui/button";

export function ServiceHero({
  dict,
  homeDict,
  shared,
  locale,
  breadcrumbHome,
}: {
  dict: Pick<ServicePageDictionary, "hero" | "breadcrumb">;
  homeDict: Dictionary;
  shared: ServiceSharedContent;
  locale: Locale;
  breadcrumbHome: string;
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

      <Container className="relative grid grid-cols-1 gap-12 py-24 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
        <div className="flex flex-col gap-5">
          <Breadcrumb
            variant="dark"
            items={[
              { label: breadcrumbHome, href: localeHome(locale) },
              { label: dict.breadcrumb.current },
            ]}
          />

          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase ring-1 ring-white/20 backdrop-blur-sm">
            {t.badge}
          </span>
          <h1 className="max-w-xl text-4xl leading-[1.1] font-bold text-balance text-white sm:text-5xl">
            {t.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/85">{t.description}</p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#quote"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 scroll-mt-24 bg-cta px-8 text-base text-cta-foreground hover:bg-cta/90"
              )}
            >
              {t.ctaPrimary}
            </a>
            <Link
              href={shared.ctaSecondaryHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 border-white/30 bg-white/5 px-8 text-base text-white hover:bg-white/15 hover:text-white"
              )}
            >
              {t.ctaSecondaryLabel}
            </Link>
          </div>
        </div>

        <div id="quote" className="scroll-mt-24">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/5 sm:p-7 lg:ml-auto">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              {homeDict.hero.formTitle}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{homeDict.hero.formSubtitle}</p>
            <QuoteForm dict={homeDict} locale={locale} className="mt-5" />
          </div>
        </div>
      </Container>
    </section>
  );
}
