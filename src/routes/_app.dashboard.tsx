import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Plus, Pencil, Trash2, Package, Inbox, MapPin, IndianRupee, ImagePlus, X } from "lucide-react";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({
    meta: [
      { title: "Seller Dashboard — Community Makers' Market" },
      { name: "description", content: "Add your handmade products and view buyer inquiries — no signup needed." },
    ],
  }),
  component: DashboardPage,
});

type SellerProduct = {
  id: string;
  name: string;
  price: string;
  seller: string;
  area: string;
  description: string;
  image: string; // data URL or http URL
  createdAt: number;
};

type Inquiry = {
  id: string;
  productName: string;
  buyer: string;
  phone: string;
  message: string;
  createdAt: number;
  read: boolean;
};

const PRODUCTS_KEY = "cmm.seller.products";
const INQUIRIES_KEY = "cmm.seller.inquiries";

const SAMPLE_INQUIRIES: Inquiry[] = [
  { id: "i1", productName: "Crochet flower bouquet", buyer: "Anitha R.", phone: "+91 98765 43210", message: "Hi! Do you take bulk orders for a wedding (20 pcs)?", createdAt: Date.now() - 3600_000, read: false },
  { id: "i2", productName: "Resin keychains", buyer: "Suresh K.", phone: "+91 90000 11122", message: "Can I get custom names on 5 keychains? When can you deliver?", createdAt: Date.now() - 86400_000, read: true },
];

function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}
function save<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

