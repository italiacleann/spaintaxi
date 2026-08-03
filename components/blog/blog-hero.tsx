import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import { localeHome, type Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/container";
import { Breadcrumb } from "@/components/shared/breadcrumb";

export function BlogHero({ dict, locale }: { dict: BlogHubDictionary; locale: Locale }) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--secondary)_0%,_transparent_55%)] opacity-30" />

      <Container className="relative flex flex-col gap-6 py-24 sm:py-28 lg:py-32">
        <Breadcrumb
          variant="dark"
          items={[
            { label: dict.breadcrumb.home, href: localeHome(locale) },
            { label: dict.breadcrumb.current },
          ]}
        />

        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase ring-1 ring-white/20 backdrop-blur-sm">
          {dict.hero.badge}
        </span>
        <h1 className="max-w-3xl text-4xl leading-[1.08] font-bold text-balance text-white sm:text-5xl lg:text-6xl">
          {dict.hero.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-white/85">{dict.hero.description}</p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {dict.hero.highlights.map((highlight) => (
            <span
              key={highlight}
              className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur-sm"
            >
              {highlight}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
