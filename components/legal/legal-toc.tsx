"use client";

import { useEffect, useState } from "react";

import type { LegalSection } from "@/lib/i18n/legal-types";
import { cn } from "@/lib/utils";

export function LegalToc({
  title,
  sections,
}: {
  title: string;
  sections: LegalSection[];
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(topMost.target.id);
        }
      },
      { rootMargin: "-112px 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label={title} className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-black/5">
      <h2 className="font-heading text-sm font-semibold tracking-wide text-foreground uppercase">
        {title}
      </h2>
      <ul className="mt-4 flex max-h-[65vh] flex-col gap-0.5 overflow-y-auto pr-1">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                "block rounded-md px-2.5 py-1.5 text-sm transition-colors",
                activeId === section.id
                  ? "bg-accent font-medium text-primary"
                  : "text-muted-foreground hover:bg-accent/60 hover:text-primary"
              )}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
