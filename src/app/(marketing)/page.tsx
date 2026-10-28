import type { Metadata } from "next";
import { PencilRuler, ShieldCheck, BadgeIndianRupee, CalendarCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import SelectedWorks from "@/components/SelectedWorks";
import ServiceImage from "@/components/ServiceImage";
import { selectedWorksSchema } from "@/components/selectedWorks.data";
import styles from "./home.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

// Curated project galleries use the named Supabase uploads bundled locally.

export const metadata: Metadata = {
  title: "Nestique Studio | Commercial Interior Design & Architecture in Visakhapatnam & Hyderabad",
  description:
    "Leading commercial interior design, architecture & construction firm in Visakhapatnam & Hyderabad. Specialists in offices, hospitals & hotels — residential projects also undertaken. IIT Kharagpur-trained architects. 130+ projects. Free consultation today.",
  keywords: [
    // High-intent Vizag
    "interior designer in Visakhapatnam",
    "best interior designer Visakhapatnam",
    "interior design Vizag",
    "home interior design Visakhapatnam",
    "modular kitchen Visakhapatnam",
    "false ceiling Visakhapatnam",
    "civil contractor Visakhapatnam",
    "house construction Visakhapatnam",
    "villa construction Vizag",
    "residential construction Visakhapatnam",
    "apartment interior Vizag",
    "bedroom interior design Visakhapatnam",
    "interior design cost Vizag",
    "best civil contractor Vizag",
    // High-intent Hyderabad
    "interior designer Hyderabad",
    "best interior designer Hyderabad",
    "home interior design Hyderabad",
    "modular kitchen Hyderabad",
    "false ceiling Hyderabad",
    "civil contractor Hyderabad",
    "house construction Hyderabad",
    "villa construction Hyderabad",
    "apartment interior design Hyderabad",
    "office interior design Hyderabad",
    "turnkey interior Hyderabad",
    "home renovation Hyderabad",
    "construction company Hyderabad",
    "best civil contractor Hyderabad",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Nestique Studio | Architecture, Interior Design & Construction",
    description:
      "Top-rated architecture, interior design & construction firm in Hyderabad, Vizag & Bangalore. Residential, commercial, malls, offices. Book a free consultation today.",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is the best interior designer in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nestique Studio is one of the top-rated interior design firms in Visakhapatnam (Vizag), with 130+ completed projects. We offer full home interior packages including living room, bedroom, modular kitchen, false ceiling, wardrobe, and bathroom design. Call +91 78160 86291 for a free consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How much does interior design cost in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interior design cost in Visakhapatnam typically ranges from ₹800–₹2,500 per sq ft depending on the scope and material quality. A 2BHK apartment interior can start from ₹4–8 lakhs. Nestique Studio provides transparent, all-inclusive quotes with no hidden charges. Contact us for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the best civil contractor in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nestique Studio is a trusted civil contractor in Visakhapatnam, handling house construction, villa construction, apartment buildings, and commercial projects. We provide end-to-end civil work from foundation to finishing. Call us at +91 78160 86291 for a site visit and free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to build a house in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "House construction cost in Hyderabad ranges from ₹1,800–₹3,500 per sq ft depending on the grade (standard, premium, or luxury). Nestique Studio offers all-inclusive construction packages starting from ₹1,800/sq ft. Contact us for a free, detailed estimate for your plot.",
      },
    },
    {
      "@type": "Question",
      name: "What interior design services are available in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nestique Studio provides complete interior design services in Hyderabad including home interiors, modular kitchens, false ceilings, wardrobes, bedroom design, office interiors, and commercial space fit-outs. We handle design, procurement, and execution under one roof.",
      },
    },
    {
      "@type": "Question",
      name: "Does Nestique Studio do modular kitchen and false ceiling work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio specialises in modular kitchen design and false ceiling work across Visakhapatnam and Hyderabad. We use premium materials, offer custom designs, and complete work on time with a quality guarantee.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a free consultation for home interior or construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio offers a free, no-obligation consultation for all interior design and civil construction projects. Book online or call +91 78160 86291. We cover Visakhapatnam, Hyderabad, Vijayawada, and Bangalore.",
      },
    },
    {
      "@type": "Question",
      name: "Does Nestique Studio build villas and independent houses in Vizag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio builds custom villas, independent houses, and duplexes in Visakhapatnam. We handle architectural design, structural drawings, approvals, civil construction, and interior fit-out — complete turnkey delivery.",
      },
    },
  ],
};

const homeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Architecture, Interior Design & Construction Services — Nestique Studio",
  url: SITE_URL,
  numberOfItems: 7,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Interior Design", url: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 2, name: "Residential Construction", url: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "Commercial Construction", url: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 4, name: "Architecture & Design", url: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 5, name: "Renovation & Remodelling", url: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 6, name: "Landscape Design", url: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 7, name: "Builders & Development", url: `${SITE_URL}/services` },
  ],
};

// ── Unsplash image URLs (architecture / interior / construction)
const IMG = {
  hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
  whyLeft: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80",
  gallery1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  gallery2: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  gallery3: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  gallery4: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  svcInterior: "https://tpkawdequqsvvtwsjfya.supabase.co/storage/v1/object/public/service-images/interior-f51e9d87d081.jpg",
  svcResidential: "https://tpkawdequqsvvtwsjfya.supabase.co/storage/v1/object/public/service-images/residential-45025467c570.jpg",
  svcCommercial: "https://tpkawdequqsvvtwsjfya.supabase.co/storage/v1/object/public/service-images/commercial-02855da2b530.jpg",
  svcRenovation: "https://tpkawdequqsvvtwsjfya.supabase.co/storage/v1/object/public/service-images/renovation-08df7825f966.jpg",
  svcArchitecture: "https://tpkawdequqsvvtwsjfya.supabase.co/storage/v1/object/public/service-images/architecture-2e06582e593c.jpg",
  svcLandscape: "https://tpkawdequqsvvtwsjfya.supabase.co/storage/v1/object/public/service-images/landscape-27968a05b1ec.jpg",
  svcBuilders: "https://tpkawdequqsvvtwsjfya.supabase.co/storage/v1/object/public/service-images/builders-bf0dd66ba529.jpg",
};

const services = [
  {
    img: IMG.svcInterior,
    icon: "🛋️",
    title: "Interior Design",
    sub: "Residential & Commercial",
    desc: "End-to-end interior design — from living rooms and bedrooms to offices and showrooms. We craft spaces that inspire.",
    link: "/services",
  },
  {
    img: IMG.svcResidential,
    icon: "🏠",
    title: "Residential Construction",
    sub: "Individual & Apartment Homes",
    desc: "Custom-built homes, villas, and apartments with quality materials, on-time delivery, and complete project management.",
    link: "/services",
  },
  {
    img: IMG.svcCommercial,
    icon: "🏢",
    title: "Commercial Construction",
    sub: "Offices, Retail & Hospitality",
    desc: "Modern commercial spaces — offices, showrooms, hotels, and retail outlets built to world-class standards.",
    link: "/services",
  },
  {
    img: IMG.svcArchitecture,
    icon: "📐",
    title: "Architecture & Design",
    sub: "Structural & 3D Planning",
    desc: "Innovative architectural design with 3D walkthroughs, structural engineering, and Vastu-compliant layouts.",
    link: "/services",
  },
  {
    img: IMG.svcRenovation,
    icon: "🔧",
    title: "Renovation & Remodelling",
    sub: "Homes, Offices & Civil Works",
    desc: "Transform your existing space — full home makeovers, bathroom & kitchen renovations, flooring, and civil repairs.",
    link: "/services",
  },
  {
    img: IMG.svcLandscape,
    icon: "🌿",
    title: "Landscape Design",
    sub: "Gardens, Terraces & Outdoors",
    desc: "Serene outdoor environments — landscaped gardens, terraces, driveways, and boundary walls designed with care.",
    link: "/services",
  },
  {
    img: IMG.svcBuilders,
    icon: "🏗️",
    title: "Builders & Development",
    sub: "Villas, Apartments & Complexes",
    desc: "Ground-up construction of independent houses, multi-floor apartments, villas, and commercial complexes — fully managed, turnkey delivery.",
    link: "/services",
  },
];

const features = [
  { icon: PencilRuler, title: "Designed around you", desc: "Thoughtful layouts shaped by your lifestyle, your ideas, and the way you want to live." },
  { icon: ShieldCheck, title: "Quality in every detail", desc: "Carefully chosen materials and considered craftsmanship, from foundation to finishing." },
  { icon: BadgeIndianRupee, title: "Clarity on every cost", desc: "Transparent pricing and a clear scope of work, so you can plan with confidence." },
  { icon: CalendarCheck, title: "A team that stays on track", desc: "Coordinated planning, regular updates, and one team guiding your project to handover." },
];

const steps = [
  { icon: "🤝", title: "Meet our experts", desc: "Discuss your ideas and goals. We'll help plan your budget and design preferences." },
  { icon: "🏡", title: "Design your custom space", desc: "See detailed 3D renderings that let you visualise your space before work begins." },
  { icon: "📊", title: "Track the progress", desc: "Stay informed with regular updates on progress and quality checks at every stage." },
  { icon: "🎉", title: "Move in to your home", desc: "A pre-delivery inspection ensures everything is in place before handover." },
];

