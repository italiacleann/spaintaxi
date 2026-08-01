import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 py-20 sm:py-28">
      <Container className="mx-auto flex max-w-3xl flex-col gap-12">
        <SectionHeading
          eyebrow={dict.faqSection.eyebrow}
          title={dict.faqSection.title}
          description={dict.faqSection.description}
        />
        <Accordion
          className="rounded-2xl bg-card px-6 shadow-sm ring-1 ring-black/5"
          defaultValue={[dict.faqs[0]?.question]}
        >
          {dict.faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
