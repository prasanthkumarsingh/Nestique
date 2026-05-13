import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "../city-page.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Architect in Visakhapatnam | Commercial Architecture Firm Vizag — Nestique Studio",
  description:
    "IIT Kharagpur-trained commercial architect in Visakhapatnam. Nestique Studio designs offices, hospitals, hotels & residential buildings in Vizag — structural drawings, 3D design & VMRDA approval. Free consultation: hello@nestiquestudio.in",
  keywords: [
    "architect in Visakhapatnam",
    "commercial architect Visakhapatnam",
    "architect Vizag",
    "architecture firm Visakhapatnam",
    "IIT architect Visakhapatnam",
    "commercial architecture Vizag",
    "office architect Visakhapatnam",
    "hospital architect Vizag",
    "best architect Visakhapatnam",
    "building architect Vizag",
    "structural drawings Visakhapatnam",
    "VMRDA plan approval Vizag",
    "3D architectural design Visakhapatnam",
    "architect near me Vizag",
  ],
  alternates: { canonical: `${SITE_URL}/architect-visakhapatnam` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/architect-visakhapatnam`,
    title: "Architect in Visakhapatnam | Nestique Studio",
    description:
      "IIT Kharagpur-trained architects in Visakhapatnam. Residential & commercial architecture, 3D design, structural drawings, Vastu-compliant plans. 130+ projects.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Nestique Studio — Architect in Visakhapatnam",
  url: `${SITE_URL}/architect-visakhapatnam`,
  telephone: "+917816086291",
  email: "hello@nestiquestudio.in",
  description:
    "Premier architecture firm in Visakhapatnam offering residential architecture, commercial building design, structural drawings, 3D visualisation, and Vastu-compliant layouts.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.6868, longitude: 83.2185 },
  areaServed: [
    "MVP Colony", "Madhurawada", "Gajuwaka", "Rushikonda", "Seethammadhara",
    "Dwaraka Nagar", "Bheemunipatnam", "Kommadi", "Vizag",
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
      name: "How much does an architect charge in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Architect fees in Visakhapatnam typically range from ₹15–₹50 per sq ft for residential projects, or a fixed fee based on project scope. This covers concept design, working drawings, structural drawings, and site supervision. Nestique Studio provides a clear fee structure after an initial free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "What services does an architect in Vizag provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An architect in Visakhapatnam provides site analysis, architectural design, floor plan drawings, elevation design, structural drawings, 3D visualisation, Vastu planning, building plan approval assistance, and construction supervision. Nestique Studio offers all these services under one roof.",
      },
    },
    {
      "@type": "Question",
      name: "Do you design Vastu-compliant homes in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our residential architecture projects in Visakhapatnam incorporate Vastu Shastra principles — from plot orientation and room placement to door positions and light flow. Our IIT Kharagpur-trained architects ensure your Vizag home is both modern and Vastu-compliant.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help get building plan approval in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio assists with VMRDA and GVMC building plan approval in Visakhapatnam. We prepare all required drawings in compliance with local building regulations and guide you through the approval process.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide 3D architectural visualisation in Vizag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every Nestique Studio architecture project in Visakhapatnam includes detailed 3D renderings and walkthroughs. See your home or building exactly as it will look — inside and outside — before ground is broken.",
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
    { "@type": "ListItem", position: 3, name: "Architect Visakhapatnam", item: `${SITE_URL}/architect-visakhapatnam` },
  ],
};

const services = [
  { icon: "🏠", title: "Residential Architecture", desc: "Complete architectural design for independent houses, villas, and row-houses in Visakhapatnam. From site analysis and Vastu planning to working drawings and construction supervision — end-to-end." },
  { icon: "📐", title: "Floor Plan & Layout Design", desc: "Optimised floor plans for your Vizag plot — maximising natural light, ventilation, privacy, and functional flow. We design for how you live, not just how it looks on paper." },
  { icon: "🏗️", title: "Structural Drawings & Engineering", desc: "Technically sound structural drawings for buildings in Visakhapatnam — foundations, columns, beams, slabs, and staircases — prepared by our MTech-qualified architects and coordinated with licensed structural engineers." },
  { icon: "🏢", title: "Commercial Architecture", desc: "Architecture for offices, showrooms, hospitals, schools, and mixed-use developments in Vizag. We design buildings that work efficiently, comply with NBC norms, and represent your brand powerfully." },
  { icon: "🖥️", title: "3D Visualisation & Walkthroughs", desc: "Photorealistic 3D exteriors and animated walkthroughs of your Visakhapatnam building. See it before you build it — materials, textures, landscaping, and lighting rendered in detail." },
  { icon: "📋", title: "VMRDA / GVMC Plan Approval", desc: "We prepare and submit building plan drawings in compliance with VMRDA and GVMC regulations for Visakhapatnam. We guide you through every step of the statutory approval process." },
];

const whyUs = [
  { icon: "🎓", title: "IIT Kharagpur-Trained Architects", desc: "Nestique Studio&apos;s founding architects bring IIT Kharagpur-level academic training to every Visakhapatnam project — rare depth of knowledge that separates us from typical local firms." },
  { icon: "🏆", title: "130+ Completed Projects", desc: "Our proven track record in Visakhapatnam, Hyderabad, and beyond demonstrates the depth and consistency of our architectural work across all building types and scales." },
  { icon: "📐", title: "Vastu + Modern Design, Together", desc: "We don&apos;t make you choose between Vastu and great architecture. Our Vizag architects integrate both seamlessly — your home will be Vastu-correct and strikingly contemporary." },
  { icon: "📁", title: "Complete Drawings Package", desc: "From architectural to structural, MEP coordination, and finishes schedule — we deliver a complete drawing package for your Vizag contractor to build from, with zero ambiguity." },
];

const areas = [
  "MVP Colony", "Madhurawada", "Gajuwaka", "Rushikonda", "Seethammadhara",
  "Dwaraka Nagar", "Steel Plant Area", "Bheemunipatnam", "Kommadi",
  "Yendada", "Pendurthi", "Gopalapatnam", "Vizag City Centre",
  "PM Palem", "Simhachalam", "NAD Junction",
];

export default function ArchitectVizagPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>Architecture · Visakhapatnam</p>
          <h1>Commercial Architect in<br />Visakhapatnam</h1>
          <p className={styles.heroSub}>
            IIT Kharagpur-trained commercial architects in Visakhapatnam. Offices, hospitals, hotels & residential buildings —
            3D design, structural drawings, VMRDA approvals & site supervision all under one roof.
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
          <div className={styles.statItem}><span className={styles.statNum}>130+</span><span className={styles.statLabel}>Projects in Vizag & AP</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>IIT</span><span className={styles.statLabel}>Kharagpur Trained</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>6</span><span className={styles.statLabel}>Cities Served</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>+81</span><span className={styles.statLabel}>NPS Score</span></div>
        </div>
      </div>

      {/* ── About ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>About Nestique Studio</p>
          <h2>Visakhapatnam&apos;s Architect — Trained at IIT Kharagpur</h2>
          <p className={styles.sectionSub}>
            Finding a great architect in Visakhapatnam means finding someone who combines deep technical knowledge with genuine design vision. At Nestique Studio, our founding team includes architects trained at IIT Kharagpur — India&apos;s premier technical institution — who bring both to every project. Whether you&apos;re building a family home in Madhurawada, a commercial complex in Dwaraka Nagar, or a seaside villa in Rushikonda, our architects in Visakhapatnam design with context, culture, and craft at the centre.
          </p>
          <p className={styles.sectionSub}>
            We handle every stage of your project — site analysis, concept design, working drawings, structural coordination, VMRDA and GVMC plan approvals, and on-site supervision. Our clients in Vizag trust us because we are rigorous in our technical work, honest about timelines, and committed to delivering buildings that stand as proud additions to Visakhapatnam&apos;s skyline.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Architecture Services</p>
          <h2>What Our Architects Offer in Visakhapatnam</h2>
          <p className={styles.sectionSub}>Complete architectural services for residential and commercial projects in Vizag.</p>
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
          <h2>Why Visakhapatnam Trusts Our Architects</h2>
          <p className={styles.sectionSub}>What makes Nestique Studio different from every other architecture firm in Vizag.</p>
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
          <h2>Areas We Serve in Visakhapatnam</h2>
          <p className={styles.sectionSub}>Our architects work across all major localities in Vizag.</p>
          <div className={styles.areasGrid}>
            {areas.map((a, i) => (<span className={styles.areaBadge} key={i}>{a}</span>))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2>Our Architecture Design Process in Vizag</h2>
          <p className={styles.sectionSub}>From site visit to submission-ready drawings — a structured, transparent process.</p>
          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Site Visit & Briefing", desc: "Our architect visits your Visakhapatnam plot, analyses orientation, soil, and context, and discusses your programme, budget, and vision." },
              { step: "02", title: "Concept & 3D Design", desc: "We develop multiple design concepts and present 3D renderings for your Vizag project. You choose and refine your preferred direction." },
              { step: "03", title: "Working Drawings", desc: "Full set of architectural, structural, and MEP drawings prepared to construction and regulatory submission standard for Visakhapatnam." },
              { step: "04", title: "Site Supervision", desc: "Our architects conduct regular site visits in Visakhapatnam to ensure the building is being constructed exactly as designed." },
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
          <h2>Architect in Visakhapatnam — Common Questions</h2>
          <div className={styles.faqList}>
            {[
              { q: "How much does an architect charge in Visakhapatnam?", a: "Architect fees in Visakhapatnam range from ₹15–₹50 per sq ft depending on project complexity and services included. Nestique Studio offers a transparent fee structure covering concept design, drawings, and supervision — discussed and agreed before work begins. Email hello@nestiquestudio.in for a quote." },
              { q: "What does an architect in Vizag do?", a: "An architect in Visakhapatnam handles site analysis, architectural design, floor plan and elevation drawings, structural coordination, 3D visualisation, Vastu planning, building plan approval assistance, and site supervision. Nestique Studio provides all of these under one contract." },
              { q: "Do you design Vastu-compliant homes in Visakhapatnam?", a: "Yes. Our Vizag architects integrate Vastu Shastra into every residential design — plot orientation, room placement, entry positions, and light flow — while maintaining a modern, functional aesthetic. Vastu and good architecture are not opposites in our hands." },
              { q: "Can you get building plan approved by VMRDA in Vizag?", a: "Yes. We prepare and submit all necessary drawings for VMRDA and GVMC building plan approval in Visakhapatnam, ensuring full compliance with local building regulations, setback rules, and zoning requirements." },
              { q: "Do you provide 3D architectural visualisation in Visakhapatnam?", a: "Yes. All our architecture projects in Visakhapatnam include detailed 3D exterior and interior renderings. You see exactly how your home or building will look before ground is broken — saving time, money, and regrets." },
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
          <h2>Looking for an Architect in Visakhapatnam?</h2>
          <p>
            Talk to Nestique Studio&apos;s IIT-trained architects today. Free site consultation,
            transparent fee structure, and a team that has delivered 130+ projects across Vizag and South India.
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
