import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, PencilRuler, Armchair, HardHat, Monitor, ClipboardList, ChartNoAxesCombined, Lightbulb, Users, MapPin, Sprout, BriefcaseBusiness, Layers3, Clock3, Mail, Phone, Check } from "lucide-react";
import ServiceImage from "@/components/ServiceImage";
import { portfolioProjects } from "@/lib/portfolio.data";
import JsonLd from "@/components/JsonLd";
import CareerForm from "@/components/CareerForm";
import styles from "./careers.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Careers at Nestique Studio | Architecture & Interior Design Jobs — Hyderabad, Vizag",
  description:
    "Join Nestique Studio — one of South India's fastest-growing architecture, interior design & construction firms. We're hiring Architects, Interior Designers, Civil Engineers, 3D Artists & more. Apply now.",
  keywords: [
    "architecture jobs Hyderabad",
    "interior design jobs Vizag",
    "architect jobs Visakhapatnam",
    "civil engineer jobs Hyderabad",
    "3D visualization artist jobs India",
    "interior designer jobs India",
    "careers in architecture India",
    "Nestique Studio careers",
    "design firm jobs South India",
    "architecture firm hiring Hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/careers`,
    title: "Careers at Nestique Studio | Architecture & Interior Design Jobs",
    description:
      "Join our team of architects, designers & builders. Shape inspiring spaces across South India. View open roles and apply today.",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

const careersSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: `${SITE_URL}/careers`,
  name: "Careers at Nestique Studio",
  description:
    "Explore career opportunities at Nestique Studio — architecture, interior design and construction firm in South India.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}/careers` },
    ],
  },
};

const jobPostings = [
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Architect",
    description:
      "Design and oversee residential, commercial, and institutional architecture projects. MTech/BTech in Architecture required.",
    hiringOrganization: { "@type": "Organization", name: "Nestique Studio", sameAs: SITE_URL },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" } },
    employmentType: "FULL_TIME",
    datePosted: "2025-01-01",
    validThrough: "2026-12-31",
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Interior Designer",
    description:
      "Create stunning residential and commercial interiors. Expertise in space planning, colour theory, and modular furniture required.",
    hiringOrganization: { "@type": "Organization", name: "Nestique Studio", sameAs: SITE_URL },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Visakhapatnam", addressCountry: "IN" } },
    employmentType: "FULL_TIME",
    datePosted: "2025-01-01",
    validThrough: "2026-12-31",
  },
];

const perks = [
  { icon: Layers3, title: "Work with variety", desc: "Build your experience across residential, hospitality, and commercial projects." },
  { icon: Lightbulb, title: "Make space for ideas", desc: "Bring your perspective to the table and contribute to thoughtful, practical design." },
  { icon: Users, title: "Create together", desc: "Collaborate with architects, interior designers, and site teams throughout the project." },
  { icon: MapPin, title: "Explore different contexts", desc: "Work on projects across Hyderabad, Visakhapatnam, and other cities we serve." },
  { icon: Sprout, title: "Keep learning", desc: "Develop your craft through hands-on project experience and collaboration with experienced colleagues." },
  { icon: BriefcaseBusiness, title: "Bring your ambition", desc: "Take ownership of your work and discuss a role and package that reflect your contribution." },
];

const roles = [
  {
    icon: PencilRuler,
    title: "Architect",
    type: "Full-Time",
    location: "Hyderabad / Vizag",
    desc: "Lead architectural design for residential and commercial projects. BTech/MTech in Architecture. 2+ years preferred.",
  },
  {
    icon: Armchair,
    title: "Interior Designer",
    type: "Full-Time",
    location: "Hyderabad / Vizag",
    desc: "Design functional and beautiful interiors for homes, offices & retail spaces. Strong portfolio required.",
  },
  {
    icon: HardHat,
    title: "Civil Engineer",
    type: "Full-Time",
    location: "Hyderabad / Vizag",
    desc: "Oversee structural planning, site execution, and quality control for construction projects. BE/BTech Civil.",
  },
  {
    icon: Monitor,
    title: "3D Visualization Artist",
    type: "Full-Time",
    location: "Remote / Hyderabad",
    desc: "Create photo-realistic renders and walkthroughs using 3ds Max, Lumion, or similar tools. Strong portfolio essential.",
  },
  {
    icon: ClipboardList,
    title: "Project Manager",
    type: "Full-Time",
    location: "Hyderabad",
    desc: "Manage end-to-end project delivery — timelines, client coordination, vendor management, and budget tracking.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Business Development Executive",
    type: "Full-Time",
    location: "Hyderabad / Vizag",
    desc: "Drive new client acquisition, manage leads, and represent Nestique Studio at site visits and exhibitions.",
  },
];

