import Link from "next/link";
import styles from "../bangkok-luxury-structural-design-international-project/post.module.css";

export const metadata = {
  title: "Interior Design for Residential Apartments in AP & Telangana | Nestique Studio",
  description: "How Nestique Studio transforms residential apartments in Andhra Pradesh and Telangana with innovative interior design — maximising space, light, and style.",
};

export default function InteriorDesignApts() {
  return (
    <main className={styles.main}>
      <div className={styles.heroImg}>
        <img
          src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=85"
          alt="Interior Design Residential Apartments"
          className={styles.heroImgEl}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <span className={styles.category}>Interior Design · Residential</span>
          <h1>Interior Design for Residential Apartments in AP &amp; Telangana</h1>
          <div className={styles.meta}>
            <span>February 14, 2024</span>
            <span className={styles.dot}>·</span>
            <span>5 min read</span>
            <span className={styles.dot}>·</span>
            <span>By Preethi, Interior Designer</span>
          </div>
        </div>
      </div>

      <div className={styles.articleWrap}>
        <article className={styles.article}>
          <p className={styles.lead}>
            A well-designed interior doesn&apos;t just look beautiful — it transforms how you live. At Nestique Studio, our interior design work for residential apartments across Andhra Pradesh and Telangana starts with a simple question: how does this family want to feel at home?
          </p>

          <h2>Our Approach to Apartment Interiors</h2>
          <p>
            Led by Preethi, our interior design specialist, every apartment project begins with an immersive brief — we spend time understanding the family&apos;s routines, aesthetic preferences, storage needs, and the feel they want for each room.
          </p>
          <p>
            The result is a cohesive design that maximises the available footprint, eliminates visual clutter, and creates a sense of spaciousness — even in compact 2BHK and 3BHK layouts common across the region.
          </p>

          <div className={styles.imageBlock}>
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80"
              alt="Modern living room design"
              className={styles.inlineImg}
            />
            <p className={styles.caption}>Living room — warm tones with built-in storage solutions</p>
          </div>

          <h2>Design Elements We Focus On</h2>
          <ul>
            <li>Space planning that maximises usable area in every room</li>
            <li>Custom modular kitchens with soft-close hardware and smart storage</li>
            <li>Wardrobe and storage systems built into structural walls</li>
            <li>Natural light amplification through strategic mirror and surface placement</li>
            <li>False ceiling designs with integrated LED lighting</li>
            <li>Flooring in Italian marble, vitrified tiles, and engineered wood</li>
          </ul>

          <div className={styles.imageBlock}>
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80"
              alt="Modern modular kitchen"
              className={styles.inlineImg}
            />
            <p className={styles.caption}>Modular kitchen — handleless design with quartz countertop</p>
          </div>

          <h2>Materials & Finishes</h2>
          <p>
            We source all materials from certified suppliers, ensuring durability and finish quality that ages gracefully. Our palette for the AP and Telangana projects has leaned into warm neutrals — ivory whites, earthy terracottas, and rich wood tones — reflecting the region&apos;s cultural warmth.
          </p>

          <div className={styles.pullQuote}>
            <blockquote>
              &ldquo;Preethi understood exactly what we wanted — even when we couldn&apos;t fully articulate it. Our apartment feels like a completely different space now, and everyone who visits is amazed.&rdquo;
            </blockquote>
            <cite>— Mr. Radhakrishna, Vijayawada</cite>
          </div>
        </article>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h3>Project Details</h3>
            <ul>
              <li><strong>Location:</strong> AP & Telangana</li>
              <li><strong>Type:</strong> Residential Apartments</li>
              <li><strong>Service:</strong> Full Interior Design</li>
              <li><strong>Year:</strong> 2023–2024</li>
              <li><strong>Lead:</strong> Preethi (Interior Designer)</li>
            </ul>
          </div>
          <div className={styles.sidebarCta}>
            <h3>Love your home more</h3>
            <p>Book a free interior design consultation with Preethi and the team.</p>
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
            <Link href="/blog/landscape-design-luxury-real-estate-vizag" className={styles.relatedLink}>
              Luxury Landscape Design, Vizag →
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
