import type { ServicePageDictionary } from "@/lib/i18n/service-types";

export interface AirportPageDictionary extends ServicePageDictionary {
  nearbyCitiesSection: {
    title: string;
    items: { title: string; description: string }[];
  } | null;
  relatedServices: {
    title: string;
    items: { label: string; href: string }[];
  };
}