const packages = [
  {
    tier: "Standard",
    price: "₹ 1,800",
    features: ["Design Consultation", "Structure", "Flooring & Dado", "Doors & Windows", "Plumbing Accessories", "Painting", "Electrical"],
  },
  {
    tier: "Premium",
    price: "₹ 2,200",
    features: ["Custom Design", "Structure", "Flooring & Dado", "Doors & Windows", "Plumbing Accessories", "Painting", "Electrical", "Railing & Handrails"],
    highlight: true,
  },
  {
    tier: "Luxury",
    price: "₹ 2,700",
    features: ["Premium Design", "Structure", "Flooring & Dado", "Doors & Windows", "Plumbing Accessories", "Painting", "Electrical", "Railing & Handrails", "Landscape Design"],
  },
];

const testimonials = [
  { quote: "Nestique Studio's expert team guided me at every step. Their quality gave me total confidence throughout the journey.", name: "Mr. Gururaj Naik", city: "Visakhapatnam" },
  { quote: "Nestique Studio exceeded our expectations! The construction quality and timely delivery were remarkable. Truly a dream home.", name: "Mr. Hariharasudan", city: "Hyderabad" },
  { quote: "Nestique Studio made my dream home a hassle-free reality — clear costs, quality build, and service you can trust.", name: "Mr. Radhakrishna", city: "Bangalore" },
];

