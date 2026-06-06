import { createFileRoute } from "@tanstack/react-router";
import { Quote, Sparkles, Heart, GraduationCap, Users } from "lucide-react";
import lakshmi from "@/assets/story-lakshmi.jpg";
import priya from "@/assets/story-priya.jpg";
import shg from "@/assets/story-shg.jpg";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/_app/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Community Makers' Market" },
      { name: "description", content: "Real stories from homemakers, students and self-help groups building income from their craft." },
    ],
  }),
  component: StoriesPage,
});

const IMAGES = [lakshmi, priya, shg];

function StoriesPage() {
  const { tr } = useLang();
  const stories = tr.stories.list.map((s, i) => ({ ...s, img: IMAGES[i] }));
  return (
    <>
      <section className="border-b border-border bg-gradient-sunrise/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{tr.stories.kicker}</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight text-balance sm:text-6xl">
            {tr.stories.title}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-3">
          {stories.map((s) => (
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
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight">{tr.stories.women.title}</h2>
            <p className="mt-3 opacity-90">{tr.stories.women.desc}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {tr.stories.women.items.map((i) => (
                <li key={i} className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5" /> {i}</li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-gradient-meadow p-10 text-primary-foreground shadow-warm">
            <GraduationCap className="h-7 w-7" />
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight">{tr.stories.youth.title}</h2>
            <p className="mt-3 opacity-90">{tr.stories.youth.desc}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {tr.stories.youth.items.map((i) => (
                <li key={i} className="flex items-center gap-2"><Users className="h-3.5 w-3.5" /> {i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}