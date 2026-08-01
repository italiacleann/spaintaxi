import type { Locale } from "@/lib/i18n/config";
import type { QuotePageDictionary } from "@/lib/quote/types";
import { quoteEn } from "@/lib/quote/quote.en";
import { quoteEs } from "@/lib/quote/quote.es";

const quoteDictionaries: Record<Locale, QuotePageDictionary> = {
  en: quoteEn,
  es: quoteEs,
};

export function getQuoteDictionary(locale: Locale): QuotePageDictionary {
  return quoteDictionaries[locale];
}
