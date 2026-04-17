import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "./about.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "About Nestique Studio | Architecture & Interior Design Firm — Hyderabad, Vizag",
  description:
    "Nestique Studio was founded by Abhisheak (MTech Architecture, Creative Co-Founder) and Tulasi (Business Co-Founder). 130+ projects, 6 cities. Meet the team behind South India's most trusted architecture, interior design & construction studio.",
  keywords: [
    "Nestique Studio about",
    "best architecture firm Hyderabad",
    "interior design firm Vizag",
    "Abhisheak architect Hyderabad",
    "architecture company founders India",
    "trusted construction company Hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    title: "About Nestique Studio | Architecture & Interior Design Firm",
    description: "Founded by Abhisheak & Tulasi. 130+ projects across Hyderabad, Vizag, Vijayawada & Bangalore.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
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
        name: "Abhisheak",
        jobTitle: "Creative Co-Founder & Lead Architect",
        description: "MTech in Architecture. Leads design direction, architectural projects, and creative vision at Nestique Studio.",
        worksFor: { "@type": "Organization", name: "Nestique Studio" },
      },
      {
        "@type": "Person",
        name: "Tulasi",
        jobTitle: "Business Co-Founder",
        description: "Leads business development, client relations, and operations at Nestique Studio.",
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
        name: "Preethi",
        jobTitle: "Interior Designer",
        worksFor: { "@type": "Organization", name: "Nestique Studio" },
      },
      {
        "@type": "Person",
        name: "Prasanth",
        jobTitle: "Civil Works & Interior Manager",
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
  { icon: "🤝", title: "Trust & Transparency", desc: "Honest pricing, open communication, and no hidden surprises throughout your project." },
  { icon: "💡", title: "Creative Innovation", desc: "Every project is a canvas. We blend bold design thinking with functional, liveable spaces." },
  { icon: "👤", title: "Client-First Approach", desc: "Your vision is our brief. We listen deeply, design thoughtfully, and deliver precisely." },
  { icon: "🌿", title: "Sustainable Practices", desc: "Eco-conscious material choices and responsible building for a better environment." },
];

const founders = [
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
    name: "Tulasi",
    role: "Business Co-Founder",
    tag: "Business & Operations",
    bio: "Tulasi is the strategic engine behind Nestique Studio. She ensures every client relationship, project timeline, and financial commitment is handled with precision and care. Her drive to create seamless, hassle-free experiences is what sets Nestique Studio apart in the market.",
    color: "#4a5c6e",
    initials: "T",
    img: "/tulasi.jpg",
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
    name: "Preethi",
    role: "Interior Designer",
    dept: "Interiors",
    qual: "Interior Design Specialist",
    desc: "Transforms bare spaces into stunning, functional interiors. Expert in residential and commercial space planning, colour theory, and modular furniture.",
    color: "#c9a84c",
    initials: "P",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Prasanth",
    role: "Civil Works & Interior Manager",
    dept: "Construction & Interiors",
    qual: "Civil Works & Interior Management",
    desc: "Oversees on-site civil works and interior execution. Ensures construction quality, material compliance, and project timelines are met at every stage.",
    color: "#4a5c6e",
    initials: "P",
    img: "/prashu.jpg",
  },
];

