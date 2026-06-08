export type Idea = {
  slug: string;
  name: string;
  tag: string;
  cost: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  levelLabel: string;
  earn: string;
  description: string;
  materials: string[];
  steps: string[];
  pricing: string;
  marketing: string[];
  category?: "starter" | "under100" | "under200";
  shopLinks?: { label: string; url: string }[];
};

export type Scheme = { name: string; benefits: string; eligibility: string };
export type Story = { name: string; role: string; quote: string };
export type Product = { name: string; price: string; seller: string; area: string; rating: number; image?: string };

export type Translation = {
  nav: { home: string; ideas: string; market: string; stories: string; schemes: string; about: string; contact: string };
  lang: { title: string; subtitle: string; en: string; te: string; continue: string; changeNote: string; chip: string; enSub: string; teSub: string };
  common: {
    learnMore: string;
    contactSeller: string;
    viewAll: string;
    search: string;
    contact: string;
    close: string;
    startup: string;
    skill: string;
    earnings: string;
    materials: string;
    steps: string;
    pricingTips: string;
    marketingTips: string;
    overview: string;
    shopLinks: string;
    categories: { starter: string; under100: string; under200: string };
    levels: { Beginner: string; Intermediate: string; Advanced: string };
  };
  hero: {
    kicker: string; titleA: string; titleB: string; tagline: string;
    desc: string; cta1: string; cta2: string;
    stats: string[]; today: string; todayValue: string;
  };
  why: {
    kicker: string; title: string; problemsTitle: string; solutionsTitle: string;
    problems: { t: string; d: string }[]; solutions: { t: string; d: string }[];
  };
  impact: { kicker: string; title: string; stats: { n: string; l: string }[] };
  featured: { kicker: string; title: string; desc: string; cta1: string; cta2: string; caption: string };
  ideas: {
    kicker: string; title: string; desc: string;
    list: Idea[];
    guide: {
      kicker: string; title: string; desc: string;
      steps: { t: string; d: string }[];
      materials: string[]; materialsLabel: string;
      cost: string; costLabel: string; costNote: string;
      tips: string[]; tipsLabel: string;
    };
  };
  market: {
    kicker: string; title: string; desc: string; footer: string;
    products: Product[];
  };
  stories: {
    kicker: string; title: string;
    list: Story[];
    women: { title: string; desc: string; items: string[] };
    youth: { title: string; desc: string; items: string[] };
  };
  schemes: {
    kicker: string; title: string; searchPh: string; empty: string;
    benefitsLabel: string; eligibilityLabel: string;
    list: Scheme[];
  };
  about: {
    kicker: string; title: string; desc: string;
    missionTitle: string; missionDesc: string;
    visionTitle: string; visionDesc: string;
    quote: string; cta: string;
  };
  contact: {
    kicker: string; title: string;
    name: string; namePh: string;
    email: string; emailPh: string;
    subject: string; subjectPh: string;
    message: string; messagePh: string;
    send: string; sent: string;
    emailLabel: string; phoneLabel: string; officeLabel: string;
    emailValue: string; phoneValue: string; officeValue: string;
    follow: string;
  };
  footer: {
    tagline: string;
    quickLinks: string; getInTouch: string;
    emailValue: string; phoneValue: string; addressValue: string;
    rights: string; madeWith: string;
  };
};

