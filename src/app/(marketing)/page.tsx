import type { Metadata } from "next";
import { PencilRuler, ShieldCheck, BadgeIndianRupee, CalendarCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import ConsultationForm from "@/components/ConsultationForm";
import SelectedWorks from "@/components/SelectedWorks";
import ServiceImage from "@/components/ServiceImage";
import { selectedWorksSchema } from "@/components/selectedWorks.data";
import styles from "./home.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

// Curated project galleries use the named Supabase uploads bundled locally.

export const metadata: Metadata = {
  title: { absolute: "Nestique Studio | Commercial Interior Design & Architecture in Visakhapatnam & Hyderabad" },
  description: "Architecture, house planning, interiors and construction for homes and commercial properties in Visakhapatnam and Hyderabad. Discuss your project with Nestique Studio.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Nestique Studio | Architecture, Interior Design & Construction",
    description:
      "Explore architecture, interior design, construction and renovation with Nestique Studio. Start with your property, priorities and a clear scope.",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
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
    desc: "Custom-built homes, villas, and apartments with agreed materials, site coordination, and project management.",
    link: "/services",
  },
  {
    img: IMG.svcCommercial,
    icon: "🏢",
    title: "Commercial Construction",
    sub: "Offices, Retail & Hospitality",
    desc: "Modern commercial spaces — offices, showrooms, hotels, and retail outlets planned around your operational requirements.",
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
    features: ["Design Consultation", "Structure", "Flooring & Dado", "Doors & Windows", "Plumbing Accessories", "Painting", "Electrical"],
  },
  {
    tier: "Premium",
    features: ["Custom Design", "Structure", "Flooring & Dado", "Doors & Windows", "Plumbing Accessories", "Painting", "Electrical", "Railing & Handrails"],
    highlight: true,
  },
  {
    tier: "Luxury",
    features: ["Premium Design", "Structure", "Flooring & Dado", "Doors & Windows", "Plumbing Accessories", "Painting", "Electrical", "Railing & Handrails", "Landscape Design"],
  },
];

const planningGuides = [
 { title: "Planning your home", text: "Start with the way you live, site constraints and a clear drawing scope.", href: "/services/architecture" },
 { title: "Planning your workplace", text: "Connect occupancy, circulation and building services before fit-out.", href: "/services/office-planning" },
 { title: "Rethinking an existing space", text: "Assess the building condition and priorities before deciding what to change.", href: "/services/renovation" },
];

export default async function HomePage() {

  return (
    <main>
      <JsonLd data={homeServiceSchema} />
      <JsonLd data={selectedWorksSchema} />
      {/* ── Hero ── */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <p className={styles.heroEyebrow}><span /> Architecture. Interiors. Possibilities.</p>
            <h1 id="hero-heading" className={styles.heroTitle}>Extraordinary spaces.<br /><em>Made for you.</em></h1>
            <p className={styles.heroSub}>From a place you imagine to a space you love. We bring thoughtful architecture, beautiful interiors, and seamless execution together.</p>
            <div className={styles.heroActions}>
              <Link href="/consultation" className={styles.heroPrimary}>Let&apos;s create your space <ArrowUpRight size={19} aria-hidden="true" /></Link>
              <Link href="/portfolio" className={styles.heroSecondary}>Explore our work <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
            <div className={styles.heroTrust}>
              <div><strong>Your space.</strong><p>A considered approach</p></div>
              <div><strong>One team.</strong><p>From concept to completion</p></div>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroImgBox}>
              <Image src="/images/projects/villa85-1.jpeg" alt="Warm contemporary interiors at Villa85, Iconica Grand, by Nestique Studio" fill sizes="(max-width: 800px) 100vw, 55vw" style={{ objectFit: "cover" }} priority />
              <span className={styles.heroImageTag}>The art of living well</span>
              <Link href="/portfolio#villa85-iconica-grand" className={styles.heroProject}><div><span>In focus / Residential interiors</span><strong>Villa85, Iconica Grand</strong></div><ArrowUpRight size={24} aria-hidden="true" /></Link>
            </div>
            <div className={styles.heroSideNote}>Thoughtfully designed. Beautifully lived.</div>
          </div>
        </div>
        <div className={styles.heroBottom}><span>Rooted in detail. Designed around you.</span><span>Visakhapatnam <i /> Hyderabad <i /> Beyond</span></div>
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
          <p className={styles.eyebrow}>Before you begin</p>
          <h2 className={styles.sectionTitle}>Make room for a clear plan</h2>
          <p className={styles.sectionSubOrange}>
            Explore the questions and decisions that shape your project.
          </p>
          <div className={styles.testimonialsGrid}>
            {planningGuides.map((t, i) => (
              <div className={styles.testimonialCard} key={i}>
                <div className={styles.quoteIcon}>&ldquo;&rdquo;</div>
                <p>{t.text}</p>
                <div className={styles.testimonialFooter}>
                  <Link href={t.href} className={styles.testimonialName}>{t.title} →</Link>

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
          <p>Ready to build your dream space? Request a consultation to start your journey today.</p>
          <ConsultationForm />
        </div>
      </section>
    </main>
  );
}
