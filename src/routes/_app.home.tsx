import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Lightbulb, Store, BookOpen, Users, Globe2, Heart, TrendingUp, Award, Quote } from "lucide-react";
import heroImg from "@/assets/hero-community.jpg";
import storyLakshmi from "@/assets/story-lakshmi.jpg";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/_app/home")({
  head: () => ({
    meta: [
      { title: "Community Makers' Market — Support Local Talent" },
      { name: "description", content: "Helping homemakers, students, artists, and self-help groups turn their skills into sustainable income." },
      { property: "og:title", content: "Community Makers' Market" },
      { property: "og:description", content: "Support Local Talent, Build a Stronger Community." },
      { property: "og:image", content: "/og-home.jpg" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <WhyExists />
      <ImpactStats />
      <FeaturedStory />
    </>
  );
}

function Hero() {
  const { tr } = useLang();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-sunrise opacity-60" />
      <div className="absolute inset-0 grain opacity-50" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-mustard/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-foreground/70 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {tr.hero.kicker}
          </div>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] text-balance text-foreground sm:text-6xl lg:text-7xl">
            {tr.hero.titleA}<br />
            <span className="bg-gradient-warm bg-clip-text text-transparent">{tr.hero.titleB}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg font-medium text-foreground/80">
            {tr.hero.tagline}
          </p>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            {tr.hero.desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/business-ideas" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-warm transition hover:gap-3">
              {tr.hero.cta1} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/marketplace" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/20 bg-background/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:border-foreground/40">
              {tr.hero.cta2}
            </Link>
            <Link to="/auth" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90">
              Start selling <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-foreground/70">
            {tr.hero.stats.map((s) => (
              <div key={s} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-warm opacity-20 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-foreground/10 bg-card shadow-warm">
            <img src={heroImg} alt="Local creators and homemakers crafting together" width={1536} height={1152} className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-soft backdrop-blur sm:flex sm:items-center sm:gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-sage/20 text-sage"><Heart className="h-5 w-5" /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{tr.hero.today}</div>
              <div className="text-sm font-semibold">{tr.hero.todayValue}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyExists() {
  const { tr } = useLang();
  const problemIcons = [Users, Heart, Lightbulb, Globe2];
  const solutionIcons = [Lightbulb, BookOpen, Store, Award, Users];
  const problems = tr.why.problems.map((p, i) => ({ ...p, icon: problemIcons[i] ?? Users }));
  const solutions = tr.why.solutions.map((p, i) => ({ ...p, icon: solutionIcons[i] ?? Lightbulb }));

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{tr.why.kicker}</span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            {tr.why.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-terracotta">{tr.why.problemsTitle}</h3>
            <div className="mt-5 space-y-3">
              {problems.map(({ icon: Icon, t, d }) => (
                <div key={t} className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-soft">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-terracotta/10 text-terracotta">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t}</div>
                    <div className="mt-0.5 text-sm text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-sage">{tr.why.solutionsTitle}</h3>
            <div className="mt-5 space-y-3">
              {solutions.map(({ icon: Icon, t, d }) => (
                <div key={t} className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-soft">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sage/15 text-sage">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t}</div>
                    <div className="mt-0.5 text-sm text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactStats() {
  const { tr } = useLang();
  const icons = [Lightbulb, Users, Store, TrendingUp];
  const stats = tr.impact.stats.map((s, i) => ({ ...s, icon: icons[i] ?? Lightbulb }));
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-gradient-warm p-10 text-primary-foreground shadow-warm sm:p-14">
          <div className="absolute inset-0 grain opacity-20" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">{tr.impact.kicker}</span>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">{tr.impact.title}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map(({ n, l, icon: Icon }) => (
                <div key={l} className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur transition hover:bg-white/15">
                  <Icon className="h-5 w-5 opacity-80" />
                  <div className="mt-3 font-display text-4xl font-semibold">{n}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider opacity-85">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedStory() {
  const { tr } = useLang();
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
            <img src={storyLakshmi} alt="Lakshmi, homemaker and candle maker" width={800} height={800} loading="lazy" className="aspect-square w-full object-cover" />
          </div>
          <div className="absolute -right-4 -bottom-4 hidden rounded-2xl border border-border bg-card p-4 shadow-soft sm:block">
            <Quote className="h-5 w-5 text-primary" />
            <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{tr.featured.caption}</div>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{tr.featured.kicker}</span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            {tr.featured.title}
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            {tr.featured.desc}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/success-stories" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:gap-3">
              {tr.featured.cta1} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/business-ideas" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
              {tr.featured.cta2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}