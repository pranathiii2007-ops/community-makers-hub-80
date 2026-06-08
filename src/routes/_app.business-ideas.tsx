import { createFileRoute } from "@tanstack/react-router";
import { Flame, Salad, Gem, Scissors, Gift, Sprout, Palette, Heart, ArrowRight, IndianRupee, Gauge, TrendingUp, CheckCircle2, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import type { Idea } from "@/lib/translations";

const ICONS = [Flame, Salad, Gem, Scissors, Gift, Sprout, Palette, Heart];

export const Route = createFileRoute("/_app/business-ideas")({
  head: () => ({
    meta: [
      { title: "Business Ideas — Community Makers' Market" },
      { name: "description", content: "Browse low-cost, home-based business ideas curated for homemakers, students and local creators." },
      { property: "og:title", content: "Business Ideas — Community Makers' Market" },
      { property: "og:description", content: "Realistic, low-cost ideas you can start from home." },
    ],
  }),
  component: BusinessIdeasPage,
});

function levelBadge(l: Idea["level"]) {
  const map: Record<Idea["level"], string> = {
    Beginner: "bg-sage/15 text-sage",
    Intermediate: "bg-mustard/20 text-foreground",
    Advanced: "bg-terracotta/15 text-terracotta",
  };
  return map[l];
}

function BusinessIdeasPage() {
  const { tr } = useLang();
  const [active, setActive] = useState<Idea | null>(null);
  const cats: Array<"starter" | "under100" | "under200"> = ["starter", "under100", "under200"];
  const grouped = cats.map((c) => ({
    key: c,
    label: tr.common.categories[c],
    items: tr.ideas.list.filter((i) => (i.category ?? "starter") === c),
  }));
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-sunrise/70">
        <div className="absolute inset-0 grain opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{tr.ideas.kicker}</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight text-balance sm:text-6xl">
            {tr.ideas.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            {tr.ideas.desc}
          </p>
        </div>
      </section>

      <section className="py-16 space-y-16">
        {grouped.map((g) => (
          <div key={g.key} className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-3xl font-semibold mb-6">{g.label}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {g.items.map((idea, i) => {
                const Icon = ICONS[i % ICONS.length] ?? Flame;
                return (
                  <article key={idea.slug} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-warm">
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-warm text-primary-foreground shadow-soft transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${levelBadge(idea.level)}`}>{idea.levelLabel}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold leading-tight">{idea.name}</h3>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{idea.tag}</div>
                <dl className="mt-5 space-y-2.5 text-sm">
                  <div className="flex items-center justify-between gap-2 border-t border-dashed border-border pt-2.5">
                    <dt className="flex items-center gap-1.5 text-muted-foreground"><IndianRupee className="h-3.5 w-3.5" /> {tr.common.startup}</dt>
                    <dd className="font-semibold">{idea.cost}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt className="flex items-center gap-1.5 text-muted-foreground"><Gauge className="h-3.5 w-3.5" /> {tr.common.skill}</dt>
                    <dd className="font-semibold">{idea.levelLabel}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt className="flex items-center gap-1.5 text-muted-foreground"><TrendingUp className="h-3.5 w-3.5" /> {tr.common.earnings}</dt>
                    <dd className="font-semibold text-primary">{idea.earn}</dd>
                  </div>
                </dl>
                <button onClick={() => setActive(idea)} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:gap-2.5 transition-all">
                  {tr.common.learnMore} <ArrowRight className="h-4 w-4" />
                </button>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <FeaturedGuide />
      {active && <IdeaModal idea={active} onClose={() => setActive(null)} />}
    </>
  );
}

function IdeaModal({ idea, onClose }: { idea: Idea; onClose: () => void }) {
  const { tr } = useLang();
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-card shadow-warm">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-card/95 p-6 backdrop-blur">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{idea.tag}</div>
            <h2 className="mt-1 font-display text-2xl font-semibold leading-tight">{idea.name}</h2>
          </div>
          <button onClick={onClose} aria-label={tr.common.close} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-background hover:bg-secondary">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-6 p-6">
          <p className="text-foreground/85">{idea.description}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            <Stat label={tr.common.startup} value={idea.cost} />
            <Stat label={tr.common.skill} value={idea.levelLabel} />
            <Stat label={tr.common.earnings} value={idea.earn} accent />
          </div>
          <Section title={tr.common.materials}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {idea.materials.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sage" /> {m}</li>
              ))}
            </ul>
          </Section>
          <Section title={tr.common.steps}>
            <ol className="space-y-2.5">
              {idea.steps.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-warm text-xs font-bold text-primary-foreground">{i + 1}</span>
                  <span className="text-foreground/85">{s}</span>
                </li>
              ))}
            </ol>
          </Section>
          <Section title={tr.common.pricingTips}>
            <p className="rounded-2xl bg-secondary/60 p-4 text-sm text-foreground/85">{idea.pricing}</p>
          </Section>
          <Section title={tr.common.marketingTips}>
            <ul className="space-y-2">
              {idea.marketing.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {m}</li>
              ))}
            </ul>
          </Section>
          {idea.shopLinks && idea.shopLinks.length > 0 && (
            <Section title={tr.common.shopLinks}>
              <ul className="grid gap-2 sm:grid-cols-2">
                {idea.shopLinks.map((l) => (
                  <li key={l.url}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm hover:bg-secondary">
                      <span>{l.label}</span>
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                    </a>
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`mt-1 font-semibold ${accent ? "text-primary" : ""}`}>{value}</div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function FeaturedGuide() {
  const { tr } = useLang();
  const g = tr.ideas.guide;
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{g.kicker}</span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            {g.title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {g.desc}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <ol className="relative space-y-5 border-l-2 border-dashed border-border pl-7">
            {g.steps.map((s, i) => (
              <li key={s.t} className="relative">
                <span className="absolute -left-[37px] grid h-8 w-8 place-items-center rounded-full bg-gradient-warm text-xs font-bold text-primary-foreground shadow-soft">
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <h4 className="font-display text-lg font-semibold">{s.t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="space-y-5">
            <div className="rounded-3xl border border-border bg-card p-6">
              <h4 className="font-display text-lg font-semibold">{g.materialsLabel}</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {g.materials.map((m) => (
                  <li key={m} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sage" /> {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <h4 className="font-display text-lg font-semibold">{g.costLabel}</h4>
              <div className="mt-2 font-display text-3xl font-semibold text-primary">{g.cost}</div>
              <p className="text-sm text-muted-foreground">{g.costNote}</p>
            </div>
            <div className="rounded-3xl bg-gradient-warm p-6 text-primary-foreground shadow-soft">
              <h4 className="font-display text-lg font-semibold">{g.tipsLabel}</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {g.tips.map((t) => (
                  <li key={t} className="flex items-center gap-2 opacity-95">
                    <CheckCircle2 className="h-4 w-4" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}