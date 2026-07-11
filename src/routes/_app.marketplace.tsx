import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Star, MapPin, X, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
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
  ssr: false,
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

type DbProduct = {
  id: string; seller_id: string; name: string; price: number; image_url: string;
  area: string | null; discount_percent: number;
  shop_name?: string;
  avg_rating?: number;
};

function MarketplacePage() {
  const { tr } = useLang();
  const [dbProducts, setDbProducts] = useState<DbProduct[]>([]);
  const [demoContact, setDemoContact] = useState<{ name: string; seller: string } | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("products")
        .select("id,seller_id,name,price,image_url,area,discount_percent")
        .order("created_at", { ascending: false });
      if (!data || data.length === 0) return;
      const ids = data.map((p) => p.id);
      const sellerIds = Array.from(new Set(data.map((p) => p.seller_id)));
      const [{ data: revs }, { data: profs }] = await Promise.all([
        supabase.from("reviews").select("product_id,rating").in("product_id", ids),
        supabase.from("profiles").select("id,shop_name").in("id", sellerIds),
      ]);
      const ratings: Record<string, { sum: number; n: number }> = {};
      (revs ?? []).forEach((r) => {
        const cur = ratings[r.product_id] ?? { sum: 0, n: 0 };
        cur.sum += r.rating; cur.n += 1;
        ratings[r.product_id] = cur;
      });
      const shopMap = new Map<string, string>();
      (profs ?? []).forEach((p) => shopMap.set(p.id, p.shop_name));
      setDbProducts(data.map((p) => ({
        ...p,
        shop_name: shopMap.get(p.seller_id),
        avg_rating: ratings[p.id] ? ratings[p.id].sum / ratings[p.id].n : 0,
      })));
    })();
  }, []);

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
          {dbProducts.map((p) => {
            const disc = p.discount_percent;
            const finalPrice = disc > 0 ? p.price * (1 - disc / 100) : p.price;
            return (
              <Link key={p.id} to="/product/$id" params={{ id: p.id }}
                className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-warm">
                <div className="relative overflow-hidden">
                  <img src={p.image_url} alt={p.name} loading="lazy"
                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
                  {disc > 0 && (
                    <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground shadow-soft">-{disc}%</span>
                  )}
                  {(p.avg_rating ?? 0) > 0 && (
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold shadow-soft backdrop-blur">
                      <Star className="h-3 w-3 fill-mustard text-mustard" />
                      {(p.avg_rating ?? 0).toFixed(1)}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold leading-tight">{p.name}</h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {p.shop_name ?? "Local seller"}{p.area ? ` · ${p.area}` : ""}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <div className="font-display text-xl font-semibold text-primary">₹{finalPrice.toFixed(0)}</div>
                      {disc > 0 && <div className="text-xs text-muted-foreground line-through">₹{p.price.toFixed(0)}</div>}
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-2 text-xs font-semibold text-background">
                      <MessageCircle className="h-3.5 w-3.5" /> {tr.common.contact}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}

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
                  <button onClick={() => setDemoContact({ name: p.name, seller: p.seller })}
                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-2 text-xs font-semibold text-background transition hover:gap-2">
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

      {demoContact && <DemoContactModal name={demoContact.name} seller={demoContact.seller} onClose={() => setDemoContact(null)} />}
    </>
  );
}

function DemoContactModal({ name, seller, onClose }: { name: string; seller: string; onClose: () => void }) {
  const [buyerName, setBuyerName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(`Hi ${seller}, I'm interested in "${name}".`);
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName.trim() || !phone.trim()) return;
    setSent(true);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div className="w-full max-w-md overflow-hidden rounded-t-3xl bg-card shadow-warm sm:rounded-3xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <div className="text-sm font-semibold">Contact {seller}</div>
          <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary"><X className="h-4 w-4" /></button>
        </div>
        {sent ? (
          <div className="p-6 text-sm">
            <div className="font-semibold text-primary">Thanks! Your interest is noted.</div>
            <p className="mt-1 text-muted-foreground">This is a sample listing. Real sellers reply directly from their dashboard — sign in to list your own products.</p>
            <button onClick={onClose} className="mt-4 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background">Close</button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-3 p-5">
            <div className="text-xs text-muted-foreground">About: <span className="font-semibold text-foreground">{name}</span></div>
            <input value={buyerName} onChange={(e) => setBuyerName(e.target.value)} placeholder="Your name" required
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your phone" required
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3}
              className="w-full resize-none rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
            <button type="submit" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90">
              <Send className="h-3.5 w-3.5" /> Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
}