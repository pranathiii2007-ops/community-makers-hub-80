import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/_app/about")({
  head: () => ({
    meta: [
      { title: "About — Community Makers' Market" },
      { name: "description", content: "Our mission is to empower local communities through entrepreneurship, skill development and market access." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { tr } = useLang();
  return (
    <>
      <section className="border-b border-border bg-gradient-sunrise/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{tr.about.kicker}</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight text-balance sm:text-6xl">
            {tr.about.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            {tr.about.desc}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <Target className="h-7 w-7 text-primary" />
            <h2 className="mt-4 font-display text-3xl font-semibold">{tr.about.missionTitle}</h2>
            <p className="mt-3 text-foreground/80">{tr.about.missionDesc}</p>
          </div>
          <div className="rounded-3xl bg-gradient-warm p-8 text-primary-foreground shadow-warm">
            <Eye className="h-7 w-7" />
            <h2 className="mt-4 font-display text-3xl font-semibold">{tr.about.visionTitle}</h2>
            <p className="mt-3 opacity-95">{tr.about.visionDesc}</p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl px-6 text-center">
          <Heart className="mx-auto h-6 w-6 text-primary" />
          <p className="mt-3 font-display text-2xl italic text-foreground/90">
            {tr.about.quote}
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background">
            {tr.about.cta}
          </Link>
        </div>
      </section>
    </>
  );
}