# Seller Accounts, Reviews & Discounts

This upgrades the site from a demo (localStorage) to a real multi-seller marketplace using **Lovable Cloud** (database + auth). Anyone can browse and review any product; only the logged-in seller can manage their own listings and see inquiries.

## What you'll get

1. **Seller sign up / sign in** at `/auth` (email + password, no email confirmation for fast testing).
2. **Public marketplace** — shows every product from every seller, including the demo items you already have. Shows a "Discount" badge and strike-through price when a seller sets one.
3. **Product reviews** — any signed-in visitor (seller or buyer) can leave a star rating + comment on any product. Average rating shows on the product card.
4. **"Contact seller" form** on each product — sends an inquiry to that specific seller's dashboard.
5. **Seller Dashboard** at `/dashboard` — visible only when signed in; each seller sees ONLY their own products & inquiries.
   - Add / edit / delete their products (name, price, description, image, optional discount %)
   - Inbox of inquiries about their products
6. **Navbar**: "Sell" link → shows "Dashboard" + "Sign out" when logged in, "Sign in" when logged out.

## Data model (Lovable Cloud)

```text
profiles (id = auth user, shop_name, area, phone)
products (id, seller_id, name, price, description, image_url, discount_percent, created_at)
inquiries (id, product_id, seller_id, buyer_name, phone, message, read, created_at)
reviews  (id, product_id, reviewer_id, reviewer_name, rating 1-5, comment, created_at)
```

RLS policies:
- `products`: anyone can SELECT; only owner can INSERT/UPDATE/DELETE (`seller_id = auth.uid()`).
- `inquiries`: only the product's seller can SELECT/UPDATE/DELETE their own; anyone (even anon) can INSERT.
- `reviews`: anyone can SELECT; any signed-in user can INSERT their own; only author can UPDATE/DELETE.
- `profiles`: anyone can SELECT (needed to show shop name on cards); only owner can UPDATE.

## Files to change

- **New**: `supabase/migrations/…create_marketplace.sql` (tables, RLS, grants, trigger to auto-create profile on signup)
- **New**: `src/routes/_app.auth.tsx` (sign in / sign up form)
- **New**: `src/routes/_app.product.$id.tsx` (product detail with reviews + contact form)
- **Rewrite**: `src/routes/_app.dashboard.tsx` (real Cloud data, own products only, discount field)
- **Rewrite**: `src/routes/_app.marketplace.tsx` (merges seed items + DB products, shows discount + avg rating)
- **Edit**: `src/components/site/Navbar.tsx` (auth-aware Sell/Sign in/Sign out)
- **Edit**: `src/lib/translations.ts` (new labels)

The 18 existing marketplace items stay as read-only "seed" cards so the site never looks empty; real seller products appear alongside them.

## Notes

- Auth uses email + password. If you'd rather have Google sign-in too, tell me and I'll add it.
- Reviews require sign-in (prevents spam). Contact form does NOT require sign-in so buyers can reach out easily.
- Existing `localStorage` demo data in the current dashboard will no longer be used; it'll be replaced by real per-account data.

Reply **go** to build it, or tell me what to change (e.g. "Google sign-in too", "reviews should be anonymous", "hide seed products").
