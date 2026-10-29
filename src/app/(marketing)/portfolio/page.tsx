import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PortfolioGallery from "@/components/PortfolioGallery";
import { portfolioProjects } from "@/lib/portfolio.data";
import { ArrowUpRight } from "lucide-react";
import styles from "./portfolio.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Our Project Gallery | Restaurants, Villas & Apartments | Nestique Studio",
  description:
    "Explore Amogham, Gismat, Villa85 at Iconica Grand, and the Heritage Apartment collection through 32 project photographs.",
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
    description: "Restaurant interiors, contemporary villas, and a warm apartment collection. Explore the details that make every space its own.",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: SITE_URL + "/portfolio",
  name: "Nestique Studio Project Portfolio",
  description: "Restaurant and residential project photography by Nestique Studio.",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: portfolioProjects.length,
    itemListElement: portfolioProjects.map((project, index) => ({
      "@type": "ListItem", position: index + 1, name: project.name,
      url: SITE_URL + "/portfolio#" + project.slug,
      item: { "@type": "CreativeWork", name: project.name, image: project.photos.map((photo) => photo.url) },
    })),
  },
};

export default function PortfolioPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={portfolioSchema} />
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className={styles.breadcrumb}>The Nestique Portfolio</p>
          <h1>Our Project <span>Gallery</span></h1>
          <p className={styles.headerSub}>
            Restaurant interiors, contemporary villas, and a warm apartment collection. Explore the details that make every space its own.
          </p>
          <div className={styles.galleryStats}><span><strong>{portfolioProjects.length.toString().padStart(2, "0")}</strong> project collections</span><span><strong>{portfolioProjects.reduce((sum, project) => sum + project.photos.length, 0)}</strong> moments in detail</span></div>
        </div>
      </section>

      <PortfolioGallery projects={portfolioProjects} />

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <p className={styles.ctaEyebrow}>Your space could be next</p>
          <h2>Let&apos;s create something<br />worth coming home to.</h2>
          <p>Let&apos;s discuss how we can bring your vision to life.</p>
          <Link href="/consultation" className={styles.ctaBtn}>Book a Free Consultation <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
