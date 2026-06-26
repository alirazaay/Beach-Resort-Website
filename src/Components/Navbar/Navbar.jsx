// Navbar.jsx
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/svg/logo.svg";
import { FaAlignRight, FaTimes } from "react-icons/fa";

/**
 * FEATURE: Active NavLink highlighting
 * -------------------------------------
 * Switched from <Link> to <NavLink> (both from react-router-dom).
 *
 * NavLink is identical to Link EXCEPT it automatically adds an "active"
 * CSS class to the anchor when the current URL matches its `to` prop.
 *
 * We use `activeClassName="nav-active"` — defined in App.css — to apply
 * a gold underline and color change to the currently active page link.
 *
 * The `exact` prop on the Home link prevents "/" from matching every route
 * (without exact, "/" matches "/rooms", "/about", etc.).
 *
 * FEATURE: Toggle icon changes between ☰ (open) and ✕ (close)
 * Improves UX by making the nav state visually clear on mobile.
 */
export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  // Close mobile nav when a link is clicked (UX improvement)
  handleLinkClick = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="nav-center">
          <div className="nav-header">
            <NavLink exact to="/" aria-label="Beach Resort — Go to homepage">
              <img src={Logo} alt="Beach Resort logo" />
            </NavLink>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
              aria-expanded={isOpen}
              aria-controls="nav-menu"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? (
                <FaTimes className="nav-icon" aria-hidden="true" />
              ) : (
                <FaAlignRight className="nav-icon" aria-hidden="true" />
              )}
            </button>
          </div>

          <ul
            id="nav-menu"
            className={isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="nav-active"
                onClick={this.handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rooms"
                activeClassName="nav-active"
                onClick={this.handleLinkClick}
              >
                Rooms
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="nav-active"
                onClick={this.handleLinkClick}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="nav-active"
                onClick={this.handleLinkClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
