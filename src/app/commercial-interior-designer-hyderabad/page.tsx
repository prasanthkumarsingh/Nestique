import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "../city-page.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Commercial Interior Designer in Hyderabad | Offices, Hospitals & Hotels — Nestique Studio",
  description:
    "Top commercial interior designer in Hyderabad. Nestique Studio designs offices, hospitals, hotels, restaurants & corporate spaces in Hyderabad. IIT-trained architects. Free consultation: hello@nestiquestudio.in",
  keywords: [
    "commercial interior designer Hyderabad",
    "office interior design Hyderabad",
    "hospital interior design Hyderabad",
    "hotel interior design Hyderabad",
    "commercial interior design company Hyderabad",
    "corporate interior designer Hyderabad",
    "restaurant interior design Hyderabad",
    "commercial fit-out Hyderabad",
    "office interior designer Gachibowli",
    "commercial interior Banjara Hills",
    "best commercial interior designer Hyderabad",
    "workplace design Hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/commercial-interior-designer-hyderabad` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/commercial-interior-designer-hyderabad`,
    title: "Commercial Interior Designer in Hyderabad | Nestique Studio",
    description:
      "Top commercial interior designer in Hyderabad — offices, hospitals, hotels & corporate spaces. IIT-trained architects. Turnkey design & build.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Interior Designer in Hyderabad | Nestique Studio",
    description: "Top commercial interior designer in Hyderabad — offices, hospitals, hotels & corporate spaces.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InteriorDesigner"],
  name: "Nestique Studio — Commercial Interior Designer Hyderabad",
  url: `${SITE_URL}/commercial-interior-designer-hyderabad`,
  telephone: "+917816086291",
  email: "hello@nestiquestudio.in",
  description:
    "Leading commercial interior design firm in Hyderabad — offices, hospitals, hotels, restaurants, and corporate spaces designed and built by IIT-trained architects.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.385, longitude: 78.4867 },
  areaServed: ["Hyderabad", "Gachibowli", "Banjara Hills", "Jubilee Hills", "Hitec City", "Kondapur"],
  priceRange: "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does commercial interior design cost in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commercial interior design in Hyderabad costs ₹1,500–₹4,500 per sq ft depending on the project type and specification. Office fit-outs typically range from ₹1,500–₹3,000/sq ft, while hospital and hospitality interiors can reach ₹3,000–₹6,000/sq ft. Nestique Studio provides a detailed all-inclusive quote after a free site visit.",
      },
    },
    {
      "@type": "Question",
      name: "What types of commercial projects does Nestique Studio handle in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle all types of commercial interior projects in Hyderabad — corporate offices, IT campuses, co-working spaces, hospitals, clinics, hotels, restaurants, cafes, retail showrooms, banks, and educational institutions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you design IT company offices in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. IT and tech workspace design is one of our core specialties in Hyderabad. We have designed offices across Gachibowli, Hitec City, Kondapur, and Madhapur for IT companies, startups, and consulting firms — open-plan zones, collaboration spaces, focus rooms, and branded reception areas.",
      },
    },
    {
      "@type": "Question",
      name: "Can you manage the full commercial fit-out in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio offers a complete turnkey commercial design-and-build service in Hyderabad — architectural design, interior design, civil fit-out, electrical, data infrastructure, HVAC coordination, furniture procurement, and AV systems — under one contract with one project manager.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Hyderabad do you serve for commercial projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all major commercial areas of Hyderabad — Gachibowli, Hitec City, Kondapur, Madhapur, Banjara Hills, Jubilee Hills, Kokapet, Begumpet, Secunderabad, Kukatpally, and all surrounding business zones.",
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
    { "@type": "ListItem", position: 3, name: "Commercial Interior Designer Hyderabad", item: `${SITE_URL}/commercial-interior-designer-hyderabad` },
  ],
};

