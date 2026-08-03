import type { Locale } from "@/lib/i18n/config";

export function getBlogHubPath(locale: Locale): string {
  return locale === "es" ? "/es/blog/" : "/blog/";
}
