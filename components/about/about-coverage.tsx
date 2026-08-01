import Link from "next/link";
import { MapPinIcon } from "lucide-react";

import type { AboutDictionary } from "@/lib/i18n/about-types";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";

const pinPositions = [
  { top: "22%", left: "28%" },
  { top: "38%", left: "62%" },
  { top: "58%", left: "20%" },
  { top: "68%", left: "48%" },
  { top: "30%", left: "80%" },
  { top: "78%", left: "72%" },
];

export function AboutCoverage({ dict }: { dict: AboutDictionary }) {
  const t = dict.coverage;

  return (
    <section aria-labelledby="coverage-heading" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title={t.title}
          description={t.description}
          headingId="coverage-heading"
        />
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/8 via-secondary/10 to-accent shadow-inner ring-1 ring-black/5"
            style={{
              backgroundImage:
                "radial-gradient(color-mix(in oklch, var(--primary), transparent 85%) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden
          >
            {pinPositions.map((pos, index) => (
              <span
                key={`${pos.top}-${pos.left}`}
                className={cn(
                  "absolute flex size-9 -translate-x-1/2 -translate-y-full items-center justify-center rounded-full bg-primary text-white shadow-lg",
                  index % 2 === 0 && "animate-float"
                )}
                style={{ top: pos.top, left: pos.left, animationDelay: `${index * 0.4}s` }}
              >
                <MapPinIcon className="size-4 text-white" />
              </span>
            ))}
            <span className="absolute inset-0 flex items-center justify-center font-heading text-2xl font-bold tracking-wide text-primary/15 select-none">
              ESPAÑA
            </span>
          </div>

          <div className="flex flex-col gap-6">
            <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {t.cities.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-1.5 rounded-full bg-card px-3.5 py-2 text-sm font-medium text-foreground shadow-sm ring-1 ring-black/5"
                >
                  <MapPinIcon className="size-3.5 shrink-0 text-secondary" />
                  {city}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-muted-foreground">{t.footnote}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={t.airportsLink.href}
                className={buttonVariants({ variant: "outline" })}
              >
                {t.airportsLink.label}
              </Link>
              <Link href={t.citiesLink.href} className={buttonVariants({ variant: "outline" })}>
                {t.citiesLink.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
