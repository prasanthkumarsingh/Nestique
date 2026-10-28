import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MessageCircle, MapPin, Clock3, Check } from "lucide-react";
import ServiceImage from "@/components/ServiceImage";
import { portfolioProjects } from "@/lib/portfolio.data";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import styles from "./contact.module.css";

const SITE_URL = "https://www.nestiquestudio.in";

const Instagram = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
const Linkedin = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3v12h-3V9ZM10 9h3v1.7c.8-1.3 2-2 3.7-2 3 0 4.3 1.8 4.3 5.1V21h-3v-6.5c0-1.8-.5-2.9-2.1-2.9-1.8 0-2.9 1.2-2.9 3.2V21h-3V9Z" /></svg>;
const Facebook = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 22V13h3l.5-3H14V8c0-1 .4-2 2-2h2V3c-.8-.1-1.8-.2-2.8-.2C12.4 2.8 11 4.5 11 7.5V10H8v3h3v9h3Z" /></svg>;


export const metadata: Metadata = {
  title: "Contact Nestique Studio | Commercial Interior Designer in Visakhapatnam & Hyderabad",
  description: "Contact Nestique Studio for office, hospital or hotel interior design, architecture & construction in Visakhapatnam and Hyderabad. Call +91 78160 86291 or email hello@nestiquestudio.in.",
  keywords: [
    "contact interior designer Visakhapatnam",
    "contact civil contractor Vizag",
    "interior design company contact Hyderabad",
    "construction company contact Visakhapatnam",
    "Nestique Studio phone number",
    "Nestique Studio Visakhapatnam",
    "Nestique Studio Hyderabad",
    "interior design enquiry Vizag",
    "civil work enquiry Hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: "Contact Nestique Studio | Architecture & Interior Design",
    description: "Reach us at +91 78160 86291 or hello@nestiquestudio.in. Offices in Vizag, Hyderabad & Bangalore.",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
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
  { city: "Visakhapatnam", label: "Vizag HQ", region: "Andhra Pradesh" },
  { city: "Hyderabad", label: "Hyderabad Office", region: "Telangana" },
  { city: "Bangalore", label: "Bangalore Office", region: "Karnataka" },
];
const contactMethods = [
  { icon: Phone, title: "A conversation is a good start", label: "+91 78160 86291", href: "tel:+917816086291", description: "Call us about your ideas, your space, or the next step." },
  { icon: Mail, title: "Put your thoughts into words", label: "hello@nestiquestudio.in", href: "mailto:hello@nestiquestudio.in", description: "Send us your brief, reference images, or a question." },
  { icon: MessageCircle, title: "Keep it simple. Say hello.", label: "Chat on WhatsApp", href: "https://wa.me/917816086291", description: "Start a chat and tell us what you have in mind." },
];
export default function ContactPage() {
  const project = portfolioProjects.find((item) => item.slug === "villa85-iconica-grand")!;
  return (
    <main className={styles.main}>
      <JsonLd data={contactSchema} />
      <section className={styles.hero}><div className={styles.heroInner}>
        <div className={styles.heroCopy}><p className={styles.eyebrow}>Contact Nestique Studio</p><h1>Every great space starts<br /><em>with a conversation.</em></h1><p className={styles.heroDescription}>A new home, a different direction for your business, or a space ready for its next chapter. Tell us what you are thinking. We would love to listen.</p><div className={styles.heroActions}><a href="#send-message" className={styles.primaryButton}>Tell us about your project <ArrowUpRight size={18} aria-hidden="true" /></a><span><Clock3 size={15} aria-hidden="true" />Mon - Sun / 9am - 9pm IST</span></div></div>
        <div className={styles.heroVisual}><ServiceImage src={project.photos[0].url} title="A warm contemporary living space at Villa85, Iconica Grand, designed by Nestique Studio" index={0} priority /><div className={styles.photoShade} /><Link href="/portfolio#villa85-iconica-grand" className={styles.photoCaption}><span>Thoughtfully designed, from the first hello.<small>Villa85 / Iconica Grand</small></span><ArrowUpRight size={19} aria-hidden="true" /></Link></div>
      </div></section>
      <section className={styles.methodsSection} aria-label="Ways to contact the studio"><div className={styles.methodsGrid}>{contactMethods.map((method) => { const Icon = method.icon; return <article className={styles.methodCard} key={method.label}><span className={styles.methodIcon}><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span><p className={styles.methodTitle}>{method.title}</p><a href={method.href} target={method.href.startsWith("https") ? "_blank" : undefined} rel={method.href.startsWith("https") ? "noopener noreferrer" : undefined}>{method.label}<ArrowUpRight size={17} aria-hidden="true" /></a><p className={styles.methodDescription}>{method.description}</p></article>; })}</div></section>
      <section id="send-message" className={styles.contactSection} aria-labelledby="message-title"><div className={styles.contactInner}>
        <aside className={styles.infoCol}><p className={styles.eyebrow}>A little about your vision</p><h2 id="message-title">Your ideas.<br /><em>Our next collaboration.</em></h2><p className={styles.contactIntro}>You do not need to have everything figured out. Share what you know about your space, and we can work through the possibilities together.</p><ul className={styles.contactChecklist}><li><Check size={16} aria-hidden="true" />Architecture, interiors, or construction</li><li><Check size={16} aria-hidden="true" />Homes, hospitality, and commercial spaces</li><li><Check size={16} aria-hidden="true" />A new project or an existing space</li></ul><div className={styles.nextSteps}><p>What happens next</p><div><span>01</span><p>We review your message and project details.</p></div><div><span>02</span><p>We connect with you to understand the brief.</p></div><div><span>03</span><p>We discuss the scope and the way forward.</p></div></div></aside>
        <div className={styles.formCard}><header><p className={styles.eyebrow}>We are listening</p><h3>Send us a message</h3><p>Share a few details. Fields marked with * are required.</p></header><ContactForm /></div>
      </div></section>
      <section className={styles.locationsSection} aria-labelledby="locations-title"><div className={styles.container}>
        <header className={styles.sectionHeading}><div><p className={styles.eyebrow}>Closer to your next project</p><h2 id="locations-title">One studio.<br /><em>Connected across cities.</em></h2></div><p>Connect with our team in your city. Please call ahead to arrange a meeting and confirm the office location.</p></header>
        <div className={styles.locationsGrid}>{officeLocations.map((location, index) => <article className={styles.locationCard} key={location.city}><div className={styles.locationTop}><MapPin size={25} strokeWidth={1.3} aria-hidden="true" /><span>0{index + 1}</span></div><p className={styles.locationLabel}>{location.label}</p><h3>{location.city}</h3><p className={styles.locationRegion}>{location.region}</p><p className={styles.locationHours}><Clock3 size={14} aria-hidden="true" />Mon - Sun / 9am - 9pm IST</p><a href="tel:+917816086291" aria-label={"Call to arrange a meeting in " + location.city}>Arrange a conversation <ArrowUpRight size={17} aria-hidden="true" /></a></article>)}</div>
      </div></section>
      <section className={styles.followSection}><div className={styles.followInner}><div><p className={styles.eyebrow}>A glimpse into our world</p><h2>Stay close to the work.</h2><p>Explore our projects, our perspective, and the details that inspire us.</p></div><div className={styles.socialLinks}><a href="https://www.instagram.com/nestiquestudio" target="_blank" rel="noopener noreferrer"><Instagram /><span>Instagram</span><ArrowUpRight size={16} aria-hidden="true" /></a><a href="https://www.linkedin.com/company/nestique-studio" target="_blank" rel="noopener noreferrer"><Linkedin /><span>LinkedIn</span><ArrowUpRight size={16} aria-hidden="true" /></a><a href="https://www.facebook.com/nestiquestudio" target="_blank" rel="noopener noreferrer"><Facebook /><span>Facebook</span><ArrowUpRight size={16} aria-hidden="true" /></a></div></div></section>
    </main>
  );
}
