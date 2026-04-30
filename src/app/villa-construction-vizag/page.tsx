import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "../city-page.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Villa & House Construction in Visakhapatnam | Best Civil Contractor Vizag — Nestique Studio",
  description:
    "Best villa and house construction company in Visakhapatnam. Nestique Studio builds custom villas, independent houses, and apartment complexes in Vizag. End-to-end civil construction with transparent pricing. Free site visit: +91 78160 86291.",
  keywords: [
    "villa construction Visakhapatnam",
    "house construction Visakhapatnam",
    "civil contractor Visakhapatnam",
    "best civil contractor Vizag",
    "residential construction Vizag",
    "home construction Visakhapatnam",
    "building construction Vizag",
    "construction company Visakhapatnam",
    "independent house construction Vizag",
    "duplex construction Visakhapatnam",
    "construction cost per sqft Vizag",
    "civil construction company Visakhapatnam",
    "turnkey construction Vizag",
    "new house construction Visakhapatnam",
    "best construction company Vizag",
  ],
  alternates: { canonical: `${SITE_URL}/villa-construction-vizag` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/villa-construction-vizag`,
    title: "Villa & House Construction in Visakhapatnam | Nestique Studio",
    description:
      "Custom villa and house construction in Visakhapatnam. End-to-end civil construction from design to handover. Transparent pricing. Free site visit.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nestique Studio — Villa & House Construction Visakhapatnam",
  url: `${SITE_URL}/villa-construction-vizag`,
  telephone: "+917816086291",
  email: "hello@nestiquestudio.in",
  description:
    "Best civil construction company in Visakhapatnam. Custom villa construction, house construction, and residential building projects across Vizag.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.6868, longitude: 83.2185 },
  areaServed: [
    "MVP Colony", "Madhurawada", "Gajuwaka", "Rushikonda", "Seethammadhara",
    "Bheemunipatnam", "Kommadi", "Yendada", "Pendurthi",
  ],
  priceRange: "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does villa construction cost in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Villa construction cost in Visakhapatnam typically ranges from ₹1,800–₹3,500 per sq ft depending on the quality grade (standard, premium, or luxury). A 1,500 sq ft villa starts from approximately ₹27–45 lakhs for the structure. Contact Nestique Studio for a free, detailed estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the best civil contractor in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nestique Studio is one of the most trusted civil contractors in Visakhapatnam with 130+ completed residential and commercial projects. We handle architectural design, structural work, interiors, and handover — complete turnkey construction.",
      },
    },
    {
      "@type": "Question",
      name: "How long does house construction take in Vizag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical 1,500–2,500 sq ft house in Visakhapatnam takes 10–14 months from design approval to handover. Multi-floor villas take 14–18 months. Nestique Studio provides a project-specific timeline before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide Vastu-compliant designs in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our residential designs in Visakhapatnam can be made fully Vastu-compliant. Our architects work with Vastu guidelines during the planning stage to ensure proper orientation and room placement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle construction approvals in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio assists with VMRDA/GVMC approvals, building plan submissions, and all statutory clearances required for residential construction in Visakhapatnam.",
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
    { "@type": "ListItem", position: 3, name: "Villa Construction Vizag", item: `${SITE_URL}/villa-construction-vizag` },
  ],
};

const services = [
  { icon: "🏡", title: "Custom Villa Construction", desc: "Bespoke villa construction in Visakhapatnam — from 1,000 sqft plots to 5,000+ sqft luxury villas. Design, structure, finish, and interior — all in one package." },
  { icon: "🏠", title: "Independent House Construction", desc: "Build your dream independent house in Vizag with our experienced civil team. G+1, G+2, G+3 construction with solid structural engineering and quality materials." },
  { icon: "🏗️", title: "Apartment Complex Construction", desc: "Multi-unit apartment building construction for developers and landowners in Visakhapatnam. Complete building construction from foundation to rooftop." },
  { icon: "📐", title: "Architectural Design & 3D Plans", desc: "Full architectural drawings, structural designs, elevation plans, and 3D visualisations for your Vizag home — Vastu-compliant and approval-ready." },
  { icon: "📋", title: "VMRDA/GVMC Approvals", desc: "We handle all building plan approvals, VMRDA sanctions, GVMC permissions, and statutory clearances required for construction in Visakhapatnam." },
  { icon: "🔧", title: "Renovation & Additions", desc: "Structural additions, floor extensions, and full home renovations for existing properties in Visakhapatnam — done right the first time." },
];

const whyUs = [
  { icon: "🏆", title: "130+ Projects Across AP", desc: "Extensive experience in Andhra Pradesh residential and commercial construction. Real projects, real quality — ask to see our portfolio." },
  { icon: "💰", title: "Fixed-Price Contracts", desc: "We offer fixed-price construction contracts with no escalation clauses. Know your total cost upfront before work starts." },
  { icon: "🔍", title: "Quality Supervision", desc: "Our site engineers supervise every stage of construction in Visakhapatnam. No shortcuts on materials, reinforcement, or finishes." },
  { icon: "📋", title: "Approvals & Legal Help", desc: "We handle VMRDA/GVMC approvals, building permits, and structural certificates so you don't have to navigate the bureaucracy alone." },
];

const areas = [
  "MVP Colony", "Madhurawada", "Gajuwaka", "Rushikonda", "Seethammadhara",
  "Bheemunipatnam", "Kommadi", "Yendada", "Pendurthi", "Gopalapatnam",
  "Anandapuram", "Bheemili", "Vizianagaram Road",
];

export default function VillaConstructionVizagPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>Civil Construction · Visakhapatnam</p>
          <h1>Villa & House Construction<br />in Visakhapatnam</h1>
          <p className={styles.heroSub}>
            Trusted civil contractor in Visakhapatnam building custom villas, independent houses &
            apartment complexes. Vastu-compliant designs, VMRDA approvals handled, transparent fixed pricing.
          </p>
          <div className={styles.heroBtns}>
            <a href="/consultation" className={styles.heroBtn}>Book Free Site Visit</a>
            <a href="tel:+917816086291" className={styles.heroBtnOutline}>Call +91 78160 86291</a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className={styles.statsBar}>
        <div className={styles.statsBarInner}>
          <div className={styles.statItem}><span className={styles.statNum}>130+</span><span className={styles.statLabel}>Projects in AP</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>220+</span><span className={styles.statLabel}>Under Construction</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>10–14</span><span className={styles.statLabel}>Months Avg. Build Time</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>+81</span><span className={styles.statLabel}>NPS Score</span></div>
        </div>
      </div>

      {/* ── Services ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>What We Build</p>
          <h2>Civil Construction Services in Visakhapatnam</h2>
          <p className={styles.sectionSub}>
            End-to-end construction from architectural design to interior finish — all under one roof in Vizag.
          </p>
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
          <p className={styles.eyebrow}>Why Nestique Studio</p>
          <h2>Why Vizag Families Trust Us to Build Their Homes</h2>
          <p className={styles.sectionSub}>We don&apos;t just build structures. We build homes families live in for generations.</p>
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
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Coverage</p>
          <h2>Areas We Build In — Visakhapatnam</h2>
          <p className={styles.sectionSub}>We undertake construction projects across all major areas of Visakhapatnam.</p>
          <div className={styles.areasGrid}>
            {areas.map((a, i) => (
              <span className={styles.areaBadge} key={i}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2>Our Construction Process in Visakhapatnam</h2>
          <p className={styles.sectionSub}>From your plot to your dream home — here&apos;s how we get there.</p>
          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Free Site Visit", desc: "We visit your Vizag plot, assess soil, orientation, and feasibility, then give you a detailed fixed-price estimate." },
              { step: "02", title: "Design & Approvals", desc: "Our architects create Vastu-compliant plans and handle VMRDA/GVMC sanctions. You approve before we break ground." },
              { step: "03", title: "Construction", desc: "Our own certified team builds your home with quality materials, supervised at every stage. Regular photo updates sent to you." },
              { step: "04", title: "Handover", desc: "Post-construction inspection, structural certificate, and clean handover on the committed date." },
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
          <h2>Construction Questions — Visakhapatnam</h2>
          <div className={styles.faqList}>
            {[
              { q: "How much does villa construction cost in Visakhapatnam?", a: "Villa construction in Visakhapatnam ranges from ₹1,800–₹3,500 per sq ft depending on quality grade. A 1,500 sqft villa starts from ₹27–45 lakhs for the structure. We give a fixed-price quote after a free site visit." },
              { q: "How long does house construction take in Vizag?", a: "A 1,500–2,500 sqft house in Visakhapatnam takes 10–14 months from design approval to handover. Multi-floor villas take 14–18 months. We commit to a timeline before starting." },
              { q: "Do you handle VMRDA and GVMC approvals?", a: "Yes. Nestique Studio handles all building plan approvals, VMRDA sanctions, GVMC permissions, and structural certificates for residential construction in Visakhapatnam." },
              { q: "Do you provide Vastu-compliant designs?", a: "Yes. All our house and villa designs in Visakhapatnam are fully Vastu-compliant. Our architects incorporate Vastu guidelines from the planning stage." },
              { q: "Do you offer construction with interior design as a package?", a: "Yes. Nestique Studio offers complete turnkey packages — structure + interior design + handover. Many Vizag families prefer this as it saves time, cost, and coordination effort." },
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
          <h2>Ready to Build Your Dream Home in Vizag?</h2>
          <p>
            Get a free site visit and fixed-price estimate for your villa or house construction
            in Visakhapatnam. We handle everything — design, approvals, build, and interiors.
          </p>
          <div className={styles.ctaBtns}>
            <a href="/consultation" className={styles.ctaBtnWhite}>Book Free Site Visit</a>
            <a href="tel:+917816086291" className={styles.ctaBtnOutline}>Call +91 78160 86291</a>
          </div>
        </div>
      </section>
    </main>
  );
}
