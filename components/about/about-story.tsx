import Image from "next/image";

import type { AboutDictionary } from "@/lib/i18n/about-types";
import { Container } from "@/components/shared/container";

export function AboutStory({ dict }: { dict: AboutDictionary }) {
  const t = dict.story;

  return (
    <section aria-labelledby="who-we-are-heading" className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-2xl shadow-lg lg:order-1 lg:sticky lg:top-28">
          <Image
            src={t.image}
            alt={t.imageAlt}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
        </div>

        <div className="order-1 flex flex-col gap-12 lg:order-2">
          <div className="flex flex-col gap-4">
            <h2 id="who-we-are-heading" className="text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              {t.whoWeAreTitle}
            </h2>
            <div className="flex flex-col gap-4">
              {t.whoWeAreParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              {t.missionTitle}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">{t.missionText}</p>
            <p className="text-base leading-relaxed text-muted-foreground">{t.visionText}</p>
          </div>

          <ol className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2">
            {t.timeline.map((item) => (
              <li key={item.label} className="flex flex-col gap-1.5">
                <span className="w-fit rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold tracking-wide text-primary uppercase">
                  {item.label}
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
