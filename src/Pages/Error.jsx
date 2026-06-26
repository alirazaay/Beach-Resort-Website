import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

/**
 * FEATURE: Animated 404 Error Page
 * ----------------------------------
 * Replaces the plain "404 | page not found" banner with a full-screen
 * animated page that:
 *   - Shows a large animated "404" with a floating wave effect
 *   - Has a pulsing anchor/buoy illustration made with pure CSS
 *   - Displays a friendly message and two navigation buttons
 *   - Uses the resort's brand colour palette (--primaryColor)
 *   - Fully accessible: has role="main", aria-label, and descriptive text
 *
 * Why not use the Hero component here?
 *   The Error page deserves its own full-screen treatment that focuses the
 *   user on recovery actions rather than a background image.
 */
function Error() {
  return (
    <main className="error-page" role="main" aria-label="Page not found">
      {/* Animated wave background */}
      <div className="error-waves">
        <div className="error-wave error-wave--1"></div>
        <div className="error-wave error-wave--2"></div>
        <div className="error-wave error-wave--3"></div>
      </div>

      <div className="error-content">
        {/* Animated buoy / anchor illustration */}
        <div className="error-buoy" aria-hidden="true">
          <div className="error-buoy__body"></div>
          <div className="error-buoy__stripe"></div>
          <div className="error-buoy__top"></div>
          <div className="error-buoy__chain"></div>
        </div>

        {/* Giant animated 404 */}
        <h1 className="error-code" aria-label="Error 404">
          <span className="error-digit error-digit--1">4</span>
          <span className="error-digit error-digit--2">0</span>
          <span className="error-digit error-digit--3">4</span>
        </h1>

        <h2 className="error-title">Lost at Sea!</h2>
        <p className="error-message">
          The page you're looking for has drifted away. Let us help you
          navigate back to shore.
        </p>

        <div className="error-actions">
          <Link to="/" className="btn-primary error-btn">
            ⚓ Return Home
          </Link>
          <Link to="/rooms" className="btn-primary error-btn error-btn--outline">
            🏖️ Browse Rooms
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Error;