const steps = [
  { step: "01", title: "Initial Consultation", desc: "We meet to understand your vision, budget, and timeline. No obligations — just clarity and honest advice." },
  { step: "02", title: "Design & Planning", desc: "Our architects and designers create detailed 3D renderings and floor plans tailored to your lifestyle." },
  { step: "03", title: "Construction & Execution", desc: "Certified-grade materials, skilled teams, and regular site updates keep you in full control." },
  { step: "04", title: "Handover & Move In", desc: "A thorough pre-delivery inspection ensures every detail meets our quality benchmark before you move in." },
];

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={aboutSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero Header ── */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className={styles.breadcrumb}>About Us</p>
          <h1>Built on Passion.<br />Delivered with Purpose.</h1>
          <p className={styles.headerSub}>
            Nestique Studio is a design-led architecture, interior design, and construction company.
            We believe every space — home or commercial — deserves to be beautiful, functional, and built to last.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className={styles.statsSection}>
        <div className={styles.statsInner}>
          {stats.map((s, i) => (
            <div className={styles.statItem} key={i}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Story / Mission ── */}
      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div className={styles.storyImgCol}>
            <div className={styles.storyImgBox}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Nestique Studio Team"
                className={styles.storyImg}
              />
            </div>
            <div className={styles.storyImgAccent}>
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80"
                alt="Architecture Design"
                className={styles.storyImgSmall}
              />
            </div>
          </div>
          <div className={styles.storyText}>
            <p className={styles.eyebrow}>Our Story</p>
            <h2>From a Shared Vision to Spaces that Inspire</h2>
            <p>
              Nestique Studio was founded with a simple but powerful belief — that great design should be accessible, not overwhelming. Too many families and businesses struggled with fragmented contractors, opaque pricing, and projects that dragged on forever.
            </p>
            <p>
              We set out to change that. Under one roof, we bring together architecture, interior design, and construction — managed end-to-end with complete transparency and a deep commitment to craft.
            </p>
            <p>
              Today, Nestique Studio operates across 6 major Indian cities, delivering homes, offices, and commercial spaces that stand out for their thoughtful design and quality execution.
            </p>
            <a href="/consultation" className={styles.orangeBtn}>Start Your Project</a>
          </div>
        </div>
      </section>

      {/* ── Founders ── */}
      <section className={styles.foundersSection}>
        <div className={styles.sectionCenter}>
          <p className={styles.eyebrow}>Leadership</p>
          <h2>Meet Our Co-Founders</h2>
          <p className={styles.sectionSub}>
            Two complementary minds united by one goal — to build spaces that truly matter.
          </p>
          <div className={styles.foundersGrid}>
            {founders.map((f, i) => (
              <div className={styles.founderCard} key={i}>
                <div className={styles.founderImgBox} style={{ borderColor: f.color }}>
                  <img src={f.img} alt={f.name} className={styles.founderImg} />
                  <div className={styles.founderImgGradient} />
                </div>
                <div className={styles.founderBody}>
                  <div className={styles.founderMeta}>
                    <div>
                      <h3>{f.name}</h3>
                      <p className={styles.founderRole} style={{ color: f.color }}>{f.role}</p>
                    </div>
                    <span className={styles.founderTag}>{f.tag}</span>
                  </div>
                  <p className={styles.founderBio}>{f.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionCenter}>
          <p className={styles.eyebrow}>Our Values</p>
          <h2>What We Stand For</h2>
          <p className={styles.sectionSub}>The principles behind every decision we make and every space we create.</p>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div className={styles.valueCard} key={i}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className={styles.teamSection}>
        <div className={styles.sectionCenter}>
          <p className={styles.eyebrow}>Our Team</p>
          <h2>The People Behind Your Dream Space</h2>
          <p className={styles.sectionSub}>
            Skilled professionals who bring expertise, passion, and precision to every project.
          </p>
          <div className={styles.teamGrid}>
            {team.map((m, i) => (
              <div className={styles.teamCard} key={i}>
                <div className={styles.teamImgBox}>
                  <img src={m.img} alt={m.name} className={styles.teamImg} />
                  <div className={styles.teamDeptBadge} style={{ background: m.color }}>{m.dept}</div>
                </div>
                <div className={styles.teamBody}>
                  <h3>{m.name}</h3>
                  <p className={styles.teamRole} style={{ color: m.color }}>{m.role}</p>
                  <p className={styles.teamQual}>{m.qual}</p>
                  <p className={styles.teamDesc}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.processSection}>
        <div className={styles.sectionCenter}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2>Our Step-by-Step Process</h2>
          <p className={styles.sectionSubOrange}>From first meeting to final handover — we&apos;re with you every step.</p>
          <div className={styles.processGrid}>
            {steps.map((s, i) => (
              <div className={styles.processCard} key={i}>
                <span className={styles.stepNum}>{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <h2>Let&apos;s Build Something Remarkable Together</h2>
          <p>Talk to our experts today and get a transparent quote for your dream space — home, office, or commercial.</p>
          <div className={styles.ctaBannerBtns}>
            <a href="/consultation" className={styles.ctaBtnWhite}>Book a Free Consultation</a>
            <a href="/portfolio" className={styles.ctaBtnOutline}>View Our Work</a>
          </div>
        </div>
      </section>

    </main>
  );
}