function DashboardPage() {
  const [tab, setTab] = useState<"products" | "inquiries">("products");
  const [products, setProducts] = useState<SellerProduct[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [editing, setEditing] = useState<SellerProduct | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setProducts(load<SellerProduct[]>(PRODUCTS_KEY, []));
    setInquiries(load<Inquiry[]>(INQUIRIES_KEY, SAMPLE_INQUIRIES));
  }, []);

  const persistProducts = (next: SellerProduct[]) => {
    setProducts(next);
    save(PRODUCTS_KEY, next);
  };
  const persistInquiries = (next: Inquiry[]) => {
    setInquiries(next);
    save(INQUIRIES_KEY, next);
  };

  const openNew = () => { setEditing(null); setShowForm(true); };
  const openEdit = (p: SellerProduct) => { setEditing(p); setShowForm(true); };
  const remove = (id: string) => {
    if (!confirm("Delete this product?")) return;
    persistProducts(products.filter((p) => p.id !== id));
  };
  const upsert = (p: SellerProduct) => {
    const exists = products.some((x) => x.id === p.id);
    const next = exists ? products.map((x) => (x.id === p.id ? p : x)) : [p, ...products];
    persistProducts(next);
    setShowForm(false);
    setEditing(null);
  };

  const unread = inquiries.filter((i) => !i.read).length;

  return (
    <>
      <section className="border-b border-border bg-gradient-sunrise/60">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">For Sellers</span>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">Your Seller Dashboard</h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            Post your handmade items, manage your listings, and reply to buyer messages. No signup required —
            your products are saved on this device.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex rounded-full border border-border bg-card p-1">
              <button
                onClick={() => setTab("products")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${tab === "products" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Package className="h-4 w-4" /> My Products ({products.length})
              </button>
              <button
                onClick={() => setTab("inquiries")}
                className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${tab === "inquiries" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Inbox className="h-4 w-4" /> Inquiries ({inquiries.length})
                {unread > 0 && (
                  <span className="ml-1 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-accent-foreground">{unread} new</span>
                )}
              </button>
            </div>

            {tab === "products" && (
              <button onClick={openNew} className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90">
                <Plus className="h-4 w-4" /> Add Product
              </button>
            )}
          </div>

          <div className="mt-8">
            {tab === "products" ? (
              <ProductsTab products={products} onEdit={openEdit} onDelete={remove} onAdd={openNew} />
            ) : (
              <InquiriesTab inquiries={inquiries} onChange={persistInquiries} />
            )}
          </div>
        </div>
      </section>

      {showForm && (
        <ProductFormModal
          initial={editing}
          onClose={() => { setShowForm(false); setEditing(null); }}
          onSave={upsert}
        />
      )}
    </>
  );
}

function ProductsTab({ products, onEdit, onDelete, onAdd }: {
  products: SellerProduct[];
  onEdit: (p: SellerProduct) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
}) {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-secondary">
          <Package className="h-7 w-7 text-muted-foreground" />
        </div>
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
      {products.map((p) => (
        <article key={p.id} className="overflow-hidden rounded-2xl border border-border bg-card">
          <img src={p.image} alt={p.name} className="aspect-square w-full object-cover" />
          <div className="p-4">
            <h3 className="font-display text-lg font-semibold leading-tight">{p.name}</h3>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" /> {p.seller} · {p.area}
            </div>
            {p.description && <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>}
            <div className="mt-3 flex items-center justify-between">
              <div className="font-display text-lg font-semibold text-primary">{p.price}</div>
              <div className="flex items-center gap-2">
                <button onClick={() => onEdit(p)} className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-secondary">
                  <Pencil className="h-3 w-3" /> Edit
                </button>
                <button onClick={() => onDelete(p.id)} className="inline-flex items-center gap-1 rounded-full border border-destructive/30 px-3 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/10">
                  <Trash2 className="h-3 w-3" /> Delete
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function InquiriesTab({ inquiries, onChange }: { inquiries: Inquiry[]; onChange: (next: Inquiry[]) => void }) {
  if (inquiries.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center text-sm text-muted-foreground">
        No buyer inquiries yet.
      </div>
    );
  }

  const toggleRead = (id: string) => {
    onChange(inquiries.map((i) => (i.id === id ? { ...i, read: !i.read } : i)));
  };
  const remove = (id: string) => {
    if (!confirm("Delete this inquiry?")) return;
    onChange(inquiries.filter((i) => i.id !== id));
  };

  return (
    <div className="space-y-3">
      {inquiries
        .slice()
        .sort((a, b) => b.createdAt - a.createdAt)
        .map((i) => (
          <article key={i.id} className={`rounded-2xl border bg-card p-5 ${i.read ? "border-border" : "border-primary/40 bg-primary/5"}`}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">{i.productName}</div>
                <div className="mt-1 font-display text-lg font-semibold">{i.buyer}</div>
                <a href={`tel:${i.phone.replace(/\s/g, "")}`} className="text-sm text-muted-foreground hover:text-foreground">{i.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => toggleRead(i.id)} className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-secondary">
                  Mark as {i.read ? "unread" : "read"}
                </button>
                <button onClick={() => remove(i.id)} className="rounded-full border border-destructive/30 px-3 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/10">
                  Delete
                </button>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">{i.message}</p>
            <div className="mt-2 text-xs text-muted-foreground">{new Date(i.createdAt).toLocaleString()}</div>
          </article>
        ))}
    </div>
  );
}

function ProductFormModal({ initial, onClose, onSave }: {
  initial: SellerProduct | null;
  onClose: () => void;
  onSave: (p: SellerProduct) => void;
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [price, setPrice] = useState(initial?.price?.replace(/[^\d]/g, "") ?? "");
  const [seller, setSeller] = useState(initial?.seller ?? "");
  const [area, setArea] = useState(initial?.area ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [image, setImage] = useState(initial?.image ?? "");
  const fileRef = useRef<HTMLInputElement>(null);

  const onFile = (f: File | undefined) => {
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => setImage(String(reader.result));
    reader.readAsDataURL(f);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !price.trim() || !seller.trim() || !area.trim() || !image) {
      alert("Please fill all required fields and add an image.");
      return;
    }
    onSave({
      id: initial?.id ?? `p_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      name: name.trim(),
      price: `₹${price.trim()}`,
      seller: seller.trim(),
      area: area.trim(),
      description: description.trim(),
      image,
      createdAt: initial?.createdAt ?? Date.now(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div className="w-full max-w-2xl overflow-hidden rounded-t-3xl bg-card shadow-warm sm:rounded-3xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="font-display text-xl font-semibold">{initial ? "Edit product" : "Add a new product"}</h2>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary">
            <X className="h-4 w-4" />
          </button>
        </div>
        <form onSubmit={submit} className="max-h-[75vh] overflow-y-auto px-6 py-5">
          <div className="grid gap-4">
            <Field label="Product name *">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Crochet rose bouquet"
                className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Price (₹) *">
                <div className="flex items-center rounded-xl border border-border bg-background px-3 focus-within:border-primary">
                  <IndianRupee className="h-4 w-4 text-muted-foreground" />
                  <input value={price} onChange={(e) => setPrice(e.target.value.replace(/[^\d]/g, ""))} placeholder="250" inputMode="numeric"
                    className="w-full bg-transparent py-2.5 pl-2 text-sm outline-none" />
                </div>
              </Field>
              <Field label="Your name / shop *">
                <input value={seller} onChange={(e) => setSeller(e.target.value)} placeholder="Lakshmi Crafts"
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
              </Field>
            </div>
            <Field label="Your area / city *">
              <input value={area} onChange={(e) => setArea(e.target.value)} placeholder="Visakhapatnam, AP"
                className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
            </Field>
            <Field label="Description">
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3}
                placeholder="Tell buyers what makes your product special — materials, size, custom options..."
                className="w-full resize-none rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
            </Field>
            <Field label="Product photo *">
              {image ? (
                <div className="relative">
                  <img src={image} alt="preview" className="aspect-square w-40 rounded-xl object-cover" />
                  <button type="button" onClick={() => setImage("")} className="mt-2 text-xs font-semibold text-destructive">Remove</button>
                </div>
              ) : (
                <button type="button" onClick={() => fileRef.current?.click()}
                  className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-background py-8 text-sm text-muted-foreground hover:border-primary hover:text-foreground">
                  <ImagePlus className="h-6 w-6" />
                  Click to upload a photo
                </button>
              )}
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => onFile(e.target.files?.[0])} />
            </Field>
          </div>
          <div className="mt-6 flex items-center justify-end gap-2">
            <button type="button" onClick={onClose} className="rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-secondary">Cancel</button>
            <button type="submit" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
              {initial ? "Save changes" : "Publish product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}