import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import ConsultationForm from "../../components/ConsultationForm";
import styles from "./consultation.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Free Consultation | Architecture, Construction & Interior Design — Nestique Studio",
  description:
    "Book a free architecture, construction, or interior design consultation with Nestique Studio. Get a personalised estimate, design ideas, and expert advice. No obligations. Hyderabad, Vizag, Vijayawada & Bangalore.",
  keywords: [
    "free architecture consultation Hyderabad",
    "free interior design consultation Vizag",
    "construction estimate Hyderabad",
    "book architect consultation India",
    "free home design consultation AP",
    "construction consultation Vijayawada",
    "interior designer consultation Bangalore",
  ],
  alternates: { canonical: `${SITE_URL}/consultation` },
  openGraph: {
    url: `${SITE_URL}/consultation`,
    title: "Free Consultation | Architecture & Interior Design — Nestique Studio",
    description: "Book a free, no-obligation design consultation. Get expert advice, design concepts, and a clear cost estimate within 24 hours.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const consultationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Free Architecture & Interior Design Consultation",
  provider: {
    "@type": "LocalBusiness",
    name: "Nestique Studio",
    telephone: "+917816086291",
    url: SITE_URL,
  },
  url: `${SITE_URL}/consultation`,
  description: "Free 45-minute consultation covering architecture, construction, interior design, and renovation — personalised advice, cost estimates, and initial design concepts.",
  areaServed: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Bangalore"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "Free, no-obligation design consultation",
    availability: "https://schema.org/InStock",
  },
};

const benefits = [
  { icon: "🎯", title: "Personalised Advice", desc: "Get expert recommendations tailored to your plot size, budget, and goals." },
  { icon: "💰", title: "Transparent Estimate", desc: "Walk away with a clear, no-surprise cost estimate for your project." },
  { icon: "🏡", title: "Design Ideas", desc: "See initial design concepts and layout options during your consultation." },
  { icon: "📅", title: "Flexible Timing", desc: "Meet in-person at our office or connect online — whichever suits you." },
];

export default function ConsultationPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={consultationSchema} />
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className={styles.breadcrumb}>Free Consultation</p>
          <h1>You Dream. We Deliver.</h1>
          <p className={styles.headerSub}>
            Book a free consultation with our experts. No obligations — just clarity on your dream home.
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
              Our 45-minute consultation covers everything you need to make an informed decision.
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
              <span>Mon–Sun, 9am–9pm</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h2>Request a Free Consultation</h2>
              <p>Fill in your details and our team will reach out within 2 hours.</p>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