const en: Translation = {
  nav: { home: "Home", ideas: "Business Ideas", market: "Marketplace", stories: "Success Stories", schemes: "Government Schemes", about: "About", contact: "Contact" },
  lang: {
    title: "Choose Your Language",
    subtitle: "Select your preferred language to continue.",
    en: "English", te: "తెలుగు",
    continue: "Continue",
    changeNote: "You can change your language anytime from the navigation bar.",
    chip: "Community Makers' Market",
    enSub: "Continue in English",
    teSub: "తెలుగులో కొనసాగండి",
  },
  common: {
    learnMore: "Learn More",
    contactSeller: "Contact Seller",
    viewAll: "View all",
    search: "Search",
    contact: "Contact",
    close: "Close",
    startup: "Startup",
    skill: "Skill",
    earnings: "Earnings",
    materials: "Required Materials",
    steps: "Step-by-step",
    pricingTips: "Pricing Suggestion",
    marketingTips: "Marketing Tips",
    overview: "Overview",
    levels: { Beginner: "Beginner", Intermediate: "Intermediate", Advanced: "Advanced" },
  },
  hero: {
    kicker: "A community entrepreneurship platform",
    titleA: "Community", titleB: "Makers' Market",
    tagline: "Support Local Talent, Build a Stronger Community.",
    desc: "Helping local residents transform their skills and creativity into sustainable income opportunities — from kitchen-table candles to neighbourhood ateliers.",
    cta1: "Explore Business Ideas", cta2: "Start Selling",
    stats: ["500+ Ideas", "200+ Creators", "100+ Products", "50+ Stories"],
    today: "Today", todayValue: "12 new makers joined",
  },
  why: {
    kicker: "Why this platform exists",
    title: "Real problems in our community — and a gentle way through.",
    problemsTitle: "The Problems",
    solutionsTitle: "What we offer",
    problems: [
      { t: "Talent without opportunity", d: "Skilled people in our neighbourhoods lack access to markets and customers." },
      { t: "Homemakers, hidden", d: "Years of craft and care, with limited visibility outside the home." },
      { t: "Where do I even start?", d: "Many don't know the first step to turn a skill into a small business." },
      { t: "Language as a wall", d: "Useful information rarely reaches people in the language they think in." },
    ],
    solutions: [
      { t: "Curated business ideas", d: "Realistic, low-cost ideas matched to common household skills." },
      { t: "Learning resources", d: "Step-by-step guides on materials, pricing and marketing." },
      { t: "A place to showcase", d: "A simple marketplace where customers can discover your work." },
      { t: "Government schemes", d: "Programs and subsidies, explained in plain language." },
      { t: "Community support", d: "Self-help groups and peers cheering you on, every step." },
    ],
  },
  impact: {
    kicker: "Community Impact",
    title: "Small steps. Real income. Real lives.",
    stats: [
      { n: "500+", l: "Business Ideas Shared" },
      { n: "200+", l: "Local Creators Supported" },
      { n: "100+", l: "Products Showcased" },
      { n: "50+", l: "Success Stories" },
    ],
  },
  featured: {
    kicker: "Featured Story",
    title: "\"I started with ten candles. Now my home pays its own bills.\"",
    desc: "Lakshmi began her handmade candle business at her kitchen table during the monsoon of 2023. With a small starter kit and a steady WhatsApp circle, she now ships across three cities and trains two neighbours.",
    cta1: "Read more stories", cta2: "Browse ideas",
    caption: "Lakshmi, Hyderabad",
  },
  ideas: {
    kicker: "Business Ideas",
    title: "Pick a craft. Start small. Grow steady.",
    desc: "Each idea below is sized for a small home setup, with honest cost and earning ranges based on community feedback.",
    list: [
      {
        slug: "candles", name: "Handmade Candles", tag: "Home & Decor",
        cost: "₹2,000 – ₹5,000", level: "Beginner", levelLabel: "Beginner", earn: "₹8k – ₹25k / month",
        description: "Pour fragrant soy or paraffin candles from your kitchen — a low-cost craft with steady festival-season demand.",
        materials: ["Soy wax — ₹450/kg", "Cotton wicks — ₹80/pack", "Fragrance oils — ₹250/bottle", "Glass jars — ₹40/each", "Dye chips — ₹120/pack", "Thermometer & double-boiler"],
        steps: ["Melt wax to 70°C in a double-boiler", "Add dye and fragrance at 65°C", "Pour into wick-set jars at 60°C", "Cool undisturbed for 24 hours", "Label, pack and photograph"],
        pricing: "Cost per candle × 3 is a healthy starting price. ₹120 cost → ₹350 sale price.",
        marketing: ["Photograph in natural light", "Bundle 3 for ₹899", "Offer custom scents for events", "Sell at community fairs and WhatsApp groups"],
      },
      {
        slug: "pickles", name: "Homemade Pickles", tag: "Food",
        cost: "₹1,500 – ₹4,000", level: "Beginner", levelLabel: "Beginner", earn: "₹6k – ₹20k / month",
        description: "Bottle your family recipes — mango, lime, gongura — and sell across your neighbourhood and city groups.",
        materials: ["Raw mango / lime — seasonal", "Mustard, fenugreek, chilli powder", "Sesame & groundnut oil", "Glass jars 250g/500g", "Food-grade labels"],
        steps: ["Sun-dry cut fruit overnight", "Roast and grind spices fresh", "Mix with salt and oil in clean jars", "Mature for 5–7 days in sunlight", "Label with date and batch"],
        pricing: "₹350 for 500g jar gives ~55% margin once labelling and jars are accounted for.",
        marketing: ["Sample at residents' WhatsApp groups", "Offer combos of two flavours", "Share family-recipe story on Instagram"],
      },
      {
        slug: "jewelry", name: "Jewelry Making", tag: "Fashion",
        cost: "₹3,000 – ₹8,000", level: "Intermediate", levelLabel: "Intermediate", earn: "₹10k – ₹40k / month",
        description: "Handcraft beaded, terracotta or thread jewelry for festivals, weddings and student fashion.",
        materials: ["Beads, stones, terracotta clay", "Jewelry wire and pliers", "Hooks, clasps and findings", "Display cards and pouches"],
        steps: ["Sketch 5–8 designs in a notebook", "Source raw beads in bulk", "Assemble in batches of 10–15", "Photograph on neutral background", "List on Instagram and local fairs"],
        pricing: "3× material cost for everyday pieces, 4–5× for bridal sets.",
        marketing: ["Reels of the making process", "Festival-themed limited drops", "Collaborate with a local boutique"],
      },
      {
        slug: "tailoring", name: "Tailoring", tag: "Fashion",
        cost: "₹5,000 – ₹15,000", level: "Intermediate", levelLabel: "Intermediate", earn: "₹8k – ₹35k / month",
        description: "Stitch blouses, kurtis, school uniforms and alterations from a small home studio.",
        materials: ["Sewing machine (single-needle)", "Measuring tape, scissors, chalk", "Threads, zips, buttons, interlining", "Mannequin (optional)"],
        steps: ["Take accurate measurements", "Cut fabric on a flat surface", "Stitch in panels, then assemble", "Finish hems and trims", "Iron and pack"],
        pricing: "Blouse ₹250–₹450, kurti ₹500–₹900. Bulk uniform orders priced per piece.",
        marketing: ["Tie up with nearby schools and boutiques", "Free pickup and drop within 2 km", "Display finished work in a small window"],
      },
      {
        slug: "gifts", name: "Customized Gifts", tag: "Gifting",
        cost: "₹2,000 – ₹6,000", level: "Beginner", levelLabel: "Beginner", earn: "₹7k – ₹22k / month",
        description: "Personalised hampers, name-printed mugs, photo frames and wrap services for birthdays and weddings.",
        materials: ["Plain mugs, frames, diaries", "Sublimation printer or vendor", "Wrapping paper, ribbons, boxes", "Calligraphy pens"],
        steps: ["Pick 3 hamper price points", "Source items in bulk monthly", "Personalise on order", "Wrap with signature style", "Deliver with handwritten note"],
        pricing: "Hampers from ₹499–₹2,499. Add ₹50–₹100 per personalisation.",
        marketing: ["Wedding-season Instagram catalogue", "Corporate gifting outreach to offices", "Loyalty discount for repeat orders"],
      },
      {
        slug: "nursery", name: "Plant Nursery", tag: "Green",
        cost: "₹4,000 – ₹12,000", level: "Beginner", levelLabel: "Beginner", earn: "₹10k – ₹30k / month",
        description: "Grow indoor plants, succulents and saplings on your terrace and sell to neighbours and gifting brands.",
        materials: ["Pots and grow bags", "Cocopeat, compost, perlite", "Mother plants for cuttings", "Watering cans and sprayers"],
        steps: ["Set up a shaded terrace section", "Propagate from cuttings monthly", "Repot at the right age", "Photograph healthy specimens", "Sell in batches of 10–20"],
        pricing: "Succulents ₹80–₹150, indoor plants ₹250–₹600 with decorative pot.",
        marketing: ["Open-house weekend at your terrace", "Care guide card with every plant", "Partner with gifting and decor brands"],
      },
      {
        slug: "paintings", name: "Paintings", tag: "Art",
        cost: "₹2,000 – ₹7,000", level: "Advanced", levelLabel: "Advanced", earn: "₹5k – ₹50k / month",
        description: "Sell acrylic, watercolour or folk-style paintings as originals, prints and commissioned portraits.",
        materials: ["Canvas / handmade paper", "Acrylic or watercolour set", "Brushes (sizes 0–12)", "Easel, palette, varnish"],
        steps: ["Develop a recognisable style", "Build a portfolio of 10 pieces", "Open commissions with clear sizes", "Offer prints for affordable buyers", "Frame and ship safely"],
        pricing: "A4 prints ₹500–₹1,500. Originals ₹3,000+ depending on size and time.",
        marketing: ["Time-lapse reels of your process", "Local cafe wall exhibition", "Commission slots opened monthly"],
      },
      {
        slug: "crochet", name: "Crochet Crafts", tag: "Crafts",
        cost: "₹1,000 – ₹3,000", level: "Beginner", levelLabel: "Beginner", earn: "₹6k – ₹18k / month",
        description: "Hand-crochet plant hangers, amigurumi toys, bags and baby booties in soft cotton and wool.",
        materials: ["Cotton and wool yarn", "Hooks sizes 2.5–6 mm", "Stuffing for toys", "Tags and packaging"],
        steps: ["Master 5 core stitches", "Pick a starter line (3 products)", "Time each piece for honest pricing", "Photograph styled flat-lays", "List on Instagram and Etsy"],
        pricing: "Charge ₹200 per hour of work + 2× material cost.",
        marketing: ["Baby-shower gift bundles", "Pre-order amigurumi characters", "Workshop a beginners' class"],
      },
    ],
    guide: {
      kicker: "Featured Startup Guide",
      title: "Handmade Candle Business — your first 30 days.",
      desc: "A complete walkthrough from raw wax to first sale, written for absolute beginners.",
      steps: [
        { t: "Gather your materials", d: "Wax (soy or paraffin), cotton wicks, fragrance oils, dyes, glass jars, double-boiler, thermometer." },
        { t: "Set a small budget", d: "Start with ₹3,000 for a batch of 25–30 candles. Reinvest profits before scaling." },
        { t: "Melt, scent, pour", d: "Melt wax to 70°C, mix fragrance at 65°C, pour at 60°C. Let cool undisturbed for 24 hours." },
        { t: "Price honestly", d: "Cost per candle ×3 is a healthy starting price. ₹120 cost → ₹350 sale price." },
        { t: "Market locally first", d: "WhatsApp neighbours, a small Instagram page, a corner at the next community fair." },
      ],
      materials: ["Soy wax — ₹450/kg", "Cotton wicks — ₹80/pack", "Fragrance oils — ₹250/bottle", "Glass jars — ₹40/each", "Dye chips — ₹120/pack"],
      materialsLabel: "Required Materials",
      cost: "₹3,000", costLabel: "Estimated Cost",
      costNote: "for a starter batch of ~25 candles. Average margin: 60%.",
      tips: ["Photograph in natural light", "Bundle 3 for ₹899", "Offer custom scents for events", "Ask buyers for a WhatsApp review"],
      tipsLabel: "Marketing Tips",
    },
  },
  market: {
    kicker: "Marketplace",
    title: "Handmade with love, from down the street.",
    desc: "Every product is made by a local creator in your community. Contact them directly to learn more or place an order.",
    footer: "The marketplace connects you directly to the maker — there are no payments or commissions on this platform.",
    products: [
      { name: "Soy Wax Candle Trio", price: "₹899", seller: "Lakshmi N.", area: "Kothapet", rating: 4.9 },
      { name: "Macrame Wall Hanging", price: "₹1,250", seller: "Anitha R.", area: "Madhapur", rating: 4.8 },
      { name: "Mango Pickle (500g)", price: "₹350", seller: "Sunitha K.", area: "Banjara Hills", rating: 5.0 },
      { name: "Hand-wrapped Gift Box", price: "₹650", seller: "Sravani M.", area: "Gachibowli", rating: 4.7 },
      { name: "Citronella Garden Candles", price: "₹599", seller: "Lakshmi N.", area: "Kothapet", rating: 4.6 },
      { name: "Crochet Plant Hanger", price: "₹450", seller: "Priya S.", area: "Tarnaka", rating: 4.9 },
      { name: "Roasted Murukku Pack", price: "₹220", seller: "Padma V.", area: "Dilsukhnagar", rating: 4.8 },
      { name: "Personalized Diary", price: "₹399", seller: "Sravani M.", area: "Gachibowli", rating: 4.7 },
    ],
  },
  stories: {
    kicker: "Success Stories",
    title: "Real makers. Real income. Real change.",
    list: [
      { name: "Lakshmi", role: "Homemaker · Kothapet", quote: "I started selling handmade candles from home and now earn a steady additional income every month — and I trained two neighbours too." },
      { name: "Priya", role: "Student · Tarnaka", quote: "Between classes, my small jewelry brand pays my college fees. The community guides taught me pricing and packaging." },
      { name: "Sakhi SHG", role: "Self-help Group · Dilsukhnagar", quote: "Twelve of us pooled our tailoring skills. We now stitch uniforms for two local schools and our families are proud." },
    ],
    women: {
      title: "Women Empowerment",
      desc: "Business opportunities, financial independence, and skill development designed around the rhythm of a household.",
      items: ["Tailored business ideas for homemakers", "Mentorship from successful women entrepreneurs", "Self-help group formation support", "Access to financial schemes"],
    },
    youth: {
      title: "Youth Entrepreneurship",
      desc: "For students and first-time founders — bite-sized startups that fit between lectures and life.",
      items: ["Low-cost student startup ideas", "Creative side-hustle blueprints", "Innovation workshops", "Peer founder community"],
    },
  },
  schemes: {
    kicker: "Government Schemes",
    title: "Support that already exists — explained simply.",
    searchPh: "Search schemes…",
    empty: "No schemes match your search.",
    benefitsLabel: "Benefits",
    eligibilityLabel: "Eligibility",
    list: [
      { name: "Women Entrepreneurship Support (Stand-Up India)", benefits: "Loans of ₹10 lakh to ₹1 crore for women-led enterprises.", eligibility: "Women aged 18+ starting a greenfield enterprise." },
      { name: "Self Help Group Assistance (DAY-NRLM)", benefits: "Revolving fund and community investment support for SHGs.", eligibility: "Registered SHGs with active savings for 3+ months." },
      { name: "Skill Development Programs (PMKVY)", benefits: "Free certified skill training and placement support.", eligibility: "Indian citizens aged 15–45 with basic literacy." },
      { name: "Startup Support Programs (Startup India Seed Fund)", benefits: "Grants up to ₹20 lakh for proof of concept and prototypes.", eligibility: "DPIIT-recognised startups under 2 years old." },
      { name: "Mudra Loan (Shishu)", benefits: "Collateral-free loans up to ₹50,000 for micro-enterprises.", eligibility: "Non-corporate, non-farm small business owners." },
      { name: "Mahila Coir Yojana", benefits: "Subsidy on motorised ratts for women coir artisans.", eligibility: "Women trained in coir spinning." },
    ],
  },
  about: {
    kicker: "About",
    title: "Built by the community, for the community.",
    desc: "Community Makers' Market began as a college community-service project and grew into a quiet place where neighbours help neighbours start something of their own.",
    missionTitle: "Our Mission",
    missionDesc: "Empowering local communities through entrepreneurship, skill development, and market access — so that talent close to home finds its rightful audience.",
    visionTitle: "Our Vision",
    visionDesc: "Creating a self-reliant and financially empowered community where every household has the means to convert craft into livelihood.",
    quote: "\"We don't sell things to the community. We help the community sell to itself.\"",
    cta: "Get in touch",
  },
  contact: {
    kicker: "Contact",
    title: "We'd love to hear from you.",
    name: "Your name", namePh: "Lakshmi N.",
    email: "Email", emailPh: "you@example.com",
    subject: "Subject", subjectPh: "How can we help?",
    message: "Message", messagePh: "Tell us a little about yourself and what you'd like to start…",
    send: "Send message", sent: "Thanks — we'll be in touch!",
    emailLabel: "Email", phoneLabel: "Phone", officeLabel: "Office",
    emailValue: "hello@makersmarket.in", phoneValue: "+91 90000 12345", officeValue: "Hyderabad, Telangana, India",
    follow: "Follow us",
  },
  footer: {
    tagline: "Empowering homemakers, students, artists, and self-help groups to turn their craft into a livelihood. Built with care, by the community, for the community.",
    quickLinks: "Quick Links", getInTouch: "Get in Touch",
    emailValue: "hello@makersmarket.in",
    phoneValue: "+91 90000 12345",
    addressValue: "Hyderabad, Telangana, India",
    rights: "All rights reserved.",
    madeWith: "Made with care for local creators.",
  },
};

