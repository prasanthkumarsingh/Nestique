import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { services, siteUrl } from "@/lib/services.data";
import { projects } from "@/components/selectedWorks.data";
import styles from "../../city-page.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  const url = `${siteUrl}/services/${slug}`;
  return { title: service.title, description: service.intro, alternates: { canonical: url }, openGraph: { title: service.title, description: service.intro, url } };
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const project = projects.find((item) => item.slug === service.project)!;
  return <main className={styles.main}>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` }, { "@type": "ListItem", position: 3, name: service.title, item: `${siteUrl}/services/${slug}` }] }} />
    <section className={styles.hero}><div className={styles.heroInner}>
      <p className={styles.breadcrumb}><Link href="/services">Services</Link> / {service.title}</p>
      <h1>{service.title}</h1><p className={styles.heroSub}>{service.intro}</p>
      <div className={styles.heroBtns}><Link href="/consultation" className={styles.heroBtn}>Discuss your project</Link><a href="tel:+917816086291" className={styles.heroBtnOutline}>Call the studio</a></div>
    </div></section>
    <section className={styles.section}><div className={styles.sectionInner}><h2>Shape the scope around your property</h2><p className={styles.sectionSub}>Start with your existing plans, photographs, site dimensions and priorities. We discuss the level of design and execution support needed before defining the appointment.</p>
      <div className={styles.servicesGrid}>{service.scope.map((item, i) => <article className={styles.serviceCard} key={item}><h3>0{i + 1}</h3><p>{item}</p></article>)}</div>
      <p className={styles.sectionSub}>The items above are topics to agree in your proposal, rather than a standard package inclusion. Confirm drawing deliverables, revisions, site visits, BOQs, procurement and execution responsibilities in writing. Structural and other specialist drawings require appropriate professional preparation and review.</p>
    </div></section>
    <section className={styles.sectionAlt}><div className={styles.sectionInner}><h2>From brief to coordinated decisions</h2><div className={styles.processGrid}>{[
      ["Brief & site information", "Share property type, city, dimensions, budget priorities and any available surveys or drawings."],
      ["Design & review", "Review layout options and the proposed direction before progressing to detailed drawings."],
      ["Define deliverables", "Agree drawings, specifications, specialist inputs and the responsibilities of each party."],
      ["Plan the next stage", "Choose design-only support or discuss execution, procurement and site coordination as a separate agreed scope."],
    ].map(([title, text]) => <article className={styles.processCard} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className={styles.section}><div className={styles.sectionInner}><h2>Cost & timeline factors</h2><p className={styles.sectionSub}>{service.factors} A meaningful estimate follows a defined brief and site review; design time and construction time should be considered separately. Confirm allowances, exclusions and change-control arrangements before work begins.</p><h2>Explore the studio’s work</h2><p className={styles.sectionSub}><Link href={`/portfolio#${project.slug}`}>{[project.title, project.subtitle].filter(Boolean).join(" ")}</Link>: {project.concept} This is a design reference from our existing portfolio, rather than evidence of every deliverable listed on this page.</p><h2>Location & site coordination</h2><p className={styles.sectionSub}>Discuss your site in <Link href="/architect-visakhapatnam">Visakhapatnam (Vizag)</Link> or <Link href="/architect-hyderabad">Hyderabad</Link>. For Bengaluru (Bangalore) and other locations, confirm service availability, site visits and execution coverage with the studio before commissioning.</p></div></section>
    <section className={styles.sectionAlt}><div className={styles.sectionInner}><h2>Before you begin</h2><div className={styles.faqList}><article className={styles.faqItem}><h3>{service.question}</h3><p>{service.answer}</p></article><article className={styles.faqItem}><h3>What should I send with my enquiry?</h3><p>Send your city, property type, approximate area, available plans, intended start date and the decisions you need help with. Avoid sending identity documents or sensitive property records in an initial enquiry.</p></article></div><h2>Related services</h2><div className={styles.areasGrid}>{services.filter((item) => item.slug !== slug).map((item) => <Link className={styles.areaBadge} href={`/services/${item.slug}`} key={item.slug}>{item.title}</Link>)}</div></div></section>
    <section className={styles.ctaBanner}><div className={styles.ctaBannerInner}><h2>Tell us about your space</h2><p>Start with the brief. We will help define the next decisions.</p><Link href="/consultation" className={styles.ctaBtnWhite}>Enquire about this service</Link></div></section>
  </main>;
}