const services = [
  { icon: "🏢", title: "Office & Corporate Interior Design", desc: "End-to-end corporate office interiors for Hyderabad's business community — reception areas, open workspaces, private cabins, boardrooms, server rooms, and break-out zones. Designed for productivity, culture, and brand." },
  { icon: "💻", title: "IT & Tech Campus Design", desc: "Purpose-built IT workspace design for Hyderabad's Gachibowli and Hitec City corridor. Agile workspaces, collaboration hubs, focus zones, and tech-campus scale commercial interiors built around how modern technology teams work." },
  { icon: "🏥", title: "Hospital & Healthcare Interiors", desc: "Specialist healthcare interior design for Hyderabad hospitals, clinics, and diagnostic centres. NABH-aware design with infection-control surfaces, efficient patient flow, and clinical area specifications built to operator requirements." },
  { icon: "🏨", title: "Hotel & Hospitality Interiors", desc: "Guest-experience-led hotel, resort, and restaurant interior design for Hyderabad. Lobby, guestroom, F&B, spa, and event space design for properties across Banjara Hills, Jubilee Hills, and Hyderabad&apos;s hospitality corridors." },
  { icon: "🏪", title: "Retail & Showroom Design", desc: "Commercial retail and showroom interiors for Hyderabad — product display strategy, brand environment design, customer journey mapping, and high-traffic finish specification. Designed to drive conversion and brand perception." },
  { icon: "🤝", title: "Co-working & Flexible Office Design", desc: "High-performance co-working and flexible office space design for Hyderabad operators. Hot-desks, private offices, meeting rooms, event spaces, and café zones — designed for community, productivity, and commercial viability." },
];

const whyUs = [
  { icon: "🎓", title: "IIT Kharagpur-Trained Architects", desc: "Our founding team brings IIT Kharagpur academic depth to every commercial project in Hyderabad. Technical correctness and design vision, combined — rare in one firm." },
  { icon: "🏙️", title: "Deep Hyderabad Commercial Experience", desc: "We understand Hyderabad&apos;s commercial real estate landscape — building regulations, MEP standards, local vendor ecosystems, and the specific design expectations of Hyderabad&apos;s corporate and hospitality clients." },
  { icon: "🔧", title: "True Design-and-Build", desc: "Architecture, interior design, and construction under one Nestique Studio contract. One PM, one bill, one accountable team. No coordination gaps between designer and contractor." },
  { icon: "📊", title: "Commercial ROI Built Into Design", desc: "We design commercial spaces in Hyderabad that perform financially — offices that attract and retain talent, hotels that earn premium rates, restaurants that maximise covers, hospitals that build patient confidence." },
];

const areas = [
  "Gachibowli", "Hitec City", "Kondapur", "Madhapur",
  "Banjara Hills", "Jubilee Hills", "Kokapet", "Narsingi",
  "Begumpet", "Secunderabad", "Kukatpally", "Kompally",
];

export default function CommercialInteriorHyderabadPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>Commercial Interior Design · Hyderabad</p>
          <h1>Commercial Interior Designer<br />in Hyderabad</h1>
          <p className={styles.heroSub}>
            Nestique Studio — Hyderabad&apos;s commercial interior specialists. Offices, hospitals, hotels,
            restaurants & corporate spaces designed by IIT-trained architects and delivered turnkey.
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
          <div className={styles.statItem}><span className={styles.statNum}>6</span><span className={styles.statLabel}>Cities Served</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>IIT</span><span className={styles.statLabel}>Kharagpur Trained</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>+81</span><span className={styles.statLabel}>NPS Score</span></div>
        </div>
      </div>

      {/* ── About ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Hyderabad&apos;s Commercial Specialists</p>
          <h2>Commercial Interior Design That Drives Business Performance</h2>
          <p className={styles.sectionSub}>
            Hyderabad is one of India&apos;s most competitive commercial environments — home to major IT campuses, world-class hospitals, premium hotels, and a thriving F&B scene. In this market, the quality of your commercial interior is not a luxury — it is a business necessity. It determines whether your office can attract top talent, whether your hospital commands patient trust, whether your hotel earns five-star reviews, and whether your restaurant drives repeat visits.
          </p>
          <p className={styles.sectionSub}>
            Nestique Studio is the commercial interior design firm Hyderabad businesses trust to get this right. Our IIT Kharagpur-trained architects bring the rare combination of academic rigour and commercial intelligence — designing spaces that are technically correct, aesthetically exceptional, and built to perform. We serve clients across Gachibowli&apos;s IT corridor, Banjara Hills&apos; luxury hospitality zone, Jubilee Hills&apos; premium residential and commercial mix, and all of Hyderabad&apos;s major commercial areas.
          </p>
          <p className={styles.sectionSub}>
            Our turnkey design-and-build model means you work with one team from concept through construction. No gaps between architect, interior designer, and contractor. One contract, one point of accountability, one outcome you can trust.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Commercial Design Services</p>
          <h2>Commercial Interior Design Services in Hyderabad</h2>
          <p className={styles.sectionSub}>Every type of commercial space — designed and built for performance in Hyderabad.</p>
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
          <h2>Why Hyderabad&apos;s Businesses Choose Nestique Studio</h2>
          <p className={styles.sectionSub}>What distinguishes our commercial interior design in Hyderabad.</p>
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
          <h2>Commercial Projects Across Hyderabad</h2>
          <p className={styles.sectionSub}>We design and build commercial spaces across all of Hyderabad&apos;s business zones.</p>
          <div className={styles.areasGrid}>
            {areas.map((a, i) => <span className={styles.areaBadge} key={i}>{a}</span>)}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2>Our Commercial Design Process in Hyderabad</h2>
          <p className={styles.sectionSub}>From brief to business-ready — fast, accountable, and professionally managed.</p>
          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Commercial Brief", desc: "We understand your business requirements, headcount, brand, budget, and timeline. Site survey and preliminary feasibility included in the free first meeting." },
              { step: "02", title: "Concept & Cost Plan", desc: "Design concepts developed and presented with indicative cost plans. You see the design direction and commercial investment before any commitment." },
              { step: "03", title: "Design & Build", desc: "Full detail design and construction documentation followed by turnkey fit-out in Hyderabad — civil, MEP, furniture, and AV — under our project management." },
              { step: "04", title: "Handover & Go-Live", desc: "Independent commissioning of all systems, full snagging, and operational handover support. Your Hyderabad commercial space is ready for business." },
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
          <h2>Commercial Interior Design in Hyderabad — Questions Answered</h2>
          <div className={styles.faqList}>
            {[
              { q: "How much does commercial interior design cost in Hyderabad?", a: "Commercial interior design in Hyderabad costs ₹1,500–₹4,500 per sq ft depending on type and specification. Office fit-outs: ₹1,500–₹3,000/sq ft. Hospital interiors: ₹3,000–₹5,000/sq ft. Hotel design: ₹2,500–₹6,000/sq ft. Nestique Studio provides a detailed all-inclusive quote after a free site visit. Email hello@nestiquestudio.in." },
              { q: "What commercial projects does Nestique Studio handle in Hyderabad?", a: "We handle corporate offices, IT campuses, co-working spaces, hospitals, clinics, hotels, restaurants, cafes, retail showrooms, banks, and educational institutions across Hyderabad — design and build, under one contract." },
              { q: "Do you design IT offices in Gachibowli and Hitec City?", a: "Yes. IT and tech workspace design is a core specialty in Hyderabad. We have designed offices in Gachibowli, Hitec City, Kondapur, and Madhapur — open-plan spaces, collaboration zones, focus rooms, and tech-branded reception areas for IT companies and startups." },
              { q: "Can you manage the full commercial fit-out in Hyderabad?", a: "Yes. Our turnkey service in Hyderabad covers design, civil fit-out, electrical, data, HVAC coordination, furniture, and AV — under one contract. One project manager is accountable from day one to handover." },
              { q: "Which areas of Hyderabad do you serve for commercial projects?", a: "We serve all major commercial areas of Hyderabad — Gachibowli, Hitec City, Kondapur, Madhapur, Banjara Hills, Jubilee Hills, Kokapet, Begumpet, Secunderabad, Kukatpally, and surrounding zones." },
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
          <h2>Need a Commercial Interior Designer in Hyderabad?</h2>
          <p>
            Talk to Nestique Studio today. Free commercial brief meeting, transparent pricing,
            and a team of IIT-trained architects accountable for your Hyderabad project from concept to completion.
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
