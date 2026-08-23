import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_TEL, waLink } from "@/lib/media";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface Slide {
  image: string;
  alt: string;
  heading: string;
  phrases: string[];
  description: string;
  actions: { label: string; href: string; variant: "aqua" | "ghost" }[];
}

const SLIDES: Slide[] = siteConfig.hero.map((slide) => ({
  ...slide,
  actions: [
    { label: slide.primary.label, href: slide.primary.href, variant: "aqua" as const },
    {
      label: slide.secondary.label,
      href:
        slide.secondary.href === "whatsapp"
          ? waLink(`Hello ${siteConfig.name}. I would like to enquire.`)
          : slide.secondary.href.replace(siteConfig.phoneTel, PHONE_TEL),
      variant: "ghost" as const,
    },
  ],
}));

function useTypewriter(phrases: string[], active: boolean) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setText("");
    setIndex(0);
    setDeleting(false);
  }, [phrases]);

  useEffect(() => {
    if (!active) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setText(phrases[index % phrases.length] ?? "");
      return;
    }
    const current = phrases[index % phrases.length] ?? "";
    const done = !deleting && text === current;
    const cleared = deleting && text === "";
    const delay = done ? 1400 : cleared ? 200 : deleting ? 35 : 65;

    const t = setTimeout(() => {
      if (done) setDeleting(true);
      else if (cleared) {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, active]);

  return text;
}

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const slide = SLIDES[current]!;
  const typed = useTypewriter(slide.phrases, true);

  const go = useCallback((dir: number) => {
    setCurrent((c) => (c + dir + SLIDES.length) % SLIDES.length);
    setPaused(true);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setCurrent((c) => (c + 1) % SLIDES.length), 7000);
    return () => clearTimeout(t);
  }, [current, paused]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden bg-navy-deep"
      aria-label={`${siteConfig.name} highlights`}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        const end = e.changedTouches[0]?.clientX ?? null;
        if (start != null && end != null && Math.abs(end - start) > 50) go(end < start ? 1 : -1);
        touchX.current = null;
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.image}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            i === current ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={i !== current}
        >
          <img
            src={s.image}
            alt={s.alt}
            className={cn("h-full w-full object-cover", i === current && "animate-kenburns")}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
          />
          <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />
        </div>
      ))}

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 pt-28 pb-32 sm:px-6">
        <div key={current} className="max-w-2xl">
          <p
            className="animate-rise text-xs font-bold tracking-[0.28em] text-cyan uppercase"
            style={{ animationDelay: "60ms" }}
          >
            {siteConfig.eyebrow}
          </p>
          <h1
            className="animate-rise mt-4 text-4xl leading-[1.05] font-extrabold text-primary-foreground sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "160ms" }}
          >
            {slide.heading}
          </h1>
          <p
            className="animate-rise mt-4 min-h-[2.2em] text-lg font-semibold text-cyan sm:text-2xl"
            style={{ animationDelay: "260ms" }}
            aria-live="polite"
          >
            {typed}
            <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-cyan align-middle" style={{ height: "1em" }} />
          </p>
          <p
            className="animate-rise mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg"
            style={{ animationDelay: "360ms" }}
          >
            {slide.description}
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "460ms" }}>
            {slide.actions.map((a) => (
              <Button
                key={a.label}
                asChild
                size="lg"
                className={cn(
                  "rounded-full font-semibold",
                  a.variant === "aqua"
                    ? "bg-gradient-aqua text-accent-foreground hover:opacity-90"
                    : "border border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur hover:bg-primary-foreground/20",
                )}
              >
                <a href={a.href}>{a.label}</a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute top-1/2 left-3 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-primary-foreground/30 bg-navy-deep/40 text-primary-foreground backdrop-blur transition hover:bg-navy-deep/70 sm:grid"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute top-1/2 right-3 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-primary-foreground/30 bg-navy-deep/40 text-primary-foreground backdrop-blur transition hover:bg-navy-deep/70 sm:grid"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-16">
        {SLIDES.map((s, i) => (
          <button
            key={s.heading}
            type="button"
            onClick={() => {
              setCurrent(i);
              setPaused(true);
            }}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === current ? "w-8 bg-gradient-aqua" : "w-2.5 bg-primary-foreground/45 hover:bg-primary-foreground/70",
            )}
          />
        ))}
      </div>

      <svg
        className="absolute inset-x-0 bottom-0 z-10 h-12 w-full text-background sm:h-16"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,40 C240,90 480,0 720,32 C960,64 1200,88 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}
