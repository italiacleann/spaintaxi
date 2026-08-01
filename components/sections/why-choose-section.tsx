import Image from "next/image";

import type { Dictionary } from "@/lib/i18n/types";
import { whyIcons } from "@/components/shared/icon-maps";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function WhyChooseSection({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="why-choose-heading" className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-2xl shadow-lg lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1772468237159-674f05233185?w=900&h=1120&fit=crop&crop=right&q=80"
            alt={dict.whyChooseSection.imageAlt}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
        </div>

        <div className="order-1 flex flex-col gap-10 lg:order-2">
          <SectionHeading
            eyebrow={dict.whyChooseSection.eyebrow}
            title={dict.whyChooseSection.title}
            description={dict.whyChooseSection.description}
            align="left"
          />
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            {dict.whyChooseUs.map((item) => {
              const Icon = whyIcons[item.icon];
              return (
                <div key={item.title} className="flex flex-col gap-2.5">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
