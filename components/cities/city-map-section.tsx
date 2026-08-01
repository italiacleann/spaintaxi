import Link from "next/link";

import { cities, getCityPath } from "@/lib/cities/data";
import type { CityHubDictionary } from "@/lib/cities/hub-types";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const mapPins = [
  { citySlugEn: "madrid", left: 46, top: 44 },
  { citySlugEn: "barcelona", left: 79, top: 28 },
  { citySlugEn: "valencia", left: 68, top: 50 },
  { citySlugEn: "malaga", left: 40, top: 83 },
  { citySlugEn: "seville", left: 25, top: 76 },
  { citySlugEn: "alicante", left: 65, top: 62 },
  { citySlugEn: "bilbao", left: 46, top: 9 },
  { citySlugEn: "palma", left: 89, top: 56 },
  { citySlugEn: "ibiza", left: 80, top: 67 },
];

export function CityMapSection({ dict, locale }: { dict: CityHubDictionary["map"]; locale: Locale }) {
  const pins = mapPins
    .map((pin) => {
      const city = cities.find((item) => item.slugEn === pin.citySlugEn);
      if (!city) return null;
      return {
        ...pin,
        name: locale === "es" ? city.nameEs : city.nameEn,
        href: getCityPath(locale, city),
      };
    })
    .filter((pin): pin is NonNullable<typeof pin> => pin !== null);

  return (
    <section aria-labelledby="map-heading" className="bg-muted/40 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading title={dict.title} description={dict.description} headingId="map-heading" />
        <div
          className="relative mx-auto aspect-[5/4] w-full max-w-2xl overflow-hidden bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/5 shadow-inner"
          style={{ borderRadius: "62% 38% 31% 69% / 58% 32% 68% 42%" }}
        >
          {pins.map((pin) => (
            <Link
              key={pin.citySlugEn}
              href={pin.href}
              className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
              style={{ left: `${pin.left}%`, top: `${pin.top}%` }}
            >
              <span className="size-3 rounded-full bg-cta shadow-md ring-4 ring-cta/25 transition-transform duration-300 group-hover:scale-125" />
              <span className="rounded-md bg-white/95 px-2 py-0.5 text-[0.65rem] font-semibold whitespace-nowrap text-foreground opacity-0 shadow-sm ring-1 ring-black/5 transition-opacity duration-200 group-hover:opacity-100 sm:opacity-100">
                {pin.name}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
