"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "../app/(marketing)/contact/contact.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-busy={status === "sending"}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="contact-name">Full Name *</label>
          <input type="text" id="contact-name" name="name" autoComplete="name" placeholder="Your full name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contact-email">Email Address *</label>
          <input type="email" id="contact-email" name="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="contact-phone">Phone Number</label>
          <input type="tel" id="contact-phone" name="phone" autoComplete="tel" placeholder="+91 XXXXX XXXXX" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contact-city">City</label>
          <select id="contact-city" name="city" autoComplete="address-level2">
            <option value="">Select your city</option>
            <option>Visakhapatnam</option>
            <option>Vijayawada</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="contact-subject">What can we help with?</label>
        <select id="contact-subject" name="subject">
          <option value="">What can we help with?</option>
          <option>Architecture &amp; Design</option>
          <option>Construction</option>
          <option>Interior Design</option>
          <option>Renovation</option>
          <option>Landscape Design</option>
          <option>Builders &amp; Development</option>
          <option>General Enquiry</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="contact-message">Your Message *</label>
        <textarea id="contact-message" name="message" rows={5} placeholder="Tell us about your project..." required />
      </div>

      {status === "success" && (
        <div className={styles.successMsg} role="status">
          Thank you! Your message has been sent. Our team will be in touch.
        </div>
      )}
      {status === "error" && (
        <div className={styles.errorMsg} role="alert">
          Something went wrong. Please try again or call us at +91 78160 86291.
        </div>
      )}

      <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send your message"}<ArrowUpRight size={17} aria-hidden="true" />
      </button>
    </form>
  );
}
