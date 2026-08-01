import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import type { Dictionary } from "@/lib/i18n/types";
import { serviceIcons } from "@/components/shared/icon-maps";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function ServicesSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={dict.servicesSection.eyebrow}
          title={dict.servicesSection.title}
          description={dict.servicesSection.description}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <article
                key={service.title}
                className="group flex flex-col gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Link href={service.href} className="contents">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
                    {dict.servicesSection.learnMore}
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
