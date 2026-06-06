import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Translation } from "./translations";

export type Lang = "en" | "te";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
  tr: Translation;
};

const LangContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
  tr: translations.en,
});

function getByPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, k) => {
    if (acc && typeof acc === "object" && k in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[k];
    }
    return undefined;
  }, obj);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" ? localStorage.getItem("cmm.lang") : null) as Lang | null;
    if (saved === "en" || saved === "te") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("cmm.lang", l);
  };

  const tr = translations[lang];

  const t = (k: string): string => {
    const v = getByPath(tr, k);
    if (typeof v === "string") return v;
    const fallback = getByPath(translations.en, k);
    return typeof fallback === "string" ? fallback : k;
  };

  return <LangContext.Provider value={{ lang, setLang, t, tr }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

export function hasChosenLanguage(): boolean {
  if (typeof window === "undefined") return false;
  const v = localStorage.getItem("cmm.lang");
  return v === "en" || v === "te";
}