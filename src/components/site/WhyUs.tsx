import { Waves, Hammer, Wrench, HardHat, Sparkles, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/config/site";

const ICONS = [Waves, Hammer, Wrench, HardHat, Sparkles, MessageCircle];
const POINTS = siteConfig.whyUs.map((point, i) => ({ ...point, icon: ICONS[i % ICONS.length]! }));

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-gradient-navy py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.24em] text-cyan uppercase">Why Choose Us</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            {siteConfig.whyHeading}
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 90}>
              <div className="card-lift h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-aqua text-accent-foreground">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-primary-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
