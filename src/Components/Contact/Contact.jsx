// ContactUsComponent.jsx
import React from "react";
import facebookIcon from "../../assets/img/fb/fbicon.png"; // Replace with your Facebook icon image
import instagramIcon from "../../assets/img/insta/instaicon.jpeg"; // Replace with your Instagram icon image

const ContactUs = () => {
  const contactUsStyles = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    color: "black", // Set text color to black
  };

  const headingStyles = {
    color: "#333",
    marginBottom: "30px",
  };

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const labelStyles = {
    marginTop: "10px",
    fontWeight: "bold",
  };

  const inputStyles = {
    width: "100%",
    padding: "10px",
    margin: "5px 0 15px 0",
    border: "5px solid black",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  const buttonStyles = {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "10px",
  };

  const socialMediaContainerStyles = {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    
  };

  const socialMediaIconStyles = {
    width: "40px", // Adjust the width as needed
    height: "40px", // Adjust the height as needed
  };

  return (
    <div style={contactUsStyles}>
      <h1 style={headingStyles}>Contact Us</h1>

      {/* Contact Form */}
      <form style={formStyles}>
        <label htmlFor="email" style={labelStyles}>
          Email:
        </label>
        <input type="email" id="email" name="email" style={inputStyles} required />

        <label htmlFor="username" style={labelStyles}>
          Username:
        </label>
        <input type="text" id="username" name="username" style={inputStyles} required />

        <label htmlFor="description" style={labelStyles}>
          Description:
        </label>
        <textarea id="description" name="description" rows="4" style={inputStyles} required />

        <button type="submit" style={buttonStyles}>
          Submit
        </button>
      </form>
      <div><b> 0304-4888932</b></div> 
      {/* Additional Contact Information */}
      <div style={socialMediaContainerStyles}>
        
          <img src={facebookIcon} alt="Facebook" style={socialMediaIconStyles} />
          <img src={instagramIcon} alt="Instagram" style={socialMediaIconStyles} />
      </div>
    </div>
  );
};

export default ContactUs;
