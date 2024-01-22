// AboutComponent.jsx
import React from "react";

const About = () => {
  const containerStyles = {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  };

  const headingStyles = {
    fontSize: "2em",
    marginBottom: "20px",
  };

  const paragraphStyles = {
    lineHeight: "1.6",
    color:"black"
  };

  return (
    <div style={containerStyles}>
      <h1 style={headingStyles}>About Us</h1>
      <p style={paragraphStyles}>
        Welcome to <b> Beach Resort </b> – your destination for [brief description of what your website offers]. We are dedicated to [insert your mission or purpose] and committed to providing [describe the value or benefit visitors can gain]. At [Your Website Name], we strive for [quality, innovation, or uniqueness]. Our team works to ensure [website name] remains a trusted source for [main content or services]. Whether you're [describe target audience], [website name] is designed with you in mind.
      </p>
      <p style={paragraphStyles}>
        Explore Beach Resort and discover the unique aspects or offerings that set us apart. Thank you for choosing Beach Resort!
      </p>
    </div>
  );
};

export default About;
