import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FaqAccordion({
  items,
  title,
}: {
  items: { question: string; answer: string }[];
  title: string;
}) {
  if (items.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-2xl font-semibold text-foreground">{title}</h2>
      <Accordion className="rounded-2xl bg-card px-6 shadow-sm ring-1 ring-black/5" defaultValue={[items[0]?.question]}>
        {items.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger className="text-base">{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
