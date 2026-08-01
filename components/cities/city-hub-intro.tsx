import type { CityHubDictionary } from "@/lib/cities/hub-types";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function CityHubIntro({ dict }: { dict: CityHubDictionary["intro"] }) {
  return (
    <section aria-labelledby="intro-heading" className="py-20 sm:py-24">
      <Container className="mx-auto flex max-w-3xl flex-col gap-8">
        <SectionHeading title={dict.title} headingId="intro-heading" />
        <div className="flex flex-col gap-4">
          {dict.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
