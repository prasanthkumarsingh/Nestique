import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "./services.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Interior Design & Civil Construction Services in Visakhapatnam & Hyderabad | Nestique Studio",
  description:
    "Complete interior design & civil construction services in Visakhapatnam and Hyderabad. Modular kitchens, false ceilings, home interiors, house construction, villa construction, office fit-outs, renovation. Free consultation available.",
  keywords: [
    // Interior Vizag
    "interior design services Visakhapatnam",
    "modular kitchen design Visakhapatnam",
    "false ceiling design Visakhapatnam",
    "home interior design Vizag",
    "bedroom interior Visakhapatnam",
    "wardrobe design Vizag",
    "living room interior design Vizag",
    "bathroom interior design Visakhapatnam",
    // Civil Vizag
    "civil construction services Visakhapatnam",
    "residential construction Vizag",
    "house construction Visakhapatnam",
    "villa construction Vizag",
    "civil contractor services Vizag",
    // Interior Hyderabad
    "interior design services Hyderabad",
    "modular kitchen design Hyderabad",
    "false ceiling Hyderabad",
    "home interior design Hyderabad",
    "office interior design Hyderabad",
    "apartment interior Hyderabad",
    "turnkey interior design Hyderabad",
    // Civil Hyderabad
    "civil construction services Hyderabad",
    "residential construction Hyderabad",
    "house construction Hyderabad",
    "villa construction Hyderabad",
    "construction cost per sqft Hyderabad",
    "home renovation Hyderabad",
    "construction company AP Telangana",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services`,
    title: "Architecture, Interior Design & Construction Services | Nestique Studio",
    description:
      "Complete architecture, interior design & construction services across Hyderabad, Vizag & Bangalore. Packages from ₹1,800/sq ft.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nestique Studio — Services",
  url: `${SITE_URL}/services`,
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Architecture & Structural Design",
        provider: { "@type": "LocalBusiness", name: "Nestique Studio" },
        areaServed: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Bangalore"],
        description: "Architectural design, floor plans, 3D visualisations, structural drawings, and Vastu-compliant layouts.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Residential & Commercial Construction",
        provider: { "@type": "LocalBusiness", name: "Nestique Studio" },
        areaServed: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Bangalore"],
        description: "Turnkey construction of homes, commercial buildings, and malls with quality materials and on-site supervision.",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "1800",
          highPrice: "2700",
          description: "Construction packages from ₹1,800 to ₹2,700 per sq. ft.",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Interior Design & Space Planning",
        provider: { "@type": "LocalBusiness", name: "Nestique Studio" },
        areaServed: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Bangalore"],
        description: "Full home and office interior design — living rooms, bedrooms, modular kitchens, wardrobes, false ceilings, and lighting.",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Renovation & Civil Works",
        provider: { "@type": "LocalBusiness", name: "Nestique Studio" },
        areaServed: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Bangalore"],
        description: "Complete home and office renovation, structural repairs, bathroom and kitchen remodelling, flooring and tiling.",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Landscape & Outdoor Design",
        provider: { "@type": "LocalBusiness", name: "Nestique Studio" },
        areaServed: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Bangalore"],
        description: "Luxury garden, terrace, and outdoor space design for villas and commercial properties.",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Builders & Development",
        provider: { "@type": "LocalBusiness", name: "Nestique Studio" },
        areaServed: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Bangalore"],
        description: "Ground-up construction of independent houses, villas, multi-floor apartments, gated communities, and commercial complexes — fully managed turnkey delivery.",
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
  ],
};

const services = [
  {
    icon: "📐",
    title: "Architecture & Structural Design",
    desc: "From concept to blueprint, our architects craft spaces that are innovative, functional, and uniquely yours. We handle floor plans, elevations, structural drawings, and 3D visualisations.",
    points: ["3D Renderings & Walkthroughs", "Floor Plan & Elevation Design", "Structural Engineering", "Vastu-compliant layouts"],
  },
  {
    icon: "🏗️",
    title: "Construction & Project Management",
    desc: "End-to-end construction with certified-grade materials, skilled labour, and transparent progress tracking. We deliver on time and on budget.",
    points: ["Turnkey Construction", "Quality Material Sourcing", "On-site Supervision", "Regular Progress Reports"],
  },
  {
    icon: "🛋️",
    title: "Interior Design & Space Planning",
    desc: "Transform bare spaces into beautiful, liveable interiors. Our designers balance aesthetics and functionality to reflect your personal style.",
    points: ["Living & Bedroom Design", "Kitchen & Bathroom Interiors", "Modular Furniture", "Lighting & Décor"],
  },
  {
    icon: "🔧",
    title: "Renovation & Civil Works",
    desc: "Breathe new life into existing spaces. Whether it's a full home makeover or targeted civil repairs, we handle it with precision.",
    points: ["Complete Home Renovation", "Structural Repairs", "Bathroom & Kitchen Remodelling", "Flooring & Tiling"],
  },
  {
    icon: "🌿",
    title: "Landscape & Outdoor Design",
    desc: "Create serene, functional outdoor environments — from lush gardens and terraces to driveways and boundary walls.",
    points: ["Garden Design", "Terrace & Balcony Landscaping", "Boundary Walls & Gates", "Outdoor Lighting"],
  },
  {
    icon: "🏗️",
    title: "Builders & Development",
    desc: "We are builders. From laying the foundation to the final handover, we construct independent homes, multi-floor apartments, villas, and commercial complexes — ground-up, fully managed, on schedule.",
    points: ["Independent Houses & Villas", "Multi-Floor Apartment Buildings", "Gated Community & Township Projects", "Commercial Complexes & Showrooms", "Farmhouses & Weekend Homes", "Turnkey Delivery with Warranty"],
  },
];

const packages = [
  {
    tier: "Standard",
    price: "₹ 1,800",
    highlight: false,
    features: ["Design Consultation", "Structure", "Flooring & Dado", "Doors & Windows", "Plumbing", "Painting", "Electrical"],
  },
  {
    tier: "Premium",
    price: "₹ 2,200",
    highlight: true,
    features: ["Custom Design", "Structure", "Flooring & Dado", "Doors & Windows", "Plumbing", "Painting", "Electrical", "Railing & Handrails"],
  },
  {
    tier: "Luxury",
    price: "₹ 2,700",
    highlight: false,
    features: ["Premium Design", "Structure", "Flooring & Dado", "Doors & Windows", "Plumbing", "Painting", "Electrical", "Railing & Handrails", "Landscape Design"],
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={servicesSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className={styles.breadcrumb}>Services</p>
          <h1>Comprehensive Home Building Solutions</h1>
          <p className={styles.headerSub}>
            From architectural design to final handover, Nestique Studio manages every aspect of your dream home project.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className={styles.servicesSection}>
        <div className={styles.inner}>
          {services.map((s, i) => (
            <div className={`${styles.serviceCard} ${i % 2 === 1 ? styles.serviceCardAlt : ""}`} key={i}>
              <div className={styles.serviceImgBox}>
                <span className={styles.serviceEmoji}>{s.icon}</span>
              </div>
              <div className={styles.serviceText}>
                <h2>{s.title}</h2>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <ul className={styles.servicePoints}>
                  {s.points.map((p, j) => (
                    <li key={j}>
                      <span className={styles.checkIcon}>✓</span> {p}
                    </li>
                  ))}
                </ul>
                <a href="/consultation" className={styles.orangeBtn}>Get a Quote</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Builders Banner */}
      <section className={styles.buildersBanner}>
        <div className={styles.buildersBannerInner}>
          <div className={styles.buildersBannerLeft}>
            <p className={styles.eyebrow} style={{ color: "#e8773a" }}>We Build</p>
            <h2>We Are <span>Builders.</span><br />Not Just Designers.</h2>
            <p>
              Nestique Studio doesn&apos;t stop at drawings and renders. We put on our hard hats and build — from the foundation to the last coat of paint. Every structure we design, we also construct.
            </p>
            <a href="/consultation" className={styles.orangeBtn}>Start Your Build</a>
          </div>
          <div className={styles.buildersBannerRight}>
            {[
              { icon: "🏠", title: "Independent Houses", desc: "G+1, G+2, G+3 custom homes built to your plot size and lifestyle." },
              { icon: "🏢", title: "Apartment Buildings", desc: "Multi-floor residential complexes with modern amenities." },
              { icon: "🏘️", title: "Villas & Farmhouses", desc: "Luxury villas, duplex homes, and weekend farmhouses." },
              { icon: "🏬", title: "Commercial Complexes", desc: "Showrooms, offices, hotels, and retail buildings." },
            ].map((bt, i) => (
              <div className={styles.builderType} key={i}>
                <span className={styles.builderTypeIcon}>{bt.icon}</span>
                <h4>{bt.title}</h4>
                <p>{bt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className={styles.packagesSection}>
        <div className={styles.sectionCenter}>
          <p className={styles.eyebrow}>Pricing</p>
          <h2>Transparent Packages for Every Budget</h2>
          <p className={styles.sectionSub}>All packages include end-to-end project management and quality guarantees.</p>
          <div className={styles.packagesGrid}>
            {packages.map((pkg, i) => (
              <div className={`${styles.packageCard} ${pkg.highlight ? styles.packageHighlight : ""}`} key={i}>
                <h3>{pkg.tier}</h3>
                <ul className={styles.packageFeatures}>
                  {pkg.features.map((f, j) => (
                    <li key={j}><span className={styles.plusIcon}>+</span> {f}</li>
                  ))}
                </ul>
                <a href="/consultation" className={pkg.highlight ? styles.orangeBtn : styles.outlineBtn}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <h2>Not Sure Which Service You Need?</h2>
        <p>Our experts will help you figure out the best plan for your project and budget — for free.</p>
        <a href="/consultation" className={styles.ctaBtn}>Book a Free Consultation</a>
      </section>
    </main>
  );
}
