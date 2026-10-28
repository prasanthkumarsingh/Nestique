import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock3, BookOpen } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ServiceImage from "@/components/ServiceImage";
import { BLOG_SITE_URL as SITE_URL, blogPosts, formatBlogDate } from "@/lib/blog.data";
import styles from "./blog.module.css";

const title = "Interior Design & Architecture Blog | Vizag & Hyderabad";
const description = "Explore Nestique Studio project stories and practical ideas for restaurant interiors, homes, construction, and landscaping in Visakhapatnam and Hyderabad.";
export const metadata: Metadata = {
  title: { absolute: title + " | Nestique Studio" }, description,
  alternates: { canonical: SITE_URL + "/blog" },
  openGraph: { type: "website", url: SITE_URL + "/blog", title, description, siteName: "Nestique Studio", locale: "en_IN", images: [{ url: blogPosts[0].image, alt: blogPosts[0].imageAlt }] },
  twitter: { card: "summary_large_image", title, description, images: [blogPosts[0].image] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};
const topics = ["Project stories", "Interior design", "Construction", "Architecture", "Landscape"];
const topicId = (topic: string) => topic.toLowerCase().replaceAll(" ", "-");
const blogSchema = {
  "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": SITE_URL + "/blog#page", url: SITE_URL + "/blog", name: title, description, inLanguage: "en-IN", mainEntity: { "@id": SITE_URL + "/blog#articles" } },
    { "@type": "Blog", "@id": SITE_URL + "/blog#articles", name: "The Nestique Journal", url: SITE_URL + "/blog", publisher: { "@type": "Organization", name: "Nestique Studio", url: SITE_URL }, blogPost: blogPosts.map((post) => ({ "@type": "BlogPosting", headline: post.title, description: post.excerpt, url: SITE_URL + "/blog/" + post.slug, image: post.image, datePublished: post.published + "T09:00:00+05:30", author: { "@type": post.sections ? "Organization" : "Person", name: post.sections ? "Nestique Studio" : post.slug.startsWith("interior-design-residential") ? "Preethi" : post.slug.startsWith("5-floor") ? "Prasanth" : "Abhisheak", url: SITE_URL + "/about" } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Blog", item: SITE_URL + "/blog" }] },
  ],
};
export default function BlogPage() {
  const featured = blogPosts[0];
  return (
    <main className={styles.main}>
      <JsonLd data={blogSchema} />
      <header className={styles.header}><div className={styles.container}><p className={styles.eyebrow}>The Nestique Journal</p><h1>Interior design &amp; architecture.<br /><em>Ideas for the way we live.</em></h1><p className={styles.intro}>Project stories, thoughtful details, and practical guidance from our studio. Explore spaces and ideas for homes and businesses in Visakhapatnam, Hyderabad, and beyond.</p><div className={styles.headerMeta}><BookOpen size={16} strokeWidth={1.5} aria-hidden="true" /><span>From the Nestique Studio team</span><Link href="/about">Meet the people behind the work <ArrowUpRight size={15} aria-hidden="true" /></Link></div></div></header>
      <section className={styles.featuredSection} aria-labelledby="featured-title"><div className={styles.container}><article className={styles.featured}>
        <Link href={"/blog/" + featured.slug} className={styles.featuredVisual} aria-label={featured.title}><ServiceImage src={featured.image} title={featured.imageAlt} index={0} priority /><span className={styles.featuredBadge}>From our projects</span></Link>
        <div className={styles.featuredBody}><p className={styles.eyebrow}>The featured story</p><p className={styles.meta}><time dateTime={featured.published}>{formatBlogDate(featured.published)}</time><span>/</span><Clock3 size={13} aria-hidden="true" />{featured.readMinutes} min read</p><h2 id="featured-title"><Link href={"/blog/" + featured.slug}>{featured.title}</Link></h2><p className={styles.excerpt}>{featured.excerpt}</p><Link href={"/blog/" + featured.slug} className={styles.primaryButton}>Read the Amogham story <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </article></div></section>
      <nav className={styles.topics} aria-label="Blog topics"><div className={styles.container}><span>Explore the journal</span>{topics.map((topic) => <a href={"#" + topicId(topic)} key={topic}>{topic}</a>)}</div></nav>
      <div className={styles.articles}><div className={styles.container}>{topics.map((topic) => <section id={topicId(topic)} className={styles.topicSection} aria-labelledby={topicId(topic) + "-title"} key={topic}><header className={styles.topicHeading}><h2 id={topicId(topic) + "-title"}>{topic}</h2><span>{blogPosts.filter((post) => post.category === topic).length.toString().padStart(2, "0")} articles</span></header><div className={styles.postsGrid}>{blogPosts.filter((post) => post.category === topic).map((post) => <article className={styles.postCard} key={post.slug}><Link href={"/blog/" + post.slug} className={styles.postVisual} aria-label={post.title}><ServiceImage src={post.image} title={post.imageAlt} index={0} /></Link><div className={styles.postBody}><p className={styles.meta}><time dateTime={post.published}>{formatBlogDate(post.published)}</time><span>/</span>{post.readMinutes} min read</p><h3><Link href={"/blog/" + post.slug}>{post.title}</Link></h3><p>{post.excerpt}</p><Link href={"/blog/" + post.slug} className={styles.readLink} aria-label={"Read " + post.title}>Read the article <ArrowUpRight size={17} aria-hidden="true" /></Link></div></article>)}</div></section>)}</div></div>
      <section className={styles.localSection}><div className={styles.container}><div><p className={styles.eyebrow}>Put your ideas into practice</p><h2>Inspiration is a beginning.<br /><em>Let&apos;s take the next step.</em></h2><p>Explore our services for your home, restaurant, or commercial space.</p></div><div className={styles.localLinks}><Link href="/interior-design-visakhapatnam">Interior design in Visakhapatnam <ArrowUpRight size={17} aria-hidden="true" /></Link><Link href="/interior-design-hyderabad">Interior design in Hyderabad <ArrowUpRight size={17} aria-hidden="true" /></Link><Link href="/services">Architecture, construction &amp; all services <ArrowUpRight size={17} aria-hidden="true" /></Link><Link href="/portfolio">See the full project gallery <ArrowUpRight size={17} aria-hidden="true" /></Link></div></div></section>
      <section className={styles.cta}><p className={styles.eyebrow}>Your space could be the next story</p><h2>Ideas are better<br /><em>when they become real.</em></h2><p>Tell us what you have in mind. We will help you shape the brief.</p><Link href="/consultation" className={styles.primaryButton}>Book a free consultation <ArrowUpRight size={18} aria-hidden="true" /></Link></section>
    </main>
  );
}
