import { createFileRoute } from "@tanstack/react-router";
import { Search, ArrowRight, Landmark } from "lucide-react";
import { useMemo, useState } from "react";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/_app/schemes")({
  head: () => ({
    meta: [
      { title: "Government Schemes — Community Makers' Market" },
      { name: "description", content: "A searchable list of government schemes for women entrepreneurs, SHGs and small businesses." },
    ],
  }),
  component: SchemesPage,
});

function SchemesPage() {
  const { tr } = useLang();
  const [q, setQ] = useState("");
  const list = useMemo(() => tr.schemes.list.filter((s) => (s.name + s.benefits + s.eligibility).toLowerCase().includes(q.toLowerCase())), [q, tr]);
  return (
    <>
      <section className="border-b border-border bg-gradient-sunrise/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{tr.schemes.kicker}</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight text-balance sm:text-6xl">
            {tr.schemes.title}
          </h1>
          <div className="mt-8 flex max-w-xl items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-soft">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={tr.schemes.searchPh} className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-2">
          {list.map((s) => (
            <article key={s.name} className="group rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-warm">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-warm text-primary-foreground shadow-soft">
                  <Landmark className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold leading-tight">{s.name}</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div><dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{tr.schemes.benefitsLabel}</dt><dd className="mt-1 text-foreground/85">{s.benefits}</dd></div>
                    <div><dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{tr.schemes.eligibilityLabel}</dt><dd className="mt-1 text-foreground/85">{s.eligibility}</dd></div>
                  </dl>
                  <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                    {tr.common.learnMore} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
          {list.length === 0 && <div className="md:col-span-2 rounded-3xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">{tr.schemes.empty}</div>}
        </div>
      </section>
    </>
  );
}