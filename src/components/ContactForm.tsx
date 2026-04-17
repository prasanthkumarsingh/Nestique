"use client";

import { useState } from "react";
import styles from "../app/contact/contact.module.css";

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Your full name" required />
        </div>
        <div className={styles.formGroup}>
          <label>Email Address</label>
          <input type="email" name="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" />
        </div>
        <div className={styles.formGroup}>
          <label>City</label>
          <select name="city">
            <option value="">Select your city</option>
            <option>Visakhapatnam</option>
            <option>Vijayawada</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
            <option>Mumbai</option>
            <option>Pune</option>
          </select>
        </div>
      </div>
      <div className={styles.formGroup}>
        <label>Subject</label>
        <select name="subject">
          <option value="">What can we help with?</option>
          <option>Architecture &amp; Design</option>
          <option>Construction</option>
          <option>Interior Design</option>
          <option>Renovation</option>
          <option>General Enquiry</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>Message</label>
        <textarea name="message" rows={5} placeholder="Tell us about your project..." required />
      </div>

      {status === "success" && (
        <div className={styles.successMsg}>
          Message sent! We&apos;ll get back to you within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className={styles.errorMsg}>
          Something went wrong. Please try again or call us at +91 78160 86291.
        </div>
      )}

      <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
