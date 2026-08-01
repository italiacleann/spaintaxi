import type { Locale } from "@/lib/i18n/config";
import type { CityHubDictionary } from "@/lib/cities/hub-types";
import { cityHubEn } from "@/lib/cities/hub.en";
import { cityHubEs } from "@/lib/cities/hub.es";

const hubDictionaries: Record<Locale, CityHubDictionary> = {
  en: cityHubEn,
  es: cityHubEs,
};

export function getCityHubDictionary(locale: Locale): CityHubDictionary {
  return hubDictionaries[locale];
}
