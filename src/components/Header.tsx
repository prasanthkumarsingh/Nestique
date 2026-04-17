"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Nestique Studio"
            className={styles.logoImg}
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="/portfolio">Our Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/consultation" className={styles.bookBtn}>
            Book Consultation
          </Link>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/portfolio" onClick={() => setMenuOpen(false)}>Our Projects</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/consultation" onClick={() => setMenuOpen(false)} className={styles.mobileBookBtn}>
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
