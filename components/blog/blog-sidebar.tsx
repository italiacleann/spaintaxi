import Image from "next/image";
import Link from "next/link";

import type { LocalizedBlogPost } from "@/lib/blog/types";
import { getBlogPostPath } from "@/lib/blog/queries";
import { formatBlogDate } from "@/lib/blog/format";
import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import type { Locale } from "@/lib/i18n/config";
import { BlogNewsletterForm } from "@/components/blog/blog-newsletter-form";

export function BlogSidebar({
  popularPosts,
  dict,
  locale,
}: {
  popularPosts: LocalizedBlogPost[];
  dict: BlogHubDictionary["sidebar"];
  locale: Locale;
}) {
  return (
    <aside className="flex flex-col gap-8">
      {popularPosts.length > 0 ? (
        <div className="flex flex-col gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-black/5">
          <h3 className="font-heading text-lg font-semibold text-foreground">{dict.popularTitle}</h3>
          <ul className="flex flex-col gap-4">
            {popularPosts.map((post) => (
              <li key={post.id}>
                <Link href={getBlogPostPath(locale, post.slug)} className="group flex items-center gap-3">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-lg">
                    {post.featuredImageUrl ? (
                      <Image
                        src={post.featuredImageUrl}
                        alt={post.featuredImageAlt}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="line-clamp-2 text-sm font-medium text-foreground group-hover:text-primary">
                      {post.title}
                    </span>
                    <span className="text-xs text-muted-foreground">{formatBlogDate(post.publishedAt, locale)}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="flex flex-col gap-4 rounded-2xl bg-accent p-6 ring-1 ring-black/5">
        <h3 className="font-heading text-lg font-semibold text-foreground">{dict.newsletterTitle}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{dict.newsletterDescription}</p>
        <BlogNewsletterForm dict={dict} locale={locale} />
      </div>
    </aside>
  );
}
