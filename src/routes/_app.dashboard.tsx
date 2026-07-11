import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { Plus, Pencil, Trash2, Package, Inbox, MapPin, IndianRupee, ImagePlus, X, Loader2, Percent, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/_app/dashboard")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Seller Dashboard — Community Makers' Market" },
      { name: "description", content: "Manage your handmade products and buyer inquiries." },
    ],
  }),
  component: DashboardPage,
});

type Product = {
  id: string;
  seller_id: string;
  name: string;
  price: number;
  description: string | null;
  image_url: string;
  area: string | null;
  discount_percent: number;
  created_at: string;
};

type Inquiry = {
  id: string;
  product_id: string;
  buyer_name: string;
  phone: string;
  message: string;
  read: boolean;
  created_at: string;
  reply: string | null;
  replied_at: string | null;
  products?: { name: string } | null;
};

function DashboardPage() {
  const nav = useNavigate();
  const { user, loading, signOut } = useAuth();
  const [tab, setTab] = useState<"products" | "inquiries">("products");
  const [products, setProducts] = useState<Product[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    if (!loading && !user) nav({ to: "/auth", search: { redirect: "/dashboard" } });
  }, [user, loading, nav]);

  const refresh = useCallback(async () => {
    if (!user) return;
    setBusy(true);
    const [{ data: p }, { data: i }] = await Promise.all([
      supabase.from("products").select("*").eq("seller_id", user.id).order("created_at", { ascending: false }),
      supabase.from("inquiries").select("*, products(name)").eq("seller_id", user.id).order("created_at", { ascending: false }),
    ]);
    setProducts((p ?? []) as Product[]);
    setInquiries((i ?? []) as Inquiry[]);
    setBusy(false);
  }, [user]);

  useEffect(() => { void refresh(); }, [refresh]);

  if (loading || !user) {
    return <div className="grid min-h-[50vh] place-items-center"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>;
  }

  const openNew = () => { setEditing(null); setShowForm(true); };
  const openEdit = (p: Product) => { setEditing(p); setShowForm(true); };
  const remove = async (id: string) => {
    if (!confirm("Delete this product?")) return;
    await supabase.from("products").delete().eq("id", id);
    void refresh();
  };
  const unread = inquiries.filter((i) => !i.read).length;

  return (
    <>
      <section className="border-b border-border bg-gradient-sunrise/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4 px-6 py-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Your Shop</span>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">Seller Dashboard</h1>
            <p className="mt-2 text-sm text-muted-foreground">Signed in as <span className="font-semibold text-foreground">{user.email}</span></p>
          </div>
          <button onClick={async () => { await signOut(); nav({ to: "/marketplace" }); }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex rounded-full border border-border bg-card p-1">
              <button onClick={() => setTab("products")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${tab === "products" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                <Package className="h-4 w-4" /> My Products ({products.length})
              </button>
              <button onClick={() => setTab("inquiries")}
                className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${tab === "inquiries" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                <Inbox className="h-4 w-4" /> Inquiries ({inquiries.length})
                {unread > 0 && <span className="ml-1 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-accent-foreground">{unread} new</span>}
              </button>
            </div>
            {tab === "products" && (
              <button onClick={openNew} className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90">
                <Plus className="h-4 w-4" /> Add Product
              </button>
            )}
          </div>

          <div className="mt-8">
            {busy ? (
              <div className="grid place-items-center py-16"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>
            ) : tab === "products" ? (
              <ProductsTab products={products} onEdit={openEdit} onDelete={remove} onAdd={openNew} />
            ) : (
              <InquiriesTab inquiries={inquiries} onChanged={refresh} />
            )}
          </div>
        </div>
      </section>

      {showForm && (
        <ProductFormModal
          initial={editing}
          sellerId={user.id}
          onClose={() => { setShowForm(false); setEditing(null); }}
          onSaved={() => { setShowForm(false); setEditing(null); void refresh(); }}
        />
      )}
    </>
  );
}

function ProductsTab({ products, onEdit, onDelete, onAdd }: {
  products: Product[];
  onEdit: (p: Product) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
}) {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-secondary"><Package className="h-7 w-7 text-muted-foreground" /></div>
        <h3 className="mt-4 font-display text-xl font-semibold">No products yet</h3>
        <p className="mt-2 text-sm text-muted-foreground">Add your first handmade item to start selling.</p>
        <button onClick={onAdd} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
          <Plus className="h-4 w-4" /> Add your first product
        </button>
      </div>
    );
  }
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => {
        const disc = p.discount_percent > 0 ? p.discount_percent : 0;
        const final = disc > 0 ? p.price * (1 - disc / 100) : p.price;
        return (
          <article key={p.id} className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative">
              <img src={p.image_url} alt={p.name} className="aspect-square w-full object-cover" />
              {disc > 0 && <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground">-{disc}%</span>}
            </div>
            <div className="p-4">
              <h3 className="font-display text-lg font-semibold leading-tight">{p.name}</h3>
              {p.area && <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {p.area}</div>}
              {p.description && <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>}
              <div className="mt-3 flex items-center justify-between">
                <div className="font-display text-lg font-semibold text-primary">
                  ₹{final.toFixed(0)}
                  {disc > 0 && <span className="ml-2 text-sm text-muted-foreground line-through">₹{p.price.toFixed(0)}</span>}
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onEdit(p)} className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-secondary"><Pencil className="h-3 w-3" /> Edit</button>
                  <button onClick={() => onDelete(p.id)} className="inline-flex items-center gap-1 rounded-full border border-destructive/30 px-3 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/10"><Trash2 className="h-3 w-3" /> Delete</button>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function InquiriesTab({ inquiries, onChanged }: { inquiries: Inquiry[]; onChanged: () => void }) {
  if (inquiries.length === 0) {
    return <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center text-sm text-muted-foreground">No buyer inquiries yet. When someone is interested in your products, their message will appear here.</div>;
  }
  const toggleRead = async (i: Inquiry) => { await supabase.from("inquiries").update({ read: !i.read }).eq("id", i.id); onChanged(); };
  const remove = async (id: string) => { if (!confirm("Delete this inquiry?")) return; await supabase.from("inquiries").delete().eq("id", id); onChanged(); };

  return (
    <div className="space-y-3">
      {inquiries.map((i) => (
        <InquiryCard key={i.id} inquiry={i} onToggleRead={() => toggleRead(i)} onDelete={() => remove(i.id)} onChanged={onChanged} />
      ))}
    </div>
  );
}

function InquiryCard({ inquiry, onToggleRead, onDelete, onChanged }: {
  inquiry: Inquiry; onToggleRead: () => void; onDelete: () => void; onChanged: () => void;
}) {
  const [reply, setReply] = useState(inquiry.reply ?? "");
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const send = async () => {
    if (!reply.trim()) return;
    setBusy(true);
    await supabase.from("inquiries").update({ reply: reply.trim(), replied_at: new Date().toISOString(), read: true }).eq("id", inquiry.id);
    setBusy(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    onChanged();
  };
  return (
    <article className={`rounded-2xl border bg-card p-5 ${inquiry.read ? "border-border" : "border-primary/40 bg-primary/5"}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">{inquiry.products?.name ?? "Product"}</div>
          <div className="mt-1 font-display text-lg font-semibold">{inquiry.buyer_name}</div>
          <a href={`tel:${inquiry.phone.replace(/\s/g, "")}`} className="text-sm text-muted-foreground hover:text-foreground">{inquiry.phone}</a>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onToggleRead} className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-secondary">Mark as {inquiry.read ? "unread" : "read"}</button>
          <button onClick={onDelete} className="rounded-full border border-destructive/30 px-3 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/10">Delete</button>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">{inquiry.message}</p>
      <div className="mt-2 text-xs text-muted-foreground">{new Date(inquiry.created_at).toLocaleString()}</div>

      <div className="mt-4 rounded-xl border border-border bg-background p-3">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your reply</div>
        <textarea value={reply} onChange={(e) => setReply(e.target.value)} rows={2}
          placeholder="Hi, thanks for your interest! Yes, I can…"
          className="w-full resize-none rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary" />
        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="text-xs text-muted-foreground">
            {inquiry.replied_at ? `Last sent: ${new Date(inquiry.replied_at).toLocaleString()}` : "Not replied yet"}
          </div>
          <button onClick={send} disabled={busy || !reply.trim()}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60">
            {busy ? <Loader2 className="h-3 w-3 animate-spin" /> : null}
            {saved ? "Reply sent ✓" : inquiry.reply ? "Update reply" : "Send reply"}
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductFormModal({ initial, sellerId, onClose, onSaved }: {
  initial: Product | null;
  sellerId: string;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [price, setPrice] = useState(initial ? String(initial.price) : "");
  const [area, setArea] = useState(initial?.area ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [image, setImage] = useState(initial?.image_url ?? "");
  const [discount, setDiscount] = useState(initial ? String(initial.discount_percent) : "0");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const onFile = (f: File | undefined) => {
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => setImage(String(reader.result));
    reader.readAsDataURL(f);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (!name.trim() || !price.trim() || !image) { setErr("Please fill name, price and add an image."); return; }
    const disc = Math.min(90, Math.max(0, Number(discount) || 0));
    setBusy(true);
    const payload = {
      seller_id: sellerId,
      name: name.trim(),
      price: Number(price),
      description: description.trim() || null,
      image_url: image,
      area: area.trim() || null,
      discount_percent: disc,
    };
    const { error } = initial
      ? await supabase.from("products").update(payload).eq("id", initial.id)
      : await supabase.from("products").insert(payload);
    setBusy(false);
    if (error) { setErr(error.message); return; }
    onSaved();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div className="w-full max-w-2xl overflow-hidden rounded-t-3xl bg-card shadow-warm sm:rounded-3xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="font-display text-xl font-semibold">{initial ? "Edit product" : "Add a new product"}</h2>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary"><X className="h-4 w-4" /></button>
        </div>
        <form onSubmit={submit} className="max-h-[75vh] overflow-y-auto px-6 py-5">
          <div className="grid gap-4">
            <F label="Product name *"><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Crochet rose bouquet" className="in" /></F>
            <div className="grid gap-4 sm:grid-cols-2">
              <F label="Price (₹) *">
                <div className="flex items-center rounded-xl border border-border bg-background px-3 focus-within:border-primary">
                  <IndianRupee className="h-4 w-4 text-muted-foreground" />
                  <input value={price} onChange={(e) => setPrice(e.target.value.replace(/[^\d.]/g, ""))} placeholder="250" inputMode="decimal" className="w-full bg-transparent py-2.5 pl-2 text-sm outline-none" />
                </div>
              </F>
              <F label="Discount % (optional)">
                <div className="flex items-center rounded-xl border border-border bg-background px-3 focus-within:border-primary">
                  <Percent className="h-4 w-4 text-muted-foreground" />
                  <input value={discount} onChange={(e) => setDiscount(e.target.value.replace(/[^\d]/g, "").slice(0, 2))} placeholder="0" inputMode="numeric" className="w-full bg-transparent py-2.5 pl-2 text-sm outline-none" />
                </div>
              </F>
            </div>
            <F label="Your area / city"><input value={area} onChange={(e) => setArea(e.target.value)} placeholder="Visakhapatnam, AP" className="in" /></F>
            <F label="Description"><textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="Materials, size, custom options..." className="in resize-none" /></F>
            <F label="Product photo *">
              {image ? (
                <div><img src={image} alt="preview" className="aspect-square w-40 rounded-xl object-cover" />
                  <button type="button" onClick={() => setImage("")} className="mt-2 text-xs font-semibold text-destructive">Remove</button></div>
              ) : (
                <button type="button" onClick={() => fileRef.current?.click()}
                  className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-background py-8 text-sm text-muted-foreground hover:border-primary hover:text-foreground">
                  <ImagePlus className="h-6 w-6" /> Click to upload a photo
                </button>
              )}
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => onFile(e.target.files?.[0])} />
            </F>
          </div>
          {err && <p className="mt-3 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{err}</p>}
          <div className="mt-6 flex items-center justify-end gap-2">
            <button type="button" onClick={onClose} className="rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-secondary">Cancel</button>
            <button type="submit" disabled={busy} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60">
              {busy && <Loader2 className="h-4 w-4 animate-spin" />}
              {initial ? "Save changes" : "Publish product"}
            </button>
          </div>
        </form>
        <style>{`.in{width:100%;border-radius:0.75rem;border:1px solid hsl(var(--border));background:hsl(var(--background));padding:0.6rem 0.75rem;font-size:0.875rem;outline:none}.in:focus{border-color:hsl(var(--primary))}`}</style>
      </div>
    </div>
  );
}

function F({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>{children}</label>;
}