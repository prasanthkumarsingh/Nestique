"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import styles from "./Header.module.css";
const links = [["/portfolio", "Our Projects"], ["/services", "Services"], ["/about", "Our Studio"], ["/careers", "Careers"], ["/blog", "Journal"], ["/contact", "Contact"]];
export default function Header() {
 const [menuOpen, setMenuOpen] = useState(false);
 const pathname = usePathname();
 useEffect(() => {
  if (!menuOpen) return;
  const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
  window.addEventListener("keydown", close);
  return () => window.removeEventListener("keydown", close);
 }, [menuOpen]);
 return <header className={styles.header}>
  <div className={styles.container}>
   <Link href="/" className={styles.logoLink} onClick={() => setMenuOpen(false)}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/logo.png" alt="Nestique Studio" className={styles.logoImg} />
   </Link>
   <nav className={styles.nav} aria-label="Main navigation">{links.map(([href,label]) => <Link key={href} href={href} aria-current={pathname === href || pathname.startsWith(href + "/") ? "page" : undefined}>{label}</Link>)}</nav>
   <div className={styles.actions}><Link href="/client/login" className={styles.loginBtn}>Client login</Link><Link href="/consultation" className={styles.bookBtn}>Let&apos;s talk <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
   <button type="button" className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation">{menuOpen ? <X /> : <Menu />}</button>
  </div>
  {menuOpen && <nav id="mobile-navigation" className={styles.mobileMenu} aria-label="Mobile navigation">{links.map(([href,label],i) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} aria-current={pathname === href ? "page" : undefined}><span>0{i+1}</span>{label}<ArrowUpRight size={18} aria-hidden="true" /></Link>)}<Link href="/client/login" onClick={() => setMenuOpen(false)}>Client login</Link><Link href="/consultation" onClick={() => setMenuOpen(false)} className={styles.mobileBookBtn}>Book a consultation <ArrowUpRight size={18} aria-hidden="true" /></Link></nav>}
 </header>;
}
