import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import styles from "../bangkok-luxury-structural-design-international-project/post.module.css";

const SITE_URL = "https://www.nestiquestudio.in";
const POST_URL = `${SITE_URL}/blog/5-floor-residential-building-construction-vizag-hyderabad`;

export const metadata: Metadata = {
  title: "5-Floor Residential Building Construction in Vizag & Hyderabad | Nestique Studio",
  description: "How Nestique Studio built a modern 5-floor residential building in Vizag and Hyderabad — earthquake-resistant structure, quality materials, and on-time delivery.",
  keywords: ["5 floor residential building Vizag", "residential construction Hyderabad", "multi floor house construction AP", "residential building contractor Vizag"],
  alternates: { canonical: POST_URL },
  openGraph: {
    type: "article",
    url: POST_URL,
    title: "5-Floor Residential Building Construction in Vizag & Hyderabad",
    description: "Modern earthquake-resistant 5-floor residential construction in Vizag and Hyderabad by Nestique Studio.",
    images: [{ url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85", width: 1200, height: 630 }],
    publishedTime: "2024-02-12T00:00:00.000Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "5-Floor Residential Building Construction in Vizag & Hyderabad",
  description: "A deep dive into our recent 5-floor residential project — modern construction techniques and client-focused design in Vizag and Hyderabad.",
  url: POST_URL,
  datePublished: "2024-02-12",
  dateModified: "2024-02-12",
  image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85",
  author: { "@type": "Person", name: "Prasanth", jobTitle: "Civil Works & Interior Manager", worksFor: { "@type": "Organization", name: "Nestique Studio" } },
  publisher: { "@type": "Organization", name: "Nestique Studio", logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-nestique.png` } },
  mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
  keywords: "residential construction, 5 floor building, Vizag, Hyderabad, Nestique Studio",
};

export default function FiveFloorResidential() {
  return (
    <main className={styles.main}>
      <div className={styles.heroImg}>
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85"
          alt="5-Floor Residential Building"
          className={styles.heroImgEl}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <span className={styles.category}>Construction · Residential</span>
          <h1>5-Floor Residential Building: Construction in Vizag &amp; Hyderabad</h1>
          <div className={styles.meta}>
            <span>February 18, 2024</span>
            <span className={styles.dot}>·</span>
            <span>4 min read</span>
            <span className={styles.dot}>·</span>
            <span>By Prasanth, Civil Works Manager</span>
          </div>
        </div>
      </div>

      <div className={styles.articleWrap}>
        <article className={styles.article}>
          <p className={styles.lead}>
            Building a multi-floor residential complex in India&apos;s rapidly growing tier-1 and tier-2 cities demands more than just construction expertise — it requires a deep understanding of client aspirations, local terrain, and long-term structural integrity.
          </p>

          <h2>Project Overview</h2>
          <p>
            This project involved designing and constructing two separate 5-floor residential buildings — one in Visakhapatnam and one in Hyderabad. Both projects were managed simultaneously by Prasanth, our Civil Works & Interior Manager, with architectural oversight from Abhisheak.
          </p>

          <div className={styles.imageBlock}>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
              alt="Construction site progress"
              className={styles.inlineImg}
            />
            <p className={styles.caption}>Construction progress at the Visakhapatnam site</p>
          </div>

          <h2>Construction Approach</h2>
          <p>
            Both buildings were constructed using M25 grade concrete with Fe-500 steel reinforcement, ensuring earthquake resistance compliant with Zone II and Zone III classifications. The foundation design incorporated deep pile systems suited to the local soil profiles.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>Earthquake-resistant structure to BIS standards</li>
            <li>Energy-efficient cross-ventilation in every unit</li>
            <li>Customisable interior layouts for each flat owner</li>
            <li>Solar-ready rooftop provision</li>
            <li>Dedicated parking and common area landscaping</li>
            <li>On-time delivery with weekly client progress updates</li>
          </ul>

          <div className={styles.imageBlock}>
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80"
              alt="Completed residential building"
              className={styles.inlineImg}
            />
            <p className={styles.caption}>Completed building — Hyderabad project</p>
          </div>

          <h2>Interior Execution</h2>
          <p>
            Once the civil structure was complete, our interior design team led by Preethi took over — delivering custom interiors for individual flat owners across both buildings. From modular kitchens to premium flooring and designer bathrooms, every unit was tailored to its owner&apos;s lifestyle.
          </p>

          <div className={styles.pullQuote}>
            <blockquote>
              &ldquo;I was kept informed at every step. The build quality is outstanding and was delivered exactly on schedule. Nestique Studio truly delivers on their promise.&rdquo;
            </blockquote>
            <cite>— Mr. Hariharasudan, Hyderabad</cite>
          </div>
        </article>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h3>Project Details</h3>
            <ul>
              <li><strong>Location:</strong> Vizag & Hyderabad</li>
              <li><strong>Type:</strong> 5-Floor Residential Complex</li>
              <li><strong>Service:</strong> Full Construction + Interiors</li>
              <li><strong>Year:</strong> 2023</li>
              <li><strong>Lead:</strong> Prasanth (Civil Works Manager)</li>
            </ul>
          </div>
          <div className={styles.sidebarCta}>
            <h3>Building your home?</h3>
            <p>Talk to our experts for a free consultation and transparent quote.</p>
            <Link href="/consultation" className={styles.ctaBtn}>Book a Consultation</Link>
          </div>
          <div className={styles.sidebarCard}>
            <h3>More Articles</h3>
            <Link href="/blog/bangkok-luxury-structural-design-international-project" className={styles.relatedLink}>
              Bangkok Luxury Structural Design →
            </Link>
            <Link href="/blog/landscape-design-luxury-real-estate-vizag" className={styles.relatedLink}>
              Luxury Landscape Design, Vizag →
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
