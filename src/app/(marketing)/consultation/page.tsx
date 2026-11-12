import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ConsultationForm from "@/components/ConsultationForm";
import styles from "./consultation.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: { absolute: "Interior Design & Construction Consultation in Vizag & Hyderabad | Nestique Studio" },
  description:
    "Request an interior design or construction consultation with Nestique Studio in Visakhapatnam and Hyderabad. Get a personalised estimate for home interiors, modular kitchen, house construction or villa. No obligations. Call +91 78160 86291.",
  alternates: { canonical: `${SITE_URL}/consultation` },
  openGraph: {
    url: `${SITE_URL}/consultation`,
    title: "Project Consultation | Architecture & Interior Design — Nestique Studio",
    description: "Discuss your project with the studio. Discuss your brief, available site information and the next steps for an estimate.",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

const consultationSchema = { "@context": "https://schema.org", "@type": "WebPage", name: "Discuss your project with Nestique Studio", url: SITE_URL + "/consultation", about: { "@id": SITE_URL + "/#organization" } };

const benefits = [
  { icon: "🎯", title: "Personalised Advice", desc: "Get expert recommendations tailored to your plot size, budget, and goals." },
  { icon: "💰", title: "Transparent Estimate", desc: "Discuss the information and scope needed for a project estimate." },
  { icon: "🏡", title: "Design Ideas", desc: "Discuss your design priorities and the next stages of planning." },
  { icon: "📅", title: "Flexible Timing", desc: "Discuss suitable meeting arrangements and location-specific availability." },
];

export default function ConsultationPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={consultationSchema} />
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className={styles.breadcrumb}>Project Consultation</p>
          <h1>You Dream. We Deliver.</h1>
          <p className={styles.headerSub}>
            Discuss your property, priorities and the support your project needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          {/* Left: Benefits */}
          <div className={styles.benefitsCol}>
            <h2>What to Expect</h2>
            <p className={styles.benefitsSub}>
              We discuss your brief, site information and the next decisions for your project.
            </p>
            <div className={styles.benefitsList}>
              {benefits.map((b, i) => (
                <div className={styles.benefitItem} key={i}>
                  <span className={styles.benefitIcon}>{b.icon}</span>
                  <div>
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.contactBox}>
              <p>Prefer to call directly?</p>
              <a href="tel:+917816086291" className={styles.callLink}>
                +91 78160 86291
              </a>
              <span>Contact us to arrange a conversation</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h2>Request a Project Consultation</h2>
              <p>Share your details and our team will contact you to discuss your project.</p>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
