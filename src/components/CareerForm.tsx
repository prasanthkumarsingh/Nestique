"use client";

import { useState } from "react";
import styles from "../app/(marketing)/careers/careers.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function CareerForm({ defaultPosition }: { defaultPosition?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/career", {
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
          <label htmlFor="career-name">Full Name *</label>
          <input type="text" id="career-name" name="name" autoComplete="name" placeholder="Your full name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="career-email">Email Address *</label>
          <input type="email" id="career-email" name="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="career-phone">Phone Number *</label>
          <input type="tel" id="career-phone" name="phone" autoComplete="tel" placeholder="+91 XXXXX XXXXX" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="career-city">Current City</label>
          <select id="career-city" name="city" autoComplete="address-level2">
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
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="career-position">Position Applying For *</label>
          <select id="career-position" name="position" required defaultValue={defaultPosition || ""}>
            <option value="">Select a position</option>
            <option>Architect</option>
            <option>Interior Designer</option>
            <option>Civil Engineer</option>
            <option>3D Visualization Artist</option>
            <option>Project Manager</option>
            <option>Site Supervisor</option>
            <option>Business Development Executive</option>
            <option>Other / Open Application</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="career-experience">Years of Experience</label>
          <select id="career-experience" name="experience">
            <option value="">Select experience</option>
            <option>Fresher (0–1 year)</option>
            <option>1–3 years</option>
            <option>3–5 years</option>
            <option>5–8 years</option>
            <option>8+ years</option>
          </select>
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="career-portfolio">Portfolio / LinkedIn / Behance URL</label>
        <input type="url" id="career-portfolio" name="portfolio" placeholder="https://your-portfolio.com" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="career-message">Cover Note</label>
        <textarea id="career-message" name="message" rows={4} placeholder="Tell us why you want to join Nestique Studio and what makes you a great fit..." />
      </div>

      {status === "success" && (
        <div className={styles.successMsg} role="status">
          Application submitted! We will review your profile and get back to you within 5–7 business days.
        </div>
      )}
      {status === "error" && (
        <div className={styles.errorMsg} role="alert">
          Something went wrong. Please try again or email us directly at hello@nestiquestudio.in
        </div>
      )}

      <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
        {status === "sending" ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
