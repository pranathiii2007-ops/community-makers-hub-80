import { Link } from "@tanstack/react-router";
import { Sparkles, Mail, Phone, Instagram, Facebook, Youtube, MapPin } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { tr } = useLang();
  return (
    <footer className="mt-24 border-t border-border bg-gradient-to-b from-background to-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-warm text-primary-foreground shadow-soft">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold">Community Makers' Market</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {tr.footer.tagline}
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground/70 transition hover:-translate-y-0.5 hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{tr.footer.quickLinks}</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["/home", tr.nav.home],
              ["/business-ideas", tr.nav.ideas],
              ["/marketplace", tr.nav.market],
              ["/success-stories", tr.nav.stories],
              ["/schemes", tr.nav.schemes],
              ["/about", tr.nav.about],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-foreground/80 hover:text-primary">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{tr.footer.getInTouch}</h4>
          <ul className="mt-4 space-y-3 text-sm text-foreground/85">
            <li className="flex items-start gap-2.5"><Mail className="mt-0.5 h-4 w-4 text-primary" /> {tr.footer.emailValue}</li>
            <li className="flex items-start gap-2.5"><Phone className="mt-0.5 h-4 w-4 text-primary" /> {tr.footer.phoneValue}</li>
            <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> {tr.footer.addressValue}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Community Makers' Market. {tr.footer.rights}</span>
          <span>{tr.footer.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}