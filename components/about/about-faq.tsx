import type { AboutDictionary } from "@/lib/i18n/about-types";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AboutFaq({ dict }: { dict: AboutDictionary }) {
  const t = dict.faq;

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-20 bg-muted/40 py-20 sm:py-28"
    >
      <Container className="mx-auto flex max-w-3xl flex-col gap-12">
        <SectionHeading
          title={t.title}
          description={t.description}
          headingId="faq-heading"
        />
        <Accordion
          className="rounded-2xl bg-card px-6 shadow-sm ring-1 ring-black/5"
          defaultValue={[t.items[0]?.question]}
        >
          {t.items.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
