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
    shopLinks: "Where to buy materials",
    categories: { starter: "Basic Starter Ideas", under100: "Under ₹100 Startup Cost", under200: "Under ₹200 Startup Cost" },
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
      {
        slug: "crochet-flowers", name: "Crochet Flowers", tag: "Crafts", category: "starter",
        cost: "₹500 – ₹1,500", level: "Beginner", levelLabel: "Beginner", earn: "₹3k – ₹10k / month",
        description: "Soft, lasting crochet flowers and bouquets — popular for gifts, weddings and home decor.",
        materials: ["Cotton yarn (mixed colours)", "Crochet hook 3 mm", "Floral wire & green tape"],
        steps: ["Learn 3 basic petal patterns", "Crochet 5–7 petals per flower", "Assemble onto wired stems", "Bundle as bouquets or singles"],
        pricing: "Single stem ₹50, bouquet of 7 ₹350–₹500.",
        marketing: ["Sell at college fests", "Take wedding-favour bulk orders", "Reels showing soft pastel bouquets"],
        shopLinks: [
          { label: "Cotton yarn", url: "https://www.amazon.in/s?k=cotton+yarn+for+crochet" },
          { label: "Crochet hooks", url: "https://www.amazon.in/s?k=crochet+hook+set" },
        ],
      },
      {
        slug: "resin-keychains", name: "Resin Keychains", tag: "Accessories", category: "starter",
        cost: "₹1,500 – ₹4,000", level: "Beginner", levelLabel: "Beginner", earn: "₹5k – ₹15k / month",
        description: "Pour clear epoxy resin into moulds with flowers, glitter or names — easy, photogenic, gift-friendly.",
        materials: ["Epoxy resin + hardener", "Silicone moulds (assorted)", "Dried flowers / glitter / pigments", "Keyring hooks"],
        steps: ["Mix resin 1:1 in a paper cup", "Pour halfway, add inclusions, top up", "Cure 24 hours undisturbed", "Demould, sand edges, attach hook"],
        pricing: "₹120 each; bulk customised at ₹100 × 25.",
        marketing: ["Couple-name keychain bundles", "Return-gift packs of 25/50", "Instagram reels of pouring"],
        shopLinks: [
          { label: "Epoxy resin kit", url: "https://www.amazon.in/s?k=epoxy+resin+for+art" },
          { label: "Silicone moulds", url: "https://www.amazon.in/s?k=silicone+keychain+mould" },
          { label: "Keyring hooks", url: "https://www.amazon.in/s?k=keychain+hooks+bulk" },
        ],
      },
      {
        slug: "tote-bags", name: "Painted Tote Bags", tag: "Fashion", category: "starter",
        cost: "₹1,000 – ₹3,000", level: "Beginner", levelLabel: "Beginner", earn: "₹5k – ₹15k / month",
        description: "Hand-paint plain cotton totes with quotes, florals and characters — student-friendly daily-use bag.",
        materials: ["Plain cotton totes", "Fabric paints + brushes", "Stencils (optional)"],
        steps: ["Sketch design lightly with pencil", "Paint in 2 thin coats", "Heat-set with iron for wash safety", "Tag and pack"],
        pricing: "Plain ₹250; custom name/quote ₹399; full design ₹550.",
        marketing: ["College canteen pop-ups", "Bridesmaid squad sets", "Instagram drops in 10-piece batches"],
        shopLinks: [
          { label: "Cotton tote bags", url: "https://www.amazon.in/s?k=plain+cotton+tote+bag" },
          { label: "Fabric paints", url: "https://www.amazon.in/s?k=fabric+paint+set" },
        ],
      },
      {
        slug: "chocolates", name: "Homemade Chocolates", tag: "Food", category: "starter",
        cost: "₹1,500 – ₹4,000", level: "Beginner", levelLabel: "Beginner", earn: "₹6k – ₹20k / month",
        description: "Hand-moulded chocolates with nuts, fillings and festive packaging — strong Rakhi/Diwali/Valentine sales.",
        materials: ["Compound dark/white chocolate slabs", "Silicone chocolate moulds", "Nuts, sprinkles, fillings", "Boxes & butter paper"],
        steps: ["Double-boil chocolate to 45°C", "Pour into mould, add filling, cap with chocolate", "Refrigerate 30 mins", "Demould and box prettily"],
        pricing: "Box of 9 ₹299; box of 16 ₹499; premium box ₹799.",
        marketing: ["Festival pre-orders 2 weeks ahead", "Corporate hamper combos", "Free sample with first 10 orders"],
        shopLinks: [
          { label: "Compound chocolate", url: "https://www.amazon.in/s?k=morde+compound+chocolate" },
          { label: "Chocolate moulds", url: "https://www.amazon.in/s?k=silicone+chocolate+mould" },
          { label: "Chocolate boxes", url: "https://www.amazon.in/s?k=chocolate+packaging+box" },
        ],
      },
      {
        slug: "mugs", name: "Personalized Mugs", tag: "Gifting", category: "starter",
        cost: "₹2,000 – ₹5,000", level: "Beginner", levelLabel: "Beginner", earn: "₹7k – ₹18k / month",
        description: "Sublimation-printed mugs with names, photos and quotes — top-selling personalised gift.",
        materials: ["Plain sublimation mugs", "Sublimation printer access (or vendor)", "Heat press (or rent hourly)", "Gift boxes"],
        steps: ["Design in Canva (free templates)", "Print on sublimation paper", "Wrap on mug, heat-press 180°C × 3 min", "Cool, polish and box"],
        pricing: "Single ₹249; couple set ₹449; bulk corporate ₹199 × 50.",
        marketing: ["Birthday gift Instagram catalogue", "Anniversary couple combos", "Corporate logo mug pitch"],
        shopLinks: [
          { label: "Sublimation mugs", url: "https://www.amazon.in/s?k=sublimation+blank+mugs" },
          { label: "Sublimation paper", url: "https://www.amazon.in/s?k=sublimation+paper+a4" },
          { label: "Mug heat press", url: "https://www.amazon.in/s?k=mug+heat+press+machine" },
        ],
      },
      {
        slug: "soaps", name: "Handmade Soaps", tag: "Wellness", category: "starter",
        cost: "₹2,000 – ₹6,000", level: "Beginner", levelLabel: "Beginner", earn: "₹6k – ₹20k / month",
        description: "Melt-and-pour glycerine soaps with essential oils, flowers and exfoliants — wellness gifting bestseller.",
        materials: ["Glycerine soap base", "Essential oils (lavender, rose, tea-tree)", "Dried flowers, oats, coffee", "Silicone moulds"],
        steps: ["Melt soap base 60°C", "Add colour and 2% essential oil", "Pour into moulds, add botanicals", "Cure 24h, wrap with kraft paper"],
        pricing: "Single bar ₹149; gift trio ₹399; wedding favour ₹79 × 50.",
        marketing: ["Wellness gift hampers", "Eco-friendly kraft packaging", "Sample at yoga studios and salons"],
        shopLinks: [
          { label: "Soap base", url: "https://www.amazon.in/s?k=glycerine+soap+base+melt+and+pour" },
          { label: "Essential oils", url: "https://www.amazon.in/s?k=essential+oil+set" },
          { label: "Soap moulds", url: "https://www.amazon.in/s?k=silicone+soap+mould" },
        ],
      },
      {
        slug: "planters", name: "Decorative Planters", tag: "Home & Decor", category: "starter",
        cost: "₹800 – ₹2,500", level: "Beginner", levelLabel: "Beginner", earn: "₹4k – ₹12k / month",
        description: "Hand-painted terracotta or upcycled bottle planters — pair with small plants for higher value.",
        materials: ["Terracotta pots (assorted)", "Acrylic paints + sealer", "Brushes, sponges"],
        steps: ["Wash and prime pots", "Paint base coat", "Add patterns (mandala, boho, faces)", "Seal with varnish"],
        pricing: "Small ₹120, medium ₹250, large painted ₹450.",
        marketing: ["Plant-shop tie-ups", "Mother's Day combo with succulent", "Customised office desk planters"],
        shopLinks: [
          { label: "Terracotta pots", url: "https://www.amazon.in/s?k=terracotta+pots+small" },
          { label: "Acrylic paint set", url: "https://www.amazon.in/s?k=acrylic+paint+set" },
        ],
      },
      {
        slug: "eco-products", name: "Eco-Friendly Products", tag: "Sustainable", category: "starter",
        cost: "₹1,000 – ₹3,000", level: "Beginner", levelLabel: "Beginner", earn: "₹5k – ₹15k / month",
        description: "Seed paper, jute bags, bamboo toothbrushes, beeswax wraps — ride the rising sustainable-gifting wave.",
        materials: ["Jute / cotton cloth", "Seed paper sheets", "Bamboo blanks (toothbrush, comb)", "Beeswax + cotton fabric"],
        steps: ["Pick 2–3 starter products", "Source from verified eco-suppliers", "Brand with kraft tags 'Made with care'", "Sell in starter kits"],
        pricing: "Seed-paper cards ₹50; eco-kits ₹499; jute bag ₹199.",
        marketing: ["Earth Day campaigns", "School and college eco-stalls", "Corporate sustainable gifting pitch"],
        shopLinks: [
          { label: "Jute bags wholesale", url: "https://www.amazon.in/s?k=jute+bags+plain+bulk" },
          { label: "Seed paper", url: "https://www.amazon.in/s?k=seed+paper" },
          { label: "Bamboo toothbrushes", url: "https://www.amazon.in/s?k=bamboo+toothbrush+bulk" },
        ],
      },
      {
        slug: "bookmarks", name: "Handmade Bookmarks", tag: "Stationery", category: "under100",
        cost: "₹50 – ₹100", level: "Beginner", levelLabel: "Beginner", earn: "₹2k – ₹6k / month",
        description: "Painted, pressed-flower or tassel bookmarks — tiny investment, perfect for college fairs.",
        materials: ["Cardstock / handmade paper", "Watercolours or markers", "Yarn for tassels", "Lamination sheets (optional)"],
        steps: ["Cut to 2×6 inches", "Paint / decorate both sides", "Punch hole, add tassel", "Laminate for durability"],
        pricing: "Single ₹40; pack of 5 ₹150.",
        marketing: ["Bookstore consignment", "Reading-club gift packs", "Book-themed Instagram reels"],
        shopLinks: [{ label: "Cardstock", url: "https://www.amazon.in/s?k=cardstock+paper+a4" }],
      },
      {
        slug: "friendship-bands", name: "Friendship Bands", tag: "Accessories", category: "under100",
        cost: "₹50 – ₹100", level: "Beginner", levelLabel: "Beginner", earn: "₹2k – ₹5k / month",
        description: "Woven thread bands — high demand around Friendship Day and Rakhi.",
        materials: ["Embroidery threads", "Safety pin / clipboard", "Small beads (optional)"],
        steps: ["Cut 4–6 strands of 60 cm", "Knot top, secure with pin", "Weave macrame pattern", "Tie ends, trim"],
        pricing: "Single ₹40; pack of 3 ₹100.",
        marketing: ["Friendship Day pre-orders", "School-gate pop-ups", "Customise with names"],
        shopLinks: [{ label: "Embroidery thread bundle", url: "https://www.amazon.in/s?k=embroidery+thread+anchor" }],
      },
      {
        slug: "paper-flowers", name: "Paper Flowers", tag: "Decor", category: "under100",
        cost: "₹80 – ₹100", level: "Beginner", levelLabel: "Beginner", earn: "₹3k – ₹8k / month",
        description: "Crepe and origami paper flowers for backdrops, gifting and event decor.",
        materials: ["Crepe paper rolls", "Floral wire", "Glue gun"],
        steps: ["Cut petal templates", "Roll and shape petals", "Wire onto stems", "Bundle as bouquets"],
        pricing: "Single ₹30; bouquet ₹250; backdrop set ₹999.",
        marketing: ["Wedding decor tie-ups", "Mother's Day bouquets", "Photo-booth backdrops"],
        shopLinks: [{ label: "Crepe paper", url: "https://www.amazon.in/s?k=crepe+paper+rolls" }],
      },
      {
        slug: "origami", name: "Origami Decorations", tag: "Decor", category: "under100",
        cost: "₹50 – ₹100", level: "Beginner", levelLabel: "Beginner", earn: "₹2k – ₹6k / month",
        description: "Folded paper cranes, stars and garlands for parties and nursery decor.",
        materials: ["Origami paper packs", "Thread / fishing line", "Small clips"],
        steps: ["Pick a theme (cranes, stars, hearts)", "Fold 30–50 pieces", "String into garlands", "Bundle with care instructions"],
        pricing: "Garland ₹150; party set ₹499.",
        marketing: ["Baby-shower decor packs", "Birthday garland themes", "Sell on Instagram with reels"],
        shopLinks: [{ label: "Origami paper", url: "https://www.amazon.in/s?k=origami+paper+pack" }],
      },
      {
        slug: "greeting-cards", name: "Greeting Cards", tag: "Stationery", category: "under100",
        cost: "₹80 – ₹100", level: "Beginner", levelLabel: "Beginner", earn: "₹3k – ₹9k / month",
        description: "Handmade cards for birthdays, anniversaries, festivals — small, personal, easy to scale.",
        materials: ["Cardstock", "Decorative paper / washi tape", "Markers and pens"],
        steps: ["Cut to A6 size", "Design front with theme", "Add handwritten message inside", "Pack with envelope"],
        pricing: "Single ₹50; festive pack of 10 ₹399.",
        marketing: ["Festival pre-orders", "Office bulk birthday cards", "Card-of-the-month subscription"],
        shopLinks: [
          { label: "Cardstock", url: "https://www.amazon.in/s?k=greeting+card+cardstock" },
          { label: "Washi tape set", url: "https://www.amazon.in/s?k=washi+tape+set" },
        ],
      },
      {
        slug: "gift-tags", name: "Gift Tags", tag: "Stationery", category: "under100",
        cost: "₹50 – ₹100", level: "Beginner", levelLabel: "Beginner", earn: "₹2k – ₹5k / month",
        description: "Mini decorative tags for gift hampers — high volume, easy add-on for hamper makers.",
        materials: ["Kraft cardstock", "Twine / ribbon", "Tag punches"],
        steps: ["Punch / cut tag shapes", "Stamp or write name", "Thread twine", "Pack in sets of 10"],
        pricing: "Pack of 10 ₹99; pack of 25 ₹199.",
        marketing: ["Bulk supply to hamper sellers", "Custom event tags", "Wedding favour tags"],
        shopLinks: [{ label: "Kraft tags", url: "https://www.amazon.in/s?k=kraft+gift+tags" }],
      },
      {
        slug: "simple-keychains", name: "Simple Keychains", tag: "Accessories", category: "under100",
        cost: "₹80 – ₹100", level: "Beginner", levelLabel: "Beginner", earn: "₹2k – ₹6k / month",
        description: "Beaded, wooden or felt keychains — light, mailable, perfect for online sales.",
        materials: ["Beads / felt / wood blanks", "Keyring hooks", "Jump rings & pliers"],
        steps: ["Pick a daily theme (animals, alphabets)", "Assemble in batches of 10", "Attach to keyrings", "Card-pack with logo"],
        pricing: "Single ₹49; pack of 3 ₹120.",
        marketing: ["School fest stalls", "Initial-letter custom orders", "Couple keychain combos"],
        shopLinks: [
          { label: "Keyring blanks", url: "https://www.amazon.in/s?k=keychain+blanks" },
          { label: "Bead variety pack", url: "https://www.amazon.in/s?k=beads+for+keychain" },
        ],
      },
      {
        slug: "envelopes", name: "Decorative Envelopes", tag: "Stationery", category: "under100",
        cost: "₹50 – ₹100", level: "Beginner", levelLabel: "Beginner", earn: "₹2k – ₹6k / month",
        description: "Money envelopes (shagun), wedding invites, festival envelopes with hand-painted accents.",
        materials: ["Coloured paper / cardstock", "Glue stick", "Stickers, glitter, calligraphy pens"],
        steps: ["Cut envelope templates", "Fold and glue", "Decorate front with theme", "Pack 10 per pouch"],
        pricing: "Pack of 10 ₹120; premium pack ₹250.",
        marketing: ["Wedding-season pre-orders", "Diwali shagun packs", "Customised name envelopes"],
        shopLinks: [{ label: "Coloured cardstock", url: "https://www.amazon.in/s?k=coloured+cardstock+paper" }],
      },
      {
        slug: "photo-collages", name: "Photo Collages", tag: "Gifting", category: "under100",
        cost: "₹80 – ₹100", level: "Beginner", levelLabel: "Beginner", earn: "₹3k – ₹10k / month",
        description: "Frame-ready handmade photo collages — strong birthday and anniversary gift seller.",
        materials: ["A3/A4 chart paper", "Print shop access", "Glue, ribbon, washi tape"],
        steps: ["Collect 10–15 photos from client", "Print at local shop", "Arrange and paste on chart", "Add captions and decor"],
        pricing: "A4 ₹299; A3 ₹499; framed +₹150.",
        marketing: ["Birthday surprise gift posts", "Couple anniversary specials", "Friendship Day group orders"],
        shopLinks: [{ label: "Chart paper / mount board", url: "https://www.amazon.in/s?k=mount+board+a3" }],
      },
      {
        slug: "quote-cards", name: "Quote Cards", tag: "Decor", category: "under100",
        cost: "₹50 – ₹100", level: "Beginner", levelLabel: "Beginner", earn: "₹2k – ₹6k / month",
        description: "Mini calligraphy or printed quote cards for desks, walls and journals.",
        materials: ["Cardstock", "Calligraphy pens", "Optional: mini wooden easel"],
        steps: ["Curate 10 quote themes", "Hand-letter on cardstock", "Pack in sets of 5", "Optional easel for ₹50 add-on"],
        pricing: "Set of 5 ₹149; with easel ₹199.",
        marketing: ["Desk-decor Instagram reels", "Birthday gift add-on", "Bookstore consignment"],
        shopLinks: [
          { label: "Calligraphy pen set", url: "https://www.amazon.in/s?k=calligraphy+pen+set" },
          { label: "Cardstock", url: "https://www.amazon.in/s?k=cardstock+a6" },
        ],
      },
      {
        slug: "hair-bows", name: "Hair Bows", tag: "Accessories", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "Beginner", earn: "₹3k – ₹9k / month",
        description: "Ribbon and fabric bows on clips — easy, fast, popular with mothers of young kids.",
        materials: ["Satin / grosgrain ribbons", "Alligator clips", "Glue gun"],
        steps: ["Cut 6-inch ribbon strips", "Pinch and tie into bow", "Glue onto clip", "Card-pack in pairs"],
        pricing: "Single ₹50; pair ₹89; pack of 6 ₹299.",
        marketing: ["Birthday party theme sets", "School-mom WhatsApp groups", "Instagram mini-shop reels"],
        shopLinks: [
          { label: "Ribbon variety pack", url: "https://www.amazon.in/s?k=satin+ribbon+roll+set" },
          { label: "Alligator clips", url: "https://www.amazon.in/s?k=alligator+hair+clips+plain" },
        ],
      },
      {
        slug: "scrunchies", name: "Scrunchies", tag: "Fashion", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "Beginner", earn: "₹3k – ₹10k / month",
        description: "Fabric hair scrunchies in trendy prints — quick to sew, viral on Instagram.",
        materials: ["Cotton / satin fabric scraps", "Elastic (5 mm)", "Sewing machine or needle"],
        steps: ["Cut 4×20 inch strips", "Fold and sew into tube", "Thread elastic through, knot", "Stitch closed"],
        pricing: "Single ₹79; pack of 3 ₹199; pack of 6 ₹349.",
        marketing: ["Trendy print mini-collections", "Matching scrunchie + mask combos", "College fest stalls"],
        shopLinks: [
          { label: "Cotton fabric scraps", url: "https://www.amazon.in/s?k=cotton+fabric+fat+quarters" },
          { label: "Elastic roll", url: "https://www.amazon.in/s?k=elastic+5mm+roll" },
        ],
      },
      {
        slug: "beaded-bracelets", name: "Beaded Bracelets", tag: "Jewelry", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "Beginner", earn: "₹3k – ₹12k / month",
        description: "Trendy alphabet, evil-eye and pearl bracelets — Gen-Z bestseller.",
        materials: ["Seed & alphabet beads", "Elastic cord", "Charms (evil eye, pearls)"],
        steps: ["Measure 7-inch elastic", "Thread beads in pattern", "Tie double knot, dab glue", "Hide knot inside bead"],
        pricing: "Single ₹99; name bracelet ₹149; stack of 3 ₹299.",
        marketing: ["Custom name orders", "BFF matching sets", "Instagram drops"],
        shopLinks: [
          { label: "Alphabet beads", url: "https://www.amazon.in/s?k=alphabet+beads" },
          { label: "Elastic cord", url: "https://www.amazon.in/s?k=stretch+cord+for+bracelets" },
        ],
      },
      {
        slug: "beaded-rings", name: "Beaded Rings", tag: "Jewelry", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "Beginner", earn: "₹2k – ₹8k / month",
        description: "Daisy and flower beaded rings — tiny, viral, easy gift item.",
        materials: ["Seed beads", "Beading wire 0.3 mm", "Wire cutters"],
        steps: ["Cut 8-inch wire", "Thread petals + centre bead", "Wrap around finger gauge", "Twist ends and trim"],
        pricing: "Single ₹69; pack of 3 ₹179.",
        marketing: ["Trendy flatlay reels", "College stalls", "Friendship-Day combos"],
        shopLinks: [{ label: "Seed beads", url: "https://www.amazon.in/s?k=seed+beads+for+jewellery" }],
      },
      {
        slug: "phone-charms", name: "Phone Charms", tag: "Accessories", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "Beginner", earn: "₹3k – ₹10k / month",
        description: "Beaded phone charm straps — trending Y2K accessory.",
        materials: ["Beads, pearls, charms", "Phone strap with loop", "Jump rings & pliers"],
        steps: ["Pick a colour story", "Thread beads onto strap", "Attach charm with jump ring", "Card-pack"],
        pricing: "Single ₹149; set of 2 ₹249.",
        marketing: ["Phone-case combos", "Y2K aesthetic reels", "Custom initials"],
        shopLinks: [
          { label: "Phone strap blanks", url: "https://www.amazon.in/s?k=phone+strap+charm+blanks" },
          { label: "Pearl beads", url: "https://www.amazon.in/s?k=pearl+beads" },
        ],
      },
      {
        slug: "handmade-earrings", name: "Handmade Earrings", tag: "Jewelry", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "Beginner", earn: "₹4k – ₹15k / month",
        description: "Polymer clay, fabric or beaded earrings — endless designs, low material cost.",
        materials: ["Polymer clay / fabric / beads", "Earring hooks", "Jump rings, pliers"],
        steps: ["Sketch 5 design options", "Shape and bake / assemble", "Attach hooks with jump rings", "Card-pack"],
        pricing: "Single pair ₹149; bridal pair ₹399.",
        marketing: ["Saree-paired Instagram reels", "Boutique consignment", "Festival collections"],
        shopLinks: [
          { label: "Polymer clay", url: "https://www.amazon.in/s?k=polymer+clay+set" },
          { label: "Earring hooks", url: "https://www.amazon.in/s?k=earring+hooks+gold" },
        ],
      },
      {
        slug: "decorative-jars", name: "Decorative Jars", tag: "Home & Decor", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "Beginner", earn: "₹3k – ₹10k / month",
        description: "Painted and decoupage glass jars for candles, gifting and storage.",
        materials: ["Used glass jars (washed)", "Acrylic paints / decoupage napkins", "Mod-podge glue"],
        steps: ["Clean and prime jars", "Paint or decoupage", "Seal with varnish", "Optional: fill with fairy lights"],
        pricing: "Single ₹199; fairy-light jar ₹399.",
        marketing: ["Wedding centrepiece sets", "Diwali fairy-light jars", "Eco-upcycle Instagram angle"],
        shopLinks: [
          { label: "Decoupage napkins", url: "https://www.amazon.in/s?k=decoupage+napkins" },
          { label: "Mod podge", url: "https://www.amazon.in/s?k=mod+podge" },
          { label: "Fairy lights", url: "https://www.amazon.in/s?k=fairy+lights+battery" },
        ],
      },
      {
        slug: "pencil-holders", name: "Recycled Pencil Holders", tag: "Stationery", category: "under200",
        cost: "₹100 – ₹200", level: "Beginner", levelLabel: "Beginner", earn: "₹2k – ₹7k / month",
        description: "Pencil and brush holders from tin cans, jars and cardboard tubes — eco-themed.",
        materials: ["Tin cans / jars / tubes", "Jute rope, fabric, paint", "Glue gun"],
        steps: ["Clean and prime base", "Wrap with rope / fabric", "Decorate with embellishments", "Tag as eco-product"],
        pricing: "Single ₹199; desk-set of 3 ₹499.",
        marketing: ["Back-to-school season", "Office desk-set orders", "Eco-influencer collabs"],
        shopLinks: [
          { label: "Jute rope", url: "https://www.amazon.in/s?k=jute+rope+roll" },
          { label: "Hot glue gun", url: "https://www.amazon.in/s?k=hot+glue+gun" },
        ],
      },
      {
        slug: "custom-notebooks", name: "Customized Notebooks", tag: "Stationery", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "Beginner", earn: "₹3k – ₹12k / month",
        description: "Plain notebooks dressed up with painted, fabric or photo covers — popular gifting line.",
        materials: ["Plain hardbound notebooks", "Fabric / paint / printed photos", "Glue, sealer"],
        steps: ["Pick cover style (paint, fabric, photo)", "Cover front and back", "Add name in calligraphy", "Wrap and ribbon"],
        pricing: "A6 ₹199; A5 ₹299; photo-cover ₹399.",
        marketing: ["Bridesmaid sets", "Office onboarding gift pitch", "Birthday name notebooks"],
        shopLinks: [
          { label: "Plain notebooks bulk", url: "https://www.amazon.in/s?k=plain+notebook+hardbound" },
          { label: "Fabric scraps", url: "https://www.amazon.in/s?k=fabric+scraps+craft" },
        ],
      },
      {
        slug: "mini-frames", name: "Mini Photo Frames", tag: "Gifting", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "Beginner", earn: "₹3k – ₹10k / month",
        description: "Decorated mini frames with printed photos — affordable personal gift.",
        materials: ["Wooden / MDF mini frames", "Acrylic paints, decoupage", "Local print-shop access"],
        steps: ["Paint / decoupage frame", "Print 4×6 photo from client", "Fit photo and back board", "Wrap as gift"],
        pricing: "Single ₹199; set of 3 ₹499.",
        marketing: ["Anniversary memory sets", "Birthday surprise gifts", "Reels of unboxing"],
        shopLinks: [
          { label: "Mini wooden frames", url: "https://www.amazon.in/s?k=mini+wooden+photo+frame" },
          { label: "Acrylic paint set", url: "https://www.amazon.in/s?k=acrylic+paint+set" },
        ],
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
      { name: "Soy Wax Candle Trio", price: "₹899", seller: "Lakshmi N.", area: "Kothapet", rating: 4.9, image: "https://images.unsplash.com/photo-1602874801006-e26c4e3d0e8a?w=800&q=80" },
      { name: "Handmade Lavender Soap", price: "₹149", seller: "Anitha R.", area: "Madhapur", rating: 4.8, image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=800&q=80" },
      { name: "Mango Pickle (500g)", price: "₹350", seller: "Sunitha K.", area: "Banjara Hills", rating: 5.0, image: "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=800&q=80" },
      { name: "Handmade Chocolates Box", price: "₹299", seller: "Sravani M.", area: "Gachibowli", rating: 4.7, image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80" },
      { name: "Beaded Bracelet Set", price: "₹199", seller: "Priya S.", area: "Tarnaka", rating: 4.6, image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80" },
      { name: "Crochet Flower Bouquet", price: "₹350", seller: "Padma V.", area: "Dilsukhnagar", rating: 4.9, image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80" },
      { name: "Resin Keychain Pack", price: "₹120", seller: "Anitha R.", area: "Madhapur", rating: 4.8, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" },
      { name: "Painted Tote Bag", price: "₹399", seller: "Sravani M.", area: "Gachibowli", rating: 4.7, image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80" },
      { name: "Personalized Mug", price: "₹249", seller: "Lakshmi N.", area: "Kothapet", rating: 4.7, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80" },
      { name: "Greeting Card Pack", price: "₹99", seller: "Priya S.", area: "Tarnaka", rating: 4.6, image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80" },
      { name: "Hair Bow Set", price: "₹89", seller: "Sunitha K.", area: "Banjara Hills", rating: 4.5, image: "https://images.unsplash.com/photo-1620323040270-37431f2f9087?w=800&q=80" },
      { name: "Decorative Painted Jar", price: "₹199", seller: "Padma V.", area: "Dilsukhnagar", rating: 4.8, image: "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=800&q=80" },
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
    shopLinks: "వస్తువులు ఎక్కడ కొనాలి",
    categories: { starter: "ప్రాథమిక ప్రారంభ ఆలోచనలు", under100: "₹100 లోపు ప్రారంభ ఖర్చు", under200: "₹200 లోపు ప్రారంభ ఖర్చు" },
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
      {
        slug: "crochet-flowers", name: "క్రోచెట్ పూలు", tag: "చేతిపనులు", category: "starter",
        cost: "₹500 – ₹1,500", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹3వేలు – ₹10వేలు",
        description: "మృదువైన, చిరకాలం ఉండే క్రోచెట్ పూలు, బొకేలు — బహుమతులు, వివాహాలు మరియు ఇంటి అలంకరణలకు ప్రజాదరణ.",
        materials: ["పత్తి దారం (మిశ్రమ రంగులు)", "క్రోచెట్ హుక్ 3 మిమీ", "ఫ్లోరల్ వైర్ & గ్రీన్ టేప్"],
        steps: ["3 ప్రాథమిక రేకుల నమూనాలు నేర్చుకోండి", "ఒక్కో పువ్వుకు 5–7 రేకులు అల్లండి", "వైర్ చేసిన కాండాలపై అమర్చండి", "బొకేలుగా లేదా సింగిల్‌గా బండిల్ చేయండి"],
        pricing: "ఒక్క కాండం ₹50, 7 బొకే ₹350–₹500.",
        marketing: ["కాలేజీ ఫెస్ట్‌లలో అమ్మండి", "వివాహ-బహుమతి బల్క్ ఆర్డర్లు", "మృదువైన పాస్టెల్ బొకే రీల్స్"],
        shopLinks: [
          { label: "పత్తి దారం", url: "https://www.amazon.in/s?k=cotton+yarn+for+crochet" },
          { label: "క్రోచెట్ హుక్‌లు", url: "https://www.amazon.in/s?k=crochet+hook+set" },
        ],
      },
      {
        slug: "resin-keychains", name: "రెజిన్ కీచైన్‌లు", tag: "ఉపకరణాలు", category: "starter",
        cost: "₹1,500 – ₹4,000", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹5వేలు – ₹15వేలు",
        description: "పూలు, గ్లిట్టర్ లేదా పేర్లతో ఎపాక్సీ రెజిన్‌ను అచ్చులలో పోయండి — సులభం, ఆకర్షణీయం, బహుమతికి అనుకూలం.",
        materials: ["ఎపాక్సీ రెజిన్ + హార్డనర్", "సిలికాన్ అచ్చులు", "ఎండిన పూలు / గ్లిట్టర్ / రంగులు", "కీరింగ్ హుక్‌లు"],
        steps: ["1:1 నిష్పత్తిలో రెజిన్ కలపండి", "సగం వరకు పోసి, వస్తువులు వేసి, పైకి నింపండి", "24 గంటలు ఆరనివ్వండి", "అచ్చు తీసి, అంచులు రుద్దండి, హుక్ అమర్చండి"],
        pricing: "ఒక్కటి ₹120; బల్క్ కస్టమ్ ₹100 × 25.",
        marketing: ["జంట-పేరు కీచైన్ బండిల్స్", "25/50 రిటర్న్-గిఫ్ట్ ప్యాక్‌లు", "పోసే రీల్స్"],
        shopLinks: [
          { label: "ఎపాక్సీ రెజిన్ కిట్", url: "https://www.amazon.in/s?k=epoxy+resin+for+art" },
          { label: "సిలికాన్ అచ్చులు", url: "https://www.amazon.in/s?k=silicone+keychain+mould" },
          { label: "కీరింగ్ హుక్‌లు", url: "https://www.amazon.in/s?k=keychain+hooks+bulk" },
        ],
      },
      {
        slug: "tote-bags", name: "పెయింట్ చేసిన టోట్ బ్యాగ్‌లు", tag: "ఫ్యాషన్", category: "starter",
        cost: "₹1,000 – ₹3,000", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹5వేలు – ₹15వేలు",
        description: "ప్లెయిన్ పత్తి టోట్‌లపై కోట్‌లు, పూలు, పాత్రలను చేతితో పెయింట్ చేయండి — విద్యార్థులకు రోజువారీ-ఉపయోగ బ్యాగ్.",
        materials: ["ప్లెయిన్ పత్తి టోట్‌లు", "ఫాబ్రిక్ పెయింట్ + బ్రష్‌లు", "స్టెన్సిల్స్ (ఐచ్ఛికం)"],
        steps: ["పెన్సిల్‌తో డిజైన్ గీయండి", "2 సన్నని పొరల్లో పెయింట్ చేయండి", "ఇస్త్రీతో హీట్-సెట్ చేయండి", "ట్యాగ్ చేసి ప్యాక్ చేయండి"],
        pricing: "ప్లెయిన్ ₹250; కస్టమ్ ₹399; పూర్తి డిజైన్ ₹550.",
        marketing: ["కాలేజీ క్యాంటీన్ పాప్-అప్", "బ్రైడ్స్‌మెయిడ్ సెట్లు", "10-పీస్ ఇన్‌స్టా డ్రాప్స్"],
        shopLinks: [
          { label: "పత్తి టోట్ బ్యాగ్‌లు", url: "https://www.amazon.in/s?k=plain+cotton+tote+bag" },
          { label: "ఫాబ్రిక్ పెయింట్", url: "https://www.amazon.in/s?k=fabric+paint+set" },
        ],
      },
      {
        slug: "chocolates", name: "ఇంట్లో చేసిన చాక్లెట్లు", tag: "ఆహారం", category: "starter",
        cost: "₹1,500 – ₹4,000", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹6వేలు – ₹20వేలు",
        description: "నట్స్, ఫిల్లింగ్‌లు మరియు పండుగ ప్యాకేజింగ్‌తో చాక్లెట్లు — రాఖీ/దీపావళి/వాలెంటైన్‌లో మంచి అమ్మకాలు.",
        materials: ["కంపౌండ్ చాక్లెట్ స్లాబులు", "సిలికాన్ చాక్లెట్ అచ్చులు", "నట్స్, స్ప్రింకిల్స్", "బాక్స్‌లు & బటర్ పేపర్"],
        steps: ["చాక్లెట్‌ను 45°C వరకు కరిగించండి", "అచ్చులో పోసి, ఫిల్లింగ్ వేసి, చాక్లెట్‌తో మూసివేయండి", "30 నిమిషాలు ఫ్రిజ్‌లో పెట్టండి", "అచ్చు తీసి అందంగా ప్యాక్ చేయండి"],
        pricing: "9 బాక్స్ ₹299; 16 బాక్స్ ₹499; ప్రీమియం ₹799.",
        marketing: ["పండుగ ప్రీ-ఆర్డర్లు", "కార్పొరేట్ హ్యాంపర్ కాంబో", "మొదటి 10 ఆర్డర్లకు ఉచిత శాంపిల్"],
        shopLinks: [
          { label: "కంపౌండ్ చాక్లెట్", url: "https://www.amazon.in/s?k=morde+compound+chocolate" },
          { label: "చాక్లెట్ అచ్చులు", url: "https://www.amazon.in/s?k=silicone+chocolate+mould" },
          { label: "చాక్లెట్ బాక్స్‌లు", url: "https://www.amazon.in/s?k=chocolate+packaging+box" },
        ],
      },
      {
        slug: "mugs", name: "పర్సనలైజ్డ్ మగ్‌లు", tag: "గిఫ్టింగ్", category: "starter",
        cost: "₹2,000 – ₹5,000", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹7వేలు – ₹18వేలు",
        description: "పేర్లు, ఫోటోలు, కోట్లతో సబ్లిమేషన్ మగ్‌లు — టాప్-సెల్లింగ్ పర్సనలైజ్డ్ గిఫ్ట్.",
        materials: ["ప్లెయిన్ సబ్లిమేషన్ మగ్‌లు", "సబ్లిమేషన్ ప్రింటర్ లేదా వెండర్", "హీట్ ప్రెస్", "గిఫ్ట్ బాక్స్‌లు"],
        steps: ["Canvaలో డిజైన్ చేయండి", "సబ్లిమేషన్ పేపర్‌పై ప్రింట్ చేయండి", "మగ్‌పై చుట్టి 180°C × 3 నిమి హీట్-ప్రెస్", "చల్లారనిచ్చి బాక్స్ చేయండి"],
        pricing: "సింగిల్ ₹249; జంట ₹449; బల్క్ ₹199 × 50.",
        marketing: ["పుట్టినరోజు ఇన్‌స్టా క్యాటలాగ్", "వార్షికోత్సవ జంట కాంబో", "కార్పొరేట్ లోగో మగ్ పిచ్"],
        shopLinks: [
          { label: "సబ్లిమేషన్ మగ్‌లు", url: "https://www.amazon.in/s?k=sublimation+blank+mugs" },
          { label: "సబ్లిమేషన్ పేపర్", url: "https://www.amazon.in/s?k=sublimation+paper+a4" },
          { label: "మగ్ హీట్ ప్రెస్", url: "https://www.amazon.in/s?k=mug+heat+press+machine" },
        ],
      },
      {
        slug: "soaps", name: "చేతితో చేసిన సబ్బులు", tag: "ఆరోగ్యం", category: "starter",
        cost: "₹2,000 – ₹6,000", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹6వేలు – ₹20వేలు",
        description: "ఎసెన్షియల్ ఆయిల్‌లు, పూలు, ఎక్స్‌ఫోలియంట్‌లతో గ్లిసరిన్ సబ్బులు — వెల్‌నెస్ గిఫ్టింగ్ బెస్ట్‌సెల్లర్.",
        materials: ["గ్లిసరిన్ సోప్ బేస్", "ఎసెన్షియల్ ఆయిల్‌లు (లావెండర్, రోజ్)", "ఎండిన పూలు, వోట్స్, కాఫీ", "సిలికాన్ అచ్చులు"],
        steps: ["సోప్ బేస్ 60°C కరిగించండి", "రంగు మరియు 2% ఆయిల్ కలపండి", "అచ్చులో పోసి పూలు వేయండి", "24 గంటలు ఆరనిచ్చి క్రాఫ్ట్ పేపర్‌తో ర్యాప్"],
        pricing: "సింగిల్ ₹149; ట్రియో ₹399; వివాహ ఫేవర్ ₹79 × 50.",
        marketing: ["వెల్‌నెస్ హ్యాంపర్‌లు", "ఎకో-ఫ్రెండ్లీ క్రాఫ్ట్ ప్యాకేజింగ్", "యోగా స్టూడియోలలో శాంపిల్"],
        shopLinks: [
          { label: "సోప్ బేస్", url: "https://www.amazon.in/s?k=glycerine+soap+base+melt+and+pour" },
          { label: "ఎసెన్షియల్ ఆయిల్‌లు", url: "https://www.amazon.in/s?k=essential+oil+set" },
          { label: "సోప్ అచ్చులు", url: "https://www.amazon.in/s?k=silicone+soap+mould" },
        ],
      },
      {
        slug: "planters", name: "అలంకరణ కుండీలు", tag: "ఇల్లు & అలంకరణ", category: "starter",
        cost: "₹800 – ₹2,500", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹4వేలు – ₹12వేలు",
        description: "చేతితో పెయింట్ చేసిన టెర్రకోట లేదా అప్‌సైకిల్ బాటిల్ కుండీలు — చిన్న మొక్కలతో జతచేస్తే ఎక్కువ విలువ.",
        materials: ["టెర్రకోట కుండీలు", "ఆక్రిలిక్ పెయింట్ + సీలర్", "బ్రష్‌లు, స్పంజ్‌లు"],
        steps: ["కుండీలను శుభ్రం చేసి ప్రైమ్ చేయండి", "బేస్ కోట్ పెయింట్", "మండల/బోహో నమూనాలు వేయండి", "వార్నిష్‌తో సీల్ చేయండి"],
        pricing: "చిన్నది ₹120, మధ్యస్థం ₹250, పెద్దది ₹450.",
        marketing: ["ప్లాంట్-షాప్ టైఅప్", "మదర్స్ డే కాంబో", "కస్టమైజ్డ్ ఆఫీస్ డెస్క్ కుండీలు"],
        shopLinks: [
          { label: "టెర్రకోట కుండీలు", url: "https://www.amazon.in/s?k=terracotta+pots+small" },
          { label: "ఆక్రిలిక్ పెయింట్", url: "https://www.amazon.in/s?k=acrylic+paint+set" },
        ],
      },
      {
        slug: "eco-products", name: "పర్యావరణ-అనుకూల ఉత్పత్తులు", tag: "సుస్థిర", category: "starter",
        cost: "₹1,000 – ₹3,000", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹5వేలు – ₹15వేలు",
        description: "సీడ్ పేపర్, జూట్ బ్యాగ్‌లు, వెదురు బ్రష్‌లు, బీవ్యాక్స్ ర్యాప్‌లు — పెరుగుతున్న సుస్థిర-గిఫ్టింగ్ తరంగం.",
        materials: ["జూట్ / పత్తి వస్త్రం", "సీడ్ పేపర్ షీట్‌లు", "వెదురు బ్లాంక్‌లు", "బీవ్యాక్స్ + పత్తి వస్త్రం"],
        steps: ["2–3 ప్రారంభ ఉత్పత్తులు ఎంచుకోండి", "ధృవీకరించిన ఎకో-సరఫరాదారుల నుండి సేకరించండి", "క్రాఫ్ట్ ట్యాగ్‌లతో బ్రాండ్ చేయండి", "స్టార్టర్ కిట్‌లుగా అమ్మండి"],
        pricing: "సీడ్-పేపర్ కార్డ్ ₹50; ఎకో-కిట్ ₹499; జూట్ బ్యాగ్ ₹199.",
        marketing: ["భూమి దినం ప్రచారాలు", "కాలేజీ ఎకో-స్టాల్స్", "కార్పొరేట్ సుస్థిర గిఫ్టింగ్"],
        shopLinks: [
          { label: "జూట్ బ్యాగ్‌లు", url: "https://www.amazon.in/s?k=jute+bags+plain+bulk" },
          { label: "సీడ్ పేపర్", url: "https://www.amazon.in/s?k=seed+paper" },
          { label: "వెదురు బ్రష్‌లు", url: "https://www.amazon.in/s?k=bamboo+toothbrush+bulk" },
        ],
      },
      {
        slug: "bookmarks", name: "చేతితో చేసిన బుక్‌మార్క్‌లు", tag: "స్టేషనరీ", category: "under100",
        cost: "₹50 – ₹100", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹2వేలు – ₹6వేలు",
        description: "పెయింట్ చేసిన, ఎండిన పూలతో లేదా టాసెల్ బుక్‌మార్క్‌లు — చిన్న పెట్టుబడి, కాలేజీ ఫెయిర్‌లకు అనువైనది.",
        materials: ["కార్డ్‌స్టాక్ / హ్యాండ్‌మేడ్ పేపర్", "వాటర్‌కలర్స్ / మార్కర్‌లు", "టాసెల్‌ల కోసం దారం"],
        steps: ["2×6 అంగుళాలకు కట్ చేయండి", "రెండు వైపులా అలంకరించండి", "హోల్ పంచ్ చేసి టాసెల్ జోడించండి", "మన్నికకు లామినేట్"],
        pricing: "సింగిల్ ₹40; 5 ప్యాక్ ₹150.",
        marketing: ["బుక్‌స్టోర్ కన్‌సైన్‌మెంట్", "రీడింగ్-క్లబ్ గిఫ్ట్ ప్యాక్‌లు", "పుస్తక-థీమ్ ఇన్‌స్టా రీల్స్"],
        shopLinks: [{ label: "కార్డ్‌స్టాక్", url: "https://www.amazon.in/s?k=cardstock+paper+a4" }],
      },
      {
        slug: "friendship-bands", name: "ఫ్రెండ్‌షిప్ బ్యాండ్‌లు", tag: "ఉపకరణాలు", category: "under100",
        cost: "₹50 – ₹100", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹2వేలు – ₹5వేలు",
        description: "నేసిన దారం బ్యాండ్‌లు — ఫ్రెండ్‌షిప్ డే మరియు రాఖీ చుట్టూ ఎక్కువ డిమాండ్.",
        materials: ["ఎంబ్రాయిడరీ దారాలు", "సేఫ్టీ పిన్ / క్లిప్‌బోర్డ్", "చిన్న పూసలు"],
        steps: ["60 సెం.మీ. 4–6 దారాలు కట్ చేయండి", "పైన ముడి, పిన్‌తో సురక్షితం", "మాక్రమే నమూనాలో నేయండి", "చివర ముడి వేసి కత్తిరించండి"],
        pricing: "సింగిల్ ₹40; 3 ప్యాక్ ₹100.",
        marketing: ["ఫ్రెండ్‌షిప్ డే ప్రీ-ఆర్డర్", "స్కూల్-గేట్ పాప్-అప్", "పేర్లతో కస్టమైజ్"],
        shopLinks: [{ label: "ఎంబ్రాయిడరీ దారం", url: "https://www.amazon.in/s?k=embroidery+thread+anchor" }],
      },
      {
        slug: "paper-flowers", name: "పేపర్ పూలు", tag: "అలంకరణ", category: "under100",
        cost: "₹80 – ₹100", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹3వేలు – ₹8వేలు",
        description: "బ్యాక్‌డ్రాప్‌లు, గిఫ్టింగ్ మరియు ఈవెంట్ డెకర్ కోసం క్రేప్ మరియు ఒరిగామి పేపర్ పూలు.",
        materials: ["క్రేప్ పేపర్ రోల్స్", "ఫ్లోరల్ వైర్", "గ్లూ గన్"],
        steps: ["రేకుల టెంప్లేట్‌లు కట్ చేయండి", "రోల్ చేసి ఆకారం ఇవ్వండి", "కాండాలపై వైర్ చేయండి", "బొకేలుగా బండిల్"],
        pricing: "సింగిల్ ₹30; బొకే ₹250; బ్యాక్‌డ్రాప్ సెట్ ₹999.",
        marketing: ["వివాహ డెకర్ టైఅప్", "మదర్స్ డే బొకేలు", "ఫోటో-బూత్ బ్యాక్‌డ్రాప్"],
        shopLinks: [{ label: "క్రేప్ పేపర్", url: "https://www.amazon.in/s?k=crepe+paper+rolls" }],
      },
      {
        slug: "origami", name: "ఒరిగామి అలంకరణలు", tag: "అలంకరణ", category: "under100",
        cost: "₹50 – ₹100", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹2వేలు – ₹6వేలు",
        description: "పార్టీలు మరియు నర్సరీ డెకర్ కోసం మడిచిన పేపర్ క్రేన్‌లు, నక్షత్రాలు, గార్లాండ్‌లు.",
        materials: ["ఒరిగామి పేపర్", "దారం / ఫిషింగ్ లైన్", "చిన్న క్లిప్‌లు"],
        steps: ["థీమ్ ఎంచుకోండి", "30–50 ముక్కలు మడవండి", "గార్లాండ్‌లుగా దారం వేయండి", "ఇన్‌స్ట్రక్షన్‌లతో బండిల్"],
        pricing: "గార్లాండ్ ₹150; పార్టీ సెట్ ₹499.",
        marketing: ["బేబీ-షవర్ డెకర్ ప్యాక్‌లు", "పుట్టినరోజు గార్లాండ్ థీమ్‌లు", "ఇన్‌స్టా రీల్స్"],
        shopLinks: [{ label: "ఒరిగామి పేపర్", url: "https://www.amazon.in/s?k=origami+paper+pack" }],
      },
      {
        slug: "greeting-cards", name: "గ్రీటింగ్ కార్డులు", tag: "స్టేషనరీ", category: "under100",
        cost: "₹80 – ₹100", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹3వేలు – ₹9వేలు",
        description: "పుట్టినరోజులు, వార్షికోత్సవాలు, పండుగల కోసం హ్యాండ్‌మేడ్ కార్డులు — చిన్నవి, వ్యక్తిగతం.",
        materials: ["కార్డ్‌స్టాక్", "అలంకరణ పేపర్ / వాషి టేప్", "మార్కర్‌లు మరియు పెన్‌లు"],
        steps: ["A6 సైజుకు కట్ చేయండి", "థీమ్‌తో ముందు డిజైన్", "లోపల హ్యాండ్‌రిటెన్ సందేశం", "ఎన్వలప్‌తో ప్యాక్"],
        pricing: "సింగిల్ ₹50; పండుగ ప్యాక్ 10 ₹399.",
        marketing: ["పండుగ ప్రీ-ఆర్డర్లు", "ఆఫీస్ బల్క్ కార్డులు", "నెల కార్డు సబ్‌స్క్రిప్షన్"],
        shopLinks: [
          { label: "కార్డ్‌స్టాక్", url: "https://www.amazon.in/s?k=greeting+card+cardstock" },
          { label: "వాషి టేప్", url: "https://www.amazon.in/s?k=washi+tape+set" },
        ],
      },
      {
        slug: "gift-tags", name: "గిఫ్ట్ ట్యాగ్‌లు", tag: "స్టేషనరీ", category: "under100",
        cost: "₹50 – ₹100", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹2వేలు – ₹5వేలు",
        description: "గిఫ్ట్ హ్యాంపర్‌ల కోసం మినీ అలంకరణ ట్యాగ్‌లు — ఎక్కువ వాల్యూమ్, హ్యాంపర్ తయారీదారులకు అనుబంధం.",
        materials: ["క్రాఫ్ట్ కార్డ్‌స్టాక్", "ట్వైన్ / రిబ్బన్", "ట్యాగ్ పంచ్‌లు"],
        steps: ["ట్యాగ్ ఆకారాలు కట్ చేయండి", "పేరు స్టాంప్/రాయండి", "ట్వైన్ ద్వారా దారం", "10 సెట్లుగా ప్యాక్"],
        pricing: "10 ప్యాక్ ₹99; 25 ప్యాక్ ₹199.",
        marketing: ["హ్యాంపర్ విక్రేతలకు బల్క్", "కస్టమ్ ఈవెంట్ ట్యాగ్‌లు", "వివాహ ఫేవర్ ట్యాగ్‌లు"],
        shopLinks: [{ label: "క్రాఫ్ట్ ట్యాగ్‌లు", url: "https://www.amazon.in/s?k=kraft+gift+tags" }],
      },
      {
        slug: "simple-keychains", name: "సాధారణ కీచైన్‌లు", tag: "ఉపకరణాలు", category: "under100",
        cost: "₹80 – ₹100", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹2వేలు – ₹6వేలు",
        description: "పూసలతో, చెక్క లేదా ఫెల్ట్ కీచైన్‌లు — తేలికైనవి, ఆన్‌లైన్ అమ్మకాలకు అనువైనవి.",
        materials: ["పూసలు / ఫెల్ట్ / చెక్క బ్లాంక్‌లు", "కీరింగ్ హుక్‌లు", "జంప్ రింగ్‌లు & ప్లైయర్స్"],
        steps: ["థీమ్ ఎంచుకోండి", "10 బ్యాచ్‌లుగా అసెంబుల్", "కీరింగ్‌లకు అటాచ్ చేయండి", "లోగోతో కార్డ్-ప్యాక్"],
        pricing: "సింగిల్ ₹49; 3 ప్యాక్ ₹120.",
        marketing: ["స్కూల్ ఫెస్ట్ స్టాల్స్", "ఇనిషియల్-లెటర్ కస్టమ్ ఆర్డర్లు", "జంట కీచైన్ కాంబో"],
        shopLinks: [
          { label: "కీరింగ్ బ్లాంక్‌లు", url: "https://www.amazon.in/s?k=keychain+blanks" },
          { label: "పూసలు", url: "https://www.amazon.in/s?k=beads+for+keychain" },
        ],
      },
      {
        slug: "envelopes", name: "అలంకరణ ఎన్వలప్‌లు", tag: "స్టేషనరీ", category: "under100",
        cost: "₹50 – ₹100", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹2వేలు – ₹6వేలు",
        description: "శుభాకాంక్షల ఎన్వలప్‌లు, వివాహ ఆహ్వానాలు, పండుగ ఎన్వలప్‌లు — చేతితో పెయింట్ చేసిన అలంకారాలు.",
        materials: ["రంగు పేపర్", "గ్లూ స్టిక్", "స్టిక్కర్‌లు, గ్లిట్టర్, క్యాలిగ్రఫీ పెన్‌లు"],
        steps: ["ఎన్వలప్ టెంప్లేట్‌లు కట్", "మడిచి అతికించండి", "థీమ్‌తో ముందు అలంకరించండి", "10 ప్యాక్ చేయండి"],
        pricing: "10 ప్యాక్ ₹120; ప్రీమియం ప్యాక్ ₹250.",
        marketing: ["వివాహ సీజన్ ప్రీ-ఆర్డర్", "దీపావళి శుభాకాంక్షల ప్యాక్‌లు", "కస్టమ్ పేరు ఎన్వలప్‌లు"],
        shopLinks: [{ label: "రంగు కార్డ్‌స్టాక్", url: "https://www.amazon.in/s?k=coloured+cardstock+paper" }],
      },
      {
        slug: "photo-collages", name: "ఫోటో కొలాజ్‌లు", tag: "గిఫ్టింగ్", category: "under100",
        cost: "₹80 – ₹100", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹3వేలు – ₹10వేలు",
        description: "ఫ్రేమ్-సిద్ధం హ్యాండ్‌మేడ్ ఫోటో కొలాజ్‌లు — పుట్టినరోజు, వార్షికోత్సవ బలమైన గిఫ్ట్.",
        materials: ["A3/A4 చార్ట్ పేపర్", "ప్రింట్ షాప్ యాక్సెస్", "గ్లూ, రిబ్బన్, వాషి టేప్"],
        steps: ["10–15 ఫోటోలు సేకరించండి", "స్థానిక షాపులో ప్రింట్", "చార్ట్‌పై అమర్చి అతికించండి", "క్యాప్షన్‌లు & డెకర్"],
        pricing: "A4 ₹299; A3 ₹499; ఫ్రేమ్ +₹150.",
        marketing: ["పుట్టినరోజు సర్‌ప్రైజ్ గిఫ్ట్", "జంట వార్షికోత్సవ స్పెషల్", "ఫ్రెండ్‌షిప్ డే గ్రూప్ ఆర్డర్లు"],
        shopLinks: [{ label: "మౌంట్ బోర్డ్", url: "https://www.amazon.in/s?k=mount+board+a3" }],
      },
      {
        slug: "quote-cards", name: "కోట్ కార్డులు", tag: "అలంకరణ", category: "under100",
        cost: "₹50 – ₹100", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹2వేలు – ₹6వేలు",
        description: "డెస్క్‌లు, గోడలు, జర్నల్‌ల కోసం మినీ క్యాలిగ్రఫీ లేదా ప్రింటెడ్ కోట్ కార్డులు.",
        materials: ["కార్డ్‌స్టాక్", "క్యాలిగ్రఫీ పెన్‌లు", "ఐచ్ఛికం: మినీ చెక్క ఈజల్"],
        steps: ["10 కోట్ థీమ్‌లు ఎంచుకోండి", "హ్యాండ్-లెటర్ చేయండి", "5 సెట్లుగా ప్యాక్", "₹50 యాడ్-ఆన్‌గా ఈజల్"],
        pricing: "5 సెట్ ₹149; ఈజల్‌తో ₹199.",
        marketing: ["డెస్క్-డెకర్ రీల్స్", "పుట్టినరోజు యాడ్-ఆన్", "బుక్‌స్టోర్ కన్‌సైన్‌మెంట్"],
        shopLinks: [
          { label: "క్యాలిగ్రఫీ పెన్", url: "https://www.amazon.in/s?k=calligraphy+pen+set" },
          { label: "కార్డ్‌స్టాక్", url: "https://www.amazon.in/s?k=cardstock+a6" },
        ],
      },
      {
        slug: "hair-bows", name: "హెయిర్ బోస్", tag: "ఉపకరణాలు", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹3వేలు – ₹9వేలు",
        description: "క్లిప్‌లపై రిబ్బన్ మరియు ఫాబ్రిక్ బోస్ — సులభం, వేగం, చిన్న పిల్లల తల్లులకు ప్రజాదరణ.",
        materials: ["సాటిన్ / గ్రోస్‌గ్రెయిన్ రిబ్బన్‌లు", "ఆలిగేటర్ క్లిప్‌లు", "గ్లూ గన్"],
        steps: ["6-అంగుళాల రిబ్బన్ స్ట్రిప్‌లు కట్", "బో ఆకారంలో కట్టండి", "క్లిప్‌పై గ్లూ", "జంటలుగా కార్డ్-ప్యాక్"],
        pricing: "సింగిల్ ₹50; జంట ₹89; 6 ప్యాక్ ₹299.",
        marketing: ["పుట్టినరోజు థీమ్ సెట్లు", "స్కూల్-మామ్ వాట్సాప్", "ఇన్‌స్టా మినీ-షాప్ రీల్స్"],
        shopLinks: [
          { label: "రిబ్బన్ ప్యాక్", url: "https://www.amazon.in/s?k=satin+ribbon+roll+set" },
          { label: "ఆలిగేటర్ క్లిప్‌లు", url: "https://www.amazon.in/s?k=alligator+hair+clips+plain" },
        ],
      },
      {
        slug: "scrunchies", name: "స్క్రంచీలు", tag: "ఫ్యాషన్", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹3వేలు – ₹10వేలు",
        description: "ట్రెండీ ప్రింట్‌లలో ఫాబ్రిక్ హెయిర్ స్క్రంచీలు — త్వరగా కుట్టవచ్చు, ఇన్‌స్టాపై వైరల్.",
        materials: ["పత్తి / సాటిన్ ఫాబ్రిక్ స్క్రాప్‌లు", "ఎలాస్టిక్ (5 మిమీ)", "కుట్టు మిషన్"],
        steps: ["4×20 అంగుళ స్ట్రిప్‌లు కట్", "మడిచి ట్యూబ్‌గా కుట్టండి", "ఎలాస్టిక్ ద్వారా దారం, ముడి", "మూసివేసి కుట్టండి"],
        pricing: "సింగిల్ ₹79; 3 ప్యాక్ ₹199; 6 ప్యాక్ ₹349.",
        marketing: ["ట్రెండీ ప్రింట్ మినీ-కలెక్షన్‌లు", "స్క్రంచీ + మాస్క్ కాంబో", "కాలేజీ ఫెస్ట్ స్టాల్స్"],
        shopLinks: [
          { label: "పత్తి ఫాబ్రిక్ స్క్రాప్‌లు", url: "https://www.amazon.in/s?k=cotton+fabric+fat+quarters" },
          { label: "ఎలాస్టిక్", url: "https://www.amazon.in/s?k=elastic+5mm+roll" },
        ],
      },
      {
        slug: "beaded-bracelets", name: "పూసల బ్రేస్‌లెట్‌లు", tag: "ఆభరణాలు", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹3వేలు – ₹12వేలు",
        description: "ట్రెండీ అక్షర, ఎవిల్-ఐ, పెర్ల్ బ్రేస్‌లెట్‌లు — జెన్-Z బెస్ట్‌సెల్లర్.",
        materials: ["సీడ్ & అక్షర పూసలు", "ఎలాస్టిక్ కార్డ్", "ఛార్మ్‌లు"],
        steps: ["7-అంగుళ ఎలాస్టిక్ కొలవండి", "నమూనాలో పూసలు వేయండి", "డబుల్ నాట్, గ్లూ", "పూసలో ముడి దాచండి"],
        pricing: "సింగిల్ ₹99; పేరు ₹149; 3 స్టాక్ ₹299.",
        marketing: ["కస్టమ్ పేరు ఆర్డర్లు", "BFF సెట్లు", "ఇన్‌స్టా డ్రాప్స్"],
        shopLinks: [
          { label: "అక్షర పూసలు", url: "https://www.amazon.in/s?k=alphabet+beads" },
          { label: "ఎలాస్టిక్ కార్డ్", url: "https://www.amazon.in/s?k=stretch+cord+for+bracelets" },
        ],
      },
      {
        slug: "beaded-rings", name: "పూసల ఉంగరాలు", tag: "ఆభరణాలు", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹2వేలు – ₹8వేలు",
        description: "డైసీ మరియు ఫ్లవర్ పూసల ఉంగరాలు — చిన్నవి, వైరల్, సులభ గిఫ్ట్.",
        materials: ["సీడ్ పూసలు", "బీడింగ్ వైర్ 0.3 మిమీ", "వైర్ కట్టర్‌లు"],
        steps: ["8-అంగుళ వైర్ కట్", "రేకులు + కేంద్ర పూస వేయండి", "వేలు చుట్టూ చుట్టండి", "చివరలు మెలికెత్తి కట్"],
        pricing: "సింగిల్ ₹69; 3 ప్యాక్ ₹179.",
        marketing: ["ట్రెండీ ఫ్లాట్‌లే రీల్స్", "కాలేజీ స్టాల్స్", "ఫ్రెండ్‌షిప్-డే కాంబో"],
        shopLinks: [{ label: "సీడ్ పూసలు", url: "https://www.amazon.in/s?k=seed+beads+for+jewellery" }],
      },
      {
        slug: "phone-charms", name: "ఫోన్ ఛార్మ్‌లు", tag: "ఉపకరణాలు", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹3వేలు – ₹10వేలు",
        description: "పూసల ఫోన్ ఛార్మ్ స్ట్రాప్‌లు — ట్రెండింగ్ Y2K యాక్సెసరీ.",
        materials: ["పూసలు, ముత్యాలు, ఛార్మ్‌లు", "లూప్‌తో ఫోన్ స్ట్రాప్", "జంప్ రింగ్‌లు"],
        steps: ["రంగు థీమ్ ఎంచుకోండి", "స్ట్రాప్‌పై పూసలు వేయండి", "జంప్ రింగ్‌తో ఛార్మ్ అటాచ్", "కార్డ్-ప్యాక్"],
        pricing: "సింగిల్ ₹149; 2 సెట్ ₹249.",
        marketing: ["ఫోన్-కేస్ కాంబో", "Y2K రీల్స్", "కస్టమ్ ఇనిషియల్స్"],
        shopLinks: [
          { label: "ఫోన్ స్ట్రాప్", url: "https://www.amazon.in/s?k=phone+strap+charm+blanks" },
          { label: "ముత్యం పూసలు", url: "https://www.amazon.in/s?k=pearl+beads" },
        ],
      },
      {
        slug: "handmade-earrings", name: "హ్యాండ్‌మేడ్ చెవిపోగులు", tag: "ఆభరణాలు", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹4వేలు – ₹15వేలు",
        description: "పాలిమర్ క్లే, ఫాబ్రిక్ లేదా పూసల చెవిపోగులు — అంతులేని డిజైన్‌లు, తక్కువ ముడి ఖర్చు.",
        materials: ["పాలిమర్ క్లే / ఫాబ్రిక్ / పూసలు", "చెవిపోగు హుక్‌లు", "జంప్ రింగ్‌లు"],
        steps: ["5 డిజైన్‌లు గీయండి", "ఆకారం ఇచ్చి బేక్/అసెంబుల్", "హుక్‌లను జంప్ రింగ్‌తో అటాచ్", "కార్డ్-ప్యాక్"],
        pricing: "సింగిల్ ₹149; బ్రైడల్ ₹399.",
        marketing: ["చీర-జత ఇన్‌స్టా రీల్స్", "బుటిక్ కన్‌సైన్‌మెంట్", "పండుగ కలెక్షన్‌లు"],
        shopLinks: [
          { label: "పాలిమర్ క్లే", url: "https://www.amazon.in/s?k=polymer+clay+set" },
          { label: "చెవిపోగు హుక్‌లు", url: "https://www.amazon.in/s?k=earring+hooks+gold" },
        ],
      },
      {
        slug: "decorative-jars", name: "అలంకరణ జార్‌లు", tag: "ఇల్లు & అలంకరణ", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹3వేలు – ₹10వేలు",
        description: "కొవ్వొత్తులు, గిఫ్టింగ్ మరియు నిల్వ కోసం పెయింట్ చేసిన మరియు డికోపేజ్ గాజు జార్‌లు.",
        materials: ["ఉపయోగించిన గాజు జార్‌లు", "ఆక్రిలిక్ పెయింట్ / డికోపేజ్ నాప్కిన్‌లు", "మాడ్-పోడ్జ్ గ్లూ"],
        steps: ["జార్‌లను శుభ్రం చేయండి", "పెయింట్ లేదా డికోపేజ్", "వార్నిష్‌తో సీల్", "ఫెయిరీ లైట్‌లతో నింపండి"],
        pricing: "సింగిల్ ₹199; ఫెయిరీ-లైట్ ₹399.",
        marketing: ["వివాహ సెంటర్‌పీస్ సెట్లు", "దీపావళి ఫెయిరీ జార్‌లు", "ఎకో-అప్‌సైకిల్ యాంగిల్"],
        shopLinks: [
          { label: "డికోపేజ్ నాప్కిన్‌లు", url: "https://www.amazon.in/s?k=decoupage+napkins" },
          { label: "మాడ్ పాడ్జ్", url: "https://www.amazon.in/s?k=mod+podge" },
          { label: "ఫెయిరీ లైట్‌లు", url: "https://www.amazon.in/s?k=fairy+lights+battery" },
        ],
      },
      {
        slug: "pencil-holders", name: "రీసైకిల్డ్ పెన్సిల్ హోల్డర్‌లు", tag: "స్టేషనరీ", category: "under200",
        cost: "₹100 – ₹200", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹2వేలు – ₹7వేలు",
        description: "డబ్బాలు, జార్‌లు, కార్డ్‌బోర్డ్ ట్యూబ్‌ల నుండి పెన్సిల్ హోల్డర్‌లు — ఎకో-థీమ్.",
        materials: ["డబ్బాలు / జార్‌లు / ట్యూబ్‌లు", "జూట్ తాడు, ఫాబ్రిక్, పెయింట్", "గ్లూ గన్"],
        steps: ["బేస్‌ని శుభ్రం చేయండి", "తాడు/ఫాబ్రిక్‌తో చుట్టండి", "అలంకరణలతో డెకరేట్", "ఎకో-ఉత్పత్తిగా ట్యాగ్"],
        pricing: "సింగిల్ ₹199; 3 డెస్క్-సెట్ ₹499.",
        marketing: ["బ్యాక్-టు-స్కూల్", "ఆఫీస్ డెస్క్-సెట్ ఆర్డర్లు", "ఎకో-ఇన్‌ఫ్లుయెన్సర్ కొలాబ్‌లు"],
        shopLinks: [
          { label: "జూట్ తాడు", url: "https://www.amazon.in/s?k=jute+rope+roll" },
          { label: "హాట్ గ్లూ గన్", url: "https://www.amazon.in/s?k=hot+glue+gun" },
        ],
      },
      {
        slug: "custom-notebooks", name: "కస్టమైజ్డ్ నోట్‌బుక్‌లు", tag: "స్టేషనరీ", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹3వేలు – ₹12వేలు",
        description: "ప్లెయిన్ నోట్‌బుక్‌లను పెయింట్, ఫాబ్రిక్ లేదా ఫోటో కవర్‌లతో అందంగా చేయండి — ప్రజాదరణ గిఫ్టింగ్ లైన్.",
        materials: ["ప్లెయిన్ హార్డ్‌బౌండ్ నోట్‌బుక్‌లు", "ఫాబ్రిక్ / పెయింట్ / ఫోటోలు", "గ్లూ, సీలర్"],
        steps: ["కవర్ స్టైల్ ఎంచుకోండి", "ముందు మరియు వెనుక కవర్ చేయండి", "క్యాలిగ్రఫీలో పేరు", "రిబ్బన్‌తో ర్యాప్"],
        pricing: "A6 ₹199; A5 ₹299; ఫోటో ₹399.",
        marketing: ["బ్రైడ్స్‌మెయిడ్ సెట్లు", "ఆఫీస్ ఆన్‌బోర్డింగ్ గిఫ్ట్", "పుట్టినరోజు పేరు నోట్‌బుక్‌లు"],
        shopLinks: [
          { label: "ప్లెయిన్ నోట్‌బుక్‌లు", url: "https://www.amazon.in/s?k=plain+notebook+hardbound" },
          { label: "ఫాబ్రిక్ స్క్రాప్‌లు", url: "https://www.amazon.in/s?k=fabric+scraps+craft" },
        ],
      },
      {
        slug: "mini-frames", name: "మినీ ఫోటో ఫ్రేమ్‌లు", tag: "గిఫ్టింగ్", category: "under200",
        cost: "₹150 – ₹200", level: "Beginner", levelLabel: "ప్రారంభకుడు", earn: "నెలకు ₹3వేలు – ₹10వేలు",
        description: "ముద్రించిన ఫోటోలతో అలంకరించబడిన మినీ ఫ్రేమ్‌లు — సరసమైన వ్యక్తిగత గిఫ్ట్.",
        materials: ["చెక్క / MDF మినీ ఫ్రేమ్‌లు", "ఆక్రిలిక్ పెయింట్, డికోపేజ్", "స్థానిక ప్రింట్ షాప్"],
        steps: ["ఫ్రేమ్‌ని పెయింట్/డికోపేజ్", "4×6 ఫోటో ప్రింట్", "ఫోటో మరియు బ్యాక్ బోర్డ్ ఫిట్", "గిఫ్ట్‌గా ర్యాప్"],
        pricing: "సింగిల్ ₹199; 3 సెట్ ₹499.",
        marketing: ["వార్షికోత్సవ మెమొరీ సెట్లు", "పుట్టినరోజు సర్‌ప్రైజ్", "అన్‌బాక్సింగ్ రీల్స్"],
        shopLinks: [
          { label: "మినీ చెక్క ఫ్రేమ్‌లు", url: "https://www.amazon.in/s?k=mini+wooden+photo+frame" },
          { label: "ఆక్రిలిక్ పెయింట్", url: "https://www.amazon.in/s?k=acrylic+paint+set" },
        ],
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
      { name: "సోయా వ్యాక్స్ క్యాండిల్ ట్రియో", price: "₹899", seller: "లక్ష్మి ఎన్.", area: "కొత్తపేట", rating: 4.9, image: "https://images.unsplash.com/photo-1602874801006-e26c4e3d0e8a?w=800&q=80" },
      { name: "హ్యాండ్‌మేడ్ లావెండర్ సబ్బు", price: "₹149", seller: "అనిత ఆర్.", area: "మాదాపూర్", rating: 4.8, image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=800&q=80" },
      { name: "మామిడి ఊరగాయ (500గ్రా)", price: "₹350", seller: "సునీత కె.", area: "బంజారా హిల్స్", rating: 5.0, image: "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=800&q=80" },
      { name: "హ్యాండ్‌మేడ్ చాక్లెట్ బాక్స్", price: "₹299", seller: "శ్రావణి ఎం.", area: "గచ్చిబౌలి", rating: 4.7, image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80" },
      { name: "పూసల బ్రేస్‌లెట్ సెట్", price: "₹199", seller: "ప్రియ ఎస్.", area: "తార్నాక", rating: 4.6, image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80" },
      { name: "క్రోచెట్ పూల బొకే", price: "₹350", seller: "పద్మ వి.", area: "దిల్‌సుఖ్‌నగర్", rating: 4.9, image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80" },
      { name: "రెజిన్ కీచైన్ ప్యాక్", price: "₹120", seller: "అనిత ఆర్.", area: "మాదాపూర్", rating: 4.8, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" },
      { name: "పెయింట్ చేసిన టోట్ బ్యాగ్", price: "₹399", seller: "శ్రావణి ఎం.", area: "గచ్చిబౌలి", rating: 4.7, image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80" },
      { name: "పర్సనలైజ్డ్ మగ్", price: "₹249", seller: "లక్ష్మి ఎన్.", area: "కొత్తపేట", rating: 4.7, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80" },
      { name: "గ్రీటింగ్ కార్డుల ప్యాక్", price: "₹99", seller: "ప్రియ ఎస్.", area: "తార్నాక", rating: 4.6, image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80" },
      { name: "హెయిర్ బో సెట్", price: "₹89", seller: "సునీత కె.", area: "బంజారా హిల్స్", rating: 4.5, image: "https://images.unsplash.com/photo-1620323040270-37431f2f9087?w=800&q=80" },
      { name: "అలంకరణ పెయింట్ జార్", price: "₹199", seller: "పద్మ వి.", area: "దిల్‌సుఖ్‌నగర్", rating: 4.8, image: "https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=800&q=80" },
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