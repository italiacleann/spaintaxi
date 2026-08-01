"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, SearchIcon } from "lucide-react";

import type { AirportRecord, IslandGroup } from "@/lib/airports/types";
import { getAirportPath } from "@/lib/airports/data";
import type { AirportHubDictionary } from "@/lib/airports/hub-types";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type FilterKey = "all" | "mainland" | "balearic" | "canary";

function matchesFilter(islandGroup: IslandGroup, filter: FilterKey): boolean {
  if (filter === "all") return true;
  if (filter === "mainland") return islandGroup === null;
  return islandGroup === filter;
}

export function AirportDirectory({
  airports,
  dict,
  locale,
}: {
  airports: AirportRecord[];
  dict: AirportHubDictionary;
  locale: Locale;
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterKey>("all");
  const t = dict.directory;

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return airports.filter((airport) => {
      if (!matchesFilter(airport.islandGroup, filter)) return false;
      if (!normalized) return true;
      const name = locale === "es" ? airport.shortNameEs : airport.shortNameEn;
      const city = locale === "es" ? airport.cityEs : airport.cityEn;
      const region = locale === "es" ? airport.regionEs : airport.regionEn;
      const haystack = `${name} ${city} ${region} ${airport.iata}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [airports, filter, locale, query]);

  const filterOptions: { key: FilterKey; label: string }[] = [
    { key: "all", label: t.filters.all },
    { key: "mainland", label: t.filters.mainland },
    { key: "balearic", label: t.filters.balearic },
    { key: "canary", label: t.filters.canary },
  ];

  return (
    <section aria-labelledby="airport-directory-heading" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading title={dict.intro.title} headingId="airport-directory-heading" />
        <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
          {dict.intro.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative mx-auto w-full max-w-md">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              aria-label={t.searchLabel}
              placeholder={t.searchPlaceholder}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-11 rounded-full pl-9"
            />
          </div>

          <div
            role="group"
            aria-label={t.filterLabel}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {filterOptions.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setFilter(option.key)}
                aria-pressed={filter === option.key}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  filter === option.key
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground">
            {t.resultsCountTemplate.replace("{count}", String(filtered.length))}
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((airport) => {
              const name = locale === "es" ? airport.shortNameEs : airport.shortNameEn;
              const city = locale === "es" ? airport.cityEs : airport.cityEn;
              const region = locale === "es" ? airport.regionEs : airport.regionEn;

              return (
                <Link
                  key={airport.iata}
                  href={getAirportPath(locale, airport)}
                  className="group flex flex-col gap-3 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {name}
                    </h3>
                    <Badge className="shrink-0 bg-accent text-primary">
                      {airport.heliport ? t.heliportBadge : airport.iata}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {city} &middot; {region}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    {t.cardCta}
                    <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-base text-muted-foreground">{t.emptyMessage}</p>
        )}
      </Container>
    </section>
  );
}
