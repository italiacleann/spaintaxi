import Image from "next/image";
import { AirVentIcon, LuggageIcon, UsersIcon, WifiIcon } from "lucide-react";

import type { ServicePageDictionary } from "@/lib/i18n/service-types";
import type { ServiceSharedContent } from "@/lib/i18n/service-shared-content";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";

export function ServiceFleet({
  dict,
  shared,
}: {
  dict: ServicePageDictionary;
  shared: ServiceSharedContent;
}) {
  const vehicles = dict.fleet.vehicleKeys
    .map((key) => shared.fleetCatalog[key])
    .filter(Boolean);

  return (
    <section id="fleet" aria-labelledby="fleet-heading" className="scroll-mt-20 bg-muted/40 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title={shared.fleetSectionTitle}
          description={shared.fleetSectionDescription}
          headingId="fleet-heading"
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
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
                    {vehicle.passengers} {shared.fleetLabels.passengers}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <LuggageIcon className="size-4 text-primary" />
                    {vehicle.luggage} {shared.fleetLabels.luggage}
                  </span>
                  {vehicle.wifi ? (
                    <span className="inline-flex items-center gap-1.5">
                      <WifiIcon className="size-4 text-primary" />
                      {shared.fleetLabels.wifi}
                    </span>
                  ) : null}
                  {vehicle.ac ? (
                    <span className="inline-flex items-center gap-1.5">
                      <AirVentIcon className="size-4 text-primary" />
                      {shared.fleetLabels.ac}
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
