import type { Metadata } from "next";
import Link from "next/link";
import styles from "./blog.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Interior Design & Construction Blog | Tips for Vizag & Hyderabad Homeowners — Nestique Studio",
  description: "Expert interior design and civil construction tips for Visakhapatnam and Hyderabad homeowners. Cost guides, project stories, modular kitchen ideas, and more from Nestique Studio.",
  keywords: [
    "interior design blog Visakhapatnam",
    "construction tips Hyderabad",
    "interior design cost Vizag",
    "home construction guide Hyderabad",
    "modular kitchen ideas Vizag",
    "interior designer tips India",
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Interior Design & Construction Blog | Nestique Studio",
    description: "Expert interior design and civil construction tips for Visakhapatnam and Hyderabad homeowners.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design & Construction Blog | Nestique Studio",
    description: "Expert interior design and civil construction tips for Visakhapatnam and Hyderabad homeowners.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

const blogPosts = [
  {
    slug: "interior-design-cost-visakhapatnam-2025",
    title: "Interior Design Cost in Visakhapatnam 2025 — Complete Breakdown",
    date: "April 15, 2025",
    category: "Interior Design",
    excerpt: "How much does interior design actually cost in Visakhapatnam? We break down costs for 1BHK, 2BHK, and 3BHK homes — room by room, with real numbers from Vizag projects.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    readTime: "6 min read",
  },
  {
    slug: "house-construction-cost-hyderabad-2025",
    title: "House Construction Cost in Hyderabad 2025 — What to Expect per Sqft",
    date: "April 10, 2025",
    category: "Construction",
    excerpt: "Planning to build a house in Hyderabad? Here's a detailed breakdown of construction costs per sqft — standard, premium, and luxury grades — with real numbers from 2025 projects.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    readTime: "7 min read",
  },
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
  "Cost Guide":      "#7c3aed",
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
