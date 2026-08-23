import { Phone, Mail, Globe, Facebook, Instagram } from "lucide-react";
import { EMAIL, LOGO, PHONE_DISPLAY, PHONE_TEL, SITE } from "@/lib/media";
import { siteConfig } from "@/config/site";

const LINKS = siteConfig.nav.filter((item) => item.href !== "#why-us");

const SERVICES = siteConfig.services.map((service) => service.title);

export function Footer() {
  return (
    <footer className="bg-gradient-navy pt-16 pb-28 text-primary-foreground/80 lg:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <img src={LOGO} alt={`${siteConfig.name} logo`} className="h-12 w-auto" loading="lazy" />
            <p className="mt-4 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex gap-3">
              <span
                aria-label="Facebook page coming soon"
                className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground/70"
              >
                <Facebook className="h-4 w-4" />
              </span>
              <span
                aria-label="Instagram page coming soon"
                className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground/70"
              >
                <Instagram className="h-4 w-4" />
              </span>
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-sm font-bold tracking-wide text-primary-foreground uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 grid gap-2 text-sm">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-cyan">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold tracking-wide text-primary-foreground uppercase">
              Services
            </h3>
            <ul className="mt-4 grid gap-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#services" className="transition-colors hover:text-cyan">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide text-primary-foreground uppercase">
              Contact
            </h3>
            <ul className="mt-4 grid gap-3 text-sm">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-cyan">
                  <Phone className="h-4 w-4 shrink-0" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex min-w-0 items-center gap-2 hover:text-cyan">
                  <Mail className="h-4 w-4 shrink-0" /> <span className="truncate">{EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://${SITE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 items-center gap-2 hover:text-cyan"
                >
                  <Globe className="h-4 w-4 shrink-0" /> <span className="truncate">{SITE}</span>
                </a>
              </li>
            </ul>
            <ul className="mt-5 grid gap-2 text-xs">
              <li>
                <a href="#privacy" className="hover:text-cyan">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-cyan">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-3 border-t border-primary-foreground/15 pt-6 text-xs sm:flex sm:items-center sm:justify-between">
          <p>© {siteConfig.footer.copyrightYear} {siteConfig.name}. All Rights Reserved.</p>
          <p className="sm:text-right">
            Website designed by{" "}
            <a
              href={siteConfig.footer.designerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan hover:underline"
            >
              {siteConfig.footer.designerName}
            </a>{" "}
            |{" "}
            <a href={`tel:${siteConfig.footer.designerPhoneTel}`} className="font-semibold text-cyan hover:underline">
              {siteConfig.footer.designerPhoneDisplay}
            </a>
          </p>
        </div>

        <div id="privacy" className="mt-10 grid gap-6 text-xs leading-relaxed text-primary-foreground/60 sm:grid-cols-2">
          <div>
            <h4 className="font-bold text-primary-foreground/80">Privacy Policy</h4>
            <p className="mt-2">
              {siteConfig.footer.privacy}
            </p>
          </div>
          <div id="terms">
            <h4 className="font-bold text-primary-foreground/80">Terms and Conditions</h4>
            <p className="mt-2">
              {siteConfig.footer.terms}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
