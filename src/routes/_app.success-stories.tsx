import { createFileRoute } from "@tanstack/react-router";
import { Quote, Sparkles, Heart, GraduationCap, Users } from "lucide-react";
import lakshmi from "@/assets/story-lakshmi.jpg";
import priya from "@/assets/story-priya.jpg";
import shg from "@/assets/story-shg.jpg";

export const Route = createFileRoute("/_app/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Community Makers' Market" },
      { name: "description", content: "Real stories from homemakers, students and self-help groups building income from their craft." },
    ],
  }),
  component: StoriesPage,
});

const STORIES = [
  { img: lakshmi, name: "Lakshmi", role: "Homemaker · Kothapet", quote: "I started selling handmade candles from home and now earn a steady additional income every month — and I trained two neighbours too." },
  { img: priya, name: "Priya", role: "Student · Tarnaka", quote: "Between classes, my small jewelry brand pays my college fees. The community guides taught me pricing and packaging." },
  { img: shg, name: "Sakhi SHG", role: "Self-help Group · Dilsukhnagar", quote: "Twelve of us pooled our tailoring skills. We now stitch uniforms for two local schools and our families are proud." },
];

function StoriesPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-sunrise/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Success Stories</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight text-balance sm:text-6xl">
            Real makers. Real income. Real change.
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-3">
          {STORIES.map((s) => (
            <article key={s.name} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-warm">
              <img src={s.img} alt={s.name} width={800} height={800} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <Quote className="h-6 w-6 text-primary" />
                <p className="mt-3 text-base leading-relaxed text-foreground/85">"{s.quote}"</p>
                <div className="mt-5 border-t border-dashed border-border pt-4">
                  <div className="font-display text-lg font-semibold">{s.name}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-warm p-10 text-primary-foreground shadow-warm">
            <Heart className="h-7 w-7" />
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight">Women Empowerment</h2>
            <p className="mt-3 opacity-90">Business opportunities, financial independence, and skill development designed around the rhythm of a household.</p>
            <ul className="mt-5 space-y-2 text-sm">
              {["Tailored business ideas for homemakers", "Mentorship from successful women entrepreneurs", "Self-help group formation support", "Access to financial schemes"].map((i) => (
                <li key={i} className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5" /> {i}</li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-gradient-meadow p-10 text-primary-foreground shadow-warm">
            <GraduationCap className="h-7 w-7" />
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight">Youth Entrepreneurship</h2>
            <p className="mt-3 opacity-90">For students and first-time founders — bite-sized startups that fit between lectures and life.</p>
            <ul className="mt-5 space-y-2 text-sm">
              {["Low-cost student startup ideas", "Creative side-hustle blueprints", "Innovation workshops", "Peer founder community"].map((i) => (
                <li key={i} className="flex items-center gap-2"><Users className="h-3.5 w-3.5" /> {i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}