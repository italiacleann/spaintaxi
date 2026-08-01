import type { Locale } from "@/lib/i18n/config";
import type { LegalPageDictionary } from "@/lib/i18n/legal-types";
import { termsEn } from "@/lib/i18n/dictionaries/terms.en";
import { termsEs } from "@/lib/i18n/dictionaries/terms.es";
import { privacyEn } from "@/lib/i18n/dictionaries/privacy.en";
import { privacyEs } from "@/lib/i18n/dictionaries/privacy.es";

const termsDictionaries: Record<Locale, LegalPageDictionary> = {
  en: termsEn,
  es: termsEs,
};

const privacyDictionaries: Record<Locale, LegalPageDictionary> = {
  en: privacyEn,
  es: privacyEs,
};

export function getTermsDictionary(locale: Locale): LegalPageDictionary {
  return termsDictionaries[locale];
}

export function getPrivacyDictionary(locale: Locale): LegalPageDictionary {
  return privacyDictionaries[locale];
}
