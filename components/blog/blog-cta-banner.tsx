import { getQuotePagePath } from "@/lib/quote/config";
import type { Locale } from "@/lib/i18n/config";
import { CtaBanner } from "@/components/shared/cta-banner";

export function BlogCtaBanner({
  dict,
  locale,
}: {
  dict: { title: string; description: string; button: string };
  locale: Locale;
}) {
  return (
    <CtaBanner
      headingId="blog-cta-heading"
      title={dict.title}
      description={dict.description}
      buttonLabel={dict.button}
      buttonHref={getQuotePagePath(locale)}
    />
  );
}
