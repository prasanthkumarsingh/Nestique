"use client";

import { useState } from "react";
import styles from "../app/consultation/consultation.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/consultation", {
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
          <label>Full Name *</label>
          <input type="text" name="name" placeholder="Your full name" required />
        </div>
        <div className={styles.formGroup}>
          <label>Email Address *</label>
          <input type="email" name="email" placeholder="you@example.com" required />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Phone Number *</label>
          <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required />
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
        <label>Project Type *</label>
        <select name="projectType" required>
          <option value="">Select project type</option>
          <option value="architecture">Architecture &amp; Design</option>
          <option value="construction">Full Home Construction</option>
          <option value="interior">Interior Design</option>
          <option value="renovation">Renovation</option>
          <option value="civil">Civil Works</option>
          <option value="landscape">Landscape Design</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>I want to start construction in</label>
        <select name="timeline">
          <option value="">Select timeline</option>
          <option>0–3 months</option>
          <option>3–6 months</option>
          <option>6–12 months</option>
          <option>Over 1 year</option>
        </select>
      </div>

      <div className={styles.radioRow}>
        <label className={styles.radioLabel}>Do you own a plot of land?</label>
        <div className={styles.radioOptions}>
          <label className={styles.radioOpt}>
            <input type="radio" name="land" value="yes" /> Yes, I own a plot
          </label>
          <label className={styles.radioOpt}>
            <input type="radio" name="land" value="no" /> No, I need help finding one
          </label>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Tell us more (optional)</label>
        <textarea name="message" rows={4} placeholder="Describe your vision, plot size, budget range, or any specific requirements..." />
      </div>

      {status === "success" && (
        <div className={styles.successMsg}>
          Request received! Our team will reach out within 2 hours.
        </div>
      )}
      {status === "error" && (
        <div className={styles.errorMsg}>
          Something went wrong. Please call us at +91 78160 86291.
        </div>
      )}

      <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
        {status === "sending" ? "Submitting…" : "Book Free Consultation"}
      </button>

      <p className={styles.disclaimer}>
        By submitting, you agree to be contacted by our team. We respect your privacy.
      </p>
    </form>
  );
}
