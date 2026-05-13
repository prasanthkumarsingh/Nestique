import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import styles from "./portfolio.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Commercial Interior Design Projects in Visakhapatnam & Hyderabad | Nestique Studio",
  description:
    "See Nestique Studio's completed commercial and residential projects — offices, hospitals, hotels, villas & apartment interiors across Visakhapatnam, Hyderabad, Vijayawada & Bangalore.",
  keywords: [
    "architecture portfolio Hyderabad",
    "construction projects Vizag",
    "interior design portfolio India",
    "luxury home construction portfolio",
    "commercial building projects Hyderabad",
    "residential construction portfolio AP",
  ],
  alternates: { canonical: `${SITE_URL}/portfolio` },
  openGraph: {
    url: `${SITE_URL}/portfolio`,
    title: "Portfolio | Architecture & Construction Projects — Nestique Studio",
    description: "Completed projects across Hyderabad, Vizag, Vijayawada & Bangalore — homes, commercial buildings, interiors, and landscape.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: `${SITE_URL}/portfolio`,
  name: "Nestique Studio — Project Portfolio",
  description: "Architecture, construction, interior design, and landscape projects by Nestique Studio.",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: 4,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bangkok Luxury Structural Design", url: `${SITE_URL}/blog/bangkok-luxury-structural-design-international-project` },
      { "@type": "ListItem", position: 2, name: "5-Floor Residential Building, Vizag & Hyderabad", url: `${SITE_URL}/blog/5-floor-residential-building-construction-vizag-hyderabad` },
      { "@type": "ListItem", position: 3, name: "Luxury Landscape Design, Visakhapatnam", url: `${SITE_URL}/blog/landscape-design-luxury-real-estate-vizag` },
      { "@type": "ListItem", position: 4, name: "Interior Design, AP & Telangana", url: `${SITE_URL}/blog/interior-design-residential-apartments-ap-telangana` },
    ],
  },
};

const projects = [
  {
    title: "Bangkok Luxury Structural Design",
    type: "International Project",
    location: "Bangkok, Thailand",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    description: "A world-class luxury residential tower in Bangkok featuring advanced structural engineering and elegant contemporary design.",
    tags: ["Architecture", "Structural Design", "International"],
    link: "/blog/bangkok-luxury-structural-design-international-project",
  },
  {
    title: "5-Floor Residential Building",
    type: "Residential Construction",
    location: "Vizag & Hyderabad",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    description: "Modern, earthquake-resistant residential buildings with customisable interiors and energy-efficient features for urban living.",
    tags: ["Construction", "Residential", "Multi-floor"],
    link: "/blog/5-floor-residential-building-construction-vizag-hyderabad",
  },
  {
    title: "Luxury Landscape Design",
    type: "Landscape & Outdoor",
    location: "Visakhapatnam",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    description: "Serene and functional outdoor spaces for high-end real estate, seamlessly blending nature and modern design.",
    tags: ["Landscape", "Outdoor Design", "Luxury"],
    link: "/blog/landscape-design-luxury-real-estate-vizag",
  },
  {
    title: "Interior Design, AP & Telangana",
    type: "Residential Interiors",
    location: "Andhra Pradesh & Telangana",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    description: "Innovative interior design for residential apartments, maximising space, light, and style for modern family living.",
    tags: ["Interior Design", "Residential", "Apartments"],
    link: "/blog/interior-design-residential-apartments-ap-telangana",
  },
];

const filters = ["All", "Architecture", "Construction", "Interior Design", "Landscape", "International"];

export default function PortfolioPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={portfolioSchema} />
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className={styles.breadcrumb}>Portfolio</p>
          <h1>Our Project Gallery</h1>
          <p className={styles.headerSub}>
            Discover homes and spaces built with care, quality, and attention to detail.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className={styles.filterSection}>
        <div className={styles.filterInner}>
          {filters.map((f, i) => (
            <button key={i} className={`${styles.filterBtn} ${i === 0 ? styles.filterBtnActive : ""}`}>
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsInner}>
          {projects.map((p, i) => (
            <article className={styles.projectCard} key={i}>
              <div className={styles.projectImgBox}>
                <img src={p.image} alt={p.title} className={styles.projectImg} />
                <div className={styles.projectOverlay}>
                  <Link href={p.link} className={styles.viewBtn}>View Project</Link>
                </div>
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectType}>{p.type}</span>
                  <span className={styles.projectLocation}>📍 {p.location}</span>
                </div>
                <h2>{p.title}</h2>
                <p>{p.description}</p>
                <div className={styles.tagRow}>
                  {p.tags.map((t, j) => (
                    <span className={styles.tag} key={j}>{t}</span>
                  ))}
                </div>
                <Link href={p.link} className={styles.readMore}>
                  Read Case Study →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Have a Project in Mind?</h2>
          <p>Let&apos;s discuss how we can bring your vision to life.</p>
          <Link href="/consultation" className={styles.ctaBtn}>Book a Free Consultation</Link>
        </div>
      </section>
    </main>
  );
}
