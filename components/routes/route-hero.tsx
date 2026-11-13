import Image from "next/image";

import type { RouteRecord } from "@/lib/routes/types";
import { localeHome, type Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { getRouteCrumbLabel, type Crumb } from "@/lib/routes/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function RouteHero({
  route,
  locale,
  breadcrumbHome,
  parentCrumb,
  quoteHref,
  quoteLabel,
}: {
  route: RouteRecord;
  locale: Locale;
  breadcrumbHome: string;
  parentCrumb?: Crumb;
  /** Primary quote CTA shown under the H1, so mobile visitors don't have
   *  to scroll past the full article to reach the facts-panel button. */
  quoteHref?: string;
  quoteLabel?: string;
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
            ...(parentCrumb ? [parentCrumb] : []),
            { label: getRouteCrumbLabel(locale, route) },
          ]}
        />

        <Badge className="w-fit bg-cta text-cta-foreground">
          {originName} → {destinationName}
        </Badge>
        <h1 className="max-w-3xl text-3xl leading-[1.15] font-bold text-balance text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {quoteHref && quoteLabel ? (
          <a
            href={quoteHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full bg-cta px-8 text-base text-cta-foreground hover:bg-cta/90 sm:w-fit"
            )}
          >
            {quoteLabel}
          </a>
        ) : null}
      </Container>
    </section>
  );
}
