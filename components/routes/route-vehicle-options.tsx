import Image from "next/image";
import { AirVentIcon, LuggageIcon, UsersIcon, WifiIcon } from "lucide-react";

import type { ServiceSharedContent } from "@/lib/i18n/service-shared-content";
import { Badge } from "@/components/ui/badge";

const ROUTE_VEHICLE_KEYS = ["business-sedan", "premium-suv", "mercedes-vclass"];

export function RouteVehicleOptions({
  shared,
  title,
  description,
}: {
  shared: ServiceSharedContent;
  title: string;
  description: string;
}) {
  const vehicles = ROUTE_VEHICLE_KEYS.map((key) => shared.fleetCatalog[key]).filter(Boolean);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-2xl font-semibold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {vehicles.map((vehicle) => (
          <article
            key={vehicle.name}
            className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-black/5"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={vehicle.image}
                alt={vehicle.imageAlt}
                fill
                loading="lazy"
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
              <Badge className="absolute top-3 right-3 bg-white/90 text-primary">{vehicle.category}</Badge>
            </div>
            <div className="flex flex-col gap-3 p-5">
              <h3 className="font-heading text-base font-semibold text-foreground">{vehicle.name}</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 border-t border-border pt-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <UsersIcon className="size-3.5 text-primary" />
                  {vehicle.passengers} {shared.fleetLabels.passengers}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <LuggageIcon className="size-3.5 text-primary" />
                  {vehicle.luggage} {shared.fleetLabels.luggage}
                </span>
                {vehicle.wifi ? (
                  <span className="inline-flex items-center gap-1.5">
                    <WifiIcon className="size-3.5 text-primary" />
                    {shared.fleetLabels.wifi}
                  </span>
                ) : null}
                {vehicle.ac ? (
                  <span className="inline-flex items-center gap-1.5">
                    <AirVentIcon className="size-3.5 text-primary" />
                    {shared.fleetLabels.ac}
                  </span>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
