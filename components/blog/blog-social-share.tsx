"use client";

import { useState } from "react";
import { LinkIcon, CheckIcon } from "lucide-react";

import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import { WhatsAppGlyph } from "@/components/shared/social-icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const shareButtonClass = cn(buttonVariants({ variant: "outline", size: "icon" }));

export function BlogSocialShare({
  url,
  title,
  dict,
}: {
  url: string;
  title: string;
  dict: BlogHubDictionary["post"];
}) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; silently ignore.
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-medium text-muted-foreground">{dict.shareTitle}</span>
      <div className="flex flex-wrap items-center gap-2">
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={dict.shareWhatsapp}
          className={shareButtonClass}
        >
          <WhatsAppGlyph className="size-4" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={dict.shareFacebook}
          className={shareButtonClass}
        >
          <span className="text-xs font-bold">f</span>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={dict.shareX}
          className={shareButtonClass}
        >
          <span className="text-xs font-bold">X</span>
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={dict.shareLinkedin}
          className={shareButtonClass}
        >
          <span className="text-xs font-bold">in</span>
        </a>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? dict.shareCopied : dict.shareCopy}
          className={shareButtonClass}
        >
          {copied ? <CheckIcon className="size-4" /> : <LinkIcon className="size-4" />}
        </button>
      </div>
    </div>
  );
}
