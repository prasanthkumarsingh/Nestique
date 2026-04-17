import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "../components/JsonLd";
import styles from "./home.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Nestique Studio | Best Architecture, Interior Design & Construction — Hyderabad, Vizag, Bangalore",
  description:
    "Nestique Studio — top-rated architecture, interior design & construction company in Hyderabad, Vizag, Vijayawada & Bangalore. Custom homes, commercial buildings, mall construction, office interiors. Free consultation available.",
  keywords: [
    "architecture firm Hyderabad",
    "interior design Hyderabad",
    "best architect Hyderabad",
    "construction company Visakhapatnam",
    "residential construction Hyderabad",
    "commercial construction India",
    "mall construction India",
    "office interior design Hyderabad",
    "home construction Vizag",
    "interior designer Vizag",
    "turnkey construction Hyderabad",
    "architecture interior design Bangalore",
    "construction company AP Telangana",
    "residential architect Vijayawada",
    "best interior designer Hyderabad",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Nestique Studio | Architecture, Interior Design & Construction",
    description:
      "Top-rated architecture, interior design & construction firm in Hyderabad, Vizag & Bangalore. Residential, commercial, malls, offices. Book a free consultation today.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to build a house in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Residential construction in Hyderabad typically ranges from ₹1,800–₹3,500 per sq ft depending on the specification level (standard, premium, or luxury). Nestique Studio offers transparent, all-inclusive packages starting from ₹1,800/sq ft. Contact us for a free, detailed estimate for your plot.",
      },
    },
    {
      "@type": "Question",
      name: "What interior design services does Nestique Studio offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nestique Studio provides full interior design services including living room, bedroom, modular kitchen, wardrobe, bathroom, false ceiling, lighting design, flooring, and complete home interior packages. We serve residential apartments and independent homes across Hyderabad, Vizag, Vijayawada, and Bangalore.",
      },
    },
    {
      "@type": "Question",
      name: "Does Nestique Studio handle commercial construction and mall projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio handles end-to-end commercial construction projects including office buildings, retail showrooms, hotels, and large-scale mall construction across India. We manage design, structural engineering, approvals, and site execution.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical individual house (1,500–2,500 sq ft) takes 10–14 months from design approval to handover. Timelines vary based on design complexity, floor count, and finishes. Nestique Studio provides a project-specific timeline before construction begins.",
      },
    },
    {
      "@type": "Question",
      name: "Does Nestique Studio work in Vizag and Vijayawada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio has delivered 130+ projects across Visakhapatnam (Vizag), Vijayawada, Hyderabad, and Bangalore. We have a dedicated team and local site supervisors in both AP and Telangana.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a free design consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Nestique Studio offers a free, no-obligation design consultation. You can book online or call +91 78160 86291. We'll discuss your requirements, site, and budget and provide an initial estimate within 24 hours.",
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
  svcInterior: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
  svcResidential: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  svcCommercial: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  svcRenovation: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=600&q=80",
  svcArchitecture: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  svcLandscape: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  svcBuilders: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=600&q=80",
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
  { icon: "✏️", title: "Designs matching vision", desc: "Functional layouts unique to your lifestyle and preferences." },
  { icon: "💎", title: "High-quality materials", desc: "No compromises. Only certified-grade materials throughout." },
  { icon: "💰", title: "Price transparency", desc: "Clear pricing with no surprises, just peace of mind." },
  { icon: "📅", title: "On-time delivery", desc: "From planning to handover, our turnkey model stays on schedule." },
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

const gallery = [
  { img: IMG.gallery1, title: "Luxury Villa, Visakhapatnam", sub: "Residential Construction" },
  { img: IMG.gallery2, title: "5-Floor Apartment Complex", sub: "Multi-Unit Residential" },
  { img: IMG.gallery3, title: "Luxury Landscape & Garden", sub: "Landscape & Outdoor" },
  { img: IMG.gallery4, title: "Modern Living Room Interior", sub: "Interior Design" },
];

export default function HomePage() {
  return (
    <main>
      <JsonLd data={faqSchema} />
      <JsonLd data={homeServiceSchema} />
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
      <section className={styles.servicesSection}>
        <div className={styles.sectionCenter}>
          <p className={styles.eyebrow}>What We Do</p>
          <h2 className={styles.sectionTitle}>All Services Under One Roof</h2>
          <p className={styles.sectionSub}>
            From interior design to full-scale construction — residential, commercial, and everything in between.
          </p>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <Link href={s.link} className={styles.serviceCard} key={i}>
                <div className={styles.serviceImgBox}>
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                  <div className={styles.serviceImgOverlay} />
                  <span className={styles.serviceCardIcon}>{s.icon}</span>
                </div>
                <div className={styles.serviceCardBody}>
                  <h3>{s.title}</h3>
                  <p className={styles.serviceCardSub}>{s.sub}</p>
                  <p className={styles.serviceCardDesc}>{s.desc}</p>
                  <span className={styles.serviceCardCta}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Nestique Studio ── */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <div className={styles.whyLeft}>
            <div className={styles.whyImgBox}>
              <Image
                src={IMG.whyLeft}
                alt="Why Nestique Studio"
                fill
                style={{ objectFit: "cover" }}
                unoptimized
              />
            </div>
          </div>
          <div className={styles.whyRight}>
            <p className={styles.eyebrow}>Why Us</p>
            <h2 className={styles.sectionTitle}>Why Nestique Studio</h2>
            <p className={styles.sectionSub}>
              You build your dream space once. Build it right with Nestique Studio.
            </p>
            <div className={styles.featureGrid}>
              {features.map((f, i) => (
                <div className={styles.featureCard} key={i}>
                  <span className={styles.featureIcon}>{f.icon}</span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Gallery ── */}
      <section className={styles.gallerySection}>
        <div className={styles.sectionCenter}>
          <p className={styles.eyebrow}>Our Work</p>
          <h2 className={styles.sectionTitle}>Our Project Gallery</h2>
          <p className={styles.sectionSub}>
            Discover spaces built with care, quality, and attention to detail.
          </p>
          <div className={styles.galleryGrid}>
            {gallery.map((p, i) => (
              <div className={styles.galleryCard} key={i}>
                <div className={styles.galleryImgBox}>
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                  <div className={styles.galleryOverlay}>
                    <span>View Project</span>
                  </div>
                </div>
                <div className={styles.galleryInfo}>
                  <p className={styles.galleryType}>{p.sub}</p>
                  <h3>{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <Link href="/portfolio" className={styles.outlineBtn}>Explore More Projects</Link>
        </div>
      </section>

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
