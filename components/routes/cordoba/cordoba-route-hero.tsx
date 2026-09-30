import Image from "next/image";
import Link from "next/link";
import { TrainFrontIcon, BuildingIcon, CompassIcon, RouteIcon } from "lucide-react";

import type { RouteRecord } from "@/lib/routes/types";
import { localeHome, type Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Badge } from "@/components/ui/badge";

const EYEBROW: Record<RouteRecord["kind"], { en: string; es: string; icon: typeof TrainFrontIcon }> = {
  hotel: { en: "Córdoba Hotel Transfer", es: "Traslado a Hotel en Córdoba", icon: BuildingIcon },
  "cruise-port": { en: "Port Transfer", es: "Traslado al Puerto", icon: RouteIcon },
  "train-station": { en: "Córdoba Station Transfer", es: "Traslado a la Estación de Córdoba", icon: TrainFrontIcon },
  attraction: { en: "Córdoba Transfer", es: "Traslado en Córdoba", icon: RouteIcon },
  "day-trip": { en: "Private Day Trip from Córdoba", es: "Excursión Privada desde Córdoba", icon: CompassIcon },
  city: { en: "Andalusia City-to-City Transfer", es: "Traslado entre Ciudades de Andalucía", icon: RouteIcon },
};

/**
 * Córdoba's distinct visual template (see cordoba-route-page-content.tsx
 * for the full rationale) — same data contract and image treatment as the
 * default RouteHero, but the eyebrow badge/icon swaps by route.kind so a
 * station page, a hotel page, a day trip, and a city-to-city page each
 * read as a different kind of page at a glance, and an optional chips row
 * (same mechanism as Ibiza's hero) surfaces genuinely relevant onward
 * routes — including the pre-existing Seville/Málaga/Granada pages this
 * cluster deliberately does not rebuild.
 */
export function CordobaRouteHero({
  route,
  locale,
  breadcrumbHome,
  originHref,
  chips,
}: {
  route: RouteRecord;
  locale: Locale;
  breadcrumbHome: string;
  originHref?: string;
  chips: { label: string; href: string }[];
}) {
  const isEs = locale === "es";
  const originName = isEs ? route.originNameEs : route.originNameEn;
  const destinationName = isEs ? route.destinationNameEs : route.destinationNameEn;
  const title = isEs ? route.titleEs : route.titleEn;
  const imageAlt = isEs ? route.imageAltEs : route.imageAltEn;
  const eyebrow = EYEBROW[route.kind];
  const EyebrowIcon = eyebrow.icon;

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image src={route.imageUrl} alt={imageAlt} fill priority sizes="100vw" className="scale-110 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/75 to-primary/40" />
      </div>

      <Container className="relative flex flex-col gap-6 py-24 sm:py-28 lg:py-32">
        <Breadcrumb
          variant="dark"
          items={[
            { label: breadcrumbHome, href: localeHome(locale) },
            ...(originHref ? [{ label: originName, href: originHref }] : []),
            { label: destinationName },
          ]}
        />

        <Badge className="w-fit gap-1.5 bg-cta text-cta-foreground">
          <EyebrowIcon className="size-3.5" />
          {eyebrow[isEs ? "es" : "en"]}
        </Badge>

        <h1 className="max-w-3xl text-3xl leading-[1.15] font-bold text-balance text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {chips.length > 0 ? (
          <div className="mt-2 flex flex-wrap gap-2.5">
            {chips.map((chip) => (
              <Link
                key={chip.href}
                href={chip.href}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                {chip.label}
              </Link>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
