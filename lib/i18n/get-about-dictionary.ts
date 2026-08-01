import type { Locale } from "@/lib/i18n/config";
import type { AboutDictionary } from "@/lib/i18n/about-types";
import { aboutEn } from "@/lib/i18n/dictionaries/about.en";
import { aboutEs } from "@/lib/i18n/dictionaries/about.es";

const aboutDictionaries: Record<Locale, AboutDictionary> = {
  en: aboutEn,
  es: aboutEs,
};

export function getAboutDictionary(locale: Locale): AboutDictionary {
  return aboutDictionaries[locale];
}
