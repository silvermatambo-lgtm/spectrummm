import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { LOGO, PHONE_TEL, PHONE_DISPLAY } from "@/lib/media";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = siteConfig.nav;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-gradient-navy shadow-card backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="flex min-w-0 items-center" aria-label={`${siteConfig.name} home`}>
          <img
            src={LOGO}
            alt={`${siteConfig.name} logo`}
            className={cn("h-9 w-auto shrink-0 transition-all sm:h-11", !scrolled && "drop-shadow-lg")}
            style={{ filter: "brightness(1.15)" }}
            width={320}
            height={110}
          />
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-primary-foreground/90 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${PHONE_TEL}`}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary-foreground/25 text-primary-foreground transition-colors hover:bg-primary-foreground/15"
          >
            <Phone className="h-4 w-4" />
          </a>

          <Button asChild className="hidden shrink-0 rounded-full bg-gradient-aqua font-semibold text-accent-foreground hover:opacity-90 sm:inline-flex">
            <a href="#quote">Get a Free Quote</a>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary-foreground/25 text-primary-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="bg-gradient-navy px-4 pb-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="grid gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-primary-foreground/90 hover:bg-primary-foreground/10"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full rounded-full bg-gradient-aqua font-semibold text-accent-foreground">
                <a href="#quote" onClick={() => setOpen(false)}>Get a Free Quote</a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
