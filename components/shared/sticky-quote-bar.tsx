import Link from "next/link";

import { getQuotePagePath } from "@/lib/quote/config";
import type { Locale } from "@/lib/i18n/config";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyQuoteBar({ locale, label }: { locale: Locale; label: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(0,0,0,0.08)] sm:hidden">
      <Link
        href={getQuotePagePath(locale)}
        className={cn(
          buttonVariants({ size: "lg" }),
          "h-12 w-full bg-cta text-base text-cta-foreground hover:bg-cta/90"
        )}
      >
        {label}
      </Link>
    </div>
  );
}
