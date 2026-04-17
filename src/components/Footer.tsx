import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Nestique Studio"
              className={styles.footerLogo}
            />
          </div>
          <p className={styles.tagline}>
            Premier architecture, interior design, and construction services across India.
          </p>
          <div className={styles.contact}>
            <a href="mailto:hello@nestiquestudio.in">hello@nestiquestudio.in</a>
            <a href="tel:+917816086291">+91 78160 86291</a>
            <span>Mon–Sun, 9am–9pm</span>
          </div>
          <div className={styles.socials}>
            <a href="https://youtu.be/jcexBwubaW8?si=dNpEfgBkxm5sURJJ" target="_blank" rel="noopener" aria-label="YouTube">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.997 2.997 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566A2.997 2.997 0 0 0 .502 6.186C0 8.347 0 12 0 12s0 3.653.502 5.814a2.997 2.997 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.997 2.997 0 0 0 2.112-2.12C24 15.653 24 12 24 12s0-3.653-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
              </svg>
            </a>
            <a href="https://instagram.com/nestiquestudio" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://wa.me/917816086291" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.004A9.994 9.994 0 0 0 2 12c0 1.77.46 3.45 1.33 4.94L2 22l5.18-1.32A9.98 9.98 0 0 0 12 22c5.52 0 10-4.48 10-10s-4.48-9.996-10-9.996Zm0 18.16c-1.47 0-2.91-.39-4.16-1.13l-.3-.18-3.08.78.82-3.01-.2-.31A8.13 8.13 0 0 1 3.86 12c0-4.48 3.66-8.13 8.14-8.13 4.48 0 8.14 3.65 8.14 8.13 0 4.48-3.66 8.13-8.14 8.13Zm4.47-6.13c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.12-.12.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.28-.22.22-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.54.58.2 1.03.32 1.38.41.58.14 1.1.12 1.52.07.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Our Projects</Link>
            <Link href="/blog">Blog & Articles</Link>
          </div>
          <div className={styles.linkGroup}>
            <h4>Services</h4>
            <Link href="/services">Architecture</Link>
            <Link href="/services">Construction</Link>
            <Link href="/services">Interior Design</Link>
            <Link href="/services">Renovation</Link>
            <Link href="/services">Civil Works</Link>
          </div>
          <div className={styles.linkGroup}>
            <h4>Support</h4>
            <Link href="/contact">Contact Us</Link>
            <Link href="/consultation">Book Consultation</Link>
            <Link href="/portfolio">Project Gallery</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>&copy; {new Date().getFullYear()} Nestique Studio. All rights reserved.</span>
        <span className={styles.cities}>
          Visakhapatnam &middot; Vijayawada &middot; Hyderabad &middot; Bangalore &middot; Mumbai &middot; Pune
        </span>
      </div>
    </footer>
  );
}
