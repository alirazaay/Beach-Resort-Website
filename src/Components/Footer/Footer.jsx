import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <h2>Beach Resort | Luxury Hotel Rooms</h2>
      <p>
        &copy; <span>{year}</span>{" "}
        {/* FIX: Added href to anchor. An <a> with no href is invalid HTML
            and is not keyboard-focusable, breaking accessibility.
            Using a GitHub profile link here as a real destination. */}
        created by{" "}
        <a
          href="https://github.com/alirazaay"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visit Ali Raza's GitHub profile (opens in new tab)"
        >
          Ali Raza &amp; Sejal
        </a>
      </p>
    </footer>
  );
}