const te: Translation = {
  nav: { home: "హోమ్", ideas: "వ్యాపార ఆలోచనలు", market: "మార్కెట్‌ప్లేస్", stories: "విజయ గాథలు", schemes: "ప్రభుత్వ పథకాలు", about: "మా గురించి", contact: "సంప్రదించండి" },
  lang: {
    title: "మీ భాషను ఎంచుకోండి",
    subtitle: "కొనసాగించడానికి మీకు నచ్చిన భాషను ఎంచుకోండి.",
    en: "English", te: "తెలుగు",
    continue: "కొనసాగించండి",
    changeNote: "మీరు ఎప్పుడైనా నావిగేషన్ బార్ నుండి భాషను మార్చుకోవచ్చు.",
    chip: "కమ్యూనిటీ మేకర్స్ మార్కెట్",
    enSub: "Continue in English",
    teSub: "తెలుగులో కొనసాగండి",
  },
  common: {
    learnMore: "మరింత తెలుసుకోండి",
    contactSeller: "విక్రేతను సంప్రదించండి",
    viewAll: "అన్నీ చూడండి",
    search: "శోధించండి",
    contact: "సంప్రదించండి",
    close: "మూసివేయి",
    startup: "ప్రారంభ ఖర్చు",
    skill: "నైపుణ్యం",
    earnings: "ఆదాయం",
    materials: "అవసరమైన వస్తువులు",
    steps: "దశల వారీ విధానం",
    pricingTips: "ధర సూచనలు",
    marketingTips: "మార్కెటింగ్ సూచనలు",
    overview: "పరిచయం",
    levels: { Beginner: "ప్రారంభకుడు", Intermediate: "మధ్యస్థాయి", Advanced: "నిపుణుడు" },
  },
  hero: {
    kicker: "ఒక సామాజిక వ్యవస్థాపకత వేదిక",
    titleA: "కమ్యూనిటీ", titleB: "మేకర్స్ మార్కెట్",
    tagline: "స్థానిక ప్రతిభకు మద్దతు ఇవ్వండి, బలమైన సమాజాన్ని నిర్మించండి.",
    desc: "గృహిణులు, విద్యార్థులు, కళాకారులు మరియు స్వయం సహాయక సంఘాల సభ్యులు తమ నైపుణ్యాలను ఆదాయ వనరుగా మార్చుకోవడానికి సహాయం చేస్తోంది — వంటగది నుండి చేతిపనుల వరకు.",
    cta1: "వ్యాపార ఆలోచనలను అన్వేషించండి", cta2: "అమ్మకం ప్రారంభించండి",
    stats: ["500+ ఆలోచనలు", "200+ సృజనకారులు", "100+ ఉత్పత్తులు", "50+ విజయ గాథలు"],
    today: "ఈరోజు", todayValue: "12 కొత్త మేకర్లు చేరారు",
  },
  why: {
    kicker: "ఈ వేదిక ఎందుకు ఉంది",
    title: "మన సమాజంలోని నిజమైన సమస్యలు — మరియు సున్నితమైన పరిష్కారం.",
    problemsTitle: "సమస్యలు",
    solutionsTitle: "మేము అందించేది",
    problems: [
      { t: "అవకాశం లేని ప్రతిభ", d: "మన పరిసరాల్లో నైపుణ్యం ఉన్నవారికి మార్కెట్‌లకు, కస్టమర్‌లకు ప్రవేశం లేదు." },
      { t: "దాగిన గృహిణులు", d: "సంవత్సరాల చేతిపని, ఇంటి వెలుపల తక్కువ గుర్తింపు." },
      { t: "ఎక్కడ మొదలు పెట్టాలి?", d: "నైపుణ్యాన్ని చిన్న వ్యాపారంగా మార్చే మొదటి అడుగు చాలామందికి తెలియదు." },
      { t: "భాష ఒక గోడ", d: "ఉపయోగకరమైన సమాచారం ప్రజలు ఆలోచించే భాషలో చేరదు." },
    ],
    solutions: [
      { t: "ఎంచుకున్న వ్యాపార ఆలోచనలు", d: "సాధారణ ఇంటి నైపుణ్యాలకు సరిపోయే వాస్తవిక, తక్కువ ఖర్చు ఆలోచనలు." },
      { t: "నేర్చుకునే వనరులు", d: "వస్తువులు, ధరలు మరియు మార్కెటింగ్‌పై దశల వారీ మార్గదర్శి." },
      { t: "ప్రదర్శించే వేదిక", d: "మీ పనిని కస్టమర్‌లు కనుగొనగల సరళమైన మార్కెట్‌ప్లేస్." },
      { t: "ప్రభుత్వ పథకాలు", d: "కార్యక్రమాలు మరియు సబ్సిడీలు, సులభమైన భాషలో." },
      { t: "సామాజిక మద్దతు", d: "ప్రతి అడుగులో మిమ్మల్ని ప్రోత్సహించే స్వయం సహాయక సంఘాలు, సహచరులు." },
    ],
  },
  impact: {
    kicker: "సామాజిక ప్రభావం",
    title: "చిన్న అడుగులు. నిజమైన ఆదాయం. నిజమైన జీవితాలు.",
    stats: [
      { n: "500+", l: "పంచుకున్న వ్యాపార ఆలోచనలు" },
      { n: "200+", l: "మద్దతు పొందిన స్థానిక సృజనకారులు" },
      { n: "100+", l: "ప్రదర్శించబడిన ఉత్పత్తులు" },
      { n: "50+", l: "విజయ గాథలు" },
    ],
  },
  featured: {
    kicker: "ప్రత్యేక గాథ",
    title: "\"పది కొవ్వొత్తులతో మొదలుపెట్టాను. ఇప్పుడు మా ఇంటి బిల్లులు తానే చెల్లిస్తుంది.\"",
    desc: "లక్ష్మి 2023 వర్షాకాలంలో తన వంటగది వద్ద చేతితో చేసిన కొవ్వొత్తుల వ్యాపారాన్ని ప్రారంభించింది. చిన్న కిట్ మరియు స్థిరమైన వాట్సాప్ సర్కిల్‌తో, ఆమె ఇప్పుడు మూడు నగరాలకు పంపుతోంది, ఇద్దరు పొరుగువారికి శిక్షణ ఇస్తోంది.",
    cta1: "మరిన్ని గాథలు చదవండి", cta2: "ఆలోచనలను చూడండి",
    caption: "లక్ష్మి, హైదరాబాద్",
  },
  ideas: {
    kicker: "వ్యాపార ఆలోచనలు",
    title: "ఒక చేతిపనిని ఎంచుకోండి. చిన్నగా ప్రారంభించండి. స్థిరంగా పెరగండి.",
    desc: "ఈ క్రింది ప్రతి ఆలోచన చిన్న ఇంటి ఏర్పాటుకు సరిపోతుంది, సామాజిక అభిప్రాయం ఆధారంగా నిజమైన ఖర్చు మరియు ఆదాయ శ్రేణులతో.",
    list: [
      {
        slug: "candles", name: "చేతితో చేసిన కొవ్వొత్తులు", tag: "ఇల్లు & అలంకరణ",
        cost: "₹2,000 – ₹5,000", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹8వేలు – ₹25వేలు",
        description: "మీ వంటగదిలో సువాసన గల సోయా లేదా పారాఫిన్ కొవ్వొత్తులు తయారు చేయండి — తక్కువ ఖర్చు చేతిపని, పండుగ సీజన్‌లో మంచి డిమాండ్.",
        materials: ["సోయా మైనం — ₹450/కిలో", "పత్తి విక్‌లు — ₹80/ప్యాక్", "సువాసన నూనెలు — ₹250/బాటిల్", "గాజు జార్లు — ₹40/ఒక్కటి", "రంగు చిప్స్ — ₹120/ప్యాక్", "థర్మామీటర్ & డబుల్-బాయిలర్"],
        steps: ["డబుల్-బాయిలర్‌లో మైనాన్ని 70°C వరకు కరిగించండి", "65°C వద్ద రంగు మరియు సువాసన కలపండి", "60°C వద్ద విక్ ఉన్న జార్లలో పోయండి", "24 గంటలు కదపకుండా చల్లారనివ్వండి", "లేబుల్ చేసి, ప్యాక్ చేసి, ఫోటో తీయండి"],
        pricing: "ఒక్క కొవ్వొత్తి ఖర్చు × 3 ఆరోగ్యకరమైన ప్రారంభ ధర. ₹120 ఖర్చు → ₹350 అమ్మకం ధర.",
        marketing: ["సహజ కాంతిలో ఫోటోలు తీయండి", "3 బండిల్ ₹899కి విక్రయించండి", "కార్యక్రమాలకు కస్టమ్ సువాసనలు ఇవ్వండి", "సామాజిక ఉత్సవాల్లో మరియు వాట్సాప్ గ్రూపుల్లో అమ్మండి"],
      },
      {
        slug: "pickles", name: "ఇంట్లో చేసిన ఊరగాయలు", tag: "ఆహారం",
        cost: "₹1,500 – ₹4,000", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹6వేలు – ₹20వేలు",
        description: "మీ కుటుంబ వంటకాలను బాటిల్ చేయండి — మామిడి, నిమ్మ, గోంగూర — మరియు మీ పరిసరాలు, నగర గ్రూపుల్లో అమ్మండి.",
        materials: ["ముడి మామిడి / నిమ్మ — సీజనల్", "ఆవాలు, మెంతులు, మిరప పొడి", "నువ్వులు & వేరుశెనగ నూనె", "గాజు జార్లు 250గ్రా/500గ్రా", "ఆహార-గ్రేడ్ లేబుళ్ళు"],
        steps: ["కట్ చేసిన పండ్లను రాత్రి ఎండలో ఆరబెట్టండి", "మసాలాలను తాజాగా వేయించి పొడి చేయండి", "శుభ్రమైన జార్లలో ఉప్పు మరియు నూనెతో కలపండి", "5–7 రోజులు ఎండలో ఉంచండి", "తేదీ మరియు బ్యాచ్‌తో లేబుల్ చేయండి"],
        pricing: "500గ్రా జార్ ₹350 — లేబుళ్ళు, జార్ల ఖర్చు తీసివేసిన తర్వాత ~55% మార్జిన్.",
        marketing: ["నివాసితుల వాట్సాప్ గ్రూపుల్లో శాంపిల్స్ ఇవ్వండి", "రెండు రుచుల కాంబో ఇవ్వండి", "ఇన్‌స్టాగ్రామ్‌లో కుటుంబ-రెసిపీ కథ పంచుకోండి"],
      },
      {
        slug: "jewelry", name: "ఆభరణాల తయారీ", tag: "ఫ్యాషన్",
        cost: "₹3,000 – ₹8,000", level: "Intermediate", levelLabel: "మధ్యస్థాయి", earn: "నెలకు ₹10వేలు – ₹40వేలు",
        description: "పండుగలు, వివాహాలు మరియు విద్యార్థి ఫ్యాషన్ కోసం పూసలు, టెర్రకోట లేదా దారం ఆభరణాలను చేతితో తయారు చేయండి.",
        materials: ["పూసలు, రాళ్ళు, టెర్రకోట మట్టి", "ఆభరణాల తీగ మరియు ప్లైయర్స్", "హుక్‌లు, క్లాస్ప్‌లు", "డిస్‌ప్లే కార్డులు మరియు సంచులు"],
        steps: ["నోట్‌బుక్‌లో 5–8 డిజైన్‌లు గీయండి", "ముడి పూసలను బల్క్‌లో సేకరించండి", "10–15 బ్యాచ్‌లుగా అసెంబుల్ చేయండి", "న్యూట్రల్ నేపథ్యంలో ఫోటో తీయండి", "ఇన్‌స్టాగ్రామ్ మరియు స్థానిక ఉత్సవాల్లో జాబితా చేయండి"],
        pricing: "రోజువారీ వస్తువులకు 3× ముడి ఖర్చు, వధువు సెట్‌లకు 4–5×.",
        marketing: ["తయారీ ప్రక్రియ రీల్స్", "పండుగ-థీమ్ లిమిటెడ్ డ్రాప్స్", "స్థానిక బుటిక్‌తో సహకారం"],
      },
      {
        slug: "tailoring", name: "టైలరింగ్", tag: "ఫ్యాషన్",
        cost: "₹5,000 – ₹15,000", level: "Intermediate", levelLabel: "మధ్యస్థాయి", earn: "నెలకు ₹8వేలు – ₹35వేలు",
        description: "చిన్న ఇంటి స్టూడియో నుండి బ్లౌజులు, కుర్తీలు, స్కూల్ యూనిఫాంలు మరియు ఆల్టరేషన్‌లు కుట్టండి.",
        materials: ["కుట్టు మిషన్ (సింగిల్-నీడిల్)", "కొలత టేప్, కత్తెర, చాక్", "దారాలు, జిప్‌లు, బటన్‌లు", "మానిక్విన్ (ఐచ్ఛికం)"],
        steps: ["ఖచ్చితమైన కొలతలు తీసుకోండి", "చదునైన ఉపరితలంపై వస్త్రాన్ని కత్తిరించండి", "ప్యానెల్స్‌లో కుట్టి, తర్వాత అసెంబుల్ చేయండి", "హెమ్‌లు మరియు ట్రిమ్స్ ముగించండి", "ఇస్త్రీ చేసి ప్యాక్ చేయండి"],
        pricing: "బ్లౌజ్ ₹250–₹450, కుర్తీ ₹500–₹900. బల్క్ యూనిఫాం ఆర్డర్లు ఒక్కో ముక్కకు.",
        marketing: ["సమీపంలోని పాఠశాలలు, బుటిక్‌లతో టైఅప్", "2 కిమీ లోపు ఉచిత పికప్ & డ్రాప్", "చిన్న కిటికీలో పూర్తయిన పని ప్రదర్శించండి"],
      },
      {
        slug: "gifts", name: "అనుకూలీకరించిన బహుమతులు", tag: "గిఫ్టింగ్",
        cost: "₹2,000 – ₹6,000", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹7వేలు – ₹22వేలు",
        description: "పుట్టినరోజులు మరియు వివాహాల కోసం పర్సనలైజ్డ్ హ్యాంపర్లు, పేరు ముద్రించిన మగ్‌లు, ఫోటో ఫ్రేమ్‌లు మరియు ర్యాప్ సేవలు.",
        materials: ["ప్లెయిన్ మగ్‌లు, ఫ్రేమ్‌లు, డైరీలు", "సబ్లిమేషన్ ప్రింటర్ లేదా వెండర్", "ర్యాపింగ్ పేపర్, రిబ్బన్‌లు, బాక్స్‌లు", "క్యాలిగ్రఫీ పెన్‌లు"],
        steps: ["3 హ్యాంపర్ ధర పాయింట్లు ఎంచుకోండి", "ప్రతి నెల వస్తువులను బల్క్‌లో సేకరించండి", "ఆర్డర్‌పై పర్సనలైజ్ చేయండి", "సిగ్నేచర్ స్టైల్‌తో ర్యాప్ చేయండి", "చేతితో రాసిన నోట్‌తో డెలివర్ చేయండి"],
        pricing: "హ్యాంపర్లు ₹499 నుండి ₹2,499 వరకు. ప్రతి పర్సనలైజేషన్‌కు ₹50–₹100 జోడించండి.",
        marketing: ["వివాహ సీజన్ ఇన్‌స్టాగ్రామ్ క్యాటలాగ్", "కార్యాలయాలకు కార్పొరేట్ గిఫ్టింగ్", "పునఃఆర్డర్లకు లాయల్టీ డిస్కౌంట్"],
      },
      {
        slug: "nursery", name: "మొక్కల నర్సరీ", tag: "ఆకుపచ్చ",
        cost: "₹4,000 – ₹12,000", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹10వేలు – ₹30వేలు",
        description: "మీ టెర్రస్‌పై ఇండోర్ మొక్కలు, సక్యులెంట్లు మరియు మొలకలు పెంచి పొరుగువారికి, గిఫ్టింగ్ బ్రాండ్‌లకు అమ్మండి.",
        materials: ["కుండీలు మరియు గ్రో బ్యాగ్‌లు", "కోకోపీట్, కంపోస్ట్, పెర్లైట్", "కటింగ్‌ల కోసం మదర్ ప్లాంట్‌లు", "నీటి కేన్‌లు మరియు స్ప్రేయర్లు"],
        steps: ["నీడ ఉన్న టెర్రస్ విభాగాన్ని ఏర్పాటు చేయండి", "ప్రతి నెల కటింగ్‌ల నుండి ప్రాపగేట్ చేయండి", "సరైన వయసులో రీపాట్ చేయండి", "ఆరోగ్యకరమైన నమూనాలను ఫోటో తీయండి", "10–20 బ్యాచ్‌లుగా అమ్మండి"],
        pricing: "సక్యులెంట్లు ₹80–₹150, ఇండోర్ మొక్కలు అలంకరణ కుండీతో ₹250–₹600.",
        marketing: ["మీ టెర్రస్‌లో వీకెండ్ ఓపెన్-హౌస్", "ప్రతి మొక్కతో సంరక్షణ మార్గదర్శి కార్డ్", "గిఫ్టింగ్ మరియు డెకర్ బ్రాండ్‌లతో భాగస్వామ్యం"],
      },
      {
        slug: "paintings", name: "చిత్రలేఖనం", tag: "కళ",
        cost: "₹2,000 – ₹7,000", level: "Advanced", levelLabel: "నిపుణుడు", earn: "నెలకు ₹5వేలు – ₹50వేలు",
        description: "ఆక్రిలిక్, వాటర్‌కలర్ లేదా జానపద చిత్రాలను ఒరిజినల్స్, ప్రింట్లు మరియు కమిషన్ చేసిన పోర్ట్రెయిట్‌లుగా అమ్మండి.",
        materials: ["కాన్వాస్ / హ్యాండ్‌మేడ్ పేపర్", "ఆక్రిలిక్ లేదా వాటర్‌కలర్ సెట్", "బ్రష్‌లు (0–12 సైజులు)", "ఈజల్, పాలెట్, వార్నిష్"],
        steps: ["గుర్తించదగిన శైలి అభివృద్ధి చేయండి", "10 ముక్కల పోర్ట్‌ఫోలియో రూపొందించండి", "స్పష్టమైన పరిమాణాలతో కమిషన్లు తెరవండి", "సరసమైన కొనుగోలుదారులకు ప్రింట్లు అందించండి", "సురక్షితంగా ఫ్రేమ్ చేసి షిప్ చేయండి"],
        pricing: "A4 ప్రింట్లు ₹500–₹1,500. ఒరిజినల్స్ సైజు, సమయం ఆధారంగా ₹3,000+.",
        marketing: ["మీ ప్రక్రియ టైమ్-లాప్స్ రీల్స్", "స్థానిక కేఫ్ గోడ ప్రదర్శన", "నెలవారీ కమిషన్ స్లాట్లు తెరవండి"],
      },
      {
        slug: "crochet", name: "క్రోచెట్ చేతిపనులు", tag: "చేతిపనులు",
        cost: "₹1,000 – ₹3,000", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹6వేలు – ₹18వేలు",
        description: "మృదువైన పత్తి మరియు ఉన్నితో మొక్కల హ్యాంగర్లు, అమిగురుమి బొమ్మలు, బ్యాగ్‌లు మరియు బేబీ బూటీలను చేతితో అల్లండి.",
        materials: ["పత్తి మరియు ఉన్ని దారం", "హుక్‌లు 2.5–6 మిమీ", "బొమ్మల కోసం స్టఫింగ్", "ట్యాగ్‌లు మరియు ప్యాకేజింగ్"],
        steps: ["5 ప్రాథమిక కుట్లు నేర్చుకోండి", "ప్రారంభ లైన్ ఎంచుకోండి (3 ఉత్పత్తులు)", "నిజమైన ధర కోసం ప్రతి ముక్క సమయం రికార్డ్ చేయండి", "స్టైల్డ్ ఫ్లాట్-లేస్ ఫోటో తీయండి", "ఇన్‌స్టాగ్రామ్ మరియు Etsyలో జాబితా చేయండి"],
        pricing: "గంటకు ₹200 + 2× ముడి ఖర్చు వసూలు చేయండి.",
        marketing: ["బేబీ-షవర్ గిఫ్ట్ బండిల్స్", "ప్రీ-ఆర్డర్ అమిగురుమి పాత్రలు", "ప్రారంభకుల వర్క్‌షాప్ నిర్వహించండి"],
      },
    ],
    guide: {
      kicker: "ప్రత్యేక ప్రారంభ మార్గదర్శి",
      title: "చేతితో చేసిన కొవ్వొత్తుల వ్యాపారం — మీ మొదటి 30 రోజులు.",
      desc: "ముడి మైనం నుండి మొదటి అమ్మకం వరకు, పూర్తి బిగినర్స్ కోసం రాసిన పూర్తి మార్గదర్శి.",
      steps: [
        { t: "వస్తువులను సేకరించండి", d: "మైనం (సోయా లేదా పారాఫిన్), పత్తి విక్‌లు, సువాసన నూనెలు, రంగులు, గాజు జార్లు, డబుల్-బాయిలర్, థర్మామీటర్." },
        { t: "చిన్న బడ్జెట్ సెట్ చేయండి", d: "25–30 కొవ్వొత్తుల బ్యాచ్‌కు ₹3,000తో ప్రారంభించండి. విస్తరించే ముందు లాభాలను తిరిగి పెట్టుబడి పెట్టండి." },
        { t: "కరిగించండి, సువాసన, పోయండి", d: "మైనాన్ని 70°C కరిగించండి, 65°Cలో సువాసన కలపండి, 60°Cలో పోయండి. 24 గంటలు కదపకుండా చల్లారనివ్వండి." },
        { t: "నిజాయితీగా ధర పెట్టండి", d: "ఒక్క కొవ్వొత్తి ఖర్చు ×3 ఆరోగ్యకర ప్రారంభ ధర. ₹120 ఖర్చు → ₹350 అమ్మకం." },
        { t: "మొదట స్థానికంగా మార్కెట్ చేయండి", d: "పొరుగువారికి వాట్సాప్, చిన్న ఇన్‌స్టాగ్రామ్ పేజీ, సమీప సామాజిక ఉత్సవంలో ఒక మూల." },
      ],
      materials: ["సోయా మైనం — ₹450/కిలో", "పత్తి విక్‌లు — ₹80/ప్యాక్", "సువాసన నూనెలు — ₹250/బాటిల్", "గాజు జార్లు — ₹40/ఒక్కటి", "రంగు చిప్స్ — ₹120/ప్యాక్"],
      materialsLabel: "అవసరమైన వస్తువులు",
      cost: "₹3,000", costLabel: "అంచనా ఖర్చు",
      costNote: "~25 కొవ్వొత్తుల ప్రారంభ బ్యాచ్‌కు. సగటు మార్జిన్: 60%.",
      tips: ["సహజ కాంతిలో ఫోటోలు తీయండి", "3 బండిల్ ₹899కి", "కార్యక్రమాలకు కస్టమ్ సువాసనలు ఇవ్వండి", "కొనుగోలుదారుల నుండి వాట్సాప్ రివ్యూ అడగండి"],
      tipsLabel: "మార్కెటింగ్ సూచనలు",
    },
  },
  market: {
    kicker: "మార్కెట్‌ప్లేస్",
    title: "మీ వీధి నుండి, ప్రేమతో చేతితో తయారు చేసినది.",
    desc: "ప్రతి ఉత్పత్తి మీ సమాజంలోని స్థానిక సృజనకారుడు తయారు చేస్తాడు. మరిన్ని వివరాలు లేదా ఆర్డర్ కోసం వారిని నేరుగా సంప్రదించండి.",
    footer: "మార్కెట్‌ప్లేస్ మిమ్మల్ని నేరుగా తయారీదారుతో కలుపుతుంది — ఈ వేదికపై చెల్లింపులు లేదా కమీషన్లు లేవు.",
    products: [
      { name: "సోయా వ్యాక్స్ క్యాండిల్ ట్రియో", price: "₹899", seller: "లక్ష్మి ఎన్.", area: "కొత్తపేట", rating: 4.9 },
      { name: "మ్యాక్రమే వాల్ హ్యాంగింగ్", price: "₹1,250", seller: "అనిత ఆర్.", area: "మాదాపూర్", rating: 4.8 },
      { name: "మామిడి ఊరగాయ (500గ్రా)", price: "₹350", seller: "సునీత కె.", area: "బంజారా హిల్స్", rating: 5.0 },
      { name: "చేతితో ర్యాప్ చేసిన బహుమతి బాక్స్", price: "₹650", seller: "శ్రావణి ఎం.", area: "గచ్చిబౌలి", rating: 4.7 },
      { name: "సిట్రోనెల్లా గార్డెన్ కొవ్వొత్తులు", price: "₹599", seller: "లక్ష్మి ఎన్.", area: "కొత్తపేట", rating: 4.6 },
      { name: "క్రోచెట్ ప్లాంట్ హ్యాంగర్", price: "₹450", seller: "ప్రియ ఎస్.", area: "తార్నాక", rating: 4.9 },
      { name: "రోస్టెడ్ ముర్కు ప్యాక్", price: "₹220", seller: "పద్మ వి.", area: "దిల్‌సుఖ్‌నగర్", rating: 4.8 },
      { name: "పర్సనలైజ్డ్ డైరీ", price: "₹399", seller: "శ్రావణి ఎం.", area: "గచ్చిబౌలి", rating: 4.7 },
    ],
  },
  stories: {
    kicker: "విజయ గాథలు",
    title: "నిజమైన మేకర్లు. నిజమైన ఆదాయం. నిజమైన మార్పు.",
    list: [
      { name: "లక్ష్మి", role: "గృహిణి · కొత్తపేట", quote: "నేను ఇంటి నుండి చేతితో చేసిన కొవ్వొత్తులు అమ్మడం ప్రారంభించాను మరియు ఇప్పుడు ప్రతి నెల స్థిరమైన అదనపు ఆదాయం పొందుతున్నాను — ఇద్దరు పొరుగువారికి శిక్షణ కూడా ఇచ్చాను." },
      { name: "ప్రియ", role: "విద్యార్థి · తార్నాక", quote: "క్లాసుల మధ్యలో, నా చిన్న ఆభరణాల బ్రాండ్ నా కాలేజీ ఫీజులు చెల్లిస్తుంది. సామాజిక మార్గదర్శులు ధరలు మరియు ప్యాకేజింగ్ నేర్పించారు." },
      { name: "సఖి స్వయం సహాయక సంఘం", role: "స్వయం సహాయక సంఘం · దిల్‌సుఖ్‌నగర్", quote: "మేము పన్నెండు మంది మా టైలరింగ్ నైపుణ్యాలను కలిపాము. ఇప్పుడు రెండు స్థానిక పాఠశాలలకు యూనిఫాంలు కుట్టుతున్నాము, మా కుటుంబాలు గర్వపడుతున్నాయి." },
    ],
    women: {
      title: "మహిళా సాధికారత",
      desc: "గృహ లయకు అనుగుణంగా రూపొందించిన వ్యాపార అవకాశాలు, ఆర్థిక స్వాతంత్ర్యం మరియు నైపుణ్య అభివృద్ధి.",
      items: ["గృహిణుల కోసం ప్రత్యేక వ్యాపార ఆలోచనలు", "విజయవంతమైన మహిళా వ్యవస్థాపకుల నుండి మార్గదర్శనం", "స్వయం సహాయక సంఘ ఏర్పాటు మద్దతు", "ఆర్థిక పథకాలకు ప్రవేశం"],
    },
    youth: {
      title: "యువ వ్యవస్థాపకత",
      desc: "విద్యార్థులు మరియు మొదటిసారి స్థాపకుల కోసం — ఉపన్యాసాలు మరియు జీవితం మధ్య సరిపోయే చిన్న స్టార్టప్‌లు.",
      items: ["తక్కువ ఖర్చు విద్యార్థి స్టార్టప్ ఆలోచనలు", "సృజనాత్మక సైడ్-హజిల్ బ్లూప్రింట్లు", "ఇన్నోవేషన్ వర్క్‌షాప్‌లు", "సహచర స్థాపక కమ్యూనిటీ"],
    },
  },
  schemes: {
    kicker: "ప్రభుత్వ పథకాలు",
    title: "ఇప్పటికే ఉన్న మద్దతు — సరళంగా వివరించబడింది.",
    searchPh: "పథకాలను శోధించండి…",
    empty: "మీ శోధనకు సరిపోయే పథకాలు లేవు.",
    benefitsLabel: "ప్రయోజనాలు",
    eligibilityLabel: "అర్హత",
    list: [
      { name: "మహిళా వ్యవస్థాపకత మద్దతు (స్టాండ్-అప్ ఇండియా)", benefits: "మహిళలు నడిపే సంస్థలకు ₹10 లక్షల నుండి ₹1 కోటి వరకు రుణాలు.", eligibility: "గ్రీన్‌ఫీల్డ్ సంస్థను ప్రారంభించే 18+ సంవత్సరాల మహిళలు." },
      { name: "స్వయం సహాయక సంఘ సహాయం (DAY-NRLM)", benefits: "SHGల కోసం రివాల్వింగ్ ఫండ్ మరియు సామాజిక పెట్టుబడి మద్దతు.", eligibility: "3+ నెలల చురుకైన పొదుపుతో నమోదైన SHGలు." },
      { name: "నైపుణ్య అభివృద్ధి కార్యక్రమాలు (PMKVY)", benefits: "ఉచిత సర్టిఫైడ్ నైపుణ్య శిక్షణ మరియు ప్లేస్‌మెంట్ మద్దతు.", eligibility: "ప్రాథమిక అక్షరాస్యత గల 15–45 సంవత్సరాల భారతీయులు." },
      { name: "స్టార్టప్ మద్దతు కార్యక్రమాలు (Startup India Seed Fund)", benefits: "ప్రూఫ్ ఆఫ్ కాన్సెప్ట్ మరియు ప్రోటోటైప్‌ల కోసం ₹20 లక్షల వరకు గ్రాంట్లు.", eligibility: "2 సంవత్సరాల లోపు DPIIT-గుర్తింపు పొందిన స్టార్టప్‌లు." },
      { name: "ముద్రా రుణం (శిశు)", benefits: "మైక్రో-సంస్థలకు తాకట్టు లేకుండా ₹50,000 వరకు రుణాలు.", eligibility: "నాన్-కార్పొరేట్, నాన్-ఫామ్ చిన్న వ్యాపారవేత్తలు." },
      { name: "మహిళా కయిర్ యోజన", benefits: "మహిళా కయిర్ కళాకారులకు మోటారైజ్డ్ రాట్‌లపై సబ్సిడీ.", eligibility: "కయిర్ స్పిన్నింగ్‌లో శిక్షణ పొందిన మహిళలు." },
    ],
  },
  about: {
    kicker: "మా గురించి",
    title: "సమాజం చేత, సమాజం కోసం నిర్మించబడింది.",
    desc: "కమ్యూనిటీ మేకర్స్ మార్కెట్ ఒక కళాశాల సామాజిక-సేవ ప్రాజెక్ట్‌గా ప్రారంభమై, పొరుగువారు పొరుగువారికి తమ సొంత పనిని ప్రారంభించడంలో సహాయపడే ప్రశాంత ప్రదేశంగా ఎదిగింది.",
    missionTitle: "మా లక్ష్యం",
    missionDesc: "వ్యవస్థాపకత, నైపుణ్య అభివృద్ధి మరియు మార్కెట్ ప్రవేశం ద్వారా స్థానిక సమాజాలను బలోపేతం చేయడం — ఇంటి సమీపంలోని ప్రతిభ తగిన ప్రేక్షకులను కనుగొంటుంది.",
    visionTitle: "మా దృష్టి",
    visionDesc: "ప్రతి గృహానికి చేతిపనిని జీవనోపాధిగా మార్చే సాధనాలు ఉండే స్వావలంబి మరియు ఆర్థికంగా సాధికారత గల సమాజాన్ని సృష్టించడం.",
    quote: "\"మేము సమాజానికి వస్తువులు అమ్మము. సమాజం తనకు తానే అమ్ముకోవడంలో సహాయం చేస్తాము.\"",
    cta: "సంప్రదించండి",
  },
  contact: {
    kicker: "సంప్రదించండి",
    title: "మీ నుండి వినడానికి మేము ఎదురుచూస్తున్నాము.",
    name: "మీ పేరు", namePh: "లక్ష్మి ఎన్.",
    email: "ఇమెయిల్", emailPh: "you@example.com",
    subject: "విషయం", subjectPh: "మేము ఎలా సహాయపడగలము?",
    message: "సందేశం", messagePh: "మీ గురించి మరియు మీరు ఏమి ప్రారంభించాలనుకుంటున్నారో కొద్దిగా చెప్పండి…",
    send: "సందేశం పంపండి", sent: "ధన్యవాదాలు — మేము సంప్రదిస్తాము!",
    emailLabel: "ఇమెయిల్", phoneLabel: "ఫోన్", officeLabel: "కార్యాలయం",
    emailValue: "hello@makersmarket.in", phoneValue: "+91 90000 12345", officeValue: "హైదరాబాద్, తెలంగాణ, భారతదేశం",
    follow: "మమ్మల్ని అనుసరించండి",
  },
  footer: {
    tagline: "గృహిణులు, విద్యార్థులు, కళాకారులు మరియు స్వయం సహాయక సంఘాల సభ్యులు తమ చేతిపనిని జీవనోపాధిగా మార్చుకోవడానికి సహాయం చేస్తోంది. సమాజం చేత, సమాజం కోసం, ప్రేమతో నిర్మించబడింది.",
    quickLinks: "త్వరిత లింకులు", getInTouch: "సంప్రదించండి",
    emailValue: "hello@makersmarket.in",
    phoneValue: "+91 90000 12345",
    addressValue: "హైదరాబాద్, తెలంగాణ, భారతదేశం",
    rights: "అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.",
    madeWith: "స్థానిక సృజనకారుల కోసం ప్రేమతో తయారు చేయబడింది.",
  },
};

export const translations: Record<"en" | "te", Translation> = { en, te };