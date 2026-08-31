import Image from "next/image";
import Link from "next/link";
import { SparkleIcon } from "lucide-react";

import type { RouteRecord } from "@/lib/routes/types";
import { localeHome, type Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Badge } from "@/components/ui/badge";

const EYEBROW: Record<RouteRecord["kind"], { en: string; es: string }> = {
  hotel: { en: "Hotel Transfer", es: "Traslado a Hotel" },
  "cruise-port": { en: "Port Transfer", es: "Traslado al Puerto" },
  "train-station": { en: "Station Transfer", es: "Traslado a Estación" },
  attraction: { en: "Ibiza Transfer", es: "Traslado en Ibiza" },
  "day-trip": { en: "Private Chauffeur Day", es: "Día con Chófer Privado" },
  city: { en: "Ibiza Transfer", es: "Traslado en Ibiza" },
};

export function IbizaRouteHero({
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
  const eyebrow = EYEBROW[route.kind][isEs ? "es" : "en"];

  return (
    <section className="ibiza-theme relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src={route.imageUrl}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/92 via-primary/75 to-secondary/55" />
        <div
          className="absolute -top-32 right-[-10%] size-[36rem] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--cta) 0%, transparent 70%)" }}
        />
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

        <Badge className="w-fit gap-1.5 bg-white/15 text-white ring-1 ring-white/30">
          <SparkleIcon className="size-3.5" />
          {eyebrow}
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
