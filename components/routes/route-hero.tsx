import Image from "next/image";

import type { RouteRecord } from "@/lib/routes/types";
import { localeHome, type Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Badge } from "@/components/ui/badge";

export function RouteHero({
  route,
  locale,
  breadcrumbHome,
  originHref,
}: {
  route: RouteRecord;
  locale: Locale;
  breadcrumbHome: string;
  originHref?: string;
}) {
  const isEs = locale === "es";
  const originName = isEs ? route.originNameEs : route.originNameEn;
  const destinationName = isEs ? route.destinationNameEs : route.destinationNameEn;
  const title = isEs ? route.titleEs : route.titleEn;
  const imageAlt = isEs ? route.imageAltEs : route.imageAltEn;

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src={route.imageUrl}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover blur-md"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-[#062A3A]" />
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

        <Badge className="w-fit bg-cta text-cta-foreground">
          {originName} → {destinationName}
        </Badge>
        <h1 className="max-w-3xl text-3xl leading-[1.15] font-bold text-balance text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
      </Container>
    </section>
  );
}
