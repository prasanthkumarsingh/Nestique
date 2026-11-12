"use client";

import { useEnquirySubmit } from "@/lib/use-enquiry-submit";
import styles from "../app/(marketing)/consultation/consultation.module.css";

export default function ConsultationForm() {
  const { status, handleSubmit } = useEnquirySubmit("consultation");

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-busy={status === "sending"}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="consultation-name">Full Name *</label>
          <input type="text" id="consultation-name" name="name" placeholder="Your full name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="consultation-email">Email Address *</label>
          <input type="email" id="consultation-email" name="email" placeholder="you@example.com" required />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="consultation-phone">Phone Number *</label>
          <input type="tel" id="consultation-phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="consultation-city">City</label>
          <select id="consultation-city" name="city">
            <option value="">Select your city</option>
            <option value="Visakhapatnam">Visakhapatnam / Vizag</option>
            <option>Vijayawada</option>
            <option>Hyderabad</option>
            <option value="Bangalore">Bengaluru / Bangalore</option><option>Other</option>
            <option>Mumbai</option>
            <option>Pune</option>
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="consultation-projectType">Project Type *</label>
        <select id="consultation-projectType" name="projectType" required>
          <option value="">Select project type</option>
          <option value="architecture">Architecture &amp; Design</option>
          <option value="construction">Full Home Construction</option>
          <option value="interior">Interior Design</option>
          <option value="renovation">Renovation</option>
          <option value="civil">Civil Works</option><option value="office-planning">Office planning</option><option value="commercial-construction">Commercial construction</option><option value="commercial-interiors">Office & commercial interiors</option><option value="facade-elevation">Façade & elevation design</option>
          <option value="landscape">Landscape Design</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="consultation-timeline">I want to start construction in</label>
        <select id="consultation-timeline" name="timeline">
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

      <div className={styles.formGroup}><label htmlFor="consultation-property">Property type</label><select id="consultation-property" name="propertyType"><option value="">Select property type</option>{["House", "Villa", "Apartment", "Office", "Restaurant", "Shop", "Other"].map(value => <option key={value}>{value}</option>)}</select></div>
      <div className={styles.formGroup}>
        <label htmlFor="consultation-message">Tell us more (optional)</label>
        <textarea id="consultation-message" name="message" rows={4} placeholder="Describe your vision, plot size, budget range, or any specific requirements..." />
      </div>

      {status === "success" && (
        <div role="status" className={styles.successMsg}>
          Request received! Our team will contact you to discuss your project.
        </div>
      )}
      {status === "error" && (
        <div role="alert" className={styles.errorMsg}>
          Something went wrong. Please call us at +91 78160 86291.
        </div>
      )}

      <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
        {status === "sending" ? "Submitting…" : "Request a consultation"}
      </button>

      <p className={styles.disclaimer}>
        By submitting, you agree to be contacted by our team. We respect your privacy.
      </p>
    </form>
  );
}
