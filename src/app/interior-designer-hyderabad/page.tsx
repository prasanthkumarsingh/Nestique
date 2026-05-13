import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "../city-page.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Interior Designer in Hyderabad | Best Home & Office Interiors — Nestique Studio",
  description:
    "Hire a top interior designer in Hyderabad. Nestique Studio delivers complete home interiors, modular kitchens, false ceilings, luxury villa interiors & office fit-outs in Hyderabad. 130+ projects. Free consultation: hello@nestiquestudio.in",
  keywords: [
    "interior designer in Hyderabad",
    "best interior designer Hyderabad",
    "hire interior designer Hyderabad",
    "home interior designer Hyderabad",
    "interior designer near me Hyderabad",
    "luxury interior designer Hyderabad",
    "residential interior designer Hyderabad",
    "office interior designer Hyderabad",
    "affordable interior designer Hyderabad",
    "top interior designer Hyderabad",
    "interior designer Gachibowli",
    "interior designer Banjara Hills",
    "interior designer Jubilee Hills",
    "interior designer Madhapur",
    "interior designer Kondapur",
  ],
  alternates: { canonical: `${SITE_URL}/interior-designer-hyderabad` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/interior-designer-hyderabad`,
    title: "Interior Designer in Hyderabad | Nestique Studio",
    description:
      "Top-rated interior designer in Hyderabad. 130+ projects delivered. Complete home interiors, modular kitchens, false ceilings, luxury villas & office spaces.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InteriorDesigner"],
  name: "Nestique Studio — Interior Designer Hyderabad",
  url: `${SITE_URL}/interior-designer-hyderabad`,
  telephone: "+917816086291",
  email: "hello@nestiquestudio.in",
  description:
    "Leading interior designer in Hyderabad offering complete home interiors, modular kitchens, false ceilings, luxury villa interiors, and corporate office design.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.385, longitude: 78.4867 },
  areaServed: [
    "Gachibowli", "Banjara Hills", "Jubilee Hills", "Madhapur", "Kondapur",
    "Hitec City", "Kokapet", "Narsingi", "Manikonda", "Hyderabad",
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
      name: "How much does an interior designer charge in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interior designer fees in Hyderabad range from ₹1,000–₹3,000 per sq ft for a complete home interior package. A 2BHK full interior design and execution in Hyderabad starts from ₹6–12 lakhs depending on materials and finishes. Nestique Studio provides all-inclusive transparent quotes.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the best interior designer in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nestique Studio is among Hyderabad's top-rated interior design firms with 130+ completed projects across the city. Our IIT Kharagpur-trained architects and experienced designers serve Gachibowli, Banjara Hills, Jubilee Hills, Kondapur, Madhapur, and all major Hyderabad localities.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an interior design project take in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical 2–3BHK interior project in Hyderabad takes 50–80 days from design approval to handover. Larger projects like villas or offices may take 90–120 days. Nestique Studio commits to a delivery timeline upfront and tracks it rigorously.",
      },
    },
    {
      "@type": "Question",
      name: "Do you design luxury interiors in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio specialises in luxury interior design in Hyderabad — premium villa interiors in Jubilee Hills, Banjara Hills and Kokapet; high-end apartment interiors in Gachibowli and Madhapur; and boutique commercial spaces across Hyderabad. We work with imported materials, custom furniture, and bespoke lighting.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Hyderabad do your interior designers cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all major areas of Hyderabad including Gachibowli, Banjara Hills, Jubilee Hills, Madhapur, Kondapur, Hitec City, Kokapet, Narsingi, Manikonda, Kukatpally, Miyapur, Secunderabad, and surrounding localities.",
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
    { "@type": "ListItem", position: 3, name: "Interior Designer Hyderabad", item: `${SITE_URL}/interior-designer-hyderabad` },
  ],
};

const services = [
  { icon: "🛋️", title: "Complete Home Interior Design", desc: "End-to-end home interior design in Hyderabad — from layout planning and 3D visualisation to execution and handover. Every room designed with precision and personalised to your family's lifestyle." },
  { icon: "🍳", title: "Modular Kitchen Design", desc: "Custom modular kitchens for Hyderabad apartments and villas. We offer L-shaped, U-shaped, parallel, island, and peninsula kitchens with premium finish options, quartz countertops, and smart storage solutions." },
  { icon: "✨", title: "False Ceiling & Lighting Design", desc: "Gypsum, POP, wood, and stretch fabric false ceiling designs for Hyderabad homes. Integrated LED cove lighting, recessed spotlights, and pendant lighting plans that transform rooms into experiences." },
  { icon: "🏠", title: "Luxury Villa Interiors", desc: "Bespoke luxury interior design for villas and independent houses in Hyderabad. Statement staircases, double-height lobbies, home theatres, walk-in wardrobes, and landscaped terraces — crafted to reflect your stature." },
  { icon: "🚪", title: "Wardrobes & Custom Furniture", desc: "Custom-built wardrobes, entertainment units, study rooms, and crockery units designed for your exact Hyderabad home dimensions. Premium hardware, full-body laminates, and durable construction." },
  { icon: "🏢", title: "Office & Commercial Interiors", desc: "Modern, brand-aligned office interiors for Hyderabad's corporate and startup ecosystem. We design for collaboration, focus, and identity — in Hitec City, Gachibowli, and across Hyderabad." },
];

const whyUs = [
  { icon: "🏆", title: "130+ Projects Across Hyderabad & South India", desc: "A proven track record in Hyderabad — from 2BHK apartments in Kondapur to luxury villas in Jubilee Hills. Our portfolio is our strongest testimony." },
  { icon: "📐", title: "IIT Kharagpur-Trained Architects", desc: "Nestique Studio's founding team includes IIT Kharagpur-trained architects who bring academic rigour and creative vision to every Hyderabad project." },
  { icon: "💰", title: "100% Transparent Pricing", desc: "No hidden costs. No post-start surprises. Your all-in quote for your Hyderabad interior covers design, material, labour, and management — and we stick to it." },
  { icon: "🎨", title: "Custom Design — Not Copy-Paste", desc: "Every Hyderabad home we design is unique. We study your space, your lifestyle, and your preferences before putting a single line on paper. Zero templates." },
];

const areas = [
  "Gachibowli", "Banjara Hills", "Jubilee Hills", "Madhapur", "Kondapur",
  "Hitec City", "Kokapet", "Narsingi", "Manikonda", "Kukatpally",
  "Miyapur", "Secunderabad", "Begumpet", "Ameerpet", "SR Nagar",
  "Kompally", "Bachupally", "Nizampet", "Tolichowki",
];

export default function InteriorDesignerHyderabadPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>Interior Designer · Hyderabad</p>
          <h1>Interior Designer<br />in Hyderabad</h1>
          <p className={styles.heroSub}>
            Nestique Studio — award-winning interior designer in Hyderabad. 130+ homes, villas and offices
            transformed. IIT-trained architects, transparent pricing, on-time delivery guaranteed.
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
          <div className={styles.statItem}><span className={styles.statNum}>6</span><span className={styles.statLabel}>Cities Served</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>50–80</span><span className={styles.statLabel}>Days Avg. Completion</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>+81</span><span className={styles.statLabel}>NPS Score</span></div>
        </div>
      </div>

      {/* ── About ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>About Nestique Studio</p>
          <h2>Hyderabad&apos;s Interior Designer — Where Design Meets Precision</h2>
          <p className={styles.sectionSub}>
            Hyderabad is one of India&apos;s most dynamic cities — home to IT professionals, business leaders, and discerning families who demand the best. As a premium interior designer in Hyderabad, Nestique Studio rises to that expectation. Our founding team includes IIT Kharagpur-trained architects who bring an academic depth to design that typical interior firms simply cannot match. Whether you&apos;re decorating a luxury villa in Jubilee Hills, a tech-executive apartment in Gachibowli, or a modern office in Hitec City, our designers create spaces that are architecturally sound, aesthetically extraordinary, and functionally flawless.
          </p>
          <p className={styles.sectionSub}>
            We operate across all major Hyderabad localities — from Banjara Hills to Kondapur, Secunderabad to Narsingi — with a single promise: your interior will be delivered on time, within budget, and exactly as designed. Our 130+ completed projects and +81 NPS score are proof that Hyderabad trusts Nestique Studio.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Our Services</p>
          <h2>Interior Design Services in Hyderabad</h2>
          <p className={styles.sectionSub}>From modular kitchens to luxury villa interiors — complete design solutions across Hyderabad.</p>
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
          <h2>Why Hyderabad Chooses Nestique Studio</h2>
          <p className={styles.sectionSub}>What separates us from every other interior designer in Hyderabad.</p>
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
          <p className={styles.sectionSub}>Our interior designers work across all major Hyderabad localities.</p>
          <div className={styles.areasGrid}>
            {areas.map((a, i) => (<span className={styles.areaBadge} key={i}>{a}</span>))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2>Our Interior Design Process in Hyderabad</h2>
          <p className={styles.sectionSub}>From first call to final handover — simple, transparent, and managed end-to-end.</p>
          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Free Consultation", desc: "We meet you at your Hyderabad home, understand your vision and budget, and provide a detailed all-inclusive quote within 24 hours." },
              { step: "02", title: "3D Design & Sign-Off", desc: "Our Hyderabad design team creates photorealistic 3D visuals for every room. You approve before a single nail goes in." },
              { step: "03", title: "Precision Execution", desc: "Our skilled on-ground team executes your interior in Hyderabad with premium materials, daily updates, and zero compromise on quality." },
              { step: "04", title: "Handover & Support", desc: "We hand over your completed Hyderabad home and provide 1-year post-handover support. Your satisfaction is our guarantee." },
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
          <h2>Interior Designer in Hyderabad — Your Questions Answered</h2>
          <div className={styles.faqList}>
            {[
              { q: "How much does an interior designer charge in Hyderabad?", a: "Interior design in Hyderabad costs ₹1,000–₹3,000 per sq ft for a full package. A 2BHK starts from ₹6–12 lakhs and a luxury villa can range from ₹30–80 lakhs. Nestique Studio provides a single all-inclusive quote — no extras after sign-off." },
              { q: "Who is the best interior designer in Hyderabad?", a: "Nestique Studio is one of Hyderabad's top-rated interior design firms — 130+ projects completed, IIT-trained architects, +81 NPS score. We work across Gachibowli, Banjara Hills, Jubilee Hills, Kondapur, Madhapur, and all of Hyderabad." },
              { q: "How long does an interior design project take in Hyderabad?", a: "A typical 2–3BHK project in Hyderabad takes 50–80 days. Villas and large commercial projects take 90–120 days. We commit to your timeline before work begins and track it daily." },
              { q: "Do you design luxury villa interiors in Hyderabad?", a: "Yes. We specialise in luxury villa interiors across Jubilee Hills, Banjara Hills, Kokapet, and Narsingi — statement staircases, home theatres, imported stone flooring, custom furniture, and bespoke lighting design." },
              { q: "Which areas of Hyderabad do you serve?", a: "We serve all Hyderabad localities — Gachibowli, Banjara Hills, Jubilee Hills, Madhapur, Kondapur, Hitec City, Kokapet, Narsingi, Kukatpally, Miyapur, Secunderabad, Kompally, Bachupally, and more." },
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
          <h2>Looking for an Interior Designer in Hyderabad?</h2>
          <p>
            Get a free consultation from Hyderabad&apos;s most trusted interior design team.
            We&apos;ll visit your home, understand your vision, and deliver a clear quote within 24 hours.
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
