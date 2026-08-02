export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];

export const defaultLocale: Locale = "en";

export const localeConfig: Record<
  Locale,
  { htmlLang: string; hreflang: string; label: string; ogLocale: string }
> = {
  en: { htmlLang: "en", hreflang: "en", label: "English", ogLocale: "en_US" },
  es: { htmlLang: "es", hreflang: "es-ES", label: "Español", ogLocale: "es_ES" },
};

export const siteUrl = "https://spainprivatetransfer.com";

/** Returns the root path for a locale ("" for the default/unprefixed locale). */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

/** Returns the homepage path for a locale ("/" for default, "/es/" for others). */
export function localeHome(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}/`;
}

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path}`;
}

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}
