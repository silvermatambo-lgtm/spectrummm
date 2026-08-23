import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { waLink } from "@/lib/media";
import { siteConfig } from "@/config/site";

type Msg = { from: "bot" | "user"; text: string };

const QUICK = siteConfig.chat.quick;

const STEPS = siteConfig.chat.steps;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [data, setData] = useState({ service: "", name: "", location: "", details: "", photo: "" });
  const [messages, setMessages] = useState<Msg[]>([{ from: "bot", text: STEPS[0] }]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setTeaser(true), 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "nearest" });
  }, [messages, open]);

  const push = (m: Msg) => setMessages((prev) => [...prev, m]);

  const advance = (value: string) => {
    push({ from: "user", text: value });
    const next = step + 1;
    const keys = ["service", "name", "location", "details", "photo"] as const;
    const updated = { ...data, [keys[step]!]: value };
    setData(updated);

    if (next < STEPS.length) {
      setStep(next);
      setTimeout(() => push({ from: "bot", text: STEPS[next]! }), 350);
    } else {
      setStep(next);
      setTimeout(
        () =>
          push({
            from: "bot",
            text: "Thank you. Your message is ready — tap the button below to send it on WhatsApp. Nothing is booked or confirmed until our team replies.",
          }),
        350,
      );
    }
  };

  const finalMessage =
    `Hello ${siteConfig.name}. My name is ${data.name || "-"}. ` +
    `I am located in ${data.location || "-"}. ` +
    `I need assistance with ${data.service || "-"}. ` +
    `Details: ${data.details || "-"}.` +
    (data.photo.toLowerCase().startsWith("y") ? " I would also like to send a photo of my pool." : "");

  const done = step >= STEPS.length;

  return (
    <div className="fixed right-4 bottom-20 z-[70] flex flex-col items-end gap-3 lg:bottom-6">
      {!open && teaser && (
        <div className="animate-rise max-w-[15rem] rounded-2xl rounded-br-sm border border-border bg-card p-3 text-sm text-foreground shadow-card">
          {siteConfig.chat.steps[0]}
        </div>
      )}

      {open && (
        <div className="flex h-[26rem] w-[min(21rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          <div className="flex items-center justify-between gap-3 bg-gradient-navy px-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-primary-foreground">{siteConfig.name}</p>
              <p className="truncate text-xs text-cyan">{siteConfig.chat.assistantLabel}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-primary-foreground hover:bg-primary-foreground/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-secondary/40 p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.from === "bot"
                    ? "max-w-[85%] rounded-2xl rounded-bl-sm bg-card p-3 text-sm text-foreground shadow-card"
                    : "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-gradient-aqua p-3 text-sm text-accent-foreground"
                }
              >
                {m.text}
              </div>
            ))}

            {step === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => advance(q)}
                    className="rounded-full border border-accent/40 bg-card px-3 py-1.5 text-xs font-semibold text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {done && (
              <Button
                asChild
                className="w-full rounded-full bg-gradient-aqua font-semibold text-accent-foreground"
              >
                <a href={waLink(finalMessage)} target="_blank" rel="noopener noreferrer">
                  Send on WhatsApp
                </a>
              </Button>
            )}
            <div ref={endRef} />
          </div>

          {step > 0 && !done && (
            <form
              className="flex items-center gap-2 border-t border-border bg-card p-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (!input.trim()) return;
                advance(input.trim());
                setInput("");
              }}
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your answer..."
                aria-label="Your answer"
                className="rounded-full"
              />
              <Button
                type="submit"
                size="icon"
                aria-label="Send"
                className="shrink-0 rounded-full bg-gradient-aqua text-accent-foreground"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v);
          setTeaser(false);
        }}
        aria-label={open ? `Close ${siteConfig.chat.assistantLabel}` : `Open ${siteConfig.chat.assistantLabel}`}
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-aqua text-accent-foreground shadow-card transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
