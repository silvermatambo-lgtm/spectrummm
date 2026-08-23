import { ShieldCheck, Hammer, Waves, Headset } from "lucide-react";
import { IMG } from "@/lib/media";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/config/site";

const ICONS = [ShieldCheck, Hammer, Waves, Headset];
const HIGHLIGHTS = siteConfig.about.highlights.map((title, i) => ({ icon: ICONS[i % ICONS.length]!, title }));

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <img
                src={IMG.completedCurved}
                alt={`${siteConfig.name} featured project`}
                className="h-[320px] w-full object-cover sm:h-[440px]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-gradient-aqua px-6 py-4 text-accent-foreground shadow-card sm:block">
              <p className="font-display text-lg font-extrabold">{siteConfig.about.badge}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-xs font-bold tracking-[0.24em] text-accent uppercase">About Us</p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            {siteConfig.about.heading}
          </h2>
          {siteConfig.about.paragraphs.map((paragraph, i) => (
            <p key={paragraph} className={i === 0 ? "mt-5 leading-relaxed text-muted-foreground" : "mt-4 leading-relaxed text-muted-foreground"}>
              {paragraph}
            </p>
          ))}

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal as="li" key={h.title} delay={150 + i * 90}>
                <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-aqua text-accent-foreground">
                    <h.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 text-sm font-semibold text-foreground">{h.title}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
