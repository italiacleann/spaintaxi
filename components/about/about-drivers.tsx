import Image from "next/image";
import { CheckCircle2Icon } from "lucide-react";

import type { AboutDictionary } from "@/lib/i18n/about-types";
import { Container } from "@/components/shared/container";

export function AboutDrivers({ dict }: { dict: AboutDictionary }) {
  const t = dict.drivers;

  return (
    <section aria-labelledby="professional-drivers-heading" className="bg-muted/40 py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <h2 id="professional-drivers-heading" className="text-3xl leading-tight font-semibold text-balance sm:text-4xl">
            {t.title}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">{t.description}</p>
          <ul className="flex flex-col gap-3">
            {t.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5 text-sm text-foreground">
                <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-secondary" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={t.image}
            alt={t.imageAlt}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
        </div>
      </Container>
    </section>
  );
}
