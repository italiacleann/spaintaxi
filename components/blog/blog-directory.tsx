"use client";

import { useMemo, useState } from "react";
import { SearchIcon } from "lucide-react";

import type { LocalizedBlogPost } from "@/lib/blog/types";
import type { BlogCategory } from "@/lib/blog/queries";
import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BlogPostCard } from "@/components/blog/blog-post-card";

export function BlogDirectory({
  posts,
  categories,
  dict,
  locale,
}: {
  posts: LocalizedBlogPost[];
  categories: BlogCategory[];
  dict: BlogHubDictionary["directory"];
  locale: Locale;
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const normalized = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      if (activeCategory && post.category !== activeCategory) return false;
      if (!normalized) return true;
      const haystack = `${post.title} ${post.excerpt} ${post.tags.join(" ")}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [posts, activeCategory, normalized]);

  return (
    <div id="directory" className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <div className="relative mx-auto w-full max-w-md">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            aria-label={dict.searchLabel}
            placeholder={dict.searchPlaceholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-11 rounded-full pl-9"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className="focus-visible:outline-none"
          >
            <Badge
              variant={activeCategory === null ? "default" : "outline"}
              className={cn("cursor-pointer px-3.5 py-1.5 text-xs font-medium")}
            >
              {dict.allCategoriesLabel}
            </Badge>
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => setActiveCategory(category.slug)}
              className="focus-visible:outline-none"
            >
              <Badge
                variant={activeCategory === category.slug ? "default" : "outline"}
                className="cursor-pointer px-3.5 py-1.5 text-xs font-medium"
              >
                {category.label}
              </Badge>
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          {dict.resultsCountTemplate.replace("{count}", String(filtered.length))}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-base text-muted-foreground">{dict.emptyMessage}</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogPostCard key={post.id} post={post} locale={locale} dict={dict} />
          ))}
        </div>
      )}
    </div>
  );
}
