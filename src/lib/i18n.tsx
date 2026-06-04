import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "te";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.ideas": "Business Ideas",
  "nav.market": "Marketplace",
  "nav.stories": "Success Stories",
  "nav.schemes": "Government Schemes",
  "nav.about": "About",
  "nav.contact": "Contact",
  "lang.title": "Choose Your Language",
  "lang.subtitle": "Select your preferred language to continue.",
  "lang.en": "English",
  "lang.te": "తెలుగు",
  "lang.continue": "Continue",
  "hero.kicker": "A community entrepreneurship platform",
  "hero.title": "Community Makers' Market",
  "hero.tagline": "Support Local Talent, Build a Stronger Community",
  "hero.desc": "Helping local residents transform their skills and creativity into sustainable income opportunities.",
  "hero.cta1": "Explore Business Ideas",
  "hero.cta2": "Start Selling",
  "common.learnMore": "Learn More",
  "common.contactSeller": "Contact Seller",
  "common.viewAll": "View all",
  "common.search": "Search",
};

const te: Dict = {
  "nav.home": "హోమ్",
  "nav.ideas": "వ్యాపార ఆలోచనలు",
  "nav.market": "మార్కెట్‌ప్లేస్",
  "nav.stories": "విజయ గాథలు",
  "nav.schemes": "ప్రభుత్వ పథకాలు",
  "nav.about": "మా గురించి",
  "nav.contact": "సంప్రదించండి",
  "lang.title": "మీ భాషను ఎంచుకోండి",
  "lang.subtitle": "కొనసాగించడానికి మీకు నచ్చిన భాషను ఎంచుకోండి.",
  "lang.en": "English",
  "lang.te": "తెలుగు",
  "lang.continue": "కొనసాగించండి",
  "hero.kicker": "ఒక సామాజిక వ్యవస్థాపకత వేదిక",
  "hero.title": "కమ్యూనిటీ మేకర్స్ మార్కెట్",
  "hero.tagline": "స్థానిక ప్రతిభకు మద్దతు ఇవ్వండి, బలమైన సమాజాన్ని నిర్మించండి",
  "hero.desc": "స్థానిక నివాసితులు తమ నైపుణ్యాలను స్థిరమైన ఆదాయ అవకాశాలుగా మార్చడంలో సహాయపడుతుంది.",
  "hero.cta1": "వ్యాపార ఆలోచనలను అన్వేషించండి",
  "hero.cta2": "అమ్మకం ప్రారంభించండి",
  "common.learnMore": "మరింత తెలుసుకోండి",
  "common.contactSeller": "విక్రేతను సంప్రదించండి",
  "common.viewAll": "అన్నీ చూడండి",
  "common.search": "శోధించండి",
};

const dicts: Record<Lang, Dict> = { en, te };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => k });

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

  const t = (k: string) => dicts[lang][k] ?? en[k] ?? k;

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

export function hasChosenLanguage(): boolean {
  if (typeof window === "undefined") return false;
  const v = localStorage.getItem("cmm.lang");
  return v === "en" || v === "te";
}