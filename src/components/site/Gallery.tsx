import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { PHOTOS, type GalleryCategory } from "@/lib/media";
import { siteConfig } from "@/config/site";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const CATEGORIES: (GalleryCategory | "All")[] = ["All", ...siteConfig.galleryCategories];

export function Gallery() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const items = PHOTOS.filter((p) => filter === "All" || p.category === filter);

  const step = useCallback(
    (dir: number) =>
      setLightbox((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, step]);

  const active = lightbox !== null ? items[lightbox] : null;

  return (
    <section id="projects" className="bg-secondary/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.24em] text-accent uppercase">Our Work</p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">{siteConfig.galleryHeading}</h2>
          <p className="mt-4 text-muted-foreground">
            {siteConfig.galleryIntro}
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setFilter(c);
                setLightbox(null);
              }}
              aria-pressed={filter === c}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                filter === c
                  ? "border-transparent bg-gradient-aqua text-accent-foreground shadow-card"
                  : "border-border bg-card text-foreground/80 hover:border-accent/50 hover:text-accent",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.url} delay={(i % 3) * 100}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                aria-label={`Open image: ${p.alt}`}
              >
                <img
                  src={p.url}
                  alt={p.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundImage: "var(--gradient-aqua)", mixBlendMode: "multiply" }}
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-navy-deep/90 to-transparent p-4 text-left">
                  <span className="min-w-0 truncate text-sm font-semibold text-primary-foreground">
                    {p.category}
                  </span>
                  <ZoomIn className="h-5 w-5 shrink-0 text-primary-foreground" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
          className="fixed inset-0 z-[80] grid place-items-center bg-navy-deep/95 p-4"
          onClick={() => setLightbox(null)}
          onTouchStart={(e) => {
            touchX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            const start = touchX.current;
            const end = e.changedTouches[0]?.clientX ?? null;
            if (start != null && end != null && Math.abs(end - start) > 50) step(end < start ? 1 : -1);
            touchX.current = null;
          }}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close viewer"
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <figure className="max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.url}
              alt={active.alt}
              className="max-h-[75vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-primary-foreground/80">
              {active.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