export default function CareersPage() {
  const project = portfolioProjects.find((item) => item.slug === "amogham-telugu-kitchen")!;
  return (
    <main className={styles.main}>
      <JsonLd data={careersSchema} />
      {jobPostings.map((posting) => <JsonLd key={posting.title} data={posting} />)}
      <section className={styles.hero}><div className={styles.heroInner}>
        <div className={styles.heroCopy}><p className={styles.eyebrow}>Careers at Nestique Studio</p><h1>Do work that matters.<br /><em>Make space for more.</em></h1><p className={styles.heroDescription}>Bring your curiosity, your craft, and your point of view. Join a studio where architecture, interiors, and construction come together to shape the spaces people live and work in.</p><div className={styles.heroActions}><a href="#open-roles" className={styles.primaryButton}>Explore open roles <ArrowDown size={17} aria-hidden="true" /></a><a href="#apply" className={styles.textLink}>Introduce yourself <ArrowUpRight size={17} aria-hidden="true" /></a></div><div className={styles.heroTags}><span>Architecture</span><span>Interiors</span><span>Construction</span></div></div>
        <div className={styles.heroVisual}><ServiceImage src={project.photos[0].url} title="Amogham Telugu Kitchen, a Nestique Studio interior design project" index={0} /><div className={styles.imageShade} /><Link href="/portfolio#amogham-telugu-kitchen" className={styles.heroCaption}><span><small>The kind of work you could help shape</small><strong>Amogham / Telugu Kitchen</strong></span><ArrowUpRight aria-hidden="true" size={20} /></Link></div>
      </div></section>
      <section className={styles.cultureSection} aria-labelledby="culture-title"><div className={styles.container}>
        <header className={styles.sectionHeading}><div><p className={styles.eyebrow}>Life at Nestique</p><h2 id="culture-title">A place for good people.<br /><em>And even better ideas.</em></h2></div><p>We believe the way we work together matters as much as what we create. Bring your strengths, learn from others, and help move each project forward.</p></header>
        <div className={styles.perksGrid}>{perks.map((perk) => { const Icon = perk.icon; return <article className={styles.perkCard} key={perk.title}><span className={styles.perkIcon}><Icon size={25} strokeWidth={1.4} aria-hidden="true" /></span><h3>{perk.title}</h3><p>{perk.desc}</p></article>; })}</div>
      </div></section>
      <section id="open-roles" className={styles.rolesSection} aria-labelledby="roles-title"><div className={styles.container}>
        <header className={styles.sectionHeading}><div><p className={styles.eyebrow}>Find your next chapter</p><h2 id="roles-title">Your perspective.<br /><em>Our next possibility.</em></h2></div><p>Explore the roles below. If your experience sits between disciplines, we would still love to hear from you through an open application.</p></header>
        <div className={styles.rolesList}>{roles.map((role, index) => { const Icon = role.icon; return <article className={styles.roleCard} key={role.title}><span className={styles.roleIcon}><Icon size={24} strokeWidth={1.5} aria-hidden="true" /></span><div className={styles.roleBody}><p className={styles.roleIndex}>Opportunity {String(index + 1).padStart(2, "0")}</p><h3>{role.title}</h3><p className={styles.roleDescription}>{role.desc}</p><div className={styles.roleMeta}><span><MapPin size={13} aria-hidden="true" />{role.location}</span><span><Clock3 size={13} aria-hidden="true" />{role.type}</span></div></div><a href="#apply" className={styles.applyLink} aria-label={"Apply for " + role.title}>Apply <ArrowUpRight size={18} aria-hidden="true" /></a></article>; })}</div>
        <div className={styles.openApplication}><span>Don&apos;t see your exact role? There may still be a place for you here.</span><a href="#apply">Send an open application <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </div></section>
      <section className={styles.journeySection} aria-labelledby="journey-title"><div className={styles.container}><header className={styles.sectionHeading}><div><p className={styles.eyebrow}>A simple place to start</p><h2 id="journey-title">Tell us your story.<br /><em>Show us your thinking.</em></h2></div><p>Help us get to know the person behind the portfolio and the experience you would bring to the studio.</p></header><div className={styles.journeyGrid}>{[{title: "Choose your direction", text: "Select a role that fits your experience, or choose an open application."},{title: "Share your work", text: "Add your portfolio, LinkedIn, or Behance link so we can explore your experience."},{title: "Introduce yourself", text: "Use the cover note to tell us about your interests and the work you want to do next."}].map((step,index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>
      <section id="apply" className={styles.applySection} aria-labelledby="apply-title"><div className={styles.applyInner}>
        <aside className={styles.applyIntro}><p className={styles.eyebrow}>Your next step starts here</p><h2 id="apply-title">A little about you.<br /><em>A lot of potential.</em></h2><p>Share your details and the work you are proud of. Our team will review your application and learn more about where you could fit in.</p><ul><li><Check size={16} aria-hidden="true" />Choose a role or an open application</li><li><Check size={16} aria-hidden="true" />Include a link to your portfolio or profile</li><li><Check size={16} aria-hidden="true" />Tell us what you would like to create next</li></ul><div className={styles.applyNote}><Mail size={20} strokeWidth={1.4} aria-hidden="true" /><p>Have a question before applying?<br /><a href="mailto:hello@nestiquestudio.in">hello@nestiquestudio.in</a></p></div></aside>
        <div className={styles.formPanel}><header><h3>Send your application</h3><p>Fields marked with * are required.</p></header><CareerForm /></div>
      </div></section>
      <section className={styles.contactSection}><div><p className={styles.eyebrow}>Let&apos;s keep the conversation going</p><h2>Good work starts<br /><em>with a connection.</em></h2><p>Questions about a role or life at the studio? Reach out to us.</p><div className={styles.contactLinks}><a href="mailto:hello@nestiquestudio.in"><Mail size={17} aria-hidden="true" />hello@nestiquestudio.in</a><a href="tel:+917816086291"><Phone size={17} aria-hidden="true" />+91 78160 86291</a></div><Link href="/about" className={styles.contactAbout}>Get to know the studio <ArrowUpRight size={18} aria-hidden="true" /></Link></div></section>
    </main>
  );
}
