// About.jsx
import React from "react";

// FIX: Replaced ALL placeholder text ("[brief description]", "[Your Website Name]", etc.)
// Placeholder content in production is unprofessional and harms user trust & SEO.
const About = () => {
  return (
    <main style={{ padding: "3rem 1rem" }} aria-label="About Beach Resort">
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Hero Section */}
        <section style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "2.5em", marginBottom: "1rem", fontFamily: "'Playfair Display', Georgia, serif" }}>
            About Beach Resort
          </h1>
          <div style={{ width: "5rem", height: "5px", background: "#af9a7d", margin: "0 auto 1.5rem" }}></div>
          <p style={{ lineHeight: "1.8", color: "#444", fontSize: "1.1rem" }}>
            Welcome to <strong>Beach Resort</strong> — a haven of luxury, tranquility, and
            world-class hospitality nestled along the pristine coastline. Since our founding,
            we have been dedicated to crafting unforgettable getaway experiences for every guest
            who walks through our doors.
          </p>
        </section>

        {/* Our Story */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.8em", marginBottom: "0.75rem" }}>Our Story</h2>
          <p style={{ lineHeight: "1.8", color: "#444" }}>
            Beach Resort was born from a simple dream: to create a place where the stresses of
            everyday life dissolve into the sound of ocean waves. What started as a boutique
            beachside retreat has grown into a full-service luxury resort, offering a range of
            accommodation from cozy single rooms to our prestigious Presidential Suite — all
            designed to make you feel at home while indulging your senses.
          </p>
        </section>

        {/* Our Mission */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.8em", marginBottom: "0.75rem" }}>Our Mission</h2>
          <p style={{ lineHeight: "1.8", color: "#444" }}>
            Our mission is simple: <em>to deliver exceptional experiences through personalized
            service, stunning surroundings, and genuine warmth</em>. Every member of our team
            is committed to ensuring your stay exceeds expectations — from the moment you arrive
            to the moment you reluctantly depart.
          </p>
        </section>

        {/* What We Offer */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.8em", marginBottom: "0.75rem" }}>What We Offer</h2>
          <ul style={{ lineHeight: "2", color: "#444", paddingLeft: "1.5rem" }}>
            <li>13 uniquely designed rooms across 4 tiers: Single, Double, Family, and Presidential</li>
            <li>Beachfront dining with locally sourced cuisine</li>
            <li>World-class spa and wellness centre</li>
            <li>Guided water sports, hiking, and excursions</li>
            <li>Free shuttle service to local attractions</li>
            <li>Pet-friendly rooms available</li>
            <li>Complimentary breakfast for select room categories</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ lineHeight: "1.8", color: "#444", marginBottom: "1.5rem" }}>
            Whether you are planning a romantic escape, a family holiday, or a solo adventure,
            Beach Resort is designed with you in mind. We look forward to welcoming you.
          </p>
          <a href="/rooms" className="btn-primary" style={{ display: "inline-block" }}>
            Browse Our Rooms
          </a>
        </section>
      </div>
    </main>
  );
};

export default About;
