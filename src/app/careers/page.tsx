import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import CareerForm from "../../components/CareerForm";
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
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
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
  { icon: "🚀", title: "High-Growth Environment", desc: "Work on 130+ live projects across 6 cities. Fast career progression in a company that's scaling rapidly." },
  { icon: "🎨", title: "Creative Freedom", desc: "Your ideas matter here. We encourage bold design thinking and give you the canvas to express it." },
  { icon: "🤝", title: "Collaborative Culture", desc: "A tight-knit team that supports each other. Architects, designers, and builders working as one." },
  { icon: "📍", title: "Multi-City Projects", desc: "Exposure to diverse projects across Hyderabad, Vizag, Vijayawada, Bangalore, and beyond." },
  { icon: "📈", title: "Learning & Growth", desc: "Regular training, design workshops, and mentorship from experienced architects and industry leaders." },
  { icon: "💼", title: "Competitive Package", desc: "Market-leading salary, performance bonuses, and a work environment that values your contribution." },
];

const roles = [
  {
    icon: "🏛️",
    title: "Architect",
    type: "Full-Time",
    location: "Hyderabad / Vizag",
    desc: "Lead architectural design for residential and commercial projects. BTech/MTech in Architecture. 2+ years preferred.",
  },
  {
    icon: "🛋️",
    title: "Interior Designer",
    type: "Full-Time",
    location: "Hyderabad / Vizag",
    desc: "Design functional and beautiful interiors for homes, offices & retail spaces. Strong portfolio required.",
  },
  {
    icon: "🏗️",
    title: "Civil Engineer",
    type: "Full-Time",
    location: "Hyderabad / Vizag",
    desc: "Oversee structural planning, site execution, and quality control for construction projects. BE/BTech Civil.",
  },
  {
    icon: "🖥️",
    title: "3D Visualization Artist",
    type: "Full-Time",
    location: "Remote / Hyderabad",
    desc: "Create photo-realistic renders and walkthroughs using 3ds Max, Lumion, or similar tools. Strong portfolio essential.",
  },
  {
    icon: "📋",
    title: "Project Manager",
    type: "Full-Time",
    location: "Hyderabad",
    desc: "Manage end-to-end project delivery — timelines, client coordination, vendor management, and budget tracking.",
  },
  {
    icon: "📊",
    title: "Business Development Executive",
    type: "Full-Time",
    location: "Hyderabad / Vizag",
    desc: "Drive new client acquisition, manage leads, and represent Nestique Studio at site visits and exhibitions.",
  },
];

export default function CareersPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={careersSchema} />
      {jobPostings.map((jp, i) => <JsonLd key={i} data={jp} />)}

      {/* ── Hero Header ── */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className={styles.breadcrumb}>Careers</p>
          <h1>Build Your Career.<br />Shape Inspiring Spaces.</h1>
          <p className={styles.headerSub}>
            Join Nestique Studio and work with some of the most talented architects, designers, and builders
            in South India. We&apos;re growing fast — and we want driven people to grow with us.
          </p>
        </div>
      </section>

      {/* ── Why Join ── */}
      <section className={styles.whySection}>
        <div className={styles.sectionCenter}>
          <p className={styles.eyebrow}>Why Nestique Studio</p>
          <h2>A Place Where Talent Thrives</h2>
          <p className={styles.sectionSub}>
            We believe great spaces are built by great people. Here&apos;s what you can expect when you join our team.
          </p>
          <div className={styles.perksGrid}>
            {perks.map((p, i) => (
              <div className={styles.perkCard} key={i}>
                <span className={styles.perkIcon}>{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section className={styles.rolesSection}>
        <div className={styles.sectionCenter}>
          <p className={styles.eyebrow}>Open Positions</p>
          <h2>We&apos;re Hiring</h2>
          <p className={styles.sectionSub}>
            Don&apos;t see your exact role? Apply as an open application — we always welcome great talent.
          </p>
          <div className={styles.rolesGrid}>
            {roles.map((r, i) => (
              <div className={styles.roleCard} key={i}>
                <div className={styles.roleIcon}>{r.icon}</div>
                <div className={styles.roleBody}>
                  <p className={styles.roleTitle}>{r.title}</p>
                  <div className={styles.roleMeta}>
                    <span className={styles.roleBadge}>{r.type}</span>
                    <span className={styles.roleBadgeDark}>{r.location}</span>
                  </div>
                  <p className={styles.roleDesc}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Apply Form ── */}
      <section className={styles.applySection} id="apply">
        <div className={styles.applyInner}>
          <p className={styles.eyebrow}>Apply Now</p>
          <h2>Send Us Your Application</h2>
          <p>
            Fill in the form below and our team will review your profile. We respond to every application within 5–7 business days.
          </p>
          <CareerForm />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <h2>Have Questions About Joining Us?</h2>
          <p>
            Reach out directly at{" "}
            <strong>hello@nestiquestudio.in</strong> or call us at{" "}
            <strong>+91 78160 86291</strong> — we&apos;d love to talk.
          </p>
          <a href="mailto:hello@nestiquestudio.in" className={styles.ctaBtn}>
            Email Us Directly
          </a>
        </div>
      </section>
    </main>
  );
}
