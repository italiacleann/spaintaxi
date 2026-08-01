import type { Locale } from "@/lib/i18n/config";
import type { AirportHubDictionary } from "@/lib/airports/hub-types";
import { airportHubEn } from "@/lib/airports/hub.en";
import { airportHubEs } from "@/lib/airports/hub.es";

const hubDictionaries: Record<Locale, AirportHubDictionary> = {
  en: airportHubEn,
  es: airportHubEs,
};

export function getAirportHubDictionary(locale: Locale): AirportHubDictionary {
  return hubDictionaries[locale];
}
