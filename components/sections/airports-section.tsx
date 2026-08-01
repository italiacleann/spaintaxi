import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";

export function AirportsSection({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="airports-heading" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={dict.airportsSection.eyebrow}
          title={dict.airportsSection.title}
          description={dict.airportsSection.description}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.airports.map((airport) => (
            <article
              key={airport.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={airport.href} className="contents">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={airport.image}
                    alt={airport.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-white/90 text-primary">
                    {airport.code}
                  </Badge>
                  <h3 className="absolute inset-x-0 bottom-0 p-4 font-heading text-base font-semibold text-white">
                    {airport.name}
                  </h3>
                </div>
                <div className="flex items-center justify-between px-4 py-3.5">
                  <span className="text-sm text-muted-foreground">
                    {dict.airportsSection.transfersTo} {airport.city}
                  </span>
                  <ArrowRightIcon className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
