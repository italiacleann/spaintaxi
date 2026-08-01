import Image from "next/image";
import { StarIcon } from "lucide-react";

import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { HeroSlider } from "@/components/sections/hero-slider";
import { QuoteDialog } from "@/components/sections/quote-dialog";
import { Button } from "@/components/ui/button";

export function HeroSection({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const t = dict.hero;

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920&h=1280&fit=crop&q=80"
          alt="Scenic Barcelona skyline at dusk"
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover blur-md"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-[#062A3A]/95" />
      </div>

      <Container className="relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
        <div className="flex flex-col gap-6 text-white">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase ring-1 ring-white/20 backdrop-blur-sm">
            {t.eyebrow}
          </span>
          <h1 className="text-4xl leading-[1.08] font-bold text-balance text-cta sm:text-5xl lg:text-6xl">
            {t.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/85">{t.description}</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-cta">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="size-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-white/90">{t.ratingSuffix}</span>
            </div>
            <span className="hidden h-4 w-px bg-white/25 sm:block" aria-hidden />
            <span className="text-sm font-medium text-white/90">{t.transfersCompleted}</span>
          </div>

          <div className="pt-2">
            <QuoteDialog
              dict={dict}
              locale={locale}
              trigger={
                <Button
                  id="quote"
                  size="lg"
                  className="h-12 scroll-mt-24 bg-cta px-8 text-base text-cta-foreground hover:bg-cta/90"
                >
                  {t.formTitle}
                </Button>
              }
            />
          </div>
        </div>

        <HeroSlider />
      </Container>
    </section>
  );
}
