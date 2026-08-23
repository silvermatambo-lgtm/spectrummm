import { useState } from "react";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE, waLink } from "@/lib/media";
import { siteConfig } from "@/config/site";
import { Reveal } from "./Reveal";

const SERVICES = siteConfig.contactServices;

export function Contact() {
  const [consent, setConsent] = useState(false);
  const [photoName, setPhotoName] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const message =
      `Hello ${siteConfig.name}. My name is ${get("name") || "-"}. ` +
      `I am located in ${get("location") || "-"}. ` +
      `I need assistance with ${get("service") || "-"}. ` +
      `Details: ${get("message") || "-"}.\n` +
      `Phone: ${get("phone") || "-"} | Email: ${get("email") || "-"} | ` +
      `Preferred contact: ${get("contactMethod") || "-"}` +
      (photoName ? `\nI have a pool photo to send: ${photoName}` : "");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-secondary/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.24em] text-accent uppercase">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground">
            Send your details and we will continue the conversation on WhatsApp.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Reveal>
            <div className="grid gap-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="card-lift flex min-w-0 items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-aqua text-accent-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Phone and WhatsApp
                  </span>
                  <span className="block truncate font-bold text-foreground">{PHONE_DISPLAY}</span>
                </span>
              </a>

              <a
                href={waLink(`Hello ${siteConfig.name}. I would like to enquire about your services.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift flex min-w-0 items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-aqua text-accent-foreground">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    WhatsApp
                  </span>
                  <span className="block truncate font-bold text-foreground">Chat with us</span>
                </span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="card-lift flex min-w-0 items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-aqua text-accent-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Email
                  </span>
                  <span className="block truncate font-bold text-foreground">{EMAIL}</span>
                </span>
              </a>

              <a
                href={`https://${SITE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift flex min-w-0 items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-aqua text-accent-foreground">
                  <Globe className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Website
                  </span>
                  <span className="block truncate font-bold text-foreground">{SITE}</span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" required autoComplete="name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="service">Service Required</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <option>WhatsApp</option>
                    <option>Phone Call</option>
                    <option>Email</option>
                  </select>
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={4} />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="photo">Supporting Image (optional)</Label>
                  <Input
                    id="photo"
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPhotoName(e.target.files?.[0]?.name ?? null)}
                    className="file:mr-3 file:rounded-full file:border-0 file:bg-secondary file:px-3 file:py-1 file:text-xs file:font-semibold"
                  />
                  <p className="text-xs text-muted-foreground">
                    Images are not uploaded from this form — attach them in the WhatsApp chat that
                    opens.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(v) => setConsent(v === true)}
                  required
                />
                <Label htmlFor="consent" className="text-sm leading-relaxed font-normal text-muted-foreground">
                  I consent to {siteConfig.name} contacting me about my enquiry.
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={!consent}
                className="mt-6 w-full rounded-full bg-gradient-aqua font-semibold text-accent-foreground hover:opacity-90"
              >
                Send via WhatsApp
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                This form opens WhatsApp with your details ready to send. Nothing is submitted or
                confirmed automatically.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
