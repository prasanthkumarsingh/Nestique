import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "../city-page.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Best Interior Designer in Hyderabad | Home Interiors, Modular Kitchen, Office Interiors — Nestique Studio",
  description:
    "Top-rated interior designer in Hyderabad. Nestique Studio offers complete home interior design, modular kitchens, false ceilings, office interiors & apartment interiors in Hyderabad. 130+ projects. Free consultation: +91 78160 86291.",
  keywords: [
    "interior designer Hyderabad",
    "best interior designer Hyderabad",
    "home interior design Hyderabad",
    "modular kitchen Hyderabad",
    "false ceiling Hyderabad",
    "apartment interior design Hyderabad",
    "office interior design Hyderabad",
    "bedroom interior design Hyderabad",
    "3BHK interior design Hyderabad",
    "2BHK interior design Hyderabad",
    "interior design cost Hyderabad",
    "turnkey interior design Hyderabad",
    "interior designer near me Hyderabad",
    "best interior design company Hyderabad",
    "luxury interior design Hyderabad",
    "wardrobe design Hyderabad",
    "living room interior Hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/interior-design-hyderabad` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/interior-design-hyderabad`,
    title: "Best Interior Designer in Hyderabad | Nestique Studio",
    description:
      "Complete home interior design in Hyderabad — modular kitchens, false ceilings, wardrobes, bedrooms, office interiors. 130+ projects. Free consultation.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nestique Studio — Interior Design Hyderabad",
  url: `${SITE_URL}/interior-design-hyderabad`,
  telephone: "+917816086291",
  email: "hello@nestiquestudio.in",
  description:
    "Best interior design company in Hyderabad offering complete home interiors, modular kitchens, false ceilings, office interiors and apartment interior design.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.3850, longitude: 78.4867 },
  areaServed: [
    "Gachibowli", "Kondapur", "Jubilee Hills", "Banjara Hills", "Madhapur",
    "Kukatpally", "Miyapur", "Hitec City", "Manikonda", "Nallagandla",
  ],
  priceRange: "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does interior design cost in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interior design cost in Hyderabad typically ranges from ₹900–₹2,800 per sq ft depending on the scope and material quality. A 2BHK apartment interior starts from ₹5–10 lakhs. Nestique Studio provides a detailed, transparent quote. Contact us for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Who are the best interior designers in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nestique Studio is one of Hyderabad's top-rated interior design firms with 130+ completed projects. We handle complete home interiors, modular kitchens, false ceilings, and office fit-outs across Gachibowli, Kondapur, Banjara Hills, Jubilee Hills, and Kukatpally.",
      },
    },
    {
      "@type": "Question",
      name: "What areas of Hyderabad do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all of Hyderabad including Gachibowli, Kondapur, Jubilee Hills, Banjara Hills, Madhapur, Kukatpally, Miyapur, Hitec City, Manikonda, Nallagandla, Puppalaguda, and surrounding areas.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle office interior design in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio specialises in office interior design in Hyderabad for IT companies, startups, medical clinics, showrooms, and retail stores. We design productive, brand-aligned workspaces on time and within budget.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an interior project take in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical 2–3BHK interior in Hyderabad takes 45–75 days from design approval to handover. Office interiors vary based on size. We provide a firm timeline before starting.",
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
    { "@type": "ListItem", position: 3, name: "Interior Design Hyderabad", item: `${SITE_URL}/interior-design-hyderabad` },
  ],
};

const services = [
  { icon: "🛋️", title: "Complete Home Interiors", desc: "Full-home interior design for apartments and villas in Hyderabad — from concept to handover. Every room designed and executed by our expert team." },
  { icon: "🍳", title: "Modular Kitchen Design", desc: "Custom modular kitchens for Hyderabad homes. L-shaped, U-shaped, island, and parallel designs with premium finishes and German hardware." },
  { icon: "✨", title: "False Ceiling & Lighting", desc: "Designer false ceiling solutions in gypsum, POP, and wood for living rooms, bedrooms, and offices in Hyderabad with complete lighting integration." },
  { icon: "🚪", title: "Wardrobe & TV Unit Design", desc: "Space-saving custom wardrobes, walk-in closets, and TV panel designs crafted for your Hyderabad home's specific dimensions and aesthetic." },
  { icon: "🏢", title: "Office Interior Design", desc: "High-performance office spaces for IT companies, startups, clinics, and retail in Gachibowli, Madhapur, and across Hyderabad's commercial hubs." },
  { icon: "🛏️", title: "Bedroom & Pooja Room Design", desc: "Beautifully designed bedrooms and traditional pooja rooms that blend style with functionality — perfectly suited to Hyderabad homes." },
];

