// Contact.jsx
import React, { useState } from "react";
import facebookIcon from "../../assets/img/fb/fbicon.png";
import instagramIcon from "../../assets/img/insta/instaicon.jpeg";

// FIX 12: Added controlled form state + onSubmit handler with e.preventDefault()
// Previously the form had NO handler, so submission caused a full page reload,
// losing all user input and providing zero feedback.
//
// FIX 13: Moved phone number to a named constant at module level
// Hardcoding sensitive contact info directly in JSX makes it harder to update
// and exposes it without any encoding protection.

const CONTACT_PHONE = "+92 304 4888932";
const CONTACT_EMAIL = "info@beachresort.com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // FIX 12: Proper submit handler — prevents default reload,
  // validates required fields, and shows success/error feedback
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.email || !formData.username || !formData.description) {
      setError("Please fill in all required fields.");
      return;
    }

    // In a real app: POST to your backend API here
    // e.g. fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    console.info("Contact form submitted:", formData);
    setSubmitted(true);
  };

  // ─── Inline styles ────────────────────────────────────────────────────────
  const containerStyles = {
    maxWidth: "800px",
    margin: "3rem auto",
    padding: "20px",
    textAlign: "center",
    color: "#222",
  };
  const headingStyles = { color: "#333", marginBottom: "30px" };
  const formStyles = { display: "flex", flexDirection: "column", alignItems: "center" };
  const labelStyles = { marginTop: "10px", fontWeight: "bold", display: "block", textAlign: "left", width: "100%", maxWidth: "400px" };
  const inputStyles = {
    width: "100%",
    maxWidth: "400px",
    padding: "10px",
    margin: "5px 0 15px 0",
    border: "2px solid #af9a7d",
    borderRadius: "4px",
    boxSizing: "border-box",
    fontSize: "1rem",
  };
  const buttonStyles = {
    backgroundColor: "#af9a7d",
    color: "#222",
    padding: "10px 30px",
    border: "3px solid #af9a7d",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "10px",
    transition: "all 0.3s linear",
    letterSpacing: "2px",
    textTransform: "uppercase",
  };
  const socialContainerStyles = {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
  };
  const socialIconStyles = { width: "40px", height: "40px", borderRadius: "8px" };
  const infoStyles = { marginTop: "20px", color: "#444", lineHeight: "1.8" };
  const successStyles = {
    padding: "1rem",
    background: "#e6f4ea",
    border: "1px solid #a8d5b5",
    borderRadius: "6px",
    color: "#2d6a4f",
    marginBottom: "1rem",
  };
  const errorStyles = {
    padding: "0.75rem",
    background: "#fde8e8",
    border: "1px solid #f5a6a6",
    borderRadius: "6px",
    color: "#c0392b",
    marginBottom: "1rem",
  };
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <main style={containerStyles} aria-label="Contact Beach Resort">
      <h1 style={headingStyles}>Contact Us</h1>

      {submitted ? (
        <div style={successStyles} role="alert">
          <strong>Thank you, {formData.username}!</strong> Your message has been sent.
          We'll get back to you at <em>{formData.email}</em> within 24 hours.
        </div>
      ) : (
        <>
          {error && (
            <div style={errorStyles} role="alert" aria-live="polite">
              {error}
            </div>
          )}

          <form style={formStyles} onSubmit={handleSubmit} noValidate>
            <label htmlFor="email" style={labelStyles}>Email Address: *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyles}
              required
              placeholder="you@example.com"
              aria-required="true"
            />

            <label htmlFor="username" style={labelStyles}>Your Name: *</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={inputStyles}
              required
              placeholder="John Smith"
              aria-required="true"
            />

            <label htmlFor="description" style={labelStyles}>Message: *</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              style={{ ...inputStyles, resize: "vertical" }}
              required
              placeholder="Tell us how we can help you..."
              aria-required="true"
            />

            <button type="submit" style={buttonStyles}>
              Send Message
            </button>
          </form>
        </>
      )}

      {/* Contact Information */}
      <div style={infoStyles}>
        <p>
          <strong>Phone:</strong>{" "}
          {/* FIX 13: Phone now in a named constant; encoded in an accessible tel: link */}
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} style={{ color: "#af9a7d" }}>
            {CONTACT_PHONE}
          </a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#af9a7d" }}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>

      {/* Social Media Icons */}
      <div style={socialContainerStyles}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer noopener" aria-label="Visit our Facebook page (opens in new tab)">
          <img src={facebookIcon} alt="Facebook" style={socialIconStyles} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer noopener" aria-label="Visit our Instagram page (opens in new tab)">
          <img src={instagramIcon} alt="Instagram" style={socialIconStyles} />
        </a>
      </div>
    </main>
  );
};

export default ContactUs;
