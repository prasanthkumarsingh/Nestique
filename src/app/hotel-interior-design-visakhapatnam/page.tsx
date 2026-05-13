import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "../city-page.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Hotel Interior Design in Visakhapatnam | Hospitality & Restaurant Interiors — Nestique Studio",
  description:
    "Premier hotel and hospitality interior design in Visakhapatnam. Nestique Studio designs hotels, resorts, restaurants, cafes & banquet halls in Vizag. Guest-experience-led design. Free consultation: hello@nestiquestudio.in",
  keywords: [
    "hotel interior design Visakhapatnam",
    "hospitality interior design Vizag",
    "restaurant interior design Visakhapatnam",
    "hotel design Vizag",
    "resort interior design Visakhapatnam",
    "cafe interior design Vizag",
    "banquet hall design Visakhapatnam",
    "hotel renovation Vizag",
    "hospitality design firm Visakhapatnam",
    "hotel interior design cost Vizag",
    "restaurant renovation Visakhapatnam",
    "hotel architecture Vizag",
  ],
  alternates: { canonical: `${SITE_URL}/hotel-interior-design-visakhapatnam` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/hotel-interior-design-visakhapatnam`,
    title: "Hotel Interior Design in Visakhapatnam | Nestique Studio",
    description:
      "Premier hotel, resort & restaurant interior design in Visakhapatnam. Guest-experience-led hospitality design in Vizag by specialist designers.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Interior Design in Visakhapatnam | Nestique Studio",
    description: "Premier hotel, resort & restaurant interior design in Visakhapatnam.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InteriorDesigner"],
  name: "Nestique Studio — Hotel Interior Design Visakhapatnam",
  url: `${SITE_URL}/hotel-interior-design-visakhapatnam`,
  telephone: "+917816086291",
  email: "hello@nestiquestudio.in",
  description:
    "Specialist hospitality interior design in Visakhapatnam — hotels, resorts, boutique properties, restaurants, cafes, and banquet halls designed for exceptional guest experiences.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.6868, longitude: 83.2185 },
  areaServed: ["Visakhapatnam", "Vizag", "Rushikonda", "Bheemunipatnam", "Beach Road"],
  priceRange: "₹₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does hotel interior design cost in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hotel interior design in Visakhapatnam typically costs ₹2,000–₹6,000 per sq ft depending on the hotel category and finish specification. A 20-room boutique hotel can cost ₹80 lakhs–₹2.5 crores for a complete interior fit-out. Nestique Studio provides a detailed cost plan after a free project brief meeting.",
      },
    },
    {
      "@type": "Question",
      name: "Do you design restaurants and cafes in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Restaurant and cafe interior design is one of our specialties in Visakhapatnam. We create dining environments that generate Instagram shareability, drive repeat visits, and maximise covers per sq ft — whether you're opening a fine-dining restaurant, a casual cafe, or a fast-food outlet in Vizag.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a hotel interior project take in Vizag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A boutique hotel renovation in Visakhapatnam (20–30 rooms) typically takes 4–8 months from design sign-off to soft opening. A new-build hotel interior fit-out can take 6–12 months depending on scale. We work closely with your construction team to deliver on your launch timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with branding and concept development for our hotel in Vizag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio offers a brand-led interior design process — helping you define your hotel or restaurant's identity concept, guest experience narrative, and visual language before any design begins. This strategic foundation ensures your Visakhapatnam property is positioned distinctively in a competitive market.",
      },
    },
    {
      "@type": "Question",
      name: "Do you design banquet halls and event spaces in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design banquet halls, pre-function areas, and event spaces across Visakhapatnam — from intimate 100-pax private dining rooms to 1,000+ pax convention banquets. Acoustic design, AV integration, flexible furniture layouts, and hospitality-grade finishes are all included.",
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
    { "@type": "ListItem", position: 3, name: "Hotel Interior Design Visakhapatnam", item: `${SITE_URL}/hotel-interior-design-visakhapatnam` },
  ],
};

const services = [
  { icon: "🏨", title: "Hotel & Resort Interior Design", desc: "Complete hotel interior design for Visakhapatnam properties — lobby and reception design, guestroom design, suites, corridors, F&B outlets, spa and wellness areas, and pool deck environments. Every touchpoint designed for the guest experience you want to deliver." },
  { icon: "🍽️", title: "Restaurant & Fine Dining Design", desc: "Atmosphere-defining restaurant interiors for Vizag — from intimate fine dining settings with bespoke furniture and curated lighting to high-energy casual dining spaces that drive footfall. We design restaurants that guests want to return to and share." },
  { icon: "☕", title: "Cafe & Coffee Shop Design", desc: "Distinctive cafe interiors for Visakhapatnam — brand-led design concepts, Instagram-worthy feature walls, comfortable seating zones, efficient barista counter layouts, and display elements that drive retail sales alongside F&B." },
  { icon: "🎊", title: "Banquet Hall & Event Space Design", desc: "Flexible, sophisticated banquet hall and event space design in Visakhapatnam. Acoustic engineering, integrated AV systems, transformable furniture, pre-function lobby design, and premium finishes that elevate every event category you host." },
  { icon: "🏖️", title: "Resort & Beach Property Interiors", desc: "Coastal and resort property interior design for Vizag&apos;s beach and hillside locations — celebrating the natural surroundings through materiality, views, and biophilic design. Perfect for Rushikonda, Bheemunipatnam, and Vizag&apos;s tourism corridor." },
  { icon: "🏗️", title: "Hotel Renovation & Brand Refresh", desc: "Renovation and brand refresh for existing hotel and hospitality properties in Visakhapatnam. We can work floor by floor, minimising revenue loss while delivering a complete transformation that repositions your property in the market." },
];

const whyUs = [
  { icon: "🌟", title: "Guest-Experience-Led Design", desc: "Every design decision starts with the guest experience. We map the guest journey through your Vizag property and design each touchpoint to create the emotion, behaviour, and impression you want to generate." },
  { icon: "📐", title: "Architecture + Interiors Under One Roof", desc: "Our IIT Kharagpur-trained architects handle structural changes, MEP coordination, and façade design alongside the interior — giving you a coherent whole-property design approach unique to Nestique Studio." },
  { icon: "🎯", title: "Commercial Viability Built-In", desc: "Great hotel design must also work commercially. We design for cover counts, revenue per available room, F&B yield, and operational efficiency — alongside aesthetics. Your Vizag property will look exceptional and perform financially." },
  { icon: "💰", title: "Transparent, Project-Based Fees", desc: "We provide a clear design fee structure and build cost estimate before any work begins. No percentage-of-project games. Your Visakhapatnam hotel project has a defined budget that we design to and build within." },
];

const areas = [
  "Beach Road", "Rushikonda", "Bheemunipatnam", "MVP Colony",
  "Dwaraka Nagar", "Vizag City Centre", "Madhurawada",
  "Kommadi", "Yendada", "Steel Plant Area",
];

export default function HotelInteriorVizagPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>Hotel Interior Design · Visakhapatnam</p>
          <h1>Hotel &amp; Hospitality Interior Design<br />in Visakhapatnam</h1>
          <p className={styles.heroSub}>
            Nestique Studio — Visakhapatnam&apos;s hospitality interior design specialists. Hotels, resorts, restaurants,
            cafes & banquet halls designed for extraordinary guest experiences and commercial performance.
          </p>
          <div className={styles.heroBtns}>
            <a href="/consultation" className={styles.heroBtn}>Start Your Project</a>
            <a href="mailto:hello@nestiquestudio.in" className={styles.heroBtnOutline}>hello@nestiquestudio.in</a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className={styles.statsBar}>
        <div className={styles.statsBarInner}>
          <div className={styles.statItem}><span className={styles.statNum}>130+</span><span className={styles.statLabel}>Commercial Projects</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>6</span><span className={styles.statLabel}>Cities Served</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>IIT</span><span className={styles.statLabel}>Kharagpur Trained</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>+81</span><span className={styles.statLabel}>NPS Score</span></div>
        </div>
      </div>

      {/* ── About ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Hospitality by Design</p>
          <h2>Hotel Interiors That Create Experiences — and Revenue</h2>
          <p className={styles.sectionSub}>
            Visakhapatnam&apos;s tourism and hospitality sector is experiencing significant growth — driven by beach tourism along the Rushikonda and Bheemunipatnam coastline, corporate travel demand from the city&apos;s expanding industrial and IT base, and a rising appetite for quality dining and social experiences. In this competitive landscape, the quality of your property&apos;s interior design is a direct driver of bookings, reviews, and revenue.
          </p>
          <p className={styles.sectionSub}>
            Nestique Studio designs hotel, resort, and restaurant interiors in Visakhapatnam from a guest-experience-first perspective. We map the guest journey through your property — from the approach and first impression of the lobby through to guestroom comfort, F&B atmosphere, and wellness spaces — and design each touchpoint to deliver the specific emotions and behaviours you want to generate. The result is a property that earns its five-star reviews, generates word-of-mouth referrals, and sustains a rate premium over less-designed competitors.
          </p>
          <p className={styles.sectionSub}>
            Our IIT Kharagpur-trained architects also bring structural and MEP expertise to hospitality projects — handling façade upgrades, structural modifications, and complex MEP coordination alongside the interior design. One team handles it all for your Vizag hotel project.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Hospitality Design Services</p>
          <h2>Hotel Interior Design Services in Visakhapatnam</h2>
          <p className={styles.sectionSub}>Hotels, resorts, restaurants, cafes and banquet halls — all under one hospitality design team in Vizag.</p>
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
          <h2>Why Visakhapatnam&apos;s Hospitality Sector Trusts Nestique Studio</h2>
          <p className={styles.sectionSub}>What makes our hospitality design different in Vizag.</p>
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
          <h2>Hospitality Projects Across Visakhapatnam</h2>
          <p className={styles.sectionSub}>From Vizag&apos;s beachfront to its business districts — we design for every hospitality location.</p>
          <div className={styles.areasGrid}>
            {areas.map((a, i) => <span className={styles.areaBadge} key={i}>{a}</span>)}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2>Our Hotel Interior Design Process in Vizag</h2>
          <p className={styles.sectionSub}>From concept to opening — a rigorous, guest-first design process.</p>
          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Concept & Brand Brief", desc: "We define your property&apos;s guest experience concept, positioning, and design direction before drawing a single line. This strategic foundation drives every design decision." },
              { step: "02", title: "Schematic Design & Mood", desc: "Space plans, mood boards, material palettes, and key visual renders are developed and reviewed. You see the look and feel of your Vizag property before any commitment to detail." },
              { step: "03", title: "Detail Design & Build", desc: "Full construction drawings, furniture specifications, lighting plans, and FF&E schedules. Our Vizag build team executes with precision and regular progress reporting." },
              { step: "04", title: "Soft Opening Support", desc: "We assist with the final dressing of your Visakhapatnam property — art placement, plant styling, amenity presentation — so your property photographs and opens at its very best." },
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
          <h2>Hotel Interior Design in Visakhapatnam — Questions Answered</h2>
          <div className={styles.faqList}>
            {[
              { q: "How much does hotel interior design cost in Visakhapatnam?", a: "Hotel interior fit-out in Visakhapatnam costs ₹2,000–₹6,000 per sq ft depending on the property category. A 20-room boutique hotel can cost ₹80 lakhs–₹2.5 crores. Nestique Studio provides a detailed cost plan after a free project brief. Email hello@nestiquestudio.in." },
              { q: "Do you design restaurants and cafes in Visakhapatnam?", a: "Yes. Restaurant and cafe design is a core specialty in Visakhapatnam. We create dining environments that drive footfall, repeat visits, and social media sharing — from fine dining to casual cafe concepts across Vizag." },
              { q: "How long does a hotel interior project take in Vizag?", a: "A boutique hotel renovation (20–30 rooms) in Visakhapatnam takes 4–8 months from design sign-off to soft opening. New-build hotel interiors take 6–12 months. We align our delivery to your launch timeline." },
              { q: "Can you help with hotel concept and branding in Vizag?", a: "Yes. We offer brand-led design — helping you define your hotel's identity, guest experience narrative, and positioning before design begins. This ensures your Visakhapatnam property stands out in a competitive market from opening day." },
              { q: "Do you design banquet halls and event spaces in Visakhapatnam?", a: "Yes. We design banquet halls, pre-function areas, and event spaces across Visakhapatnam — from intimate private dining rooms to 1,000+ pax convention banquets. Acoustic design, AV integration, and flexible layouts are all included." },
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
          <h2>Designing a Hotel or Restaurant in Visakhapatnam?</h2>
          <p>
            Talk to Nestique Studio&apos;s hospitality interior specialists. Free concept consultation,
            guest-experience-led design, and a team with proven commercial project delivery across Vizag.
          </p>
          <div className={styles.ctaBtns}>
            <a href="/consultation" className={styles.ctaBtnWhite}>Book a Consultation</a>
            <a href="mailto:hello@nestiquestudio.in" className={styles.ctaBtnOutline}>hello@nestiquestudio.in</a>
          </div>
        </div>
      </section>
    </main>
  );
}
