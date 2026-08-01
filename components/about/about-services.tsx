import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import type { AboutDictionary } from "@/lib/i18n/about-types";
import { aboutServiceIcons } from "@/components/shared/icon-maps";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function AboutServices({ dict }: { dict: AboutDictionary }) {
  const t = dict.services;

  return (
    <section aria-labelledby="our-services-heading" className="bg-muted/40 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title={t.title}
          description={t.description}
          headingId="our-services-heading"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.items.map((service) => {
            const Icon = aboutServiceIcons[service.icon];
            return (
              <article
                key={service.title}
                className="group flex flex-col gap-3 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Link href={service.href} className="contents">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
                    <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
