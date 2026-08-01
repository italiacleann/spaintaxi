import Image from "next/image";

import type { ServicePageDictionary } from "@/lib/i18n/service-types";
import { Container } from "@/components/shared/container";

export function ServiceOverview({ dict }: { dict: ServicePageDictionary }) {
  const t = dict.overview;

  return (
    <section aria-labelledby="overview-heading" className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-2xl shadow-lg lg:order-1">
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

        <div className="order-1 flex flex-col gap-4 lg:order-2">
          <h2
            id="overview-heading"
            className="text-3xl leading-tight font-semibold text-balance sm:text-4xl"
          >
            {t.title}
          </h2>
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
