import Link from "next/link";
import { ArrowRightIcon, MapPinIcon } from "lucide-react";

import { getRoutesForCity, getRoutePath } from "@/lib/routes/data";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const copy: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "More Transfers in This Area",
    description: "Fixed-price private transfers to the hotels, attractions, and destinations travelers request most.",
  },
  es: {
    title: "Más Traslados en Esta Zona",
    description: "Traslados privados con precio cerrado a los hoteles, atracciones y destinos que más solicitan los viajeros.",
  },
};

export function RouteRelatedTransfersSection({ citySlug, locale }: { citySlug: string; locale: Locale }) {
  const cityRoutes = getRoutesForCity(citySlug).slice(0, 9);
  if (cityRoutes.length === 0) return null;

  const t = copy[locale];
  const isEs = locale === "es";

  return (
    <section aria-labelledby="related-transfers-heading" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading title={t.title} description={t.description} headingId="related-transfers-heading" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cityRoutes.map((route) => (
            <Link
              key={route.slugEn}
              href={getRoutePath(locale, route)}
              className="group flex items-start gap-4 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                <MapPinIcon className="size-4" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  {isEs ? route.originNameEs : route.originNameEn} → {isEs ? route.destinationNameEs : route.destinationNameEn}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">~{route.driveTime}</p>
              </div>
              <ArrowRightIcon className="mt-1 ml-auto size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
