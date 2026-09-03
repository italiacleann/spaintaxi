import type { ServicePageDictionary } from "@/lib/i18n/service-types";

export interface CityPageDictionary extends ServicePageDictionary {
  airportLink: {
    title: string;
    description: string;
    linkLabel: string;
    href: string;
  };
  relatedServices: {
    title: string;
    items: { label: string; href: string }[];
  };
  /** Optional bespoke long-form section (see CityRecord.richContentEn/Es) — absent for the vast majority of cities. */
  richContent?: {
    title: string;
    html: string;
  };
}
