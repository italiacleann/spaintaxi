import Image from "next/image";
import { CheckIcon, LuggageIcon, UsersIcon } from "lucide-react";

import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function FleetSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="fleet" aria-labelledby="fleet-heading" className="scroll-mt-20 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={dict.fleetSection.eyebrow}
          title={dict.fleetSection.title}
          description={dict.fleetSection.description}
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {dict.fleet.map((vehicle) => (
            <article
              key={vehicle.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {vehicle.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {vehicle.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-primary">
                  <span className="inline-flex items-center gap-1.5">
                    <UsersIcon className="size-4" />
                    {vehicle.passengers}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <LuggageIcon className="size-4" />
                    {vehicle.luggage}
                  </span>
                </div>
                <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                  {vehicle.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckIcon className="size-4 shrink-0 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
