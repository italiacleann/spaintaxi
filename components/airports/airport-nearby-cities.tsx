import { NavigationIcon } from "lucide-react";

import type { AirportPageDictionary } from "@/lib/airports/airport-page-types";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function AirportNearbyCities({ dict }: { dict: AirportPageDictionary }) {
  const t = dict.nearbyCitiesSection;
  if (!t) return null;

  return (
    <section aria-labelledby="nearby-cities-heading" className="bg-muted/40 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading title={t.title} headingId="nearby-cities-heading" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item) => (
            <article
              key={item.title}
              className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-black/5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <NavigationIcon className="size-4" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
