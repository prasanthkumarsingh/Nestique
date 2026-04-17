import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import ContactForm from "../../components/ContactForm";
import styles from "./contact.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

export const metadata: Metadata = {
  title: "Contact Nestique Studio | Architecture & Interior Design — Hyderabad, Vizag",
  description: "Contact Nestique Studio for architecture, construction, interior design & renovation in Hyderabad, Vizag, Vijayawada & Bangalore. Call +91 78160 86291 or email hello@nestiquestudio.in. We respond within 24 hours.",
  keywords: [
    "contact architecture firm Hyderabad",
    "contact interior designer Vizag",
    "Nestique Studio phone number",
    "Nestique Studio email",
    "architecture consultation Hyderabad",
    "construction company contact Vizag",
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: "Contact Nestique Studio | Architecture & Interior Design",
    description: "Reach us at +91 78160 86291 or hello@nestiquestudio.in. Offices in Vizag, Hyderabad & Bangalore.",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  name: "Contact Nestique Studio",
  description: "Contact page for Nestique Studio — architecture, interior design & construction firm.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Nestique Studio",
    telephone: "+917816086291",
    email: "hello@nestiquestudio.in",
    url: SITE_URL,
    address: [
      { "@type": "PostalAddress", addressLocality: "Visakhapatnam", addressRegion: "Andhra Pradesh", addressCountry: "IN" },
      { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
      { "@type": "PostalAddress", addressLocality: "Bangalore", addressRegion: "Karnataka", addressCountry: "IN" },
    ],
    openingHours: "Mo-Su 09:00-21:00",
    sameAs: [
      "https://www.instagram.com/nestiquestudio",
      "https://www.facebook.com/nestiquestudio",
      "https://www.linkedin.com/company/nestique-studio",
    ],
  },
};

const officeLocations = [
  { city: "Visakhapatnam", address: "Vizag HQ", hours: "Mon–Sun, 9am–9pm" },
  { city: "Hyderabad", address: "Hyderabad Office", hours: "Mon–Sun, 9am–9pm" },
  { city: "Bangalore", address: "Bangalore Office", hours: "Mon–Sun, 9am–9pm" },
];

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <JsonLd data={contactSchema} />
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className={styles.breadcrumb}>Contact</p>
          <h1>Get in Touch</h1>
          <p className={styles.headerSub}>
            Have a project in mind or a question to ask? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contactSection}>
        <div className={styles.contactInner}>
          {/* Info Cards */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📧</span>
              <div>
                <h3>Email Us</h3>
                <a href="mailto:hello@nestiquestudio.in">hello@nestiquestudio.in</a>
                <p>We reply within 24 hours.</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📞</span>
              <div>
                <h3>Call Us</h3>
                <a href="tel:+917816086291">+91 78160 86291</a>
                <p>Mon–Sun, 9:00am – 9:00pm</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>💬</span>
              <div>
                <h3>WhatsApp</h3>
                <a href="https://wa.me/917816086291" target="_blank" rel="noopener">
                  Chat on WhatsApp
                </a>
                <p>Quick responses for project queries.</p>
              </div>
            </div>

            <div className={styles.locationsBox}>
              <h3>Our Offices</h3>
              {officeLocations.map((loc, i) => (
                <div className={styles.locationItem} key={i}>
                  <span className={styles.cityDot} />
                  <div>
                    <p className={styles.cityName}>{loc.city}</p>
                    <p className={styles.cityHours}>{loc.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h2>Send Us a Message</h2>
              <p>Fill in your details and we&apos;ll get back to you shortly.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
