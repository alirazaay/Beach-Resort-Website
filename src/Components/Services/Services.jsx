import React from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

// FIX: Converted from class to functional component (no state dependency on lifecycle needed)
// The services data is static — it never changes, so storing it in component state was wasteful.
// Moved to a plain const outside the component so it's not re-created on every render.
const services = [
  {
    icon: <FaCocktail aria-hidden="true" />,
    title: "Free Cocktails",
    info: "Sip on handcrafted cocktails at our beachside bar. Whether you prefer tropical blends or classic favorites, our expert mixologists craft the perfect drink for every moment.",
  },
  {
    icon: <FaHiking aria-hidden="true" />,
    title: "Endless Hiking",
    info: "Explore scenic coastal trails and lush hillside paths. Our guided hiking experiences take you through breathtaking landscapes, from sunrise summit walks to sunset beachfront routes.",
  },
  {
    icon: <FaShuttleVan aria-hidden="true" />,
    title: "Free Shuttle",
    info: "Enjoy complimentary airport transfers and daily shuttle service to local attractions, shopping districts, and cultural landmarks — travel in comfort at no extra cost.",
  },
  {
    icon: <FaBeer aria-hidden="true" />,
    title: "Stocked Bar",
    info: "Our fully stocked bar features an extensive selection of local craft beers, fine wines, and premium spirits. Relax and enjoy your favorites with an ocean view backdrop.",
  },
];

// FIX: article className was "services" (same as the outer <section> className)
// This caused CSS rules targeting `.services` to apply to both the section AND each article,
// creating style conflicts. The CSS already defines `.service` (singular) for article cards.
export default function Services() {
  return (
    <section className="services" aria-labelledby="services-title">
      <Title title="Our Services" id="services-title" />

      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
