import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "../city-page.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Interior Designer in Visakhapatnam | Best Home & Office Interiors — Nestique Studio",
  description:
    "Hire the best interior designer in Visakhapatnam. Nestique Studio delivers stunning home interiors, modular kitchens, false ceilings & office fit-outs in Vizag. 130+ projects. IIT-trained architects. Free consultation: hello@nestiquestudio.in",
  keywords: [
    "interior designer in Visakhapatnam",
    "interior designer Vizag",
    "hire interior designer Visakhapatnam",
    "best interior designer Vizag",
    "home interior designer Visakhapatnam",
    "top interior designer Vizag",
    "interior designer near me Visakhapatnam",
    "residential interior designer Vizag",
    "commercial interior designer Visakhapatnam",
    "luxury interior designer Vizag",
    "affordable interior designer Visakhapatnam",
    "interior designer 2BHK Vizag",
    "interior designer 3BHK Visakhapatnam",
  ],
  alternates: { canonical: `${SITE_URL}/interior-designer-visakhapatnam` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/interior-designer-visakhapatnam`,
    title: "Interior Designer in Visakhapatnam | Nestique Studio",
    description:
      "Hire the best interior designer in Visakhapatnam. 130+ projects delivered. Modular kitchens, false ceilings, wardrobes & complete home interiors.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InteriorDesigner"],
  name: "Nestique Studio — Interior Designer Visakhapatnam",
  url: `${SITE_URL}/interior-designer-visakhapatnam`,
  telephone: "+917816086291",
  email: "hello@nestiquestudio.in",
  description:
    "Premier interior designer in Visakhapatnam offering complete home interiors, modular kitchens, false ceilings, office interiors and bespoke furniture solutions.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.6868, longitude: 83.2185 },
  areaServed: [
    "MVP Colony", "Madhurawada", "Gajuwaka", "Rushikonda", "Seethammadhara",
    "Dwaraka Nagar", "Steel Plant Area", "Bheemunipatnam", "Kommadi", "Vizag",
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
      name: "How do I find a good interior designer in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for an interior designer in Visakhapatnam with a strong portfolio, verified client reviews, and transparent pricing. Nestique Studio has 130+ completed projects in Vizag and offers a free home visit consultation with no obligation.",
      },
    },
    {
      "@type": "Question",
      name: "What does an interior designer charge in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interior designer fees in Visakhapatnam range from ₹800–₹2,500 per sq ft for a complete package, or a flat design fee starting from ₹25,000 for consultation and drawings. Nestique Studio provides an all-inclusive quote covering design, material, and execution.",
      },
    },
    {
      "@type": "Question",
      name: "Can an interior designer in Vizag work within a budget?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A skilled interior designer in Visakhapatnam can create beautiful interiors across budgets. Nestique Studio offers budget-optimised packages starting from ₹4 lakhs for a 2BHK, using smart material choices that don't compromise on aesthetics.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer 3D design before starting work in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Before any execution begins, Nestique Studio provides detailed 3D renderings of your Visakhapatnam home so you can visualise and approve every aspect of the design — furniture layout, colours, materials, and lighting.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Visakhapatnam does Nestique Studio cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all major areas of Visakhapatnam including MVP Colony, Madhurawada, Gajuwaka, Rushikonda, Seethammadhara, Dwaraka Nagar, Steel Plant Area, Bheemunipatnam, Kommadi, Yendada, and surrounding localities.",
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
    { "@type": "ListItem", position: 3, name: "Interior Designer Visakhapatnam", item: `${SITE_URL}/interior-designer-visakhapatnam` },
  ],
};

const services = [
  { icon: "🛋️", title: "Complete Home Interior Design", desc: "From concept to handover — your interior designer in Visakhapatnam handles every room. Living room, master bedroom, kitchen, bathrooms, and kids' rooms all under a single contract with one point of accountability." },
  { icon: "🍳", title: "Modular Kitchen Design", desc: "Custom-designed modular kitchens for Vizag homes. We offer L-shaped, parallel, U-shaped, and island kitchen layouts with premium shutters, soft-close hardware, and engineered stone countertops tailored to your cooking style." },
  { icon: "✨", title: "False Ceiling & Ambient Lighting", desc: "Expert false ceiling design using gypsum, POP, and wood — integrated with LED cove lighting, chandeliers, and spot lighting plans. Transform any Visakhapatnam apartment into a visually stunning space." },
  { icon: "🚪", title: "Wardrobe & Custom Furniture", desc: "Floor-to-ceiling wardrobes, sliding door wardrobes, TV units, study tables, and shoe racks — all custom built by our Vizag carpentry team to fit your exact room dimensions and storage needs." },
  { icon: "🏢", title: "Office & Commercial Interiors", desc: "Modern, productive office interiors for startups, law firms, medical clinics, and retail showrooms in Visakhapatnam. We design for brand identity, workflow, and employee wellbeing." },
  { icon: "🏠", title: "Villa & Bungalow Interiors", desc: "Luxury villa and independent house interiors in Vizag. We design statement staircases, double-height living rooms, home theatres, and landscaped entrance lobbies for premium residences." },
];

const whyUs = [
  { icon: "🏆", title: "130+ Completed Projects in Vizag", desc: "Our Visakhapatnam portfolio speaks louder than promises. 130+ happy families and businesses across Vizag stand behind our work." },
  { icon: "📐", title: "IIT-Trained Architects on Your Project", desc: "Unlike typical interior firms, Nestique Studio has IIT Kharagpur-trained architects ensuring your Vizag home is designed with technical precision and design vision." },
  { icon: "💰", title: "All-Inclusive Transparent Pricing", desc: "One quote covers design, material, labour, and project management — no surprise additions. What we quote for your Vizag home is what you pay." },
  { icon: "📅", title: "On-Time Delivery — Always", desc: "We commit to a delivery date before work begins and honour it. 130+ projects in Visakhapatnam delivered on or before schedule." },
];

const areas = [
  "MVP Colony", "Madhurawada", "Gajuwaka", "Rushikonda", "Seethammadhara",
  "Dwaraka Nagar", "Steel Plant Area", "Bheemunipatnam", "Kommadi",
  "Yendada", "Sabbavaram", "Pendurthi", "Gopalapatnam", "NAD Junction",
  "PM Palem", "Simhachalam", "Vizag City Centre",
];

export default function InteriorDesignerVizagPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>Interior Designer · Visakhapatnam</p>
          <h1>Interior Designer<br />in Visakhapatnam</h1>
          <p className={styles.heroSub}>
            Nestique Studio — Visakhapatnam&apos;s most trusted interior designer. 130+ homes and offices
            transformed across Vizag. IIT-trained architects, transparent pricing, on-time delivery.
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
          <div className={styles.statItem}><span className={styles.statNum}>5+</span><span className={styles.statLabel}>Years of Excellence</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>45–75</span><span className={styles.statLabel}>Days Avg. Completion</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>+81</span><span className={styles.statLabel}>NPS Score</span></div>
        </div>
      </div>

      {/* ── About ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Why We&apos;re Different</p>
          <h2>Visakhapatnam&apos;s Interior Designer — Built on Trust</h2>
          <p className={styles.sectionSub}>
            When you hire an interior designer in Visakhapatnam, you&apos;re trusting someone with your home and your savings. Nestique Studio was founded with one promise — deliver design that is honest, beautiful, and built to last. Our team includes IIT Kharagpur-trained architects, seasoned interior designers, and skilled Vizag craftspeople who treat your home with the same care they&apos;d give their own. From the first consultation to the final handover, we work with complete transparency, clear timelines, and zero surprises. That&apos;s why 130+ Visakhapatnam families and businesses have trusted us — and why our NPS score stands at +81.
          </p>
          <p className={styles.sectionSub}>
            Whether you&apos;re moving into a new 2BHK in Madhurawada, renovating your villa in Rushikonda, or setting up a premium office in Dwaraka Nagar, our interior designers in Visakhapatnam will craft a space that reflects who you are. We don&apos;t sell packages — we design homes. Every layout, every colour, every piece of furniture is chosen specifically for your space and your lifestyle.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>What We Do</p>
          <h2>Interior Design Services in Visakhapatnam</h2>
          <p className={styles.sectionSub}>Complete interior design solutions for homes, offices, and commercial spaces across Vizag.</p>
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
          <h2>Why Vizag Families Hire Nestique Studio</h2>
          <p className={styles.sectionSub}>130+ projects. Zero compromises. Here&apos;s what sets our interior designers apart in Visakhapatnam.</p>
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
          <h2>Areas Served in Visakhapatnam</h2>
          <p className={styles.sectionSub}>Our interior designers operate across all major localities in Vizag.</p>
          <div className={styles.areasGrid}>
            {areas.map((a, i) => (<span className={styles.areaBadge} key={i}>{a}</span>))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2>Our Interior Design Process in Vizag</h2>
          <p className={styles.sectionSub}>Simple. Transparent. Stress-free — from first call to final handover.</p>
          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Free Home Visit", desc: "We visit your Visakhapatnam home, understand your vision, discuss budget, and give a detailed transparent quote — no charges." },
              { step: "02", title: "3D Design & Approval", desc: "Our designers create photorealistic 3D visuals of your Vizag interior. You review, suggest changes, and approve before any work begins." },
              { step: "03", title: "Execution in Vizag", desc: "Our trained team executes the design on-site in Visakhapatnam using premium materials, with daily updates and quality inspections." },
              { step: "04", title: "Handover & Aftercare", desc: "Final walkthrough with you. We fix any snags immediately. Post-handover support for 1 year on all our work in Visakhapatnam." },
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
          <h2>Interior Designer in Visakhapatnam — Common Questions</h2>
          <div className={styles.faqList}>
            {[
              { q: "How do I find a good interior designer in Visakhapatnam?", a: "Look for a designer with a real Vizag portfolio, verified client reviews, and upfront pricing. Nestique Studio offers a free home visit with no obligation — meet our team before you commit. Call us or email hello@nestiquestudio.in." },
              { q: "What does an interior designer charge in Visakhapatnam?", a: "Interior designer charges in Visakhapatnam range from ₹800–₹2,500 per sq ft for a complete project. A 2BHK full interior starts from ₹4–8 lakhs. Nestique Studio gives an all-inclusive quote — design, material, labour, and project management bundled." },
              { q: "Can an interior designer in Vizag work within my budget?", a: "Absolutely. Our interior designers in Visakhapatnam are skilled at delivering high-quality results within a defined budget. We guide you on smart material choices and design optimisations that maximise visual impact without overspending." },
              { q: "Do you provide 3D designs before starting work in Visakhapatnam?", a: "Yes. Every Nestique Studio project in Visakhapatnam starts with detailed 3D renderings. You see exactly how your home will look — furniture, colours, lighting, and materials — before we spend a single rupee on execution." },
              { q: "Which areas of Visakhapatnam do your interior designers serve?", a: "We cover all of Visakhapatnam — MVP Colony, Madhurawada, Gajuwaka, Rushikonda, Seethammadhara, Dwaraka Nagar, Steel Plant Area, Bheemunipatnam, Kommadi, Yendada, PM Palem, and all surrounding areas." },
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
          <h2>Ready to Hire an Interior Designer in Visakhapatnam?</h2>
          <p>
            Talk to Nestique Studio today. Free home visit, transparent quote within 24 hours,
            and a dedicated interior designer assigned to your Vizag project from day one.
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
