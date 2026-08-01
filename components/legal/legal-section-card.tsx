import { CheckIcon } from "lucide-react";

import type { LegalSection } from "@/lib/i18n/legal-types";

export function LegalSectionCard({ section }: { section: LegalSection }) {
  return (
    <article
      id={section.id}
      className="scroll-mt-28 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-black/5 sm:p-8"
    >
      <h2 className="font-heading text-2xl font-semibold text-balance text-foreground">
        {section.title}
      </h2>
      <div className="mt-4 flex flex-col gap-4">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
      {section.bullets ? (
        <ul className="mt-4 flex flex-col gap-2.5">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-sm text-foreground">
              <CheckIcon className="mt-0.5 size-4 shrink-0 text-secondary" />
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
