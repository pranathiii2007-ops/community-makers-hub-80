import { createFileRoute } from "@tanstack/react-router";
import { Flame, Salad, Gem, Scissors, Gift, Sprout, Palette, Heart, ArrowRight, IndianRupee, Gauge, TrendingUp, CheckCircle2 } from "lucide-react";

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

type Idea = { name: string; icon: typeof Flame; cost: string; level: "Beginner" | "Intermediate" | "Advanced"; earn: string; tag: string };

const IDEAS: Idea[] = [
  { name: "Handmade Candles", icon: Flame, cost: "₹2,000 – ₹5,000", level: "Beginner", earn: "₹8k – ₹25k / month", tag: "Home & Decor" },
  { name: "Homemade Pickles", icon: Salad, cost: "₹1,500 – ₹4,000", level: "Beginner", earn: "₹6k – ₹20k / month", tag: "Food" },
  { name: "Jewelry Making", icon: Gem, cost: "₹3,000 – ₹8,000", level: "Intermediate", earn: "₹10k – ₹40k / month", tag: "Fashion" },
  { name: "Tailoring", icon: Scissors, cost: "₹5,000 – ₹15,000", level: "Intermediate", earn: "₹8k – ₹35k / month", tag: "Fashion" },
  { name: "Customized Gifts", icon: Gift, cost: "₹2,000 – ₹6,000", level: "Beginner", earn: "₹7k – ₹22k / month", tag: "Gifting" },
  { name: "Plant Nursery", icon: Sprout, cost: "₹4,000 – ₹12,000", level: "Beginner", earn: "₹10k – ₹30k / month", tag: "Green" },
  { name: "Paintings", icon: Palette, cost: "₹2,000 – ₹7,000", level: "Advanced", earn: "₹5k – ₹50k / month", tag: "Art" },
  { name: "Crochet Crafts", icon: Heart, cost: "₹1,000 – ₹3,000", level: "Beginner", earn: "₹6k – ₹18k / month", tag: "Crafts" },
];

function levelBadge(l: Idea["level"]) {
  const map: Record<Idea["level"], string> = {
    Beginner: "bg-sage/15 text-sage",
    Intermediate: "bg-mustard/20 text-foreground",
    Advanced: "bg-terracotta/15 text-terracotta",
  };
  return map[l];
}

function BusinessIdeasPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-sunrise/70">
        <div className="absolute inset-0 grain opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Business Ideas</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight text-balance sm:text-6xl">
            Pick a craft. Start small. Grow steady.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Each idea below is sized for a small home setup, with honest cost and earning ranges based on community feedback.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {IDEAS.map(({ name, icon: Icon, cost, level, earn, tag }) => (
            <article key={name} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-warm">
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-warm text-primary-foreground shadow-soft transition group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${levelBadge(level)}`}>{level}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold leading-tight">{name}</h3>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{tag}</div>
              <dl className="mt-5 space-y-2.5 text-sm">
                <div className="flex items-center justify-between gap-2 border-t border-dashed border-border pt-2.5">
                  <dt className="flex items-center gap-1.5 text-muted-foreground"><IndianRupee className="h-3.5 w-3.5" /> Startup</dt>
                  <dd className="font-semibold">{cost}</dd>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <dt className="flex items-center gap-1.5 text-muted-foreground"><Gauge className="h-3.5 w-3.5" /> Skill</dt>
                  <dd className="font-semibold">{level}</dd>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <dt className="flex items-center gap-1.5 text-muted-foreground"><TrendingUp className="h-3.5 w-3.5" /> Earnings</dt>
                  <dd className="font-semibold text-primary">{earn}</dd>
                </div>
              </dl>
              <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:gap-2.5 transition-all">
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </section>

      <FeaturedGuide />
    </>
  );
}

function FeaturedGuide() {
  const steps = [
    { t: "Gather your materials", d: "Wax (soy or paraffin), cotton wicks, fragrance oils, dyes, glass jars, double-boiler, thermometer." },
    { t: "Set a small budget", d: "Start with ₹3,000 for a batch of 25–30 candles. Reinvest profits before scaling." },
    { t: "Melt, scent, pour", d: "Melt wax to 70°C, mix fragrance at 65°C, pour at 60°C. Let cool undisturbed for 24 hours." },
    { t: "Price honestly", d: "Cost per candle ×3 is a healthy starting price. ₹120 cost → ₹350 sale price." },
    { t: "Market locally first", d: "WhatsApp neighbours, a small Instagram page, a corner at the next community fair." },
  ];
  const materials = ["Soy wax — ₹450/kg", "Cotton wicks — ₹80/pack", "Fragrance oils — ₹250/bottle", "Glass jars — ₹40/each", "Dye chips — ₹120/pack"];
  const tips = ["Photograph in natural light", "Bundle 3 for ₹899", "Offer custom scents for events", "Ask buyers for a WhatsApp review"];

  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Featured Startup Guide</span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Handmade Candle Business — your first 30 days.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A complete walkthrough from raw wax to first sale, written for absolute beginners.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <ol className="relative space-y-5 border-l-2 border-dashed border-border pl-7">
            {steps.map((s, i) => (
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
              <h4 className="font-display text-lg font-semibold">Required Materials</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {materials.map((m) => (
                  <li key={m} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sage" /> {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <h4 className="font-display text-lg font-semibold">Estimated Cost</h4>
              <div className="mt-2 font-display text-3xl font-semibold text-primary">₹3,000</div>
              <p className="text-sm text-muted-foreground">for a starter batch of ~25 candles. Average margin: 60%.</p>
            </div>
            <div className="rounded-3xl bg-gradient-warm p-6 text-primary-foreground shadow-soft">
              <h4 className="font-display text-lg font-semibold">Marketing Tips</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {tips.map((t) => (
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