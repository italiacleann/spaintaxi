import Image from "next/image";
import { ClockIcon } from "lucide-react";

import type { LocalizedBlogPost } from "@/lib/blog/types";
import { formatBlogDate, formatTemplate } from "@/lib/blog/format";
import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import { localeHome, type Locale } from "@/lib/i18n/config";
import { getBlogHubPath } from "@/lib/blog/config";
import { Container } from "@/components/shared/container";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Badge } from "@/components/ui/badge";

export function BlogPostHero({
  post,
  dict,
  locale,
  breadcrumbHome,
}: {
  post: LocalizedBlogPost;
  dict: BlogHubDictionary;
  locale: Locale;
  breadcrumbHome: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        {post.featuredImageUrl ? (
          <Image
            src={post.featuredImageUrl}
            alt={post.featuredImageAlt}
            fill
            priority
            sizes="100vw"
            className="scale-110 object-cover blur-md"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-[#062A3A]" />
      </div>

      <Container className="relative flex flex-col gap-6 py-24 sm:py-28 lg:py-32">
        <Breadcrumb
          variant="dark"
          items={[
            { label: breadcrumbHome, href: localeHome(locale) },
            { label: dict.breadcrumb.current, href: getBlogHubPath(locale) },
            { label: post.title },
          ]}
        />

        <Badge className="w-fit bg-cta text-cta-foreground">{post.categoryLabel}</Badge>
        <h1 className="max-w-3xl text-3xl leading-[1.15] font-bold text-balance text-white sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-white/85">
          <span>
            {dict.directory.byLabel} {post.authorName}
          </span>
          <span aria-hidden>&middot;</span>
          <span>{formatBlogDate(post.publishedAt, locale)}</span>
          <span aria-hidden>&middot;</span>
          <span className="inline-flex items-center gap-1">
            <ClockIcon className="size-3.5" />
            {formatTemplate(dict.directory.minReadTemplate, { minutes: post.readingTimeMinutes })}
          </span>
        </div>
      </Container>
    </section>
  );
}
