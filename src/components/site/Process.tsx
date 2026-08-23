import { PhoneCall, ClipboardList, FileText, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/config/site";

const ICONS = [PhoneCall, ClipboardList, FileText, Wrench];
const STEPS = siteConfig.process.map((step, i) => ({ ...step, icon: ICONS[i % ICONS.length]! }));

export function Process() {
  return (
    <section id="process" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.24em] text-accent uppercase">Project Process</p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">How We Work</h2>
        </Reveal>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 140}>
              <div className="card-lift relative h-full rounded-3xl border border-border bg-card p-7 shadow-card">
                <span className="absolute top-5 right-6 font-display text-4xl font-black text-accent/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-aqua text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
