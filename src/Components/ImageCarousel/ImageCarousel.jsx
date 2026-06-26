import React, { useState, useCallback } from "react";
import "./ImageCarousel.css";

/**
 * ImageCarousel
 * -------------
 * A lightweight, dependency-free image carousel/gallery component.
 *
 * Features:
 *  - Displays one large "active" image
 *  - Thumbnail strip below to jump directly to any image
 *  - Prev / Next arrow buttons for sequential navigation
 *  - Keyboard accessible (←/→ arrows via onKeyDown)
 *  - Smooth CSS fade transition between slides
 *  - No external library needed (no Swiper, no Slick)
 *
 * Props:
 *  - images: string[]   — array of image URLs
 *  - name: string       — room name (used for accessible alt text)
 */
export default function ImageCarousel({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Guard: if no images, render nothing
  if (!images || images.length === 0) return null;

  const goTo = useCallback(
    (index) => {
      // Wrap around: if past the end go to start, and vice versa
      const total = images.length;
      setActiveIndex(((index % total) + total) % total);
    },
    [images.length]
  );

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  };

  return (
    <div
      className="carousel"
      role="region"
      aria-label={`${name} room image gallery`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* ── Main large image ─────────────────────────── */}
      <div className="carousel-main">
        {images.map((img, i) => (
          <img
            key={`${name}-carousel-${i}`}
            src={img}
            alt={`${name} room — view ${i + 1} of ${images.length}`}
            className={`carousel-slide ${i === activeIndex ? "carousel-slide--active" : ""}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}

        {/* Prev / Next buttons — only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              className="carousel-btn carousel-btn--prev"
              onClick={goPrev}
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button
              className="carousel-btn carousel-btn--next"
              onClick={goNext}
              aria-label="Next image"
            >
              &#8250;
            </button>

            {/* Slide counter badge */}
            <div className="carousel-counter" aria-live="polite" aria-atomic="true">
              {activeIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* ── Thumbnail strip ──────────────────────────── */}
      {images.length > 1 && (
        <div className="carousel-thumbs" role="tablist" aria-label="Select image">
          {images.map((img, i) => (
            <button
              key={`thumb-${i}`}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`View image ${i + 1}`}
              className={`carousel-thumb ${i === activeIndex ? "carousel-thumb--active" : ""}`}
              onClick={() => goTo(i)}
            >
              <img src={img} alt="" aria-hidden="true" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
