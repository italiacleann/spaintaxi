import type { Locale } from "@/lib/i18n/config";

export function formatBlogDate(dateIso: string | null, locale: Locale): string {
  if (!dateIso) return "";
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {
    dateStyle: "long",
  }).format(new Date(dateIso));
}

export function formatTemplate(template: string, values: Record<string, string | number>): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
    template
  );
}
