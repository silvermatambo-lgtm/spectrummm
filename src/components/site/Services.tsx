import { ShieldCheck, HeartHandshake, BadgeDollarSign, Crown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { waLink } from "@/lib/media";
import { siteConfig } from "@/config/site";

const ICONS = [ShieldCheck, HeartHandshake, BadgeDollarSign, Crown];
const SERVICES = siteConfig.services.map((service, i) => ({ ...service, icon: ICONS[i % ICONS.length]! }));

export function Services() {
  return (
    <section id="services" className="bg-secondary/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.24em] text-accent uppercase">Our Services</p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            {siteConfig.servicesHeading}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {siteConfig.servicesIntro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal as="article" key={s.title} delay={i * 110}>
              <div className="card-lift flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-card">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-aqua text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-5 grid gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex min-w-0 items-start gap-2 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="min-w-0">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 pt-1">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-accent/40 font-semibold text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <a
                      href={waLink(
                        `Hello ${siteConfig.name}. I would like to enquire about: ${s.title}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
