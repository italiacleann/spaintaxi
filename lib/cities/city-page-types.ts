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
}
