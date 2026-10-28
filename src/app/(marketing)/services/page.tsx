import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, PencilRuler, Layers3, HardHat, KeyRound } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ServiceImage from "@/components/ServiceImage";
import images from "../../../../public/images/services/supabase-manifest.json";
import { portfolioProjects } from "@/lib/portfolio.data";
import styles from "./services.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Interior Design & Civil Construction Services in Visakhapatnam & Hyderabad | Nestique Studio",
  description:
    "Complete interior design & civil construction services in Visakhapatnam and Hyderabad. Modular kitchens, false ceilings, home interiors, house construction, villa construction, office fit-outs, renovation. Free consultation available.",
  keywords: [
    // Interior Vizag
    "interior design services Visakhapatnam",
    "modular kitchen design Visakhapatnam",
    "false ceiling design Visakhapatnam",
    "home interior design Vizag",
    "bedroom interior Visakhapatnam",
    "wardrobe design Vizag",
    "living room interior design Vizag",
    "bathroom interior design Visakhapatnam",
    // Civil Vizag
    "civil construction services Visakhapatnam",
    "residential construction Vizag",
    "house construction Visakhapatnam",
    "villa construction Vizag",
    "civil contractor services Vizag",
    // Interior Hyderabad
    "interior design services Hyderabad",
    "modular kitchen design Hyderabad",
    "false ceiling Hyderabad",
    "home interior design Hyderabad",
    "office interior design Hyderabad",
    "apartment interior Hyderabad",
    "turnkey interior design Hyderabad",
    // Civil Hyderabad
    "civil construction services Hyderabad",
    "residential construction Hyderabad",
    "house construction Hyderabad",
    "villa construction Hyderabad",
    "construction cost per sqft Hyderabad",
    "home renovation Hyderabad",
    "construction company AP Telangana",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services`,
    title: "Architecture, Interior Design & Construction Services | Nestique Studio",
    description:
      "Complete architecture, interior design & construction services across Hyderabad, Vizag & Bangalore. Packages from ₹1,800/sq ft.",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};


const services = [
  { slug: "interior-design", title: "Interior Design", label: "Spaces that feel like you", image: images.interior, icon: 0, description: "Interiors shaped around daily life. We bring layout, materials, furniture, and lighting together to create spaces that are comfortable, practical, and personal.", points: ["Living rooms & bedrooms", "Modular kitchens & wardrobes", "Lighting & ceiling design", "Commercial & hospitality interiors"] },
  { slug: "residential-construction", title: "Residential Construction", label: "A place to call your own", image: images.residential, icon: 1, description: "From an independent home to a villa or apartment building, we coordinate the construction journey with attention to the structure, finishes, and details you live with.", points: ["Independent homes & villas", "Structural & civil works", "Materials & site coordination", "Finishing & handover"] },
  { slug: "commercial-construction", title: "Commercial Construction", label: "Built for the way you work", image: images.commercial, icon: 2, description: "Purposeful commercial spaces that support your business. We consider how people move, how teams operate, and how a building can serve its users well.", points: ["Offices & retail spaces", "Hospitality & showrooms", "Building services coordination", "Construction & site supervision"] },
  { slug: "architecture", title: "Architecture & Design", label: "Good spaces begin with a plan", image: images.architecture, icon: 3, description: "A clear design direction, grounded in the needs of your site. We develop the plans, elevations, and visualisations that turn your ideas into a coordinated brief for execution.", points: ["Site & space planning", "Floor plans & elevations", "Structural drawings", "3D views & design development"] },
  { slug: "renovation", title: "Renovation & Remodelling", label: "A fresh chapter for your space", image: images.renovation, icon: 4, description: "Make more of the space you already have. From a focused kitchen update to a full interior transformation, we plan changes around the existing building and your priorities.", points: ["Home & office makeovers", "Kitchen & bathroom upgrades", "Flooring & finish renewal", "Civil repairs & alterations"] },
  { slug: "landscape", title: "Landscape Design", label: "Room to breathe, outdoors", image: images.landscape, icon: 5, description: "Outdoor spaces that feel like a natural extension of your home. We combine planting, materials, circulation, and lighting for gardens and terraces that invite you to stay.", points: ["Gardens & courtyards", "Terraces & balconies", "Pathways & outdoor seating", "Planting & landscape lighting"] },
  { slug: "builders", title: "Builders & Development", label: "The bigger picture, thoughtfully built", image: images.builders, icon: 6, description: "A coordinated approach to larger residential and commercial developments. We connect architectural planning with construction and project management, from early concepts to the final details.", points: ["Villas & apartment buildings", "Residential developments", "Commercial complexes", "Project coordination & turnkey delivery"] },
];

const stages = [
  { icon: PencilRuler, name: "Listen & understand", description: "We discuss your site, lifestyle or business needs, priorities, and budget." },
  { icon: Layers3, name: "Design & define", description: "Layouts, materials, and the scope of work come together before execution." },
  { icon: HardHat, name: "Coordinate & build", description: "Our team coordinates the site work and shares progress as your space takes shape." },
  { icon: KeyRound, name: "Review & hand over", description: "We review the agreed scope and finishing details together before handover." },
];
const packages = [
  { name: "Standard", note: "The essentials, considered.", description: "A practical starting point for a clear, functional build.", features: ["Design consultation", "Structure & civil works", "Flooring, doors & windows", "Plumbing, electrical & painting"] },
  { name: "Premium", note: "More room for expression.", description: "Custom design choices and a more detailed finishing scope.", features: ["Custom design development", "Structure & civil works", "Flooring, doors & windows", "Plumbing, electrical & painting", "Railing & handrails"] },
  { name: "Luxury", note: "A more individual approach.", description: "A broader design scope with attention to indoor and outdoor living.", features: ["Premium design development", "Structure & civil works", "Flooring, doors & windows", "Plumbing, electrical & painting", "Railing, handrails & landscape"] },
];
const questions = [
  { question: "Can I engage you for design only?", answer: "Yes. We offer architectural planning and interior design as well as construction and execution. We can discuss the level of support your project needs during the consultation." },
  { question: "Do you work on both homes and commercial spaces?", answer: "Yes. Our services cover residential interiors and construction, as well as offices, restaurants, retail, and other commercial projects. You can explore examples in our project gallery." },
  { question: "How is the project cost worked out?", answer: "Cost depends on the site, built-up area, design scope, materials, and finishes. After discussing your brief, we define the proposed scope and prepare an estimate for your review." },
  { question: "What should I bring to the first consultation?", answer: "Bring any available floor plans or site dimensions, photos of the existing space, your preferred style, and an approximate budget. If you are just getting started, we can help you work through the brief." },
];
const servicesSchema = { "@context": "https://schema.org", "@type": "ItemList", name: "Nestique Studio Services", numberOfItems: services.length, itemListElement: services.map((service, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Service", name: service.title, description: service.description, url: SITE_URL + "/services#" + service.slug, provider: { "@type": "Organization", name: "Nestique Studio" } } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Services", item: SITE_URL + "/services" }] };

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={servicesSchema} /><JsonLd data={breadcrumbSchema} />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Architecture / Interiors / Construction</p>
            <h1>Thoughtful spaces.<br /><span>From the ground up.</span></h1>
            <p className={styles.heroDescription}>One studio for the whole journey. We bring design, architecture, and construction together to create spaces that work beautifully for the people in them.</p>
            <div className={styles.heroActions}><Link href="/consultation" className={styles.primaryButton}>Let&apos;s discuss your project <ArrowUpRight size={18} aria-hidden="true" /></Link><a href="#our-services" className={styles.textLink}>Explore our services <ArrowDown size={16} aria-hidden="true" /></a></div>
            <div className={styles.heroDetails}><span>Homes &amp; commercial spaces</span><span>Design through handover</span></div>
          </div>
          <div className={styles.heroVisual}>
            <ServiceImage src={portfolioProjects[2].photos[0].url} title="Villa85 at Iconica Grand, a Nestique Studio residential interior" index={0} />
            <div className={styles.imageShade} />
            <Link href="/portfolio#villa85-iconica-grand" className={styles.heroCaption}><span><small>A closer look at our work</small><strong>Villa85 / Iconica Grand</strong></span><ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <nav className={styles.serviceNav} aria-label="Explore services"><div>{services.map((service, index) => <a href={"#" + service.slug} key={service.slug}><span>{String(index + 1).padStart(2, "0")}</span>{service.title}</a>)}</div></nav>
      <section id="our-services" className={styles.servicesSection} aria-labelledby="services-title">
        <div className={styles.container}>
          <header className={styles.sectionHeading}><div><p className={styles.eyebrow}>What we can do for you</p><h2 id="services-title">Every space starts<br />with <em>a possibility.</em></h2></div><p>Whether you are building something new or rethinking a familiar space, choose the support that fits your project.</p></header>
          <div className={styles.servicesGrid}>{services.map((service, index) => <article id={service.slug} className={styles.serviceCard} key={service.slug}>
            <div className={styles.serviceVisual}><ServiceImage src={service.image} title={service.title + " concept illustration"} index={service.icon} /><span className={styles.serviceNumber}>{String(index + 1).padStart(2, "0")}</span></div>
            <div className={styles.serviceBody}><p className={styles.serviceLabel}>{service.label}</p><h3>{service.title}</h3><p className={styles.serviceDescription}>{service.description}</p><ul>{service.points.map((point) => <li key={point}><Check size={15} aria-hidden="true" />{point}</li>)}</ul><Link href="/consultation" className={styles.serviceLink}>Discuss this service <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
          </article>)}</div>
        </div>
      </section>
      <section className={styles.processSection} aria-labelledby="process-title"><div className={styles.container}>
        <header className={styles.sectionHeading}><div><p className={styles.eyebrow}>The way we work</p><h2 id="process-title">A clear path.<br /><em>A shared vision.</em></h2></div><p>A considered process keeps the design and the decisions connected, from your first conversation to the final review.</p></header>
        <div className={styles.processGrid}>{stages.map((stage, index) => { const Icon = stage.icon; return <article key={stage.name}><div className={styles.stageTop}><Icon strokeWidth={1.4} size={28} aria-hidden="true" /><span>0{index + 1}</span></div><h3>{stage.name}</h3><p>{stage.description}</p></article>; })}</div>
      </div></section>
      <section className={styles.workSection} aria-labelledby="work-title"><div className={styles.container}>
        <header className={styles.sectionHeading}><div><p className={styles.eyebrow}>From our portfolio</p><h2 id="work-title">See the thinking<br /><em>come to life.</em></h2></div><Link href="/portfolio" className={styles.textLink}>Explore all projects <ArrowUpRight size={18} aria-hidden="true" /></Link></header>
        <div className={styles.workGrid}>{portfolioProjects.slice(0, 3).map((project) => <Link href={"/portfolio#" + project.slug} className={styles.workCard} key={project.slug}><div className={styles.workVisual}><ServiceImage src={project.photos[0].url} title={project.name} index={0} /></div><div className={styles.workCaption}><div><p>{project.category}</p><h3>{project.name}</h3><span>{project.subtitle}</span></div><ArrowUpRight size={20} aria-hidden="true" /></div></Link>)}</div>
      </div></section>
      <section className={styles.packagesSection} aria-labelledby="packages-title"><div className={styles.container}>
        <header className={styles.sectionHeading}><div><p className={styles.eyebrow}>Construction packages</p><h2 id="packages-title">Different needs.<br /><em>The same attention.</em></h2></div><p>Use these packages as a starting point. We will confirm materials, specifications, and pricing around your site and agreed scope.</p></header>
        <div className={styles.packagesGrid}>{packages.map((pkg, index) => <article className={styles.packageCard} data-featured={index === 1} key={pkg.name}><p className={styles.packageIndex}>0{index + 1} / {pkg.note}</p><h3>{pkg.name}</h3><p className={styles.packageDescription}>{pkg.description}</p><ul>{pkg.features.map((feature) => <li key={feature}><Check size={16} aria-hidden="true" />{feature}</li>)}</ul><Link href="/consultation" className={index === 1 ? styles.primaryButton : styles.outlineButton}>Request an estimate <ArrowUpRight size={17} aria-hidden="true" /></Link></article>)}</div>
      </div></section>
      <section className={styles.faqSection} aria-labelledby="faq-title"><div className={styles.faqInner}><div><p className={styles.eyebrow}>Before we begin</p><h2 id="faq-title">A few things<br /><em>you may be wondering.</em></h2></div><div className={styles.questions}>{questions.map((question) => <details key={question.question}><summary>{question.question}<span aria-hidden="true">+</span></summary><p>{question.answer}</p></details>)}</div></div></section>
      <section className={styles.cta}><div><p className={styles.eyebrow}>Let&apos;s start with a conversation</p><h2>Your next chapter.<br /><em>Thoughtfully designed.</em></h2><p>Tell us about your space, your ideas, and what matters to you.<br />We will help you find a way forward.</p><Link href="/consultation" className={styles.primaryButton}>Book a free consultation <ArrowUpRight size={18} aria-hidden="true" /></Link></div></section>
    </main>
  );
}
