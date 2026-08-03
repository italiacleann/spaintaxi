import type { LocalizedBlogPost } from "@/lib/blog/types";
import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function BlogAuthorBox({
  post,
  dict,
}: {
  post: LocalizedBlogPost;
  dict: BlogHubDictionary["post"];
}) {
  const initials = post.authorName
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-black/5">
      <Avatar size="lg">
        {post.authorAvatarUrl ? <AvatarImage src={post.authorAvatarUrl} alt={post.authorName} /> : null}
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{dict.authorLabel}</span>
        <span className="font-heading text-base font-semibold text-foreground">{post.authorName}</span>
        {post.authorTitle ? <span className="text-sm text-primary">{post.authorTitle}</span> : null}
        {post.authorBio ? <p className="text-sm leading-relaxed text-muted-foreground">{post.authorBio}</p> : null}
      </div>
    </div>
  );
}
