import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../bangkok-luxury-structural-design-international-project/post.module.css";

const SITE_URL = "https://www.nestiquestudio.in";
const POST_URL = `${SITE_URL}/blog/landscape-design-luxury-real-estate-vizag`;

export const metadata: Metadata = {
  title: "Landscape Design for Luxury Real Estate in Vizag | Nestique Studio",
  description: "Nestique Studio's approach to luxury landscape design in Visakhapatnam — serene outdoor spaces, water features, native planting & pergolas for high-end villas. See the full project.",
  keywords: [
    "landscape design Visakhapatnam",
    "luxury garden design Vizag",
    "outdoor design luxury villa Visakhapatnam",
    "landscape architect Vizag",
    "villa landscape design AP",
  ],
  alternates: { canonical: POST_URL },
  openGraph: {
    type: "article",
    url: POST_URL,
    title: "Landscape Design for Luxury Real Estate in Vizag | Nestique Studio",
    description: "Nestique Studio transforms a luxury Vizag villa's grounds with layered landscaping, a natural swimming pond, and a pergola terrace.",
    images: [{ url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85", width: 1200, height: 630 }],
    publishedTime: "2024-02-16T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscape Design for Luxury Real Estate in Vizag | Nestique Studio",
    description: "Nestique Studio transforms a luxury Vizag villa's grounds with layered landscaping and a natural swimming pond.",
    images: ["https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85"],
  },
};

export default function LandscapeLuxuryVizag() {
  return (
    <main className={styles.main}>
      <div className={styles.heroImg}>
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85"
          alt="Luxury Landscape Design Vizag"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <span className={styles.category}>Landscape · Outdoor Design</span>
          <h1>Landscape Design for Luxury Real Estate in Vizag</h1>
          <div className={styles.meta}>
            <span>February 16, 2024</span>
            <span className={styles.dot}>·</span>
            <span>4 min read</span>
            <span className={styles.dot}>·</span>
            <span>By Abhisheak, Lead Architect</span>
          </div>
        </div>
      </div>

      <div className={styles.articleWrap}>
        <article className={styles.article}>
          <p className={styles.lead}>
            A home&apos;s landscape is its first impression. At Nestique Studio, we approach outdoor spaces with the same rigour and creativity we bring to architecture and interiors — crafting environments that are serene, functional, and unmistakably distinctive.
          </p>

          <h2>The Client Brief</h2>
          <p>
            Our client in Visakhapatnam had just completed construction of a luxury villa and wanted the surrounding grounds to match the standard of the built structure. The site offered a generous plot with mature trees, a sloping garden zone, and a front motor court.
          </p>

          <div className={styles.imageBlock}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
              alt="Garden landscape design"
              width={900}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
            <p className={styles.caption}>Rear garden — designed for privacy and seasonal colour</p>
          </div>

          <h2>Design Concept</h2>
          <p>
            We developed a layered landscape concept: a formal front garden with sculpted hedges and a stone pathway leading to the entry; a relaxed rear garden with a water feature, seating areas, and dense native planting; and a transitional terrace zone with outdoor dining and a pergola structure.
          </p>
          <p>
            Indigenous plant species were prioritised for their low maintenance requirements and natural resilience to the coastal climate of Vizag. Every plant choice was made with long-term canopy and colour in mind.
          </p>

          <h2>Features Delivered</h2>
          <ul>
            <li>Formal entry garden with feature lighting and stone pathway</li>
            <li>Natural swimming pond with water plants and filtration</li>
            <li>Pergola with climbing plants and integrated outdoor lighting</li>
            <li>Rear lawn with seasonal flowering borders</li>
            <li>Automated drip irrigation system throughout</li>
            <li>Boundary wall planters and decorative trellis</li>
          </ul>

          <div className={styles.imageBlock}>
            <Image
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80"
              alt="Outdoor terrace and garden"
              width={900}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
            <p className={styles.caption}>Completed terrace and outdoor dining zone at dusk</p>
          </div>

          <div className={styles.pullQuote}>
            <blockquote>
              &ldquo;Our garden has become the most-talked-about feature of our home. Nestique Studio understood our vision perfectly and delivered something truly beautiful.&rdquo;
            </blockquote>
            <cite>— Client, Visakhapatnam</cite>
          </div>
        </article>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h3>Project Details</h3>
            <ul>
              <li><strong>Location:</strong> Visakhapatnam, AP</li>
              <li><strong>Type:</strong> Luxury Villa Landscape</li>
              <li><strong>Service:</strong> Landscape & Outdoor Design</li>
              <li><strong>Year:</strong> 2023</li>
            </ul>
          </div>
          <div className={styles.sidebarCta}>
            <h3>Transform your outdoor space</h3>
            <p>Book a free landscape consultation with our design team.</p>
            <Link href="/consultation" className={styles.ctaBtn}>Book a Consultation</Link>
          </div>
          <div className={styles.sidebarCard}>
            <h3>More Articles</h3>
            <Link href="/blog/bangkok-luxury-structural-design-international-project" className={styles.relatedLink}>
              Bangkok Luxury Structural Design →
            </Link>
            <Link href="/blog/5-floor-residential-building-construction-vizag-hyderabad" className={styles.relatedLink}>
              5-Floor Residential Building →
            </Link>
            <Link href="/blog/interior-design-residential-apartments-ap-telangana" className={styles.relatedLink}>
              Interior Design, AP & Telangana →
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
