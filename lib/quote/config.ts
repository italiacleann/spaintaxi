import type { Locale } from "@/lib/i18n/config";

export function getQuotePagePath(locale: Locale): string {
  return locale === "es" ? "/es/solicitar-presupuesto/" : "/get-a-quote/";
}
