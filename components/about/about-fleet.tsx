import Image from "next/image";
import { AirVentIcon, LuggageIcon, UsersIcon, WifiIcon } from "lucide-react";

import type { AboutDictionary } from "@/lib/i18n/about-types";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";

export function AboutFleet({ dict }: { dict: AboutDictionary }) {
  const t = dict.fleet;

  return (
    <section aria-labelledby="our-fleet-heading" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading title={t.title} description={t.description} headingId="our-fleet-heading" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.vehicles.map((vehicle) => (
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
                <Badge className="absolute top-3 right-3 bg-white/90 text-primary">
                  {vehicle.category}
                </Badge>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {vehicle.name}
                </h3>
                <div className="grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <UsersIcon className="size-4 text-primary" />
                    {vehicle.passengers} {t.passengersLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <LuggageIcon className="size-4 text-primary" />
                    {vehicle.luggage} {t.luggageLabel}
                  </span>
                  {vehicle.wifi ? (
                    <span className="inline-flex items-center gap-1.5">
                      <WifiIcon className="size-4 text-primary" />
                      {t.wifiLabel}
                    </span>
                  ) : null}
                  {vehicle.ac ? (
                    <span className="inline-flex items-center gap-1.5">
                      <AirVentIcon className="size-4 text-primary" />
                      {t.acLabel}
                    </span>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
