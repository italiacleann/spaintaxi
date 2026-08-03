import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ClockIcon } from "lucide-react";

import type { LocalizedBlogPost } from "@/lib/blog/types";
import { getBlogPostPath } from "@/lib/blog/queries";
import { formatBlogDate, formatTemplate } from "@/lib/blog/format";
import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import type { Locale } from "@/lib/i18n/config";
import { Badge } from "@/components/ui/badge";

export function BlogPostCard({
  post,
  locale,
  dict,
}: {
  post: LocalizedBlogPost;
  locale: Locale;
  dict: BlogHubDictionary["directory"];
}) {
  const href = getBlogPostPath(locale, post.slug);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={href} className="contents">
        <div className="relative aspect-[16/10] overflow-hidden">
          {post.featuredImageUrl ? (
            <Image
              src={post.featuredImageUrl}
              alt={post.featuredImageAlt}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
          <Badge className="absolute top-3 left-3 bg-cta text-cta-foreground">{post.categoryLabel}</Badge>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="font-heading text-lg leading-snug font-semibold text-foreground">{post.title}</h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-muted-foreground">
            <span>
              {dict.byLabel} {post.authorName}
            </span>
            <span aria-hidden>&middot;</span>
            <span className="inline-flex items-center gap-1">
              <ClockIcon className="size-3.5" />
              {formatTemplate(dict.minReadTemplate, { minutes: post.readingTimeMinutes })}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
            <span>{formatBlogDate(post.publishedAt, locale)}</span>
            <span className="inline-flex items-center gap-1 font-medium text-primary">
              {dict.cardCta}
              <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
