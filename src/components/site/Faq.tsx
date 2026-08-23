import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";
import { Reveal } from "./Reveal";

export const FAQS = [...siteConfig.faqs];

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.24em] text-accent uppercase">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <Accordion type="single" collapsible className="grid gap-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-5 shadow-card"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
