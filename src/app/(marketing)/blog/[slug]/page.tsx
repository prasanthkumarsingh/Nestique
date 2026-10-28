import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ServiceImage from "@/components/ServiceImage";
import { blogPosts, formatBlogDate, BLOG_SITE_URL as SITE_URL } from "@/lib/blog.data";
import styles from "../article.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return blogPosts.filter((post) => post.sections).map((post) => ({ slug: post.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const post = blogPosts.find((entry) => entry.slug === slug && entry.sections); if (!post) notFound();
  const url = SITE_URL + "/blog/" + post.slug;
  return { title: { absolute: post.title + " | Nestique Studio" }, description: post.excerpt, alternates: { canonical: url }, authors: [{ name: "Nestique Studio", url: SITE_URL + "/about" }], openGraph: { type: "article", url, title: post.title, description: post.excerpt, publishedTime: post.published + "T09:00:00+05:30", authors: [SITE_URL + "/about"], images: [{ url: post.image, alt: post.imageAlt }] }, twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [post.image] } };
}
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params; const post = blogPosts.find((entry) => entry.slug === slug && entry.sections); if (!post) notFound();
  const url = SITE_URL + "/blog/" + post.slug;
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": "BlogPosting", "@id": url + "#article", headline: post.title, description: post.excerpt, image: [post.image], datePublished: post.published + "T09:00:00+05:30", inLanguage: "en-IN", author: { "@type": "Organization", name: "Nestique Studio", url: SITE_URL + "/about" }, publisher: { "@type": "Organization", name: "Nestique Studio", url: SITE_URL }, mainEntityOfPage: { "@type": "WebPage", "@id": url }, articleSection: post.category }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Blog", item: SITE_URL + "/blog" }, { "@type": "ListItem", position: 3, name: post.title, item: url }] }] };
  return <main className={styles.main}><JsonLd data={schema} /><header className={styles.header}><Link href="/blog" className={styles.back}><ArrowLeft size={15} aria-hidden="true" />The Nestique Journal</Link><p className={styles.eyebrow}>{post.category}</p><h1>{post.title}</h1><p className={styles.dek}>{post.excerpt}</p><div className={styles.meta}><Link href="/about">By Nestique Studio</Link><time dateTime={post.published}>{formatBlogDate(post.published)}</time><span><Clock3 size={13} aria-hidden="true" />{post.readMinutes} min read</span></div></header><div className={styles.cover}><ServiceImage src={post.image} title={post.imageAlt} index={0} priority /></div><div className={styles.articleLayout}><aside className={styles.contents}><p>In this story</p><nav aria-label="Article contents">{post.sections!.map((section) => <a href={"#" + section.id} key={section.id}>{section.heading}</a>)}</nav></aside><article className={styles.prose}>{post.sections!.map((section) => <section id={section.id} key={section.id}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.checklist && <ul>{section.checklist.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}<div className={styles.projectLink}><p>See more of the space</p><Link href={"/portfolio#" + post.projectSlug}>Explore the full project gallery <ArrowUpRight size={18} aria-hidden="true" /></Link></div><div className={styles.author}><strong>From the Nestique Studio team</strong><p>Architecture, interior design, and construction for homes and commercial spaces.</p><Link href="/about">Meet the studio</Link></div></article></div><section className={styles.related}><h2>Keep exploring</h2><div>{blogPosts.filter((entry) => entry.slug !== post.slug && entry.sections).slice(0,2).map((entry) => <Link href={"/blog/" + entry.slug} key={entry.slug}>{entry.title}<ArrowUpRight size={18} aria-hidden="true" /></Link>)}</div><Link href="/services#interior-design">Explore our interior design services</Link><Link href="/consultation">Discuss your project with Nestique Studio</Link></section></main>;
}
