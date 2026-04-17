import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import styles from "./post.module.css";

const SITE_URL = "https://www.nestiquestudio.in";
const POST_URL = `${SITE_URL}/blog/bangkok-luxury-structural-design-international-project`;

export const metadata: Metadata = {
  title: "Bangkok Luxury Structural Design: International Architecture Project | Nestique Studio",
  description: "How Nestique Studio delivered a world-class luxury structural design in Bangkok — advanced structural engineering, contemporary design, international standards.",
  keywords: ["luxury architecture Bangkok", "international construction project India", "structural design Nestique Studio", "luxury residential tower design"],
  alternates: { canonical: POST_URL },
  openGraph: {
    type: "article",
    url: POST_URL,
    title: "Bangkok Luxury Structural Design: International Architecture Project",
    description: "World-class luxury structural design in Bangkok by Nestique Studio — advanced engineering and contemporary design.",
    images: [{ url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85", width: 1200, height: 630 }],
    publishedTime: "2024-02-10T00:00:00.000Z",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bangkok Luxury Structural Design: International Architecture Project",
  description: "How Nestique Studio delivered a world-class luxury structural design in Bangkok, blending innovation and elegance for international clients.",
  url: POST_URL,
  datePublished: "2024-02-10",
  dateModified: "2024-02-10",
  image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85",
  author: { "@type": "Person", name: "Abhisheak", jobTitle: "Lead Architect", worksFor: { "@type": "Organization", name: "Nestique Studio" } },
  publisher: { "@type": "Organization", name: "Nestique Studio", logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-nestique.png` } },
  mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
  keywords: "luxury architecture, Bangkok, structural design, international project, Nestique Studio",
};

export default function BangkokLuxuryProject() {
  return (
    <main className={styles.main}>
      <JsonLd data={articleSchema} />
      <div className={styles.heroImg}>
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85"
          alt="Bangkok Luxury Structural Design"
          className={styles.heroImgEl}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <span className={styles.category}>Architecture · International</span>
          <h1>Bangkok Luxury Structural Design: International Project Spotlight</h1>
          <div className={styles.meta}>
            <span>February 20, 2024</span>
            <span className={styles.dot}>·</span>
            <span>5 min read</span>
            <span className={styles.dot}>·</span>
            <span>By Abhisheak, Lead Architect</span>
          </div>
        </div>
      </div>

      <div className={styles.articleWrap}>
        <article className={styles.article}>
          <p className={styles.lead}>
            At Nestique Studio, we believe great architecture knows no borders. Our recent engagement in Bangkok stands as a defining chapter in our international portfolio — a luxury structural design project that pushed every boundary of form, function, and engineering excellence.
          </p>

          <h2>Project Background</h2>
          <p>
            Our client, a high-net-worth investor based in Southeast Asia, approached us with a vision for a landmark residential tower that would command the Bangkok skyline. The brief was clear: world-class design, panoramic city views, and a structure engineered to last generations.
          </p>

          <div className={styles.imageBlock}>
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"
              alt="Architectural planning and design"
              className={styles.inlineImg}
            />
            <p className={styles.caption}>Structural planning and 3D visualisation phase</p>
          </div>

          <h2>Design Philosophy</h2>
          <p>
            Led by our Creative Co-Founder Abhisheak, the design team developed a concept that blended contemporary minimalism with Southeast Asian spatial sensibility. The structure features floor-to-ceiling glazing, cantilevered terraces, and a façade system that plays with light at every hour of the day.
          </p>
          <p>
            Every detail — from the lobby's double-height atrium to the rooftop sky garden — was designed to create a sense of arrival, privacy, and luxury for its residents.
          </p>

          <h2>Engineering Highlights</h2>
          <ul>
            <li>Advanced seismic-resistant structural system compliant with Thai building codes</li>
            <li>High-performance glazing with solar control for tropical climate efficiency</li>
            <li>Smart home integration pre-wired into every unit</li>
            <li>Rainwater harvesting and greywater recycling systems</li>
            <li>Collaboration with local structural consultants and international MEP specialists</li>
          </ul>

          <div className={styles.imageBlock}>
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80"
              alt="Luxury residential architecture"
              className={styles.inlineImg}
            />
            <p className={styles.caption}>Rendered visualisation of the completed structure</p>
          </div>

          <h2>Results & Client Trust</h2>
          <p>
            The project was delivered within the agreed timeline and budget, earning exceptional praise from the client. The building has since become a reference point for luxury residential architecture in the city.
          </p>
          <p>
            This project affirmed our belief that thoughtful design, meticulous engineering, and transparent communication are the foundation of every great build — wherever in the world it stands.
          </p>

          <div className={styles.pullQuote}>
            <blockquote>
              &ldquo;Nestique Studio brought a level of professionalism and design sophistication that I had not encountered before. The result exceeded every expectation.&rdquo;
            </blockquote>
            <cite>— International Client, Bangkok</cite>
          </div>
        </article>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h3>Project Details</h3>
            <ul>
              <li><strong>Location:</strong> Bangkok, Thailand</li>
              <li><strong>Type:</strong> Luxury Residential Tower</li>
              <li><strong>Service:</strong> Architecture & Structural Design</li>
              <li><strong>Year:</strong> 2023–2024</li>
              <li><strong>Lead:</strong> Abhisheak (MTech Architecture)</li>
            </ul>
          </div>
          <div className={styles.sidebarCta}>
            <h3>Have a similar project?</h3>
            <p>Let&apos;s discuss how Nestique Studio can bring your vision to life.</p>
            <Link href="/consultation" className={styles.ctaBtn}>Book a Consultation</Link>
          </div>
          <div className={styles.sidebarCard}>
            <h3>More Articles</h3>
            <Link href="/blog/5-floor-residential-building-construction-vizag-hyderabad" className={styles.relatedLink}>
              5-Floor Residential Building, Vizag →
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
