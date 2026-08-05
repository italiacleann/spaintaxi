"use client";

import { useEffect, useState } from "react";

import type { TocEntry } from "@/lib/shared/html-content";
import { cn } from "@/lib/utils";

export function BlogToc({ toc, title }: { toc: TocEntry[]; title: string }) {
  const [activeId, setActiveId] = useState<string | null>(toc[0]?.id ?? null);

  useEffect(() => {
    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-96px 0px -70% 0px" }
    );

    for (const entry of toc) {
      const element = document.getElementById(entry.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <nav aria-label={title} className="sticky top-24 flex max-h-[calc(100vh-8rem)] flex-col gap-3 overflow-y-auto">
      <span className="font-heading text-sm font-semibold text-foreground">{title}</span>
      <ul className="flex flex-col gap-1 border-l border-border">
        {toc.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className={cn(
                "block border-l-2 py-1 text-sm transition-colors",
                entry.level === 3 ? "pl-7" : "pl-3.5",
                activeId === entry.id
                  ? "border-primary font-medium text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
