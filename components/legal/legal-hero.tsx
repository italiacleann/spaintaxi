import { CalendarIcon } from "lucide-react";

import type { LegalPageDictionary } from "@/lib/i18n/legal-types";
import { localeHome, type Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { Breadcrumb } from "@/components/shared/breadcrumb";

export function LegalHero({
  dict,
  locale,
}: {
  dict: LegalPageDictionary;
  locale: Locale;
}) {
  const t = dict.hero;

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--secondary)_0%,_transparent_45%)] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[#062A3A]" />

      <Container className="relative flex flex-col gap-5 py-24 sm:py-28">
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
        <p className="max-w-2xl text-lg leading-relaxed text-white/80">{t.description}</p>

        <div className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2 text-sm text-white/80 ring-1 ring-white/15">
          <CalendarIcon className="size-4" />
          <span>
            {t.lastUpdatedLabel}: <span className="font-medium text-white">{t.lastUpdatedDate}</span>
          </span>
        </div>
      </Container>
    </section>
  );
}
