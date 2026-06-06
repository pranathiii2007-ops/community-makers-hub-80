import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useLang, type Lang } from "@/lib/i18n";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Choose Your Language — Community Makers' Market" },
      { name: "description", content: "Select your preferred language to enter the Community Makers' Market." },
    ],
  }),
  component: LanguageSelect,
});

function LanguageSelect() {
  const { setLang, tr } = useLang();
  const navigate = useNavigate();
  const [picked, setPicked] = useState<Lang | null>(null);

  const choose = (l: Lang) => {
    setPicked(l);
    setLang(l);
  };

  const cont = () => {
    if (picked) navigate({ to: "/home" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-sunrise">
      <div className="absolute inset-0 grain opacity-60" />
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-mustard/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-terracotta/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          {tr.lang.chip}
        </div>

        <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.05] text-balance text-foreground sm:text-6xl">
          {tr.lang.title}
        </h1>
        <p className="mt-4 max-w-md text-base text-foreground/70">
          {tr.lang.subtitle}
        </p>

        <div className="mt-12 grid w-full max-w-xl gap-4 sm:grid-cols-2">
          {([
            { code: "en" as Lang, big: "English", small: tr.lang.enSub },
            { code: "te" as Lang, big: "తెలుగు", small: tr.lang.teSub },
          ]).map((opt) => {
            const active = picked === opt.code;
            return (
              <button
                key={opt.code}
                onClick={() => choose(opt.code)}
                className={`group relative overflow-hidden rounded-3xl border-2 p-6 text-left transition-all ${
                  active
                    ? "border-primary bg-card shadow-warm -translate-y-1"
                    : "border-foreground/10 bg-card/70 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="font-display text-3xl font-semibold text-foreground">{opt.big}</div>
                  <div className={`grid h-7 w-7 place-items-center rounded-full border-2 transition ${active ? "border-primary bg-primary text-primary-foreground" : "border-foreground/20"}`}>
                    {active && <Check className="h-4 w-4" />}
                  </div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{opt.small}</div>
                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-warm transition-transform origin-left ${active ? "scale-x-100" : "scale-x-0"}`} />
              </button>
            );
          })}
        </div>

        <button
          onClick={cont}
          disabled={!picked}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-warm transition hover:gap-3 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {tr.lang.continue}
          <ArrowRight className="h-4 w-4" />
        </button>

        <p className="mt-8 text-xs text-foreground/50">{tr.lang.changeNote}</p>
      </div>
    </div>
  );
}
