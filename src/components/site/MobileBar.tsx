import { Home, Wrench, Images, Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { PHONE_TEL, waLink } from "@/lib/media";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const ITEMS = [
  { label: "Home", href: "#home", icon: Home, id: "home" },
  { label: "Services", href: "#services", icon: Wrench, id: "services" },
  { label: "Projects", href: "#projects", icon: Images, id: "projects" },
];

export function MobileBar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ITEMS.map((i) => i.id);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const cls = (on: boolean) =>
    cn(
      "flex min-w-0 flex-col items-center gap-1 py-2 text-[11px] font-semibold transition-colors",
      on ? "text-cyan" : "text-primary-foreground/70",
    );

  return (
    <nav
      aria-label="Mobile quick navigation"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-primary-foreground/10 bg-gradient-navy pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {ITEMS.map((i) => (
          <li key={i.id}>
            <a href={i.href} className={cls(active === i.id)}>
              <i.icon className="h-5 w-5" />
              {i.label}
            </a>
          </li>
        ))}
        <li>
          <a href={`tel:${PHONE_TEL}`} className={cls(false)}>
            <Phone className="h-5 w-5" />
            Call
          </a>
        </li>
        <li>
          <a
            href={waLink(`Hello ${siteConfig.name}. I would like to enquire about your services.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={cls(false)}
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </li>
      </ul>
    </nav>
  );
}
