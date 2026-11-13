import type { Locale } from "@/lib/i18n/config";

export function getQuotePagePath(locale: Locale): string {
  return locale === "es" ? "/es/solicitar-presupuesto/" : "/get-a-quote/";
}

/**
 * Quote-page link pre-filled with a route's pickup and drop-off, plus the
 * page the visitor came from (`from`) so the lead records which route page
 * produced it. The quote form reads `pickup`/`dropoff` into step 1 and
 * stores `from` alongside the lead's source path.
 */
export function getPrefilledQuoteHref(
  locale: Locale,
  { pickup, dropoff, fromPath }: { pickup: string; dropoff: string; fromPath: string }
): string {
  const params = new URLSearchParams({ pickup, dropoff, from: fromPath });
  return `${getQuotePagePath(locale)}?${params.toString()}`;
}
