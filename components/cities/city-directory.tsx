"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, PlaneIcon, SearchIcon } from "lucide-react";

import type { CityRecord } from "@/lib/cities/types";
import { getCityPath } from "@/lib/cities/data";
import { pickHeroImage } from "@/lib/cities/images";
import { airports, getAirportPath } from "@/lib/airports/data";
import type { CityHubDictionary } from "@/lib/cities/hub-types";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const serviceLabels: Record<Locale, string[]> = {
  en: ["Airport Transfers", "City Transfers", "Chauffeur Service", "Corporate Travel"],
  es: ["Traslados al Aeropuerto", "Traslados en Ciudad", "Servicio de Chófer", "Transporte Corporativo"],
};

export function CityDirectory({
  cities,
  dict,
  locale,
}: {
  cities: CityRecord[];
  dict: CityHubDictionary["directory"];
  locale: Locale;
}) {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!normalized) return cities;
    return cities.filter((city) => {
      const name = locale === "es" ? city.nameEs : city.nameEn;
      const region = locale === "es" ? city.regionEs : city.regionEn;
      return `${name} ${region}`.toLowerCase().includes(normalized);
    });
  }, [cities, locale, normalized]);

  const featured = filtered.filter((city) => city.isFeatured);
  const services = serviceLabels[locale];

  const grouped = useMemo(() => {
    const groups = new Map<string, CityRecord[]>();
    for (const city of filtered) {
      const name = locale === "es" ? city.nameEs : city.nameEn;
      const letter = name.charAt(0).toUpperCase();
      if (!groups.has(letter)) groups.set(letter, []);
      groups.get(letter)!.push(city);
    }
    return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filtered, locale]);

  return (
    <section id="directory" aria-labelledby="directory-heading" className="scroll-mt-20 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col gap-6">
          <SectionHeading title={dict.featuredTitle} headingId="directory-heading" />

          <div className="relative mx-auto w-full max-w-md">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              aria-label={dict.searchLabel}
              placeholder={dict.searchPlaceholder}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-11 rounded-full pl-9"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground">
            {dict.resultsCountTemplate.replace("{count}", String(filtered.length))}
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-base text-muted-foreground">{dict.emptyMessage}</p>
        ) : (
          <>
            {featured.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((city) => {
                  const name = locale === "es" ? city.nameEs : city.nameEn;
                  const blurb = locale === "es" ? city.blurbEs : city.blurbEn;
                  const airport = airports.find((item) => item.iata === city.mainAirportIata);
                  const airportName = airport ? (locale === "es" ? airport.shortNameEs : airport.shortNameEn) : "";
                  const hero = pickHeroImage(city.imageSeed);

                  return (
                    <article
                      key={city.slugEn}
                      className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Link href={getCityPath(locale, city)} className="contents">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={hero.src}
                            alt={locale === "es" ? hero.altEs : hero.altEn}
                            fill
                            loading="lazy"
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                          <h3 className="absolute inset-x-0 bottom-0 p-4 font-heading text-lg font-semibold text-white">
                            {name}
                          </h3>
                        </div>
                        <div className="flex flex-1 flex-col gap-3 p-5">
                          {blurb ? (
                            <p className="text-sm leading-relaxed text-muted-foreground">{blurb}</p>
                          ) : null}
                          {airportName ? (
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                              <PlaneIcon className="size-3.5" />
                              {dict.mainAirportLabel}: {airportName}
                            </span>
                          ) : null}
                          <div className="flex flex-wrap gap-1.5">
                            {services.map((service) => (
                              <Badge key={service} variant="outline" className="text-[0.65rem] font-normal">
                                {service}
                              </Badge>
                            ))}
                          </div>
                          <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
                            {dict.cardCta}
                            <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            ) : null}

            <div className="flex flex-col gap-8">
              <h3 className="text-center font-heading text-2xl font-semibold text-foreground">
                {dict.allCitiesTitle}
              </h3>
              <div className="flex flex-col gap-6">
                {grouped.map(([letter, group]) => (
                  <div key={letter} className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                    <span className="w-8 shrink-0 font-heading text-xl font-bold text-primary">
                      {letter}
                    </span>
                    <div className="flex flex-wrap gap-x-2 gap-y-2">
                      {group.map((city, index) => (
                        <span key={city.slugEn} className="inline-flex items-center">
                          <Link
                            href={getCityPath(locale, city)}
                            className={cn(
                              "text-sm text-muted-foreground transition-colors hover:text-primary hover:underline",
                              city.isFeatured && "font-medium text-foreground"
                            )}
                          >
                            {locale === "es" ? city.nameEs : city.nameEn}
                          </Link>
                          {index < group.length - 1 ? (
                            <span className="ml-2 text-border">&middot;</span>
                          ) : null}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
