import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { planningGuides } from "@/lib/planning-guides";
import { siteUrl } from "@/lib/services.data";
import styles from "@/app/(marketing)/blog/article.module.css";

export default function PlanningGuide({ slug }: { slug: string }) {
  const guide = planningGuides.find(item => item.slug === slug)!;
  return <main className={styles.main}>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Journal", item: `${siteUrl}/blog` }, { "@type": "ListItem", position: 3, name: guide.title, item: `${siteUrl}/blog/${slug}` }] }} />
    <header className={styles.header}><Link href="/blog" className={styles.back}>← The Nestique Journal</Link><p className={styles.eyebrow}>Planning guide</p><h1>{guide.title}</h1><p className={styles.dek}>{guide.description}</p></header>
    <div className={styles.articleLayout}><aside className={styles.contents}><p>In this guide</p><nav aria-label="Article contents">{guide.sections.map((section, index) => <a key={section.heading} href={`#section-${index}`}>{section.heading}</a>)}</nav></aside><article className={styles.prose}>{guide.sections.map((section, index) => <section key={section.heading} id={`section-${index}`}><h2>{section.heading}</h2><p>{section.text}</p></section>)}<div className={styles.projectLink}><Link href={`/services/${guide.service}`}>Explore the service scope →</Link></div></article></div>
    <section className={styles.related}><h2>Discuss your property</h2><Link href="/consultation">Start with your brief and available site information →</Link><Link href="/portfolio">Explore the existing design collection</Link></section>
  </main>;
}
