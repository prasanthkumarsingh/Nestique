import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "../city-page.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Commercial Construction in Visakhapatnam | Offices, Hospitals & Hotels — Nestique Studio",
  description:
    "Top commercial construction company in Visakhapatnam. Nestique Studio builds offices, hospitals, hotels, showrooms & commercial complexes in Vizag. Turnkey design & build. Free consultation: hello@nestiquestudio.in",
  keywords: [
    "commercial construction Visakhapatnam",
    "commercial construction company Vizag",
    "office construction Visakhapatnam",
    "hospital construction Vizag",
    "commercial building construction Visakhapatnam",
    "commercial contractor Vizag",
    "turnkey commercial construction Visakhapatnam",
    "commercial build Vizag",
    "commercial construction cost Visakhapatnam",
    "commercial fit-out Vizag",
    "construction company Visakhapatnam commercial",
    "build and design Vizag",
  ],
  alternates: { canonical: `${SITE_URL}/commercial-construction-visakhapatnam` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/commercial-construction-visakhapatnam`,
    title: "Commercial Construction in Visakhapatnam | Nestique Studio",
    description:
      "Trusted commercial construction company in Visakhapatnam. Offices, hospitals, hotels & commercial complexes built turnkey in Vizag.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Construction in Visakhapatnam | Nestique Studio",
    description: "Trusted commercial construction company in Visakhapatnam — offices, hospitals & hotels built turnkey.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  name: "Nestique Studio — Commercial Construction Visakhapatnam",
  url: `${SITE_URL}/commercial-construction-visakhapatnam`,
  telephone: "+917816086291",
  email: "hello@nestiquestudio.in",
  description:
    "Commercial construction company in Visakhapatnam — offices, hospitals, hotels, showrooms, warehouses, and commercial complexes built with quality materials and on-time delivery.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.6868, longitude: 83.2185 },
  areaServed: ["Visakhapatnam", "Vizag", "Gajuwaka", "Dwaraka Nagar", "Steel Plant Area"],
  priceRange: "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the cost of commercial construction in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commercial construction in Visakhapatnam typically costs ₹2,000–₹4,500 per sq ft for office and retail buildings, and ₹3,000–₹6,000+ per sq ft for hospitals and hospitality properties depending on specification. Nestique Studio provides a detailed, itemised construction estimate after a free site visit and scope review.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build hospitals and healthcare facilities in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hospital construction is one of our specialist areas in Visakhapatnam. We build hospitals, clinics, and diagnostic centres with awareness of clinical zone requirements, medical gas infrastructure, infection control standards, and NABH-aligned construction specifications. We coordinate with medical equipment vendors and clinical consultants throughout the build.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle design and construction of a commercial building in Vizag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio offers complete design-and-build for commercial projects in Visakhapatnam — architectural drawings, structural engineering, VMRDA/GVMC plan approval, civil construction, MEP works, interior fit-out, and building commissioning — under one contract with one project manager.",
      },
    },
    {
      "@type": "Question",
      name: "How long does commercial construction take in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A G+3 commercial building in Visakhapatnam typically takes 18–30 months from design to handover. Fit-out of a leased commercial space (office or clinic) takes 2–6 months. We provide a fixed construction programme before work begins and track it weekly with client reporting.",
      },
    },
    {
      "@type": "Question",
      name: "What areas of Visakhapatnam do you build in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We undertake commercial construction projects across all of Visakhapatnam — Dwaraka Nagar, MVP Colony, Gajuwaka, Steel Plant Area, Rushikonda, Bheemunipatnam, Madhurawada, APIIC zones, SEZ areas, and the Vizag City Centre.",
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
    { "@type": "ListItem", position: 3, name: "Commercial Construction Visakhapatnam", item: `${SITE_URL}/commercial-construction-visakhapatnam` },
  ],
};

const services = [
  { icon: "🏢", title: "Office Building Construction", desc: "Commercial office building construction in Visakhapatnam — G+3 to G+10 structures for corporate campuses, IT parks, and mixed-use commercial buildings. Structural engineering, quality materials, and on-time delivery guaranteed." },
  { icon: "🏥", title: "Hospital & Healthcare Construction", desc: "Specialist hospital construction in Vizag — multi-specialty hospitals, diagnostic centres, and day-surgery facilities. Clinical zone infrastructure, medical gas systems, infection-controlled construction, and NABH-aware specifications." },
  { icon: "🏨", title: "Hotel & Hospitality Construction", desc: "Hotel and resort construction for Visakhapatnam&apos;s growing hospitality sector. Structural construction, interior fit-out, MEP systems, pool and wellness infrastructure — all coordinated under our project management." },
  { icon: "🏪", title: "Retail & Showroom Construction", desc: "Commercial retail and showroom construction in Visakhapatnam — ground-up builds and full interior fit-outs for automotive showrooms, branded retail, supermarkets, and mixed-use retail complexes." },
  { icon: "🏭", title: "Warehouse & Industrial Construction", desc: "Warehouse, factory, and industrial building construction in Vizag&apos;s APIIC and SEZ zones. Pre-engineered steel structures, RCC industrial buildings, and logistics facility construction with dock levellers and handling equipment provisions." },
  { icon: "🔧", title: "Commercial Renovation & Expansion", desc: "Renovation and floor addition for existing commercial buildings in Visakhapatnam. Structural assessments, VMRDA-compliant expansion drawings, and phased construction that keeps your business operational throughout the project." },
];

const whyUs = [
  { icon: "🏗️", title: "Commercial-Grade Construction Only", desc: "Every commercial project in Visakhapatnam is built to the right grade — NBC-compliant structural design, commercial-grade MEP systems, and finishes specified for the intended use. We don&apos;t use residential shortcuts on commercial buildings." },
  { icon: "🎓", title: "IIT Kharagpur Architecture & Engineering", desc: "Our IIT Kharagpur-trained architects bridge design and engineering — ensuring your commercial building in Vizag is both architecturally distinguished and structurally sound." },
  { icon: "📋", title: "VMRDA / APIIC Plan Approval Support", desc: "We prepare and submit all commercial building plan drawings for VMRDA, GVMC, and APIIC approvals in Visakhapatnam — ensuring compliance from day one and minimising approval delays." },
  { icon: "💰", title: "Fixed-Price Commercial Contracts", desc: "Our commercial construction quotes in Visakhapatnam are comprehensive and fixed — labour, materials, professional fees, and all specified systems. No escalation after contract signature." },
];

const areas = [
  "Dwaraka Nagar", "MVP Colony", "Gajuwaka", "Steel Plant Area",
  "Rushikonda", "Bheemunipatnam", "Madhurawada", "Vizag City Centre",
  "APIIC Zone", "Pendurthi", "Kommadi", "Gopalapatnam",
];

export default function CommercialConstructionVizagPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>Commercial Construction · Visakhapatnam</p>
          <h1>Commercial Construction Company<br />in Visakhapatnam</h1>
          <p className={styles.heroSub}>
            Nestique Studio — Visakhapatnam&apos;s trusted commercial construction company. Offices, hospitals,
            hotels & commercial complexes built with IIT-trained architects, quality materials, and on-time delivery.
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
          <div className={styles.statItem}><span className={styles.statNum}>130+</span><span className={styles.statLabel}>Projects Delivered</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>₹2,000</span><span className={styles.statLabel}>per sq ft Starting</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>IIT</span><span className={styles.statLabel}>Kharagpur Trained</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>+81</span><span className={styles.statLabel}>NPS Score</span></div>
        </div>
      </div>

      {/* ── About ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Commercial Construction Specialists</p>
          <h2>Visakhapatnam&apos;s Commercial Builder — Designed to Perform</h2>
          <p className={styles.sectionSub}>
            Commercial construction in Visakhapatnam demands a different level of technical expertise, regulatory awareness, and project management discipline than residential work. The stakes are higher — your building will serve patients, employees, guests, or customers, and it must perform reliably from day one. At Nestique Studio, we bring IIT Kharagpur-trained architects and experienced commercial construction teams to every project — ensuring your building is engineered correctly, built with the right materials, and delivered on schedule.
          </p>
          <p className={styles.sectionSub}>
            We work across all commercial building types in Visakhapatnam — from office towers in Dwaraka Nagar and IT parks in Rushikonda to hospitals in Gajuwaka and hotels on the Vizag coast. Our design-and-build model means one team is accountable for the entire project — from VMRDA plan approval and structural engineering through to interior fit-out and building commissioning. No gaps between architect and contractor. No blame-shifting when timelines are under pressure.
          </p>
          <p className={styles.sectionSub}>
            Nestique Studio&apos;s commercial construction contracts in Visakhapatnam are fixed-price, comprehensively specified, and backed by our +81 NPS score and 130+ project track record. We build commercial buildings that Visakhapatnam businesses can be proud of.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>What We Build</p>
          <h2>Commercial Construction Services in Visakhapatnam</h2>
          <p className={styles.sectionSub}>From office buildings to hospitals — complete commercial construction in Vizag.</p>
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

      {/* ── Why Us ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Why Choose Us</p>
          <h2>Why Visakhapatnam Businesses Trust Nestique Studio to Build</h2>
          <p className={styles.sectionSub}>What separates our commercial construction from others in Vizag.</p>
          <div className={styles.whyGrid}>
            {whyUs.map((w, i) => (
              <div className={styles.whyCard} key={i}>
                <div className={styles.whyIcon}>{w.icon}</div>
                <div><h3>{w.title}</h3><p>{w.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Where We Build</p>
          <h2>Commercial Construction Zones in Visakhapatnam</h2>
          <p className={styles.sectionSub}>We build commercial projects across all major business and industrial zones in Vizag.</p>
          <div className={styles.areasGrid}>
            {areas.map((a, i) => <span className={styles.areaBadge} key={i}>{a}</span>)}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2>Our Commercial Build Process in Visakhapatnam</h2>
          <p className={styles.sectionSub}>From approvals to handover — a disciplined, transparent commercial construction process.</p>
          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Site Survey & Scope", desc: "We visit your Visakhapatnam site, review your commercial programme, and prepare a detailed scope of works and cost estimate." },
              { step: "02", title: "Design & Approvals", desc: "Architectural and structural drawings prepared and submitted for VMRDA/GVMC/APIIC approval. Construction programme issued before contract signature." },
              { step: "03", title: "Construction", desc: "Our commercial construction team builds to specification — certified materials, professional tradespeople, and weekly client progress reports." },
              { step: "04", title: "Commissioning & Handover", desc: "MEP commissioning, building inspection, snagging, and operational handover. Your Visakhapatnam commercial building is ready for occupancy." },
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
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>FAQ</p>
          <h2>Commercial Construction in Visakhapatnam — Questions Answered</h2>
          <div className={styles.faqList}>
            {[
              { q: "What is the cost of commercial construction in Visakhapatnam?", a: "Commercial construction in Visakhapatnam costs ₹2,000–₹4,500/sq ft for offices and retail, and ₹3,000–₹6,000+/sq ft for hospitals and hospitality. Nestique Studio provides a detailed, itemised cost estimate after a free site visit. Email hello@nestiquestudio.in." },
              { q: "Do you build hospitals in Visakhapatnam?", a: "Yes. Hospital construction is a specialist area for Nestique Studio in Visakhapatnam. We build hospitals, clinics, and diagnostic centres with clinical zone infrastructure, medical gas systems, infection-controlled construction specifications, and NABH-aligned building standards." },
              { q: "Can you handle design and construction together in Vizag?", a: "Yes. Our design-and-build service in Visakhapatnam covers architecture, structural engineering, VMRDA/GVMC approvals, civil construction, MEP systems, and interior fit-out — under one contract and one project manager from concept to handover." },
              { q: "How long does commercial construction take in Visakhapatnam?", a: "A G+3 commercial building in Visakhapatnam typically takes 18–30 months from design to handover. Fit-out of an existing commercial space takes 2–6 months. We provide a fixed construction programme in the contract and track it with weekly client reports." },
              { q: "Which areas of Visakhapatnam do you build in?", a: "We build across all commercial zones in Visakhapatnam — Dwaraka Nagar, MVP Colony, Gajuwaka, Steel Plant Area, Rushikonda, Bheemunipatnam, Madhurawada, APIIC zones, SEZ areas, and the Vizag City Centre." },
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
          <h2>Planning a Commercial Build in Visakhapatnam?</h2>
          <p>
            Get a free site visit and fixed-price commercial construction estimate from Nestique Studio.
            IIT-trained architects, 130+ projects, transparent pricing — one team accountable for everything.
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