export default async function HomePage() {

  return (
    <main>
      <JsonLd data={faqSchema} />
      <JsonLd data={homeServiceSchema} />
      <JsonLd data={selectedWorksSchema} />
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              You Dream.<br />We Deliver.
            </h1>
            <p className={styles.heroSub}>
              Architecture, Interior Design &amp; Construction — hassle-free, with Nestique Studio.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#e8773a" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className={styles.statNum}>+81</span>
                <span className={styles.statLabel}>NPS Score</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#e8773a" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" stroke="#e8773a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.statNum}>130+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#e8773a" strokeWidth="1.8">
                  <rect x="2" y="7" width="20" height="14" rx="2" stroke="#e8773a" strokeWidth="1.8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
                <span className={styles.statNum}>220+</span>
                <span className={styles.statLabel}>Under Construction</span>
              </div>
            </div>
            <Link href="/consultation" className={styles.orangeBtn}>Book a Meeting</Link>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroImgBox}>
              <Image
                src={IMG.hero}
                alt="Modern luxury home by Nestique Studio"
                fill
                style={{ objectFit: "cover" }}
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services We Offer ── */}
      <section className={styles.servicesSection} aria-labelledby="services-heading">
        <div className={styles.sectionCenter}>
          <header className={styles.servicesHead}>
            <div>
              <p className={styles.eyebrow}>Considered design. Complete execution.</p>
              <h2 id="services-heading" className={styles.servicesTitle}>All Services<br /><span>Under One Roof</span></h2>
            </div>
            <div className={styles.servicesIntro}>
              <p>From the first sketch to the final detail, we bring your space to life. One team for every step of your journey.</p>
              <Link href="/consultation" className={styles.servicesConsult}>Let&apos;s plan your space <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
            </div>
          </header>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <Link href={s.link} className={styles.serviceCard} key={s.title}>
                <div className={styles.serviceImgBox}>
                  <ServiceImage key={s.img} src={s.img} title={s.title} index={i} />
                  <div className={styles.serviceImgOverlay} />
                  <span className={styles.serviceNumber} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.serviceImageLabel}>{s.sub}</span>
                </div>
                <div className={styles.serviceCardBody}>
                  <h3>{s.title}</h3>
                  <p className={styles.serviceCardDesc}>{s.desc}</p>
                  <span className={styles.serviceCardCta}>Explore service <span className={styles.serviceArrow} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg></span></span>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.servicesNote}><span aria-hidden="true">&#8212;</span> Your vision. Our expertise. Every detail, together.</div>
        </div>
      </section>

      {/* ── Why Nestique Studio ── */}
      <section className={styles.whySection} aria-labelledby="why-heading">
        <div className={styles.whyInner}>
          <div className={styles.whyLeft}>
            <div className={styles.whyImgBox}>
              <ServiceImage src={IMG.svcInterior} title="Warm, contemporary interiors with considered materials and lighting" index={0} />
              <div className={styles.whyImageShade} />
              <div className={styles.whyImageCaption}>
                <span>The Nestique approach</span>
                <p>Spaces to love.<br />Details to live with.</p>
              </div>
            </div>
            <div className={styles.whyPromise}>
              <span className={styles.whyPromiseIcon}><ShieldCheck aria-hidden="true" strokeWidth={1.5} /></span>
              <div><strong>One team. From vision to reality.</strong><p>Design, architecture &amp; construction, together.</p></div>
            </div>
          </div>
          <div className={styles.whyRight}>
            <p className={styles.eyebrow}>Built on trust. Crafted with care.</p>
            <h2 id="why-heading" className={styles.whyTitle}>Why Nestique <span>Studio</span></h2>
            <p className={styles.whyIntro}>Your space is personal. So is our approach. We bring thoughtful design and careful execution together to make your journey feel as considered as the result.</p>
            <div className={styles.featureGrid}>
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div className={styles.featureCard} key={f.title}>
                    <span className={styles.featureIcon}><Icon aria-hidden="true" strokeWidth={1.5} /></span>
                    <div><h3>{f.title}</h3><p>{f.desc}</p></div>
                  </div>
                );
              })}
            </div>
            <Link href="/about" className={styles.whyLink}>Get to know Nestique <ArrowUpRight aria-hidden="true" size={19} /></Link>
          </div>
        </div>
      </section>

      {/* ── Spaces With A Story — Selected Works ── */}
      <SelectedWorks />

      {/* ── Building Process ── */}
      <section className={styles.processSection}>
        <div className={styles.sectionCenter}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2 className={styles.sectionTitle}>A Glimpse into Our Process</h2>
          <p className={styles.sectionSubOrange}>
            Explore our step-by-step process of building your dream space.
          </p>
          <div className={styles.processSteps}>
            {steps.map((s, i) => (
              <div className={styles.processStep} key={i}>
                <div className={styles.processIconBox}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/about" className={styles.outlineBtn}>View Details</Link>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className={styles.packagesSection}>
        <div className={styles.sectionCenter}>
          <p className={styles.eyebrow}>Pricing</p>
          <h2 className={styles.sectionTitle}>Packages</h2>
          <p className={styles.sectionSub}>Discover the package that fits your needs.</p>
          <div className={styles.packagesGrid}>
            {packages.map((pkg, i) => (
              <div className={`${styles.packageCard} ${pkg.highlight ? styles.packageHighlight : ""}`} key={i}>
                <h3>{pkg.tier}</h3>

                <ul className={styles.packageFeatures}>
                  {pkg.features.map((f, j) => (
                    <li key={j}>
                      <span className={styles.plusIcon}>+</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/consultation"
                  className={pkg.highlight ? styles.orangeBtn : styles.outlineBtn}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className={styles.packageNote}>
            * Pricing calculated on a built-up area of 3000 sq.ft. Actual pricing varies by project.
          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className={styles.testimonialsSection}>
        <div className={styles.sectionCenter}>
          <p className={styles.eyebrow}>Happy Customers</p>
          <h2 className={styles.sectionTitle}>Real Stories, Real Homes</h2>
          <p className={styles.sectionSubOrange}>
            Don&apos;t believe us? See what our customers have to say.
          </p>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div className={styles.testimonialCard} key={i}>
                <div className={styles.quoteIcon}>&ldquo;&rdquo;</div>
                <p>{t.quote}</p>
                <div className={styles.testimonialFooter}>
                  <span className={styles.testimonialName}>{t.name}</span>
                  <span className={styles.testimonialCity}>📍 {t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Contact ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2>You Dream. We Deliver.</h2>
          <p>Ready to build your dream space? Schedule a free consultation to start your journey today.</p>
          <form className={styles.ctaForm} action="/consultation" method="GET">
            <div className={styles.ctaRow}>
              <input type="text" placeholder="Full Name" name="name" required />
              <input type="email" placeholder="Email" name="email" required />
            </div>
            <div className={styles.ctaRow}>
              <input type="tel" placeholder="Mobile Number" name="phone" required />
              <select name="city">
                <option value="">Choose City</option>
                <option>Visakhapatnam</option>
                <option>Vijayawada</option>
                <option>Hyderabad</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Pune</option>
              </select>
            </div>
            <div className={styles.ctaRow}>
              <select name="serviceType">
                <option value="">I need help with...</option>
                <option>Interior Design</option>
                <option>Residential Construction</option>
                <option>Commercial Construction</option>
                <option>Builders & Development</option>
                <option>Architecture & Design</option>
                <option>Renovation & Remodelling</option>
                <option>Landscape Design</option>
              </select>
              <div className={styles.radioGroup}>
                <span>Do you own a plot?</span>
                <label><input type="radio" name="land" value="yes" /> Yes</label>
                <label><input type="radio" name="land" value="no" /> No</label>
              </div>
            </div>
            <button type="submit" className={styles.orangeBtn}>Book a Meeting</button>
          </form>
        </div>
      </section>
    </main>
  );
}
