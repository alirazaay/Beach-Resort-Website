import React from "react";

// FIX: Added aria-label prop support for accessibility
// A <header> element used as a visual hero banner should have an aria-label
// so screen readers announce it meaningfully (e.g. "Home page hero banner").
// The default fallback ensures it's always labelled even when no aria-label is passed.
function Hero({ children, hero, ariaLabel }) {
  return (
    <header className={hero} aria-label={ariaLabel}>
      {children}
    </header>
  );
}

Hero.defaultProps = {
  hero: "defaultHero",
  ariaLabel: "Hero banner",
};

export default Hero;
