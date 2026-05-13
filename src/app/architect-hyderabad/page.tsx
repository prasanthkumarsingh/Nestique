import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "../city-page.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Architect in Hyderabad | Best Architecture Firm — Nestique Studio",
  description:
    "Hire a top architect in Hyderabad. Nestique Studio offers residential & commercial architecture, house design, 3D planning, structural drawings & GHMC approval services. IIT Kharagpur-trained architects. Free consultation: hello@nestiquestudio.in",
  keywords: [
    "architect in Hyderabad",
    "best architect Hyderabad",
    "architecture firm Hyderabad",
    "residential architect Hyderabad",
    "commercial architect Hyderabad",
    "house design Hyderabad",
    "building architect Hyderabad",
    "architect near me Hyderabad",
    "luxury architect Hyderabad",
    "IIT architect Hyderabad",
    "GHMC plan approval Hyderabad",
    "Vastu architect Hyderabad",
    "3D architectural design Hyderabad",
    "architect Gachibowli",
    "architect Banjara Hills",
  ],
  alternates: { canonical: `${SITE_URL}/architect-hyderabad` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/architect-hyderabad`,
    title: "Architect in Hyderabad | Nestique Studio",
    description:
      "IIT Kharagpur-trained architects in Hyderabad. Residential & commercial architecture, 3D design, structural drawings & GHMC plan approval. 130+ projects delivered.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Nestique Studio — Architect in Hyderabad",
  url: `${SITE_URL}/architect-hyderabad`,
  telephone: "+917816086291",
  email: "hello@nestiquestudio.in",
  description:
    "Top architecture firm in Hyderabad offering residential and commercial building design, structural drawings, 3D visualisation, Vastu planning, and GHMC plan approval.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.385, longitude: 78.4867 },
  areaServed: [
    "Gachibowli", "Banjara Hills", "Jubilee Hills", "Madhapur", "Kondapur",
    "Hitec City", "Kokapet", "Narsingi", "Hyderabad",
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
      name: "How much does an architect charge in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Architect fees in Hyderabad typically range from ₹20–₹60 per sq ft for a complete services package covering design, drawings, and supervision. Premium and luxury projects may have higher fees based on complexity. Nestique Studio discusses fees transparently and provides a clear agreement before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between an architect and a contractor in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An architect in Hyderabad designs the building — creating plans, drawings, and specifications that comply with regulations and reflect your vision. A contractor builds it. Nestique Studio bridges both worlds: we design as architects and can also manage construction, giving you a single accountable team.",
      },
    },
    {
      "@type": "Question",
      name: "Do you help with GHMC building plan approval in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio prepares building drawings compliant with GHMC (Greater Hyderabad Municipal Corporation) regulations and assists with the TS-iPASS building plan approval process in Hyderabad, ensuring your building meets all setback, height, and FAR requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can your architects design Vastu-compliant homes in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Hyderabad architects design Vastu-compliant homes without sacrificing modern aesthetics or functionality. Vastu principles — plot orientation, entry direction, room placement, and natural light — are integrated from the very first planning stage.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Hyderabad do your architects serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all of Hyderabad — Gachibowli, Banjara Hills, Jubilee Hills, Madhapur, Kondapur, Hitec City, Kokapet, Narsingi, Manikonda, Kukatpally, Kompally, Miyapur, Secunderabad, and surrounding areas.",
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
    { "@type": "ListItem", position: 3, name: "Architect Hyderabad", item: `${SITE_URL}/architect-hyderabad` },
  ],
};

const services = [
  { icon: "🏠", title: "Residential Architecture", desc: "Custom house design in Hyderabad — independent villas, row-houses, farm houses, and luxury residences. From Jubilee Hills plots to Kokapet townships, our architects design homes that define a statement." },
  { icon: "📐", title: "Architectural Drawings & Plans", desc: "Complete drawing package for your Hyderabad project — site plan, floor plans, elevation drawings, section drawings, roof plan, and detailed construction drawings prepared to GHMC and NBC standards." },
  { icon: "🏗️", title: "Structural Design & Coordination", desc: "Structural drawings and RCC design for buildings in Hyderabad. We coordinate with licensed structural engineers to ensure your building is engineered for Hyderabad&apos;s soil and seismic conditions." },
  { icon: "🏢", title: "Commercial & Corporate Architecture", desc: "Architecture for corporate campuses, IT parks, showrooms, hospitals, schools, and retail spaces in Hyderabad. We design buildings that deliver on efficiency, brand identity, and long-term value." },
  { icon: "🖥️", title: "3D Visualisation & BIM", desc: "Photorealistic 3D renderings, animated walkthroughs, and BIM modelling for your Hyderabad building. See the final result in detail before construction begins — save time and avoid costly design changes on site." },
  { icon: "📋", title: "GHMC / TS-iPASS Plan Approval", desc: "Building plan preparation and submission for GHMC and TS-iPASS approval in Hyderabad. We ensure your drawings comply with all local regulations, reducing approval delays and resubmissions." },
];

const whyUs = [
  { icon: "🎓", title: "IIT Kharagpur Architecture Foundation", desc: "Our founding architects trained at IIT Kharagpur — one of India&apos;s finest institutions for architecture and design. That academic depth shows in every project we deliver in Hyderabad." },
  { icon: "🏙️", title: "Deep Understanding of Hyderabad", desc: "We understand Hyderabad&apos;s regulations, geography, microclimate, and building culture. Our Hyderabad architects design for this city specifically — not generic drawings adapted from elsewhere." },
  { icon: "🤝", title: "Single-Point Accountability", desc: "Architecture, interior design, and construction — all from one firm. No finger-pointing between architect and contractor. Nestique Studio is your single point of accountability in Hyderabad." },
  { icon: "💰", title: "Honest Fees, Clear Agreements", desc: "We quote our architectural fees upfront — no percentage-of-cost games. A clear scope, a clear fee, and a team you can trust to deliver your Hyderabad building as designed." },
];

const areas = [
  "Gachibowli", "Banjara Hills", "Jubilee Hills", "Madhapur", "Kondapur",
  "Hitec City", "Kokapet", "Narsingi", "Manikonda", "Kukatpally",
  "Miyapur", "Kompally", "Bachupally", "Secunderabad", "Begumpet",
  "SR Nagar", "Nizampet", "Tolichowki",
];

export default function ArchitectHyderabadPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>Architecture · Hyderabad</p>
          <h1>Architect in<br />Hyderabad</h1>
          <p className={styles.heroSub}>
            IIT Kharagpur-trained architects designing homes, villas & commercial buildings in Hyderabad.
            Structural drawings, 3D design, GHMC plan approval — one team, end-to-end.
          </p>
          <div className={styles.heroBtns}>
            <a href="/consultation" className={styles.heroBtn}>Book Free Consultation</a>
            <a href="mailto:hello@nestiquestudio.in" className={styles.heroBtnOutline}>hello@nestiquestudio.in</a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className={styles.statsBar}>
        <div className={styles.statsBarInner}>
          <div className={styles.statItem}><span className={styles.statNum}>130+</span><span className={styles.statLabel}>Projects Delivered</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>IIT</span><span className={styles.statLabel}>Kharagpur Trained</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>6</span><span className={styles.statLabel}>Cities Served</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>+81</span><span className={styles.statLabel}>NPS Score</span></div>
        </div>
      </div>

      {/* ── About ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>About Nestique Studio</p>
          <h2>Hyderabad&apos;s Architect — Vision, Precision, Delivery</h2>
          <p className={styles.sectionSub}>
            Hyderabad is growing faster than any other Indian city — and great architecture is at the heart of that growth. Nestique Studio&apos;s architects in Hyderabad bring IIT Kharagpur academic rigour and pan-India professional experience to every project. Our founding team has designed buildings that combine contemporary aesthetics, technical correctness, and a deep sensitivity to Hyderabad&apos;s context — from the IT corridors of Gachibowli to the heritage-adjacent lanes of Secunderabad.
          </p>
          <p className={styles.sectionSub}>
            We offer the full architecture service — concept design, working drawings, structural coordination, regulatory approvals, and site supervision — as well as the rare ability to integrate interior design and construction management under one firm. That means your Hyderabad building is designed and built by people who are accountable to you from first line to final handover.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Architecture Services</p>
          <h2>What Our Hyderabad Architects Offer</h2>
          <p className={styles.sectionSub}>Complete architectural services for homes, villas, offices, and commercial buildings in Hyderabad.</p>
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
          <h2>Why Hyderabad Chooses Nestique Studio Architects</h2>
          <p className={styles.sectionSub}>What separates us from every other architecture firm in Hyderabad.</p>
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
          <p className={styles.eyebrow}>Where We Work</p>
          <h2>Areas We Serve in Hyderabad</h2>
          <p className={styles.sectionSub}>Our architects work across all major Hyderabad localities.</p>
          <div className={styles.areasGrid}>
            {areas.map((a, i) => (<span className={styles.areaBadge} key={i}>{a}</span>))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2>Our Architecture Process in Hyderabad</h2>
          <p className={styles.sectionSub}>From plot visit to approved drawings — a structured, fully transparent process.</p>
          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Site Analysis & Brief", desc: "We visit your Hyderabad plot, analyse orientation, context, and constraints, then capture your requirements, budget, and aspirations." },
              { step: "02", title: "Concept & 3D Design", desc: "Multiple architectural concepts are developed and presented as 3D renderings. You choose, refine, and sign off on your Hyderabad building design." },
              { step: "03", title: "Drawings & Approvals", desc: "Full working drawings, structural drawings, and GHMC / TS-iPASS building plan submission prepared to regulatory standards for Hyderabad." },
              { step: "04", title: "Construction Supervision", desc: "Regular site visits and technical supervision ensure your Hyderabad building is constructed exactly as designed — no deviations, no shortcuts." },
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
          <h2>Architect in Hyderabad — Your Questions Answered</h2>
          <div className={styles.faqList}>
            {[
              { q: "How much does an architect charge in Hyderabad?", a: "Architect fees in Hyderabad typically range from ₹20–₹60 per sq ft for a full services package. Nestique Studio provides a clear fee agreement before work begins — covering concept design, working drawings, structural coordination, and site supervision. Email hello@nestiquestudio.in to discuss your project." },
              { q: "What is the difference between an architect and a contractor in Hyderabad?", a: "An architect designs your building — the form, layout, structure, and regulatory compliance. A contractor builds it. Nestique Studio can serve as both — designing your Hyderabad building as architects and executing it as construction managers, eliminating the coordination gap." },
              { q: "Do you help with GHMC building plan approval in Hyderabad?", a: "Yes. We prepare all drawings required for GHMC and TS-iPASS building plan approval in Hyderabad, ensuring compliance with setback rules, height restrictions, FAR limits, and building bye-laws. We guide you through the entire approval process." },
              { q: "Can you design Vastu-compliant homes in Hyderabad?", a: "Yes. Our Hyderabad architects incorporate Vastu Shastra into every residential design from the ground up — plot orientation, entry direction, room sequence, and natural light flow — without compromising on contemporary design or functionality." },
              { q: "Which areas of Hyderabad do your architects serve?", a: "We serve all of Hyderabad — Gachibowli, Banjara Hills, Jubilee Hills, Madhapur, Kondapur, Hitec City, Kokapet, Narsingi, Kukatpally, Miyapur, Kompally, Secunderabad, and all surrounding localities." },
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
          <h2>Need an Architect in Hyderabad?</h2>
          <p>
            Talk to Nestique Studio&apos;s IIT-trained architects today. Free plot consultation,
            transparent fees, and a team accountable for your Hyderabad building from design to delivery.
          </p>
          <div className={styles.ctaBtns}>
            <a href="/consultation" className={styles.ctaBtnWhite}>Book Free Consultation</a>
            <a href="mailto:hello@nestiquestudio.in" className={styles.ctaBtnOutline}>hello@nestiquestudio.in</a>
          </div>
        </div>
      </section>
    </main>
  );
}
