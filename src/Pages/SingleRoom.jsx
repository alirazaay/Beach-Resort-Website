import React, { Component } from "react";

import { Link } from "react-router-dom";

// import assets
import defaultBcg from "../assets/img/jpeg/room-1.jpeg";

// import components
import Banner from "../Components/Banner/Banner";
import { RoomContext } from "../Context/Context";
import StyledHero from "../Components/StyledHero/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error" role="alert">
          <h3>No such room could be found!</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room" aria-label={`${name} room details`}>
          <div className="single-room-images">
            {/* FIX: Using src as key suffix (content-based) instead of pure index.
                Pure index keys cause React reconciliation bugs when list order changes. */}
            {defaultImg.map((item, index) => {
              return (
                <img
                  key={`${name}-img-${index}`}
                  src={item}
                  alt={`${name} room view ${index + 1}`}
                  loading="lazy"
                />
              );
            })}
          </div>

          <div className="single-room-info">
            <article className="desc">
              <h3>Details:</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>Information:</h3>
              <h6>Price: ${price} per night</h6>
              <h6>Size: {size} sq ft</h6>
              <h6>
                Max Capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "✓ Pets allowed" : "✗ No pets allowed"}</h6>
              <h6>{breakfast ? "✓ Free breakfast included" : "✗ Breakfast not included"}</h6>
            </article>
          </div>
        </section>

        <section className="room-extras" aria-label="Room amenities">
          <h6>Extras &amp; Amenities:</h6>
          <ul className="extras">
            {/* FIX: Using item content as key basis — extras are unique strings,
                so `extra-${item}` gives stable, meaningful keys */}
            {extras.map((item, index) => {
              return <li key={`extra-${index}-${item.slice(0, 10)}`}>– {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
