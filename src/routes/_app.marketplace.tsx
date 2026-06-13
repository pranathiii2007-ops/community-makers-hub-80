import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Star, MapPin } from "lucide-react";
import candlesImg from "@/assets/m-candles.jpg";
import soapImg from "@/assets/m-soap.jpg";
import pickleImg from "@/assets/m-pickle.jpg";
import chocolatesImg from "@/assets/m-chocolates.jpg";
import braceletImg from "@/assets/m-bracelet.jpg";
import crochetBouquetImg from "@/assets/m-crochet-bouquet.jpg";
import resinKeyImg from "@/assets/m-resin-key.jpg";
import toteImg from "@/assets/m-tote.jpg";
import mugImg from "@/assets/m-mug.jpg";
import cardsImg from "@/assets/m-cards.jpg";
import hairbowImg from "@/assets/m-hairbow.jpg";
import jarImg from "@/assets/m-jar.jpg";
import coastersImg from "@/assets/m-coasters.jpg";
import crochetRoseImg from "@/assets/m-crochet-rose.jpg";
import resinHeartImg from "@/assets/m-resin-heart.jpg";
import friendshipImg from "@/assets/m-friendship.jpg";
import beadedKeyImg from "@/assets/m-beaded-key.jpg";
import sweaterImg from "@/assets/m-sweater.jpg";
import { useLang } from "@/lib/i18n";

// Index-aligned with translations.market.products so the picture matches
// the actual handmade item regardless of language.
const PRODUCT_IMAGES = [
  candlesImg, soapImg, pickleImg, chocolatesImg,
  braceletImg, crochetBouquetImg, resinKeyImg, toteImg,
  mugImg, cardsImg, hairbowImg, jarImg,
  coastersImg, crochetRoseImg, resinHeartImg, friendshipImg,
  beadedKeyImg, sweaterImg,
];
const FALLBACK = candlesImg;

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
              <img
                src={PRODUCT_IMAGES[i] ?? FALLBACK}
                alt={p.name}
                width={800}
                height={800}
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK; }}
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
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