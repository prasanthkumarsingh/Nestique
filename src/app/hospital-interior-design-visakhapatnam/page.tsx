import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import styles from "../city-page.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Hospital Interior Design in Visakhapatnam | Healthcare & Clinic Interiors — Nestique Studio",
  description:
    "Specialist hospital and healthcare interior design in Visakhapatnam. Nestique Studio designs hospitals, clinics, diagnostic centres & pharmacies in Vizag to NABH and safety standards. Free consultation: hello@nestiquestudio.in",
  keywords: [
    "hospital interior design Visakhapatnam",
    "healthcare interior design Vizag",
    "clinic interior design Visakhapatnam",
    "hospital design Vizag",
    "diagnostic centre interior design Visakhapatnam",
    "medical interior designer Vizag",
    "hospital renovation Visakhapatnam",
    "NABH compliant hospital design Vizag",
    "pharmacy interior design Visakhapatnam",
    "hospital interior design cost Vizag",
    "healthcare architecture Visakhapatnam",
    "hospital fit-out Vizag",
  ],
  alternates: { canonical: `${SITE_URL}/hospital-interior-design-visakhapatnam` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/hospital-interior-design-visakhapatnam`,
    title: "Hospital Interior Design in Visakhapatnam | Nestique Studio",
    description:
      "Specialist hospital & healthcare interior design in Visakhapatnam. NABH-aware design for hospitals, clinics, diagnostic centres & pharmacies in Vizag.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Interior Design in Visakhapatnam | Nestique Studio",
    description: "Specialist hospital & healthcare interior design in Visakhapatnam. Clinics, diagnostic centres & pharmacies.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InteriorDesigner"],
  name: "Nestique Studio — Hospital Interior Design Visakhapatnam",
  url: `${SITE_URL}/hospital-interior-design-visakhapatnam`,
  telephone: "+917816086291",
  email: "hello@nestiquestudio.in",
  description:
    "Specialist healthcare interior design in Visakhapatnam — hospitals, clinics, diagnostic centres, pharmacies, and medical offices designed to NABH guidelines.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.6868, longitude: 83.2185 },
  areaServed: ["Visakhapatnam", "Vizag", "Gajuwaka", "MVP Colony", "Dwaraka Nagar"],
  priceRange: "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does hospital interior design cost in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hospital and healthcare interior design in Visakhapatnam typically costs ₹1,500–₹4,000 per sq ft depending on the facility type, clinical requirements, and finish specification. A 2,000 sq ft clinic or diagnostic centre can range from ₹30–80 lakhs. Nestique Studio provides a detailed scope-based quote after a free site consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you design NABH-compliant hospitals in Visakhapatnam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio's healthcare interior designs in Visakhapatnam are developed with NABH accreditation requirements in mind — including zone segregation, infection control surfaces, patient flow planning, accessibility standards, and clinical area specifications. We work closely with your clinical consultants throughout the design process.",
      },
    },
    {
      "@type": "Question",
      name: "What types of healthcare facilities do you design in Vizag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We design hospitals (single-specialty and multi-specialty), polyclinics, diagnostic and imaging centres, dental clinics, physiotherapy centres, IVF and fertility clinics, pharmacies, medical offices, and day-surgery centres across Visakhapatnam.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle infection control in hospital interior design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Infection control is at the core of all our hospital interior designs in Visakhapatnam. We specify antimicrobial surfaces for all clinical touch points, design seamless flooring without grout lines in OT and ICU areas, plan HEPA-compatible false ceiling systems, and specify copper-ion door hardware in high-traffic zones. All material choices are submitted to your infection control team for approval.",
      },
    },
    {
      "@type": "Question",
      name: "Can you manage the full build for a hospital interior project in Vizag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nestique Studio offers full turnkey design-and-build for hospital interior projects in Visakhapatnam — from architectural drawings and clinical layout planning through to civil fit-out, medical gas coordination, electrical, HVAC, and medical equipment placement planning. One team, one contract, full accountability.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "Hospital Interior Design Visakhapatnam", item: `${SITE_URL}/hospital-interior-design-visakhapatnam` },
  ],
};

const services = [
  { icon: "🏥", title: "Hospital Interior Design", desc: "Complete interior design for multi-specialty and single-specialty hospitals in Visakhapatnam — OPD zones, inpatient wards, ICU, OT suites, emergency departments, and public areas. Designed for clinical efficiency, patient dignity, and NABH compliance." },
  { icon: "🩺", title: "Clinic & Polyclinic Interiors", desc: "Modern, welcoming clinic interiors for GPs, specialists, and multi-doctor polyclinics in Vizag. Consultation rooms, waiting areas, nurse stations, minor procedure rooms, and diagnostic zones — designed for patient comfort and clinical workflow." },
  { icon: "🔬", title: "Diagnostic & Imaging Centre Design", desc: "Specialist interior design for diagnostic centres in Visakhapatnam — radiology suites (X-ray, CT, MRI), pathology labs, sample collection zones, and patient waiting areas. We coordinate with equipment vendors for precise room shielding and layout." },
  { icon: "🦷", title: "Dental & Specialty Clinic Design", desc: "Premium dental clinic and specialty clinic interiors for Vizag practices. Ergonomic dental bay layouts, sterile zones, patient recovery areas, and branded reception design that builds patient confidence from the first visit." },
  { icon: "💊", title: "Pharmacy & Medical Retail Design", desc: "Modern pharmacy and medical retail interiors in Visakhapatnam — display shelving, dispensing counters, consultation areas, cold-chain storage, and patient-facing branding that communicates trust and professionalism." },
  { icon: "🏗️", title: "Hospital Renovation & Expansion", desc: "Renovation and expansion of existing healthcare facilities in Vizag — updating OT suites, expanding OPD capacity, modernising inpatient wards, and upgrading public areas — executed with minimal disruption to ongoing clinical operations." },
];

const whyUs = [
  { icon: "🏥", title: "Healthcare-Specific Design Expertise", desc: "Healthcare interiors require far more than aesthetic knowledge — infection control, clinical workflow, patient psychology, and regulatory compliance are all in play. Our Vizag team has deep experience in all four." },
  { icon: "📐", title: "IIT Kharagpur Technical Foundation", desc: "Our IIT Kharagpur-trained architects bring structural and MEP coordination expertise critical to hospital projects — where getting it right the first time is non-negotiable." },
  { icon: "🤝", title: "Collaborative Clinical Process", desc: "We work alongside your medical directors, infection control teams, and equipment suppliers throughout the design process in Visakhapatnam. Clinical input shapes every design decision." },
  { icon: "⏱️", title: "Phased Delivery — No Operational Downtime", desc: "Hospitals cannot stop. Our Vizag project teams are trained to execute healthcare renovations and expansions in phases — keeping critical departments running throughout the project." },
];

const areas = [
  "MVP Colony", "Dwaraka Nagar", "Gajuwaka", "Steel Plant Area",
  "Madhurawada", "Rushikonda", "Seethammadhara", "Bheemunipatnam",
  "Kommadi", "Vizag City Centre", "Pendurthi",
];

export default function HospitalInteriorVizagPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.breadcrumb}>Hospital Interior Design · Visakhapatnam</p>
          <h1>Hospital &amp; Healthcare Interior Design<br />in Visakhapatnam</h1>
          <p className={styles.heroSub}>
            Nestique Studio — specialist healthcare interior designers in Visakhapatnam. Hospitals, clinics,
            diagnostic centres & pharmacies designed for clinical excellence, patient wellbeing, and NABH compliance.
          </p>
          <div className={styles.heroBtns}>
            <a href="/consultation" className={styles.heroBtn}>Get a Free Consultation</a>
            <a href="mailto:hello@nestiquestudio.in" className={styles.heroBtnOutline}>hello@nestiquestudio.in</a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className={styles.statsBar}>
        <div className={styles.statsBarInner}>
          <div className={styles.statItem}><span className={styles.statNum}>130+</span><span className={styles.statLabel}>Commercial Projects</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>NABH</span><span className={styles.statLabel}>Aware Design</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>IIT</span><span className={styles.statLabel}>Kharagpur Trained</span></div>
          <div className={styles.statItem}><span className={styles.statNum}>+81</span><span className={styles.statLabel}>NPS Score</span></div>
        </div>
      </div>

      {/* ── About ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Healthcare by Design</p>
          <h2>Hospital Interiors That Heal — By Design</h2>
          <p className={styles.sectionSub}>
            Evidence-based design research has proven that the physical environment of a healthcare facility directly affects patient outcomes, recovery times, staff stress levels, and infection rates. At Nestique Studio, we design hospital and healthcare interiors in Visakhapatnam that take this evidence seriously. Every spatial decision — from the colour palette of a patient ward to the flow of a diagnostic centre&apos;s waiting area — is driven by clinical insight, infection control principles, and a deep empathy for the patient experience.
          </p>
          <p className={styles.sectionSub}>
            Visakhapatnam is home to a growing cluster of hospitals, super-specialty centres, and outpatient facilities that serve not just the city but the entire northern Andhra Pradesh region. The standard of these facilities matters. Nestique Studio brings IIT Kharagpur-trained architectural expertise, NABH-aware design thinking, and extensive healthcare project experience to every hospital interior project in Vizag — working with your clinical, infection control, and management teams to deliver a facility that excels on every dimension.
          </p>
          <p className={styles.sectionSub}>
            From a 500 sq ft specialist clinic in Dwaraka Nagar to a 50,000 sq ft multi-specialty hospital in Gajuwaka, we provide the complete design-and-build service — one team, one contract, one outcome you can trust.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Healthcare Design Services</p>
          <h2>Hospital Interior Design Services in Visakhapatnam</h2>
          <p className={styles.sectionSub}>From primary clinics to multi-specialty hospitals — complete healthcare interior design in Vizag.</p>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div className={styles.serviceCard} key={i}>
                <span className={styles.serviceIcon}>{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Why Choose Us</p>
          <h2>Why Vizag Healthcare Providers Trust Nestique Studio</h2>
          <p className={styles.sectionSub}>What makes our hospital interior design different in Visakhapatnam.</p>
          <div className={styles.whyGrid}>
            {whyUs.map((w, i) => (
              <div className={styles.whyCard} key={i}>
                <div className={styles.whyIcon}>{w.icon}</div>
                <div><h3>{w.title}</h3><p>{w.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Where We Work</p>
          <h2>Healthcare Projects Across Visakhapatnam</h2>
          <p className={styles.sectionSub}>We design healthcare facilities across all major localities in Vizag.</p>
          <div className={styles.areasGrid}>
            {areas.map((a, i) => <span className={styles.areaBadge} key={i}>{a}</span>)}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>How It Works</p>
          <h2>Our Healthcare Interior Design Process</h2>
          <p className={styles.sectionSub}>Clinical-first design from brief to handover.</p>
          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Clinical Brief & Site Survey", desc: "We meet your clinical and management teams, review regulatory requirements, survey the site, and document the functional programme for every department." },
              { step: "02", title: "Concept & Clinical Review", desc: "Design concepts are developed and reviewed with your clinical team. Infection control, patient flow, staff workflow, and regulatory requirements are addressed before any detail design." },
              { step: "03", title: "Detailed Design & Approvals", desc: "Full working drawings including architectural, MEP coordination, medical gas layout, and clinical equipment planning — submitted for regulatory and clinical approval." },
              { step: "04", title: "Phased Build & Handover", desc: "Execution in phases to maintain operational continuity. Independent commissioning checks before each zone opens. Full snagging walkthrough with clinical leads before handover." },
            ].map((p, i) => (
              <div className={styles.processCard} key={i}>
                <span className={styles.stepNum}>{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>FAQ</p>
          <h2>Hospital Interior Design in Visakhapatnam — Questions Answered</h2>
          <div className={styles.faqList}>
            {[
              { q: "How much does hospital interior design cost in Visakhapatnam?", a: "Healthcare interior design in Visakhapatnam costs ₹1,500–₹4,000 per sq ft depending on facility type and clinical specification. A 2,000 sq ft diagnostic centre costs approximately ₹30–80 lakhs. Nestique Studio provides a detailed, scope-based quote after a free clinical brief meeting. Email hello@nestiquestudio.in." },
              { q: "Do you design NABH-compliant hospitals in Visakhapatnam?", a: "Yes. All our hospital designs in Visakhapatnam incorporate NABH accreditation requirements — zone segregation, infection control surfaces, patient flow planning, accessibility compliance, and clinical area specification standards. We work with your accreditation consultant throughout the design process." },
              { q: "What healthcare facilities do you design in Vizag?", a: "We design multi-specialty hospitals, single-specialty hospitals, polyclinics, diagnostic and imaging centres, dental clinics, physiotherapy centres, IVF clinics, pharmacies, day-surgery centres, and medical offices across Visakhapatnam." },
              { q: "How do you manage infection control in hospital design?", a: "Infection control is central to all our healthcare design in Visakhapatnam. We specify antimicrobial surfaces for all clinical touch points, design seamless flooring in OT and ICU areas, plan HEPA-compatible ceiling systems, and specify copper-ion hardware in high-traffic zones. All material choices are reviewed by your infection control team." },
              { q: "Can you deliver hospital projects without interrupting existing operations in Vizag?", a: "Yes. We are experienced in phased, live-site healthcare project delivery in Visakhapatnam. Our teams are trained to work within operational healthcare environments — managing dust, noise, access control, and equipment movement to ensure patient safety and clinical continuity throughout the project." },
            ].map((f, i) => (
              <div className={styles.faqItem} key={i}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <h2>Planning a Hospital or Clinic in Visakhapatnam?</h2>
          <p>
            Talk to Nestique Studio&apos;s healthcare interior design specialists. Free clinical brief meeting,
            NABH-aware design, and a team with proven hospital project experience across Vizag.
          </p>
          <div className={styles.ctaBtns}>
            <a href="/consultation" className={styles.ctaBtnWhite}>Book a Consultation</a>
            <a href="mailto:hello@nestiquestudio.in" className={styles.ctaBtnOutline}>hello@nestiquestudio.in</a>
          </div>
        </div>
      </section>
    </main>
  );
}