const whyUs = [
  { icon: "🏆", title: "130+ Projects Delivered", desc: "Proven track record across Hyderabad, Vizag, Vijayawada, and Bangalore. Real portfolio, real clients, real results." },
  { icon: "💰", title: "Upfront Transparent Pricing", desc: "You see the complete cost breakdown before we sign. No revision charges, no hidden extras — just honest, clear pricing." },
  { icon: "⏱️", title: "45–75 Day Completion", desc: "We commit to a handover date before work starts. Our project managers ensure your Hyderabad interior is delivered on time, every time." },
  { icon: "🎨", title: "100% Custom Design", desc: "We design for your taste, your family, your space. No showroom templates — every project is unique, just like your home." },
];

const areas = [
  "Gachibowli", "Kondapur", "Jubilee Hills", "Banjara Hills", "Madhapur",
  "Kukatpally", "Miyapur", "Hitec City", "Manikonda", "Nallagandla",
  "Puppalaguda", "Kokapet", "Tellapur", "Bachupally", "Uppal",
];

export default function InteriorDesignHyderabadPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>Interior Design · Hyderabad</p>
          <h1>Best Interior Designer<br />in Hyderabad</h1>
          <p className={styles.heroSub}>
            Complete home interiors, modular kitchens, false ceilings, wardrobes & office fit-outs across
            Hyderabad. 130+ projects delivered. Transparent pricing. Free consultation.
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
          <div className={styles.statItem}><span className={styles.statNum}>130+</span><span className={styles.statLabel}>Projects Delivered</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>6</span><span className={styles.statLabel}>Cities Served</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>45–75</span><span className={styles.statLabel}>Days Avg. Completion</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>+81</span><span className={styles.statLabel}>NPS Score</span></div>
        </div>
      </div>

      {/* ── Services ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>What We Offer</p>
          <h2>Interior Design Services in Hyderabad</h2>
          <p className={styles.sectionSub}>
            From apartments in Gachibowli to villas in Jubilee Hills — we deliver stunning interiors across Hyderabad.
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
          <h2>Why Hyderabad Families Choose Us</h2>
          <p className={styles.sectionSub}>130+ clients across AP & Telangana trust us with their homes.</p>
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
          <h2>Areas We Serve in Hyderabad</h2>
          <p className={styles.sectionSub}>
            From Gachibowli to Uppal, we serve all major neighbourhoods in Hyderabad.
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
          <h2>Our Process in Hyderabad</h2>
          <p className={styles.sectionSub}>Simple, transparent, stress-free from first call to final handover.</p>
          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Free Consultation", desc: "Call or book online. We visit your Hyderabad home or office, understand your needs, and give a clear transparent quote." },
              { step: "02", title: "3D Design", desc: "Our designers create a photo-realistic 3D walkthrough so you see your new space before a single nail is hammered." },
              { step: "03", title: "Execution", desc: "Skilled execution by our own team in Hyderabad — not subcontracted. Quality checks at every stage." },
              { step: "04", title: "Handover", desc: "On-time handover with a full walkthrough. We don't leave until you're completely satisfied." },
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
          <h2>Interior Design Questions — Hyderabad</h2>
          <div className={styles.faqList}>
            {[
              { q: "How much does interior design cost in Hyderabad?", a: "Interior design in Hyderabad costs ₹900–₹2,800 per sq ft depending on scope and materials. A 2BHK apartment full interior starts from ₹5–10 lakhs. We give you a detailed, all-inclusive quote upfront." },
              { q: "Who are the best interior designers in Hyderabad?", a: "Nestique Studio is one of Hyderabad's most trusted interior design firms. With 130+ projects across AP and Telangana, we specialize in home interiors, modular kitchens, and office fit-outs." },
              { q: "Do you handle office interior design in Hyderabad?", a: "Yes. We design and execute offices for IT companies, startups, clinics, and retail in Gachibowli, Madhapur, Hitec City, and all of Hyderabad." },
              { q: "What areas of Hyderabad do you cover?", a: "We cover all of Hyderabad — Gachibowli, Kondapur, Jubilee Hills, Banjara Hills, Madhapur, Kukatpally, Miyapur, Hitec City, Manikonda, Nallagandla, and more." },
              { q: "How long does interior design take in Hyderabad?", a: "A 2–3BHK apartment interior in Hyderabad takes 45–75 days from design approval to handover. We provide a firm timeline upfront." },
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
          <h2>Ready to Transform Your Hyderabad Home?</h2>
          <p>
            Get a free, no-obligation consultation from Hyderabad&apos;s trusted interior design team.
            We&apos;ll visit, listen, design, and deliver — on time and within budget.
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
