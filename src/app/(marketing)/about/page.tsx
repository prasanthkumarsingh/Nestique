import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Handshake, Lightbulb, HeartHandshake, Leaf, Check } from "lucide-react";
import ServiceImage from "@/components/ServiceImage";
import StudioPortrait from "@/components/StudioPortrait";
import { portfolioProjects } from "@/lib/portfolio.data";
import JsonLd from "@/components/JsonLd";
import styles from "./about.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "About Nestique Studio | Commercial Interior Design Firm in Visakhapatnam & Hyderabad",
  description:
    "Nestique Studio — commercial interior design specialists for offices, hospitals & hotels in Visakhapatnam & Hyderabad. IIT Kharagpur-trained founders, 130+ projects. Meet the team.",
  keywords: [
    "Nestique Studio about",
    "best architecture firm Hyderabad",
    "interior design firm Vizag",
    "Abhisheak architect Hyderabad",
    "IIT Kharagpur architect India",
    "architecture company founders India",
    "trusted construction company Hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    title: "About Nestique Studio | Architecture & Interior Design Firm",
    description: "Founded by Abhisheak & Tulasi. 130+ projects across Hyderabad, Vizag, Vijayawada & Bangalore.",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE_URL}/about`,
  name: "About Nestique Studio",
  description: "Nestique Studio is a premier architecture, interior design, and construction company in South India, founded by Abhisheak and Tulasi.",
  mainEntity: {
    "@type": "Organization",
    name: "Nestique Studio",
    url: SITE_URL,
    foundingDate: "2020",
    founder: [
      {
        "@type": "Person",
        name: "Tulasi",
        jobTitle: "Business Co-Founder",
        description: "Leads business development, client relations, and operations at Nestique Studio.",
        worksFor: { "@type": "Organization", name: "Nestique Studio" },
      },
      {
        "@type": "Person",
        name: "Abhisheak",
        jobTitle: "Creative Co-Founder & Lead Architect",
        description: "MTech in Architecture. Leads design direction, architectural projects, and creative vision at Nestique Studio.",
        worksFor: { "@type": "Organization", name: "Nestique Studio" },
      },
      {
        "@type": "Person",
        name: "D. Sumanth",
        jobTitle: "Visionary Co-Founder & Architect",
        description: "Academic foundation from IIT Kharagpur. Brings deep expertise in architecture and a vision for spaces that resonate with culture, context, and purposeful design.",
        worksFor: { "@type": "Organization", name: "Nestique Studio" },
      },
    ],
    employee: [
      {
        "@type": "Person",
        name: "Abhisheak",
        jobTitle: "Lead Architect",
        worksFor: { "@type": "Organization", name: "Nestique Studio" },
      },
      {
        "@type": "Person",
        name: "D. Sumanth",
        jobTitle: "Visionary Co-Founder & Architect",
        worksFor: { "@type": "Organization", name: "Nestique Studio" },
      },
      {
        "@type": "Person",
        name: "Preethi",
        jobTitle: "Interior Designer",
        worksFor: { "@type": "Organization", name: "Nestique Studio" },
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
};

const stats = [
  { num: "130+", label: "Projects Delivered" },
  { num: "220+", label: "Under Construction" },
  { num: "6", label: "Cities Served" },
  { num: "+81", label: "NPS Score" },
];

const values = [
  { icon: Handshake, title: "Trust & transparency", desc: "Open conversations, a clear scope, and considered decisions throughout your project." },
  { icon: Lightbulb, title: "Creative thinking", desc: "Ideas that respond to the space, balancing expression with everyday functionality." },
  { icon: HeartHandshake, title: "People come first", desc: "We listen to the way you live and work, then shape the design around what matters to you." },
  { icon: Leaf, title: "Responsible choices", desc: "Thoughtful material selection and an awareness of the impact of what we build." },
];

const founders = [
  {
    name: "Tulasi",
    role: "Business Co-Founder",
    tag: "Business & Operations",
    bio: "Tulasi is the strategic engine behind Nestique Studio. She ensures every client relationship, project timeline, and financial commitment is handled with precision and care. Her drive to create seamless, hassle-free experiences is what sets Nestique Studio apart in the market.",
    color: "#4a5c6e",
    initials: "T",
    img: "/tulasi.jpg",
  },
  {
    name: "Abhisheak",
    role: "Creative Co-Founder",
    tag: "MTech in Architecture",
    bio: "Abhisheak drives the creative soul of Nestique Studio. With a Master's in Architecture, he brings cutting-edge design thinking and structural expertise to every project — from intimate residential interiors to large-scale commercial builds. His philosophy: every space should tell a story.",
    color: "#e8773a",
    initials: "A",
    img: "/abhi.jpg",
  },
  {
    name: "D. Sumanth",
    role: "Visionary Co-Founder",
    tag: "Architecture · IIT Kharagpur",
    bio: "With an academic foundation from IIT Kharagpur and professional experience spanning diverse regions of India, Sumanth's journey has been shaped by a deep understanding of context, culture, and detail. This venture was founded with a vision to create spaces that go beyond aesthetics — spaces that resonate with people, reflect their lifestyles, and enhance their everyday experiences. At the core of our practice lies a commitment to craft, collaboration, and purposeful design — where every project becomes a dialogue between creativity, functionality, and emotion.",
    color: "#2d6a4f",
    initials: "S",
    img: "/coFounder2.jpeg",
  },
];

const team = [
  {
    name: "Abhisheak",
    role: "Lead Architect",
    dept: "Architecture",
    qual: "MTech in Architecture",
    desc: "Leads structural and architectural design across all projects. Specialises in modern residential design, 3D planning, and Vastu-compliant layouts.",
    color: "#e8773a",
    initials: "A",
    img: "/abhi.jpg",
  },
  {
    name: "D. Sumanth",
    role: "Visionary Co-Founder",
    dept: "Architecture",
    qual: "IIT Kharagpur",
    desc: "Brings a pan-India design perspective rooted in context, culture, and craft. Leads projects with a focus on purposeful design that resonates with people and elevates everyday experiences.",
    color: "#2d6a4f",
    initials: "S",
    img: "/coFounder2.jpeg",
  },
  {
    name: "Preethi",
    role: "Lead Interior Designer",
    dept: "Interiors",
    qual: "Interior Design Specialist",
    desc: "Transforms bare spaces into stunning, functional interiors. Expert in residential and commercial space planning, colour theory, and modular furniture.",
    color: "#c9a84c",
    initials: "P",
    img: "",
  },
];

const steps = [
  { step: "01", title: "Initial Consultation", desc: "We meet to understand your vision, budget, and timeline. No obligations — just clarity and honest advice." },
  { step: "02", title: "Design & Planning", desc: "Our architects and designers create detailed 3D renderings and floor plans tailored to your lifestyle." },
  { step: "03", title: "Construction & Execution", desc: "Certified-grade materials, skilled teams, and regular site updates keep you in full control." },
  { step: "04", title: "Handover & Move In", desc: "A thorough pre-delivery inspection ensures every detail meets our quality benchmark before you move in." },
];

export default function AboutPage() {
  const villa = portfolioProjects.find((project) => project.slug === "villa85-iconica-grand")!;
  const amogham = portfolioProjects.find((project) => project.slug === "amogham-telugu-kitchen")!;
  return (
    <main className={styles.main}>
      <JsonLd data={aboutSchema} /><JsonLd data={breadcrumbSchema} />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Meet Nestique Studio</p>
            <h1>Spaces with purpose.<br /><em>People at the heart.</em></h1>
            <p className={styles.heroDescription}>We are a design-led architecture, interior design, and construction studio. We bring ideas and execution together to create spaces that feel right for the people who use them.</p>
            <div className={styles.heroActions}><Link href="/consultation" className={styles.primaryButton}>Start a conversation <ArrowUpRight size={18} aria-hidden="true" /></Link><a href="#our-story" className={styles.textLink}>Discover our story <ArrowDown size={16} aria-hidden="true" /></a></div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroMainPhoto}><ServiceImage src={villa.photos[0].url} title="Villa85 at Iconica Grand by Nestique Studio" index={0} /><div className={styles.photoShade} /><Link href="/portfolio#villa85-iconica-grand" className={styles.heroPhotoLabel}><span>Villa85 / Iconica Grand</span><ArrowUpRight size={18} aria-hidden="true" /></Link></div>
            <div className={styles.heroInset}><ServiceImage src={amogham.photos[0].url} title="Amogham Telugu Kitchen interior by Nestique Studio" index={0} /></div>
            <span className={styles.heroSideNote}>Thoughtfully designed. Carefully brought to life.</span>
          </div>
        </div>
      </section>
      <section className={styles.statsSection} aria-label="Nestique Studio at a glance"><div className={styles.statsInner}>{stats.map((stat) => <div className={styles.statItem} key={stat.label}><strong>{stat.num}</strong><span>{stat.label}</span></div>)}</div></section>
      <section id="our-story" className={styles.storySection} aria-labelledby="story-title"><div className={styles.storyInner}>
        <div className={styles.storyHeading}><p className={styles.eyebrow}>Our story</p><h2 id="story-title">One shared vision.<br /><em>Many ways to belong.</em></h2><span className={styles.storyMark}>N<span>Architecture / Interiors / Construction</span></span></div>
        <div className={styles.storyText}><p className={styles.storyLead}>A beautiful space should feel as good to live in as it looks.</p><p>Nestique Studio began with a belief that great design should feel approachable. Building or transforming a space is personal, and the journey deserves the same thought and care as the finished result.</p><p>We bring architecture, interior design, and construction under one roof. With a shared team and a coordinated approach, we connect the early ideas with the details that make them work on site.</p><p>Today, our work spans homes, restaurants, offices, and commercial spaces. Each project starts with listening, grows through collaboration, and is shaped by the people, place, and purpose behind it.</p><Link href="/services" className={styles.textLink}>Discover what we do <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </div></section>
      <section className={styles.foundersSection} aria-labelledby="founders-title"><div className={styles.container}>
        <header className={styles.sectionHeading}><div><p className={styles.eyebrow}>The people behind the practice</p><h2 id="founders-title">Different perspectives.<br /><em>A shared purpose.</em></h2></div><p>Our co-founders bring design, business, and architectural thinking together to guide the studio and the work we create.</p></header>
        <div className={styles.foundersGrid}>{founders.map((founder, index) => <article className={styles.founderCard} key={founder.name}><div className={styles.founderPhoto}><StudioPortrait src={founder.img} name={founder.name} initials={founder.initials} /><span className={styles.founderIndex}>0{index + 1}</span></div><div className={styles.founderBody}><p className={styles.founderRole}>{founder.role}</p><h3>{founder.name}</h3><span className={styles.founderTag}>{founder.tag}</span><details className={styles.founderBio}><summary>Meet {founder.name}<span aria-hidden="true">+</span></summary><p>{founder.bio}</p></details></div></article>)}</div>
      </div></section>
      <section className={styles.valuesSection} aria-labelledby="values-title"><div className={styles.container}>
        <header className={styles.sectionHeading}><div><p className={styles.eyebrow}>The things we hold close</p><h2 id="values-title">Good design begins<br /><em>with good principles.</em></h2></div><p>These are the ideas we come back to, in our conversations, our drawings, and the decisions we make on site.</p></header>
        <div className={styles.valuesGrid}>{values.map((value) => { const Icon = value.icon; return <article className={styles.valueCard} key={value.title}><span className={styles.valueIcon}><Icon size={26} strokeWidth={1.4} aria-hidden="true" /></span><h3>{value.title}</h3><p>{value.desc}</p></article>; })}</div>
      </div></section>
      <section className={styles.teamSection} aria-labelledby="team-title"><div className={styles.container}>
        <header className={styles.sectionHeading}><div><p className={styles.eyebrow}>Working together</p><h2 id="team-title">The expertise behind<br /><em>your everyday spaces.</em></h2></div><p>Architecture and interiors work best in conversation. Our team connects the bigger picture with the details you experience every day.</p></header>
        <div className={styles.teamGrid}>{team.map((member) => <article className={styles.teamCard} key={member.name}><div className={styles.teamTop}><span className={styles.teamInitials} aria-hidden="true">{member.initials}</span><span className={styles.teamDepartment}>{member.dept}</span></div><h3>{member.name}</h3><p className={styles.teamRole}>{member.role}</p><p className={styles.teamQualification}>{member.qual}</p><p className={styles.teamDescription}>{member.desc}</p></article>)}</div>
      </div></section>
      <section className={styles.workSection} aria-labelledby="work-title"><div className={styles.workInner}>
        <div className={styles.workVisual}><ServiceImage src={amogham.photos[1].url} title="Warm materials and carefully considered dining spaces at Amogham Telugu Kitchen" index={0} /></div>
        <div className={styles.workCopy}><p className={styles.eyebrow}>Our approach, in practice</p><h2 id="work-title">Every space has a story.<br /><em>Let&apos;s find yours.</em></h2><p>From the character of Amogham Telugu Kitchen to the quiet warmth of Villa85, explore the materials, moods, and details that shape our work.</p><ul><li><Check size={16} aria-hidden="true" />Designed around a clear purpose</li><li><Check size={16} aria-hidden="true" />Considered from layout to finishing</li><li><Check size={16} aria-hidden="true" />A collaboration from the first conversation</li></ul><Link href="/portfolio" className={styles.primaryButton}>Explore our project gallery <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </div></section>
      <section className={styles.processSection} aria-labelledby="process-title"><div className={styles.container}>
        <header className={styles.sectionHeading}><div><p className={styles.eyebrow}>From first conversation to final detail</p><h2 id="process-title">A thoughtful journey.<br /><em>Every step, together.</em></h2></div><Link href="/services" className={styles.textLink}>Explore our services <ArrowUpRight size={18} aria-hidden="true" /></Link></header>
        <div className={styles.processGrid}>{steps.map((step) => <article key={step.step}><span className={styles.stepNumber}>{step.step}</span><h3>{step.title}</h3><p>{step.desc}</p></article>)}</div>
      </div></section>
      <section className={styles.cta}><p className={styles.eyebrow}>Your ideas. Our next conversation.</p><h2>Something meaningful<br /><em>starts with you.</em></h2><p>Tell us about the space you have in mind.<br />We would love to help you shape it.</p><div className={styles.ctaActions}><Link href="/consultation" className={styles.primaryButton}>Book a free consultation <ArrowUpRight size={18} aria-hidden="true" /></Link><Link href="/portfolio" className={styles.ctaLink}>View our work <ArrowUpRight size={18} aria-hidden="true" /></Link></div></section>
    </main>
  );
}
