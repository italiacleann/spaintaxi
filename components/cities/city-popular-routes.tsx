import Link from "next/link";
import { ArrowRightIcon, PlaneIcon } from "lucide-react";

import { airports, getAirportPath } from "@/lib/airports/data";
import { cities, getCityPath } from "@/lib/cities/data";
import type { CityHubDictionary } from "@/lib/cities/hub-types";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const routePairs = [
  { airportIata: "BCN", citySlugEn: "barcelona", driveTime: "20 min" },
  { airportIata: "MAD", citySlugEn: "toledo", driveTime: "1 hr" },
  { airportIata: "AGP", citySlugEn: "marbella", driveTime: "40 min" },
  { airportIata: "BIO", citySlugEn: "san-sebastian", driveTime: "1 hr" },
  { airportIata: "IBZ", citySlugEn: "ibiza", driveTime: "15 min" },
];

export function CityPopularRoutes({
  dict,
  locale,
}: {
  dict: CityHubDictionary["popularRoutes"];
  locale: Locale;
}) {
  const routes = routePairs
    .map((pair) => {
      const airport = airports.find((item) => item.iata === pair.airportIata);
      const city = cities.find((item) => item.slugEn === pair.citySlugEn);
      if (!airport || !city) return null;
      return {
        key: pair.airportIata + pair.citySlugEn,
        airportName: locale === "es" ? airport.shortNameEs : airport.shortNameEn,
        cityName: locale === "es" ? city.nameEs : city.nameEn,
        cityHref: getCityPath(locale, city),
        driveTime: pair.driveTime,
      };
    })
    .filter((route): route is NonNullable<typeof route> => route !== null);

  return (
    <section aria-labelledby="popular-routes-heading" className="bg-muted/40 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading title={dict.title} description={dict.description} headingId="popular-routes-heading" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <Link
              key={route.key}
              href={route.cityHref}
              className="group flex items-center gap-4 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                <PlaneIcon className="size-4" />
              </span>
              <div className="flex flex-1 flex-col gap-0.5">
                <span className="font-heading text-sm font-semibold text-foreground">
                  {route.airportName} &rarr; {route.cityName}
                </span>
                <span className="text-xs text-muted-foreground">~{route.driveTime}</span>
              </div>
              <ArrowRightIcon className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
