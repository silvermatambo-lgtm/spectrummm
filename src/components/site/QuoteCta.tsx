import { Phone, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/lib/media";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/config/site";

export function QuoteCta() {
  return (
    <section id="quote" className="relative overflow-hidden bg-gradient-aqua py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-accent-foreground sm:text-4xl">
            {siteConfig.quoteHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-accent-foreground/90">
            {siteConfig.quoteText}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-navy-deep font-semibold text-primary-foreground hover:bg-navy">
              <a href={`tel:${PHONE_TEL}`}>
                <Phone className="mr-2 h-4 w-4" /> Call {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild size="lg" className="rounded-full bg-navy-deep/10 font-semibold text-accent-foreground ring-1 ring-accent-foreground/40 hover:bg-navy-deep/20">
              <a
                href={waLink(`Hello ${siteConfig.name}. I would like to request a quotation.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
              </a>
            </Button>
            <Button asChild size="lg" className="rounded-full bg-navy-deep/10 font-semibold text-accent-foreground ring-1 ring-accent-foreground/40 hover:bg-navy-deep/20">
              <a href="#contact">
                <FileText className="mr-2 h-4 w-4" /> Request a Free Quote
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
