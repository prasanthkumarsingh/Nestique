import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "../city-page.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Best Interior Designer in Visakhapatnam | Home Interiors, Modular Kitchen, False Ceiling — Nestique Studio",
  description:
    "Looking for the best interior designer in Visakhapatnam? Nestique Studio offers complete home interior design, modular kitchens, false ceilings, wardrobe design & apartment interiors in Vizag. 130+ projects. Free consultation: +91 78160 86291.",
  keywords: [
    "interior designer in Visakhapatnam",
    "best interior designer Visakhapatnam",
    "interior design Vizag",
    "home interior design Visakhapatnam",
    "modular kitchen Visakhapatnam",
    "false ceiling design Vizag",
    "bedroom interior design Visakhapatnam",
    "apartment interior design Vizag",
    "living room interior design Visakhapatnam",
    "wardrobe design Vizag",
    "interior design cost Visakhapatnam",
    "2BHK interior design Vizag",
    "3BHK interior design Visakhapatnam",
    "interior designer near me Vizag",
    "best interior design company Visakhapatnam",
    "turnkey interior design Vizag",
    "pooja room design Visakhapatnam",
    "bathroom interior design Vizag",
  ],
  alternates: { canonical: `${SITE_URL}/interior-design-visakhapatnam` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/interior-design-visakhapatnam`,
    title: "Best Interior Designer in Visakhapatnam | Nestique Studio",
    description:
      "Complete home interior design services in Visakhapatnam — modular kitchens, false ceilings, wardrobes, bedrooms & more. 130+ projects. Free consultation.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nestique Studio — Interior Design Visakhapatnam",
  url: `${SITE_URL}/interior-design-visakhapatnam`,
  telephone: "+917816086291",
  email: "hello@nestiquestudio.in",
  description:
    "Best interior design company in Visakhapatnam offering complete home interiors, modular kitchens, false ceilings, wardrobes, and apartment interior design.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.6868, longitude: 83.2185 },
  areaServed: [
    "MVP Colony", "Madhurawada", "Gajuwaka", "Rushikonda", "Seethammadhara",
    "Dwaraka Nagar", "Steel Plant Area", "Bheemunipatnam", "Vizag",
  ],
  priceRange: "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does interior design cost in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interior design cost in Visakhapatnam typically ranges from ₹800–₹2,500 per sq ft depending on scope and materials. A 2BHK apartment interior can start from ₹4–8 lakhs. Nestique Studio provides transparent all-inclusive quotes. Contact us for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the best interior designer in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nestique Studio is one of Visakhapatnam's most trusted interior design firms with 130+ completed projects. We offer complete home interiors, modular kitchens, false ceilings, and office interiors across Vizag.",
      },
    },
    {
      "@type": "Question",
      name: "What areas of Visakhapatnam do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all areas of Visakhapatnam including MVP Colony, Madhurawada, Gajuwaka, Rushikonda, Seethammadhara, Dwaraka Nagar, Bheemunipatnam, Steel Plant area, and surrounding localities.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a home interior project take in Vizag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical 2–3BHK interior project in Visakhapatnam takes 45–75 days from design approval to handover. We provide a detailed project timeline upfront and keep you updated at every stage.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer modular kitchen design in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio specialises in custom modular kitchen design in Visakhapatnam. We offer L-shaped, U-shaped, parallel, and island kitchens with a wide choice of finishes, hardware, and countertops.",
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
    { "@type": "ListItem", position: 3, name: "Interior Design Visakhapatnam", item: `${SITE_URL}/interior-design-visakhapatnam` },
  ],
};

const services = [
  { icon: "🛋️", title: "Complete Home Interiors", desc: "End-to-end interior design for 1BHK, 2BHK, 3BHK apartments and independent houses in Visakhapatnam. Living room, bedroom, kitchen, bathrooms — all under one roof." },
  { icon: "🍳", title: "Modular Kitchen Design", desc: "Custom modular kitchens with L-shaped, U-shaped, parallel or island layouts. Premium finishes, soft-close hardware, and quartz countertops at competitive prices in Vizag." },
  { icon: "✨", title: "False Ceiling & Lighting", desc: "Gypsum, POP, and wooden false ceiling designs with integrated lighting plans. Transform any room with premium false ceiling work by our expert team in Visakhapatnam." },
  { icon: "🚪", title: "Wardrobe & Storage Design", desc: "Custom-built wardrobes, walk-in closets, TV units, and storage solutions designed for your space and lifestyle — crafted and installed in Vizag." },
  { icon: "🛏️", title: "Bedroom Interior Design", desc: "Peaceful, personalised bedroom interiors with custom beds, study areas, and wardrobe integrations. We design bedrooms that feel like a retreat in your Visakhapatnam home." },
  { icon: "🏢", title: "Office & Commercial Interiors", desc: "Productive office spaces, showrooms, clinics, and retail interiors in Visakhapatnam designed for your brand and workflow — on time and on budget." },
];

const whyUs = [
  { icon: "🏆", title: "130+ Projects in Vizag & AP", desc: "More completed projects in Visakhapatnam than most local firms. Real experience, real results — verified by our clients." },
  { icon: "💰", title: "Transparent Pricing — No Hidden Costs", desc: "We give you an all-inclusive quote before we start. No surprise charges, no escalating bills. What we quote is what you pay." },
  { icon: "📅", title: "On-Time Delivery Guarantee", desc: "We commit to a project timeline before work begins and honour it. Our track record speaks: 130+ projects delivered on schedule." },
  { icon: "🎨", title: "Custom Design — Not Templates", desc: "Every design is created specifically for your home, your family, and your lifestyle. No copy-paste templates — pure custom work." },
];

const areas = [
  "MVP Colony", "Madhurawada", "Gajuwaka", "Rushikonda", "Seethammadhara",
  "Dwaraka Nagar", "Steel Plant Area", "Bheemunipatnam", "Kommadi",
  "Yendada", "Sabbavaram", "Pendurthi", "Gopalapatnam",
];

export default function InteriorDesignVizagPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>Interior Design · Visakhapatnam</p>
          <h1>Best Interior Designer<br />in Visakhapatnam</h1>
          <p className={styles.heroSub}>
            Complete home interiors, modular kitchens, false ceilings, wardrobes & office fit-outs
            across Visakhapatnam. 130+ projects delivered. Transparent pricing. Free consultation.
          </p>
          <div className={styles.heroBtns}>
            <a href="/consultation" className={styles.heroBtn}>Book Free Consultation</a>
            <a href="tel:+917816086291" className={styles.heroBtnOutline}>Call +91 78160 86291</a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className={styles.statsBar}>
        <div className={styles.statsBarInner}>
          <div className={styles.statItem}><span className={styles.statNum}>130+</span><span className={styles.statLabel}>Projects in Vizag & AP</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>5+</span><span className={styles.statLabel}>Years in Visakhapatnam</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>45–75</span><span className={styles.statLabel}>Days Avg. Completion</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>+81</span><span className={styles.statLabel}>NPS Score</span></div>
        </div>
      </div>

      {/* ── Services ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>What We Offer</p>
          <h2>Interior Design Services in Visakhapatnam</h2>
          <p className={styles.sectionSub}>
            From a single room to a complete home — we handle every aspect of interior design in Vizag.
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
          <h2>Why Visakhapatnam Families Choose Us</h2>
          <p className={styles.sectionSub}>130+ families in Vizag trust us. Here&apos;s why.</p>
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
          <h2>Areas We Serve in Visakhapatnam</h2>
          <p className={styles.sectionSub}>
            We work across all major localities in Vizag — from MVP Colony to Madhurawada and beyond.
          </p>
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
          <h2>Our Process in Visakhapatnam</h2>
          <p className={styles.sectionSub}>Simple, transparent, stress-free — from first call to final handover.</p>
          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Free Consultation", desc: "Call us or fill the form. We visit your Vizag home, understand your vision, and give a transparent quote." },
              { step: "02", title: "3D Design", desc: "Our designers create a detailed 3D visualisation of your interior so you can see the final look before work begins." },
              { step: "03", title: "Execution", desc: "Our skilled team executes the design in Visakhapatnam with premium materials and strict quality checks at every stage." },
              { step: "04", title: "Handover", desc: "We hand over a clean, complete home on the agreed date. Final walkthrough with you before we call it done." },
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
          <h2>Interior Design Questions — Visakhapatnam</h2>
          <div className={styles.faqList}>
            {[
              { q: "How much does interior design cost in Visakhapatnam?", a: "Interior design in Visakhapatnam typically costs ₹800–₹2,500 per sq ft depending on materials and scope. A 2BHK apartment full interior starts from ₹4–8 lakhs. Nestique Studio gives you a detailed, all-inclusive quote before any work begins — no surprises." },
              { q: "Who is the best interior designer in Visakhapatnam?", a: "Nestique Studio is among Visakhapatnam's most trusted interior design firms with 130+ completed projects across Vizag. We specialize in complete home interiors, modular kitchens, and false ceiling work." },
              { q: "How long does a home interior project take in Vizag?", a: "A typical 2–3BHK interior project in Visakhapatnam takes 45–75 days from design sign-off to handover. We commit to a timeline upfront and keep it." },
              { q: "Do you do modular kitchen and false ceiling in Vizag?", a: "Yes. Modular kitchens and false ceiling work are our specialties in Visakhapatnam. We offer custom designs, quality materials, and complete installation by our own trained team." },
              { q: "What areas of Visakhapatnam do you cover?", a: "We cover all of Visakhapatnam — MVP Colony, Madhurawada, Gajuwaka, Rushikonda, Seethammadhara, Dwaraka Nagar, Steel Plant area, Bheemunipatnam, and surrounding areas." },
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
          <h2>Ready to Transform Your Vizag Home?</h2>
          <p>
            Get a free, no-obligation consultation from Visakhapatnam&apos;s trusted interior design team.
            We&apos;ll visit your home, understand your vision, and give you a clear quote within 24 hours.
          </p>
          <div className={styles.ctaBtns}>
            <a href="/consultation" className={styles.ctaBtnWhite}>Book Free Consultation</a>
            <a href="tel:+917816086291" className={styles.ctaBtnOutline}>Call +91 78160 86291</a>
          </div>
        </div>
      </section>
    </main>
  );
}
