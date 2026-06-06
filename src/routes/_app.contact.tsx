import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/_app/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Community Makers' Market" },
      { name: "description", content: "Reach out to the Community Makers' Market team — by form, email, phone or social." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { tr } = useLang();
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="border-b border-border bg-gradient-sunrise/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{tr.contact.kicker}</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-tight text-balance sm:text-6xl">
            {tr.contact.title}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card p-8 shadow-soft"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={tr.contact.name} name="name" placeholder={tr.contact.namePh} />
              <Field label={tr.contact.email} name="email" type="email" placeholder={tr.contact.emailPh} />
            </div>
            <Field label={tr.contact.subject} name="subject" placeholder={tr.contact.subjectPh} className="mt-4" />
            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{tr.contact.message}</label>
              <textarea required rows={5} className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder={tr.contact.messagePh} />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-warm transition hover:gap-3">
              {sent ? tr.contact.sent : <>{tr.contact.send} <Send className="h-4 w-4" /></>}
            </button>
          </form>

          <div className="space-y-4">
            {[
              { Icon: Mail, label: tr.contact.emailLabel, value: tr.contact.emailValue },
              { Icon: Phone, label: tr.contact.phoneLabel, value: tr.contact.phoneValue },
              { Icon: MapPin, label: tr.contact.officeLabel, value: tr.contact.officeValue },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-warm text-primary-foreground shadow-soft"><Icon className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="font-semibold">{value}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{tr.contact.follow}</div>
              <div className="mt-3 flex gap-3">
                {[Instagram, Facebook, Youtube].map((I, i) => (
                  <a key={i} href="#" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground/70 transition hover:-translate-y-0.5 hover:text-primary">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, className = "", ...rest }: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input required {...rest} className="mt-1.5 w-full rounded-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
    </div>
  );
}