import { ArrowRightIcon, MapPinIcon } from "lucide-react";

import type { ServicePageDictionary } from "@/lib/i18n/service-types";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function ServiceRoutes({ dict }: { dict: ServicePageDictionary }) {
  const t = dict.routes;

  return (
    <section aria-labelledby="routes-heading" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title={t.title}
          description={t.description}
          headingId="routes-heading"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item) => (
            <article
              key={item.title}
              className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                <MapPinIcon className="size-4" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <ArrowRightIcon className="mt-1 ml-auto size-4 shrink-0 text-primary" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
