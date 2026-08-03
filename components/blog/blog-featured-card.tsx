import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ClockIcon } from "lucide-react";

import type { LocalizedBlogPost } from "@/lib/blog/types";
import { getBlogPostPath } from "@/lib/blog/queries";
import { formatBlogDate, formatTemplate } from "@/lib/blog/format";
import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import type { Locale } from "@/lib/i18n/config";
import { Badge } from "@/components/ui/badge";

export function BlogFeaturedCard({
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
    <article className="group overflow-hidden rounded-3xl bg-card shadow-md ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl">
      <Link href={href} className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
          {post.featuredImageUrl ? (
            <Image
              src={post.featuredImageUrl}
              alt={post.featuredImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : null}
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
          <div className="flex items-center gap-3">
            <Badge className="bg-cta text-cta-foreground">{dict.featuredLabel}</Badge>
            <Badge variant="outline">{post.categoryLabel}</Badge>
          </div>
          <h2 className="font-heading text-2xl leading-snug font-bold text-foreground sm:text-3xl">
            {post.title}
          </h2>
          <p className="leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>
              {dict.byLabel} {post.authorName}
            </span>
            <span aria-hidden>&middot;</span>
            <span>{formatBlogDate(post.publishedAt, locale)}</span>
            <span aria-hidden>&middot;</span>
            <span className="inline-flex items-center gap-1">
              <ClockIcon className="size-3.5" />
              {formatTemplate(dict.minReadTemplate, { minutes: post.readingTimeMinutes })}
            </span>
          </div>
          <span className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary">
            {dict.cardCta}
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
