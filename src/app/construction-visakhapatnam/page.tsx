import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "../city-page.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Construction Company in Visakhapatnam | Home & Commercial Construction — Nestique Studio",
  description:
    "Best construction company in Visakhapatnam. Nestique Studio builds residential homes, villas, apartments & commercial buildings in Vizag. Transparent pricing, on-time delivery, quality-certified materials. Free consultation: hello@nestiquestudio.in",
  keywords: [
    "construction company in Visakhapatnam",
    "best construction company Vizag",
    "house construction Visakhapatnam",
    "residential construction Vizag",
    "commercial construction Visakhapatnam",
    "building construction Vizag",
    "villa construction Visakhapatnam",
    "construction contractor Vizag",
    "home construction Visakhapatnam",
    "construction cost Vizag",
    "turnkey construction Visakhapatnam",
    "construction company near me Vizag",
    "civil construction Visakhapatnam",
    "G+2 construction Vizag",
    "duplex house construction Visakhapatnam",
  ],
  alternates: { canonical: `${SITE_URL}/construction-visakhapatnam` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/construction-visakhapatnam`,
    title: "Construction Company in Visakhapatnam | Nestique Studio",
    description:
      "Top-rated construction company in Visakhapatnam. Houses, villas & commercial buildings built with quality materials, transparent pricing, and on-time delivery. 130+ projects.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  name: "Nestique Studio — Construction Company Visakhapatnam",
  url: `${SITE_URL}/construction-visakhapatnam`,
  telephone: "+917816086291",
  email: "hello@nestiquestudio.in",
  description:
    "Premier construction company in Visakhapatnam offering residential home construction, villa construction, commercial building construction, and turnkey construction services.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.6868, longitude: 83.2185 },
  areaServed: [
    "MVP Colony", "Madhurawada", "Gajuwaka", "Rushikonda", "Seethammadhara",
    "Dwaraka Nagar", "Bheemunipatnam", "Kommadi", "Pendurthi", "Vizag",
  ],
  priceRange: "₹₹",
  sameAs: [`${SITE_URL}`],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the cost of house construction in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "House construction cost in Visakhapatnam typically ranges from ₹1,800–₹3,500 per sq ft depending on specification and finish level. A standard 1,500 sq ft house in Vizag can cost ₹27–52 lakhs. Nestique Studio provides a detailed, itemised quote before construction begins — no hidden escalations.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a house in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical G+1 or G+2 residential construction in Visakhapatnam takes 10–18 months from foundation to handover depending on size, complexity, and design. Nestique Studio provides a fixed project schedule before work starts and tracks it with weekly client updates.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer turnkey construction in Vizag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio offers fully turnkey construction in Visakhapatnam — architecture, structural engineering, civil construction, interior fit-out, electrical, plumbing, and finishing — under one contract. You get a ready-to-move home or building without managing multiple contractors.",
      },
    },
    {
      "@type": "Question",
      name: "What materials do you use for construction in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use only certified-grade materials for all construction in Visakhapatnam — ACC / UltraTech / Dalmia cement, TMT steel from reputed brands, quality bricks, branded electrical fittings, and ISI-marked plumbing fittings. Material specifications are listed in your contract before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Visakhapatnam do you build in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We undertake construction projects across all of Visakhapatnam — MVP Colony, Madhurawada, Gajuwaka, Rushikonda, Seethammadhara, Dwaraka Nagar, Bheemunipatnam, Kommadi, Pendurthi, NAD Junction, PM Palem, and surrounding areas.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "Construction Visakhapatnam", item: `${SITE_URL}/construction-visakhapatnam` },
  ],
};

const services = [
  { icon: "🏠", title: "Residential House Construction", desc: "Build your dream home in Visakhapatnam with Nestique Studio. We construct G+1, G+2, and G+3 independent houses, duplex homes, and row-houses with quality-certified materials and no compromises on structural integrity." },
  { icon: "🏰", title: "Villa & Luxury Home Construction", desc: "Premium villa construction in Vizag — large floor plates, double-height spaces, designer facades, swimming pools, and landscaped gardens. We build luxury residences that become landmarks in their neighbourhoods." },
  { icon: "🏗️", title: "Commercial Building Construction", desc: "Construction of offices, showrooms, warehouses, clinics, schools, and retail spaces across Visakhapatnam. On-time, on-budget commercial construction by a team with a proven track record in Vizag." },
  { icon: "🔧", title: "Turnkey Construction (Design + Build)", desc: "Our turnkey construction service in Visakhapatnam covers everything — architecture, structural engineering, civil work, interior fit-out, electrical, plumbing, and finishing — under one contract, one price, one team." },
  { icon: "🧱", title: "Renovation & Structural Repairs", desc: "Structural renovation, floor addition, facade upgrades, and full property renovation services in Visakhapatnam. We assess, design, and execute renovations safely with full structural integrity checks." },
  { icon: "🌿", title: "Compound Wall & Site Development", desc: "Boundary wall construction, site grading, drainage planning, and landscaping for residential plots and commercial sites across Vizag. Complete site preparation before your main construction begins." },
];

const whyUs = [
  { icon: "🏆", title: "130+ Projects Built in Vizag & AP", desc: "130+ completed construction projects in Visakhapatnam and Andhra Pradesh. Our track record of on-time, within-budget delivery is our best credential." },
  { icon: "🧱", title: "Grade-A Materials — Always", desc: "We use only ISI-certified, branded construction materials in every Vizag project. Cement, steel, bricks, electrical, and plumbing specifications are listed in your contract — no substitutions." },
  { icon: "💰", title: "Fixed Price — No Escalation", desc: "Our construction quotes in Visakhapatnam are comprehensive and fixed. We don&apos;t raise bills mid-project. What you sign is what you pay — period." },
  { icon: "📅", title: "On-Time Delivery with Penalty Clause", desc: "We commit to a completion date and put it in writing. Our construction contracts in Vizag include a delivery timeline that we honour — backed by our 130+ project record." },
];

const areas = [
  "MVP Colony", "Madhurawada", "Gajuwaka", "Rushikonda", "Seethammadhara",
  "Dwaraka Nagar", "Steel Plant Area", "Bheemunipatnam", "Kommadi",
  "Pendurthi", "Gopalapatnam", "NAD Junction", "PM Palem",
  "Simhachalam", "Yendada", "Vizag City Centre",
];

const specs = [
  { label: "Foundation", value: "RCC with M20 concrete, Fe500 TMT steel, as per structural engineer's design" },
  { label: "Superstructure", value: "RCC framed structure with AAC blocks / red bricks as per specification" },
  { label: "Cement", value: "ACC / UltraTech / Dalmia 53-grade OPC or PPC cement" },
  { label: "Steel", value: "TATA Tiscon / Vizag Steel / JSW Fe500D TMT bars" },
  { label: "Flooring", value: "Vitrified / ceramic tiles (₹60–₹150/sq ft range included)" },
  { label: "Electrical", value: "Finolex / Havells wiring, Legrand / Anchor modular switches, MCB panel included" },
  { label: "Plumbing", value: "CPVC pipes (Astral / Prince), Jaquar / Cera sanitary fittings" },
  { label: "Painting", value: "Asian Paints / Berger exterior and interior emulsion as per specification" },
];

export default function ConstructionVizagPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>Construction · Visakhapatnam</p>
          <h1>Construction Company<br />in Visakhapatnam</h1>
          <p className={styles.heroSub}>
            Nestique Studio — Visakhapatnam&apos;s trusted construction company. Homes, villas & commercial buildings
            built with certified materials, fixed pricing, and on-time delivery. 130+ projects completed.
          </p>
          <div className={styles.heroBtns}>
            <a href="/consultation" className={styles.heroBtn}>Get a Free Quote</a>
            <a href="mailto:hello@nestiquestudio.in" className={styles.heroBtnOutline}>hello@nestiquestudio.in</a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className={styles.statsBar}>
        <div className={styles.statsBarInner}>
          <div className={styles.statItem}><span className={styles.statNum}>130+</span><span className={styles.statLabel}>Projects in Vizag & AP</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>₹1,800</span><span className={styles.statLabel}>per sq ft Starting Rate</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>10–18</span><span className={styles.statLabel}>Months Avg. Build Time</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>+81</span><span className={styles.statLabel}>NPS Score</span></div>
        </div>
      </div>

      {/* ── About ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>About Nestique Studio</p>
          <h2>Visakhapatnam&apos;s Construction Company — Quality You Can See and Measure</h2>
          <p className={styles.sectionSub}>
            Building a home in Visakhapatnam is the biggest investment most families will ever make. At Nestique Studio, we understand the weight of that trust — and we take it seriously. Our construction company in Visakhapatnam uses only certified, branded materials, employs skilled Vizag construction teams, and delivers on fixed timelines with complete financial transparency. Every project starts with a detailed, itemised cost estimate that covers everything from foundation to painting — no post-start surprises, no mid-project escalations.
          </p>
          <p className={styles.sectionSub}>
            What makes Nestique Studio different from other construction companies in Visakhapatnam is our founding team: IIT Kharagpur-trained architects who understand both design and structural engineering. Your home won&apos;t just be built — it will be built right. With proper structural drawings, quality material specifications, and qualified supervision at every stage of construction in Vizag.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>What We Build</p>
          <h2>Construction Services in Visakhapatnam</h2>
          <p className={styles.sectionSub}>From individual homes to commercial complexes — complete construction solutions in Vizag.</p>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div className={styles.serviceCard} key={i}>
                <span className={styles.serviceIcon}>{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specifications ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Material Specifications</p>
          <h2>What Goes Into Your Visakhapatnam Home</h2>
          <p className={styles.sectionSub}>Branded, certified materials — specified in your contract before construction begins.</p>
          <div className={styles.whyGrid}>
            {specs.map((s, i) => (
              <div className={styles.whyCard} key={i}>
                <div className={styles.whyIcon} style={{ fontSize: "1rem", fontWeight: 800, color: "#e8773a", background: "#fdf3ec", minWidth: 48 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3>{s.label}</h3>
                  <p>{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Why Choose Us</p>
          <h2>Why Vizag Families Trust Nestique Studio to Build</h2>
          <p className={styles.sectionSub}>What separates us from every other construction company in Visakhapatnam.</p>
          <div className={styles.whyGrid}>
            {whyUs.map((w, i) => (
              <div className={styles.whyCard} key={i}>
                <div className={styles.whyIcon}>{w.icon}</div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Where We Build</p>
          <h2>Construction Areas in Visakhapatnam</h2>
          <p className={styles.sectionSub}>We undertake construction projects across all major localities in Vizag.</p>
          <div className={styles.areasGrid}>
            {areas.map((a, i) => (<span className={styles.areaBadge} key={i}>{a}</span>))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2>Our Construction Process in Visakhapatnam</h2>
          <p className={styles.sectionSub}>From site visit to handover — a systematic, transparent build process.</p>
          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Site Visit & Estimate", desc: "We visit your plot in Visakhapatnam, review approved plans, and provide a detailed, itemised construction estimate with material specifications included." },
              { step: "02", title: "Contract & Design", desc: "We finalise a fixed-price contract, complete architectural and structural drawings, and obtain VMRDA/GVMC building plan approval for your Vizag project." },
              { step: "03", title: "Construction", desc: "Ground-up construction in Visakhapatnam with daily site supervision, material quality checks, and weekly progress reports shared with you directly." },
              { step: "04", title: "Handover", desc: "Snagging inspection, MEP testing, and final walkthrough with you. We hand over your Vizag home complete, clean, and ready to move in." },
            ].map((p, i) => (
              <div className={styles.processCard} key={i}>
                <span className={styles.stepNum}>{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>FAQ</p>
          <h2>Construction in Visakhapatnam — Common Questions</h2>
          <div className={styles.faqList}>
            {[
              { q: "What is the construction cost per sq ft in Visakhapatnam?", a: "House construction cost in Visakhapatnam starts from ₹1,800 per sq ft for a standard spec and goes up to ₹3,500+ per sq ft for premium finishes. A 1,500 sq ft home costs approximately ₹27–52 lakhs. Nestique Studio provides a detailed itemised quote before any work begins." },
              { q: "How long does it take to build a house in Vizag?", a: "A G+1 house in Visakhapatnam typically takes 10–14 months. A larger G+2 or G+3 building can take 16–22 months. Nestique Studio provides a fixed project schedule in your construction contract and tracks it with weekly client updates." },
              { q: "Do you offer turnkey construction in Visakhapatnam?", a: "Yes. Our turnkey construction service in Vizag covers everything from architectural design and structural drawings to civil construction, interior fit-out, electrical, plumbing, and painting — one contract, one price, one team, zero coordination headaches." },
              { q: "What materials do you use for construction in Vizag?", a: "We use branded, ISI-certified materials only — UltraTech / ACC / Dalmia cement, TATA / JSW TMT steel, quality bricks, Finolex / Havells wiring, CPVC plumbing, and Asian Paints finishes. All specifications are listed in your contract before work begins." },
              { q: "Which areas of Visakhapatnam do you construct in?", a: "We build across all of Visakhapatnam — MVP Colony, Madhurawada, Gajuwaka, Rushikonda, Seethammadhara, Dwaraka Nagar, Steel Plant Area, Bheemunipatnam, Kommadi, Pendurthi, NAD Junction, PM Palem, and all surrounding areas in Vizag." },
            ].map((f, i) => (
              <div className={styles.faqItem} key={i}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <h2>Ready to Build in Visakhapatnam?</h2>
          <p>
            Get a free site visit and a detailed, fixed-price construction quote from Visakhapatnam&apos;s
            trusted construction company. No obligations — just honest answers and a clear estimate.
          </p>
          <div className={styles.ctaBtns}>
            <a href="/consultation" className={styles.ctaBtnWhite}>Get a Free Quote</a>
            <a href="mailto:hello@nestiquestudio.in" className={styles.ctaBtnOutline}>hello@nestiquestudio.in</a>
          </div>
        </div>
      </section>
    </main>
  );
}
