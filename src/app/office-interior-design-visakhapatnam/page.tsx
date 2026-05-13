import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "../city-page.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Office Interior Design in Visakhapatnam | Corporate & IT Offices — Nestique Studio",
  description:
    "Leading office interior design company in Visakhapatnam. Nestique Studio designs corporate offices, IT workspaces, co-working spaces & executive suites in Vizag. Turnkey design & build. Free consultation: hello@nestiquestudio.in",
  keywords: [
    "office interior design Visakhapatnam",
    "office interior designer Vizag",
    "corporate office interior Visakhapatnam",
    "IT office interior design Vizag",
    "commercial interior designer Visakhapatnam",
    "office fit-out Visakhapatnam",
    "co-working space design Vizag",
    "office renovation Visakhapatnam",
    "office interior design cost Vizag",
    "modern office design Visakhapatnam",
    "workplace design Vizag",
    "office interior turnkey Visakhapatnam",
  ],
  alternates: { canonical: `${SITE_URL}/office-interior-design-visakhapatnam` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/office-interior-design-visakhapatnam`,
    title: "Office Interior Design in Visakhapatnam | Nestique Studio",
    description:
      "Corporate office interior design specialists in Visakhapatnam. IT offices, co-working spaces, executive suites & commercial fit-outs. Turnkey design & build.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Interior Design in Visakhapatnam | Nestique Studio",
    description: "Corporate office interior design specialists in Visakhapatnam. Turnkey design & build.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InteriorDesigner"],
  name: "Nestique Studio — Office Interior Design Visakhapatnam",
  url: `${SITE_URL}/office-interior-design-visakhapatnam`,
  telephone: "+917816086291",
  email: "hello@nestiquestudio.in",
  description:
    "Premier office interior design company in Visakhapatnam — corporate offices, IT workspaces, co-working spaces, executive suites and commercial fit-outs.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.6868, longitude: 83.2185 },
  areaServed: ["Visakhapatnam", "Vizag", "Dwaraka Nagar", "MVP Colony", "Gajuwaka"],
  priceRange: "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does office interior design cost in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Office interior design in Visakhapatnam typically costs ₹1,200–₹3,500 per sq ft depending on the fit-out standard. A 1,000 sq ft office can range from ₹12–35 lakhs. Nestique Studio provides a detailed design-to-build quote after a free site visit — covering design fees, material, partitions, lighting, and all fitments.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an office interior project take in Vizag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical office interior fit-out in Visakhapatnam takes 30–60 days from design sign-off to handover, depending on area and complexity. Nestique Studio provides a fixed delivery schedule and works with minimal disruption to adjacent operations where phased delivery is required.",
      },
    },
    {
      "@type": "Question",
      name: "Do you design IT and tech company offices in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We specialise in IT and technology office interiors in Visakhapatnam — open-plan collaborative workspaces, server room layouts, secure meeting pods, activity-based working zones, and branded reception areas. We understand the specific technical and ergonomic requirements of IT workplaces.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle both design and construction for office projects in Vizag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio offers a complete turnkey design-and-build service for offices in Visakhapatnam — architectural drawings, interior design, civil fit-out, electrical and data cabling, HVAC coordination, and furniture procurement — under one contract and one project manager.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Visakhapatnam do you design offices in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We design office interiors across all commercial areas of Visakhapatnam — Dwaraka Nagar, MVP Colony, Gajuwaka, Steel Plant Area, Rushikonda IT Park, Bheemunipatnam, and the City Centre. We also work on APIIC-allotted industrial and IT zone properties.",
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
    { "@type": "ListItem", position: 3, name: "Office Interior Design Visakhapatnam", item: `${SITE_URL}/office-interior-design-visakhapatnam` },
  ],
};

const services = [
  { icon: "🏢", title: "Corporate Office Interiors", desc: "End-to-end corporate office design and build in Visakhapatnam — reception areas, open-plan floors, private cabins, conference rooms, server rooms, pantry and break-out zones. Designed to reflect your brand and maximise productivity." },
  { icon: "💻", title: "IT & Tech Workspace Design", desc: "Purpose-built IT office interiors for Vizag's growing tech ecosystem. Open collaboration zones, focus pods, standing desk areas, data-centre-adjacent server rooms, and ergonomic workstation planning — designed for how technology teams actually work." },
  { icon: "🤝", title: "Co-working Space Design", desc: "Flexible, vibrant co-working space design for Visakhapatnam. Hot-desk zones, dedicated desks, private cabins, meeting rooms, phone booths, event spaces, and café areas — designed for community, productivity, and profitable operations." },
  { icon: "🎯", title: "Executive Suite & Board Room Design", desc: "Prestigious executive office suites and boardrooms in Visakhapatnam — premium finishes, acoustic wall panels, integrated AV systems, bespoke furniture, and statement design that speaks of leadership and authority." },
  { icon: "🏗️", title: "Office Renovation & Refurbishment", desc: "Modernise your existing Visakhapatnam office without relocating. We assess your current space, design a phased renovation plan, and deliver a transformed workplace — upgrading lighting, partitioning, flooring, and branding on a live-site basis." },
  { icon: "🔧", title: "Turnkey Office Fit-Out", desc: "Complete design-to-delivery office fit-out service in Visakhapatnam. One team. One contract. Covering civil works, electrical, data cabling, HVAC coordination, custom furniture, and AV — delivered on your timeline." },
];

const whyUs = [
  { icon: "🏆", title: "Visakhapatnam's Commercial Interior Specialists", desc: "Nestique Studio has delivered offices for corporates, IT firms, and startups across Vizag. Our portfolio speaks to the range and quality of commercial work we're trusted to deliver." },
  { icon: "📐", title: "IIT Kharagpur-Trained Architects", desc: "Our founding architects trained at IIT Kharagpur bring technical depth to every office project. Structural considerations, building regulations, fire safety, and accessibility are integrated from day one." },
  { icon: "⚡", title: "Fast Delivery Without Downtime", desc: "We understand that office downtime costs money. Our Visakhapatnam office fit-out teams are trained to work efficiently — night shifts, phased delivery, and weekend work when needed to hit your go-live date." },
  { icon: "💰", title: "Fixed Price, All-Inclusive Quotes", desc: "No surprises. Our office interior quotes in Visakhapatnam cover design, civil, electrical, furniture, and signage. You know the final number before any work begins." },
];

const areas = [
  "Dwaraka Nagar", "MVP Colony", "Steel Plant Area", "Gajuwaka",
  "Rushikonda IT Park", "Bheemunipatnam", "Madhurawada",
  "Seethammadhara", "Vizag City Centre", "NAD Junction",
];

export default function OfficeInteriorVizagPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>Office Interior Design · Visakhapatnam</p>
          <h1>Office Interior Design<br />in Visakhapatnam</h1>
          <p className={styles.heroSub}>
            Nestique Studio — Visakhapatnam&apos;s commercial interior design specialists. Corporate offices,
            IT workspaces, co-working spaces & executive suites designed, built, and delivered on time.
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
          <div className={styles.statItem}><span className={styles.statNum}>130+</span><span className={styles.statLabel}>Projects Completed</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>30–60</span><span className={styles.statLabel}>Days Avg. Office Delivery</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>IIT</span><span className={styles.statLabel}>Kharagpur Trained</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>+81</span><span className={styles.statLabel}>NPS Score</span></div>
        </div>
      </div>

      {/* ── About ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Why Office Design Matters</p>
          <h2>Office Interiors That Work as Hard as Your Team</h2>
          <p className={styles.sectionSub}>
            A well-designed office in Visakhapatnam is one of the highest-return investments a business can make. Research consistently shows that workspace design directly impacts employee productivity, talent retention, client perception, and company culture. At Nestique Studio, we design offices that do all four — creating environments that are functional and inspiring, that reflect your brand values, and that make people want to come to work.
          </p>
          <p className={styles.sectionSub}>
            Visakhapatnam is growing rapidly as a commercial and IT hub — with new business parks, corporate campuses, and co-working spaces opening across the city. Nestique Studio has been at the centre of this growth, delivering office interiors for IT companies, professional services firms, healthcare corporates, logistics operators, and startups across Vizag. Our founding architects, trained at IIT Kharagpur, bring a level of technical rigour and spatial intelligence that typical interior decorators simply cannot match. We design for how people work, how space can flex, and how your brand can speak through every surface.
          </p>
          <p className={styles.sectionSub}>
            Whether you need a 500 sq ft startup office in Dwaraka Nagar or a 10,000 sq ft corporate headquarters in the Rushikonda IT Park, Nestique Studio delivers the complete design-and-build service in Visakhapatnam — from first brief to final handover, under one contract, with one team accountable for the result.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>What We Design</p>
          <h2>Office Interior Design Services in Visakhapatnam</h2>
          <p className={styles.sectionSub}>Every type of commercial workspace — designed and built by our Vizag team.</p>
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
          <h2>Why Visakhapatnam Businesses Choose Nestique Studio</h2>
          <p className={styles.sectionSub}>What sets our office interior design apart in Vizag.</p>
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
          <p className={styles.eyebrow}>Where We Work</p>
          <h2>Office Interior Projects Across Visakhapatnam</h2>
          <p className={styles.sectionSub}>We work in all major commercial and business zones in Vizag.</p>
          <div className={styles.areasGrid}>
            {areas.map((a, i) => <span className={styles.areaBadge} key={i}>{a}</span>)}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2>Our Office Interior Design Process in Vizag</h2>
          <p className={styles.sectionSub}>From brief to handover — fast, transparent, accountable.</p>
          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Site Survey & Brief", desc: "We visit your Visakhapatnam office premises, measure and photograph, understand your brief, headcount, brand guidelines, and budget." },
              { step: "02", title: "Concept & 3D Design", desc: "Our designers develop a detailed space plan and 3D visuals. You review and approve before any civil or fit-out work begins." },
              { step: "03", title: "Build & Fit-Out", desc: "Our Vizag team executes the fit-out — partitions, flooring, ceiling, electrical, data, HVAC, and furniture — with minimal disruption and daily progress updates." },
              { step: "04", title: "Handover & Snag-Free", desc: "Full snagging walkthrough with you. Every item on the punch list resolved before we call the project complete. Ready to move in." },
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
          <h2>Office Interior Design in Visakhapatnam — Questions Answered</h2>
          <div className={styles.faqList}>
            {[
              { q: "How much does office interior design cost in Visakhapatnam?", a: "Office interior design in Visakhapatnam ranges from ₹1,200–₹3,500 per sq ft depending on fit-out specification. A 1,000 sq ft office costs approximately ₹12–35 lakhs all-in. Nestique Studio provides a detailed itemised quote after a free site visit — no surprises after sign-off. Email hello@nestiquestudio.in to get started." },
              { q: "How long does an office fit-out take in Vizag?", a: "A typical 1,000–2,500 sq ft office fit-out in Visakhapatnam takes 30–60 days from design approval to handover. Larger offices may take 60–90 days. We provide a fixed delivery schedule in the contract and track it daily." },
              { q: "Do you design IT and tech company offices in Visakhapatnam?", a: "Yes. IT office interiors are one of our core specialties in Visakhapatnam. We design open collaborative workspaces, focus pods, server-adjacent technical rooms, standing desk zones, and tech-branded reception areas. We understand the specific needs of Vizag's IT sector." },
              { q: "Can Nestique Studio handle the complete office build in Vizag?", a: "Yes. We offer a full turnkey service in Visakhapatnam — design, civil fit-out, electrical, data, HVAC coordination, furniture supply, and branding — under one contract. One point of accountability from day one to handover." },
              { q: "Which areas of Visakhapatnam do you serve for office design?", a: "We design and build offices across all commercial zones in Visakhapatnam — Dwaraka Nagar, MVP Colony, Steel Plant Area, Gajuwaka, Rushikonda IT Park, Bheemunipatnam, Madhurawada, Seethammadhara, and the Vizag City Centre." },
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
          <h2>Ready to Design Your Visakhapatnam Office?</h2>
          <p>
            Get a free site visit and all-inclusive office interior quote from Visakhapatnam&apos;s commercial
            interior specialists. IIT-trained architects, 130+ projects, fixed pricing.
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
