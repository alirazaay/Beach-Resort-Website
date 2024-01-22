import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "For those seeking excitement, our resort offers a myriad of water sports, excursions, and recreational activities. Whether it's diving into the azure waters, exploring the local culture, or simply lounging by the pool, there's something for every adventurer.",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "For those seeking excitement, our resort offers a myriad of water sports, excursions, and recreational activities. Whether it's diving into the azure waters, exploring the local culture, or simply lounging by the pool, there's something for every adventurer",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Rejuvenate your mind, body, and soul at our world-class spa facilities. Our skilled therapists offer a range of treatments inspired by traditional healing practices, providing a holistic approach to wellness against the backdrop of the soothing ocean waves",
      },
      {
        icon: <FaBeer />,
        title: "storages beer",
        info:
          "Wake up to breathtaking views of the ocean or lush gardens, creating a haven of relaxation.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
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
}
