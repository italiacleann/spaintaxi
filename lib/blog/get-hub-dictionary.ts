import type { Locale } from "@/lib/i18n/config";
import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import { blogHubEn } from "@/lib/blog/hub.en";
import { blogHubEs } from "@/lib/blog/hub.es";

const hubDictionaries: Record<Locale, BlogHubDictionary> = {
  en: blogHubEn,
  es: blogHubEs,
};

export function getBlogHubDictionary(locale: Locale): BlogHubDictionary {
  return hubDictionaries[locale];
}
