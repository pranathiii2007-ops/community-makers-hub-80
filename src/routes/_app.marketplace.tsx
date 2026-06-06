import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Star, MapPin } from "lucide-react";
import candles from "@/assets/product-candles.jpg";
import crafts from "@/assets/product-crafts.jpg";
import snacks from "@/assets/product-snacks.jpg";
import gifts from "@/assets/product-gifts.jpg";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/_app/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — Community Makers' Market" },
      { name: "description", content: "Discover handmade products from local creators. Contact sellers directly — no middlemen." },
      { property: "og:title", content: "Marketplace — Community Makers' Market" },
      { property: "og:description", content: "Discover handmade products from local creators." },
    ],
  }),
  component: MarketplacePage,
});

const IMAGES = [candles, crafts, snacks, gifts, candles, crafts, snacks, gifts];

function MarketplacePage() {
  const { tr } = useLang();
  return (
    <>
      <section className="border-b border-border bg-gradient-sunrise/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{tr.market.kicker}</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight text-balance sm:text-6xl">
            {tr.market.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            {tr.market.desc}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {tr.market.products.map((p, i) => (
            <article key={i} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-warm">
              <div className="relative overflow-hidden">
                <img src={IMAGES[i]} alt={p.name} width={800} height={800} loading="lazy" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold shadow-soft backdrop-blur">
                  <Star className="h-3 w-3 fill-mustard text-mustard" />
                  {p.rating}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold leading-tight">{p.name}</h3>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {p.seller} · {p.area}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="font-display text-xl font-semibold text-primary">{p.price}</div>
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-2 text-xs font-semibold text-background transition hover:gap-2">
                    <MessageCircle className="h-3.5 w-3.5" /> {tr.common.contact}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl px-6 text-center text-sm text-muted-foreground">
          {tr.market.footer}
        </p>
      </section>
    </>
  );
}