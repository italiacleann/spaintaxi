import { CarFrontIcon, MapPinIcon, RouteIcon } from "lucide-react";

import type { RouteRecord } from "@/lib/routes/types";
import type { RoutePageDictionary } from "@/lib/routes/dictionary";
import { getQuotePagePath } from "@/lib/quote/config";
import type { Locale } from "@/lib/i18n/config";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function RouteFactsPanel({
  route,
  dict,
  locale,
}: {
  route: RouteRecord;
  dict: RoutePageDictionary["factsPanel"];
  locale: Locale;
}) {
  const bullets = dict.pickupBullets[route.kind];

  return (
    <aside className="lg:sticky lg:top-24">
      <div className="flex flex-col gap-5 rounded-2xl bg-card p-6 shadow-md ring-1 ring-black/5">
        <div className="flex flex-col gap-3 border-b border-border pb-5">
          <div className="flex items-center gap-2.5 text-sm">
            <RouteIcon className="size-4 shrink-0 text-primary" />
            <span className="text-muted-foreground">{dict.driveTimeLabel}</span>
            <span className="ml-auto font-semibold text-foreground">{route.driveTime}</span>
          </div>
          {route.distanceKm ? (
            <div className="flex items-center gap-2.5 text-sm">
              <MapPinIcon className="size-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">{dict.distanceLabel}</span>
              <span className="ml-auto font-semibold text-foreground">{route.distanceKm} km</span>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-foreground">
            <CarFrontIcon className="size-4 text-primary" />
            {dict.pickupTitle}
          </span>
          <ul className="flex flex-col gap-2">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-secondary" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={getQuotePagePath(locale)}
          className={cn(buttonVariants({ size: "lg" }), "h-11 w-full bg-cta text-cta-foreground hover:bg-cta/90")}
        >
          {dict.quoteButton}
        </a>
      </div>
    </aside>
  );
}
