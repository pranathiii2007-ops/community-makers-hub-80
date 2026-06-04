import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart } from "lucide-react";

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
  return (
    <>
      <section className="border-b border-border bg-gradient-sunrise/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight text-balance sm:text-6xl">
            Built by the community, for the community.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Community Makers' Market began as a college community-service project and grew into a quiet place where neighbours help neighbours start something of their own.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <Target className="h-7 w-7 text-primary" />
            <h2 className="mt-4 font-display text-3xl font-semibold">Our Mission</h2>
            <p className="mt-3 text-foreground/80">Empowering local communities through entrepreneurship, skill development, and market access — so that talent close to home finds its rightful audience.</p>
          </div>
          <div className="rounded-3xl bg-gradient-warm p-8 text-primary-foreground shadow-warm">
            <Eye className="h-7 w-7" />
            <h2 className="mt-4 font-display text-3xl font-semibold">Our Vision</h2>
            <p className="mt-3 opacity-95">Creating a self-reliant and financially empowered community where every household has the means to convert craft into livelihood.</p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl px-6 text-center">
          <Heart className="mx-auto h-6 w-6 text-primary" />
          <p className="mt-3 font-display text-2xl italic text-foreground/90">
            "We don't sell things to the community. We help the community sell to itself."
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}