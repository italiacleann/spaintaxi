import type { LocalizedBlogPost } from "@/lib/blog/types";
import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import type { Locale } from "@/lib/i18n/config";
import { BlogPostCard } from "@/components/blog/blog-post-card";

export function BlogRelatedPosts({
  posts,
  dict,
  locale,
  title,
}: {
  posts: LocalizedBlogPost[];
  dict: BlogHubDictionary["directory"];
  locale: Locale;
  title: string;
}) {
  if (posts.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-2xl font-semibold text-foreground">{title}</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} locale={locale} dict={dict} />
        ))}
      </div>
    </div>
  );
}
