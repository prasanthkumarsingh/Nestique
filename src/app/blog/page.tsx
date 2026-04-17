import Link from "next/link";
import styles from "./blog.module.css";

export const metadata = {
  title: "Blog | Nestique Studio — Architecture, Interior Design & Construction Insights",
  description: "Expert insights, project stories, and design tips from Nestique Studio — India's trusted architecture, interior design, and construction company.",
};

const blogPosts = [
  {
    slug: "bangkok-luxury-structural-design-international-project",
    title: "Bangkok Luxury Structural Design: International Project Spotlight",
    date: "February 20, 2024",
    category: "Architecture",
    excerpt: "Discover how Nestique Studio delivered a world-class luxury structural design in Bangkok, blending innovation and elegance for international clients.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    readTime: "5 min read",
  },
  {
    slug: "5-floor-residential-building-construction-vizag-hyderabad",
    title: "5-Floor Residential Building: Construction in Vizag & Hyderabad",
    date: "February 18, 2024",
    category: "Construction",
    excerpt: "A deep dive into our recent 5-floor residential project — showcasing modern construction techniques and client-focused design in Vizag and Hyderabad.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    readTime: "4 min read",
  },
  {
    slug: "landscape-design-luxury-real-estate-vizag",
    title: "Landscape Design for Luxury Real Estate in Vizag",
    date: "February 16, 2024",
    category: "Landscape",
    excerpt: "Explore our approach to luxury landscape design, creating serene and functional outdoor spaces for high-end real estate in Visakhapatnam.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    readTime: "4 min read",
  },
  {
    slug: "interior-design-residential-apartments-ap-telangana",
    title: "Interior Design for Residential Apartments in AP & Telangana",
    date: "February 14, 2024",
    category: "Interior Design",
    excerpt: "How Nestique Studio transforms apartments with innovative interior design — maximising space, light, and style for modern family living.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    readTime: "5 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Architecture":    "#4a5c6e",
  "Construction":    "#2d6a4f",
  "Landscape":       "#3a7d44",
  "Interior Design": "#e8773a",
};

export default function BlogPage() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className={styles.breadcrumb}>Blog</p>
          <h1>Insights, Stories &amp; Ideas</h1>
          <p className={styles.headerSub}>
            Expert tips, project spotlights, and design inspiration from the Nestique Studio team.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className={styles.postsSection}>
        <div className={styles.postsInner}>
          {/* Featured first post */}
          <article className={styles.featuredCard}>
            <div className={styles.featuredImgBox}>
              <img src={blogPosts[0].image} alt={blogPosts[0].title} className={styles.featuredImg} />
              <div className={styles.featuredOverlay} />
              <span
                className={styles.categoryBadge}
                style={{ background: categoryColors[blogPosts[0].category] }}
              >
                {blogPosts[0].category}
              </span>
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.postMeta}>
                <span>{blogPosts[0].date}</span>
                <span className={styles.dot}>·</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <h2>
                <Link href={`/blog/${blogPosts[0].slug}`}>{blogPosts[0].title}</Link>
              </h2>
              <p>{blogPosts[0].excerpt}</p>
              <Link href={`/blog/${blogPosts[0].slug}`} className={styles.readMoreBtn}>
                Read Article →
              </Link>
            </div>
          </article>

          {/* Remaining posts */}
          <div className={styles.postsGrid}>
            {blogPosts.slice(1).map((post) => (
              <article className={styles.postCard} key={post.slug}>
                <div className={styles.postImgBox}>
                  <img src={post.image} alt={post.title} className={styles.postImg} />
                  <span
                    className={styles.categoryBadge}
                    style={{ background: categoryColors[post.category] }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className={styles.postBody}>
                  <div className={styles.postMeta}>
                    <span>{post.date}</span>
                    <span className={styles.dot}>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <h2>Ready to Start Your Own Project?</h2>
        <p>Get a free consultation with our team and bring your vision to life.</p>
        <Link href="/consultation" className={styles.ctaBtn}>Book Free Consultation</Link>
      </section>
    </main>
  );
}
