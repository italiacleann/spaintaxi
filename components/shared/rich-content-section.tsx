import { processContentHtml } from "@/lib/shared/html-content";
import { Container } from "@/components/shared/container";
import { ProseContent } from "@/components/shared/prose-content";

/** Hand-written long-form section on an otherwise templated city or airport page. */
export function RichContentSection({ content }: { content?: { title: string; html: string } }) {
  if (!content) return null;
  const { html } = processContentHtml(content.html);
  if (!html) return null;

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-6">
        <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">{content.title}</h2>
        <ProseContent html={html} />
      </Container>
    </section>
  );
}
