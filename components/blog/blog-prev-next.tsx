import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import type { LocalizedBlogPost } from "@/lib/blog/types";
import { getBlogPostPath } from "@/lib/blog/queries";
import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function BlogPrevNext({
  previous,
  next,
  dict,
  locale,
}: {
  previous: LocalizedBlogPost | null;
  next: LocalizedBlogPost | null;
  dict: BlogHubDictionary["post"];
  locale: Locale;
}) {
  if (!previous && !next) return null;

  return (
    <div className="grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-2">
      {previous ? (
        <Link
          href={getBlogPostPath(locale, previous.slug)}
          className="group flex flex-col gap-2 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <ArrowLeftIcon className="size-3.5 transition-transform group-hover:-translate-x-1" />
            {dict.prevLabel}
          </span>
          <span className="line-clamp-2 font-heading text-sm font-semibold text-foreground group-hover:text-primary">
            {previous.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={getBlogPostPath(locale, next.slug)}
          className={cn(
            "group flex flex-col items-end gap-2 rounded-2xl bg-card p-5 text-right shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
          )}
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            {dict.nextLabel}
            <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="line-clamp-2 font-heading text-sm font-semibold text-foreground group-hover:text-primary">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
