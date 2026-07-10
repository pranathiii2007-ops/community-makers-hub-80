import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Sparkles, Globe, Store, LogIn, LayoutDashboard } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { user } = useAuth();

  const items = [
    { to: "/home", label: t("nav.home") },
    { to: "/business-ideas", label: t("nav.ideas") },
    { to: "/marketplace", label: t("nav.market") },
    { to: "/success-stories", label: t("nav.stories") },
    { to: "/schemes", label: t("nav.schemes") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/home" className="group flex items-center gap-3">
          <div className="relative">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-warm text-primary-foreground shadow-soft transition-transform group-hover:scale-105 group-hover:rotate-3 border border-white/20">
              <Store className="h-5.5 w-5.5" />
            </span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm animate-pulse">
              <Sparkles className="h-2.5 w-2.5" />
            </span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl font-bold tracking-tight text-foreground">
              Community <span className="text-primary font-extrabold">Makers'</span>
            </div>
            <div className="-mt-0.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-bold">
              Market
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {items.map((i) => {
            const active = pathname === i.to;
            return (
              <Link
                key={i.to}
                to={i.to}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active ? "bg-primary/10 text-primary" : "text-foreground/75 hover:text-foreground hover:bg-secondary"
                }`}
              >
                {i.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <Link to="/dashboard"
              className="hidden items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-soft hover:opacity-90 sm:inline-flex">
              <LayoutDashboard className="h-3.5 w-3.5" /> Dashboard
            </Link>
          ) : (
            <Link to="/auth"
              className="hidden items-center gap-1.5 rounded-full bg-foreground px-3.5 py-2 text-xs font-semibold text-background shadow-soft hover:opacity-90 sm:inline-flex">
              <LogIn className="h-3.5 w-3.5" /> Sell / Sign in
            </Link>
          )}
          <div className="hidden items-center gap-1 rounded-full border border-border bg-card px-1 py-1 sm:flex">
            <Globe className="ml-2 h-3.5 w-3.5 text-muted-foreground" />
            {(["en", "te"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l === "en" ? "EN" : "తె"}
              </button>
            ))}
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <div className="mx-auto max-w-7xl px-5 py-3 flex flex-col gap-1">
            {items.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {i.label}
              </Link>
            ))}
            <Link to={user ? "/dashboard" : "/auth"} onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground">
              {user ? "Dashboard" : "Sell / Sign in"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}