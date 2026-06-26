// Navbar.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/svg/logo.svg";
import { FaAlignRight } from "react-icons/fa";

// FIX: Removed unused `import About` — it was imported but never rendered here.
// About is correctly used as a Route page in App.js

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" aria-label="Beach Resort - Go to homepage">
              <img src={Logo} alt="Beach Resort logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
              aria-expanded={this.state.isOpen}
              aria-controls="nav-menu"
              aria-label="Toggle navigation menu"
            >
              <FaAlignRight className="nav-icon" aria-hidden="true" />
            </button>
          </div>

          <ul
            id="nav-menu"
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
