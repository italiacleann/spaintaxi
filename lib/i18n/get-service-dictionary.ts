import type { Locale } from "@/lib/i18n/config";
import type { ServicePageDictionary } from "@/lib/i18n/service-types";
import { airportTransfersEn } from "@/lib/i18n/dictionaries/service-airport-transfers.en";
import { airportTransfersEs } from "@/lib/i18n/dictionaries/service-airport-transfers.es";
import { cityToCityTransfersEn } from "@/lib/i18n/dictionaries/service-city-to-city-transfers.en";
import { cityToCityTransfersEs } from "@/lib/i18n/dictionaries/service-city-to-city-transfers.es";
import { hourlyChauffeurEn } from "@/lib/i18n/dictionaries/service-hourly-chauffeur.en";
import { hourlyChauffeurEs } from "@/lib/i18n/dictionaries/service-hourly-chauffeur.es";
import { corporateTravelEn } from "@/lib/i18n/dictionaries/service-corporate-travel.en";
import { corporateTravelEs } from "@/lib/i18n/dictionaries/service-corporate-travel.es";
import { groupEventTransfersEn } from "@/lib/i18n/dictionaries/service-group-event-transfers.en";
import { groupEventTransfersEs } from "@/lib/i18n/dictionaries/service-group-event-transfers.es";
import { cruisePortTransfersEn } from "@/lib/i18n/dictionaries/service-cruise-port-transfers.en";
import { cruisePortTransfersEs } from "@/lib/i18n/dictionaries/service-cruise-port-transfers.es";

export type ServiceKey =
  | "airport-transfers"
  | "city-to-city-transfers"
  | "hourly-chauffeur"
  | "corporate-travel"
  | "group-event-transfers"
  | "cruise-port-transfers";

const registry: Partial<Record<ServiceKey, Record<Locale, ServicePageDictionary>>> = {
  "airport-transfers": {
    en: airportTransfersEn,
    es: airportTransfersEs,
  },
  "city-to-city-transfers": {
    en: cityToCityTransfersEn,
    es: cityToCityTransfersEs,
  },
  "hourly-chauffeur": {
    en: hourlyChauffeurEn,
    es: hourlyChauffeurEs,
  },
  "corporate-travel": {
    en: corporateTravelEn,
    es: corporateTravelEs,
  },
  "group-event-transfers": {
    en: groupEventTransfersEn,
    es: groupEventTransfersEs,
  },
  "cruise-port-transfers": {
    en: cruisePortTransfersEn,
    es: cruisePortTransfersEs,
  },
};

export function getServiceDictionary(key: ServiceKey, locale: Locale): ServicePageDictionary {
  const entry = registry[key];
  if (!entry) {
    throw new Error(`Missing service dictionary for "${key}"`);
  }
  return entry[locale];
}
