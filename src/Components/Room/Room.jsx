import React from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// import assets
import defaultImg from "../../assets/img/jpeg/room-1.jpeg";

// import prop-types
import PropTypes from "prop-types";

export default function Room({ room }) {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img
          src={images[0] || defaultImg}
          alt={`${name} room`}
          loading="lazy"
        />

        <div className="price-top">
          <h6>$ {price}</h6>
          <p>per night</p>
        </div>

        <Link to={`/rooms/${slug}`} className="btn-primary room-link" aria-label={`View details for ${name} room`}>
          Details
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

// FIX: Was Room.prototype (completely wrong — overwrites the Function prototype object)
// Must be Room.propTypes for React's PropTypes validation to work
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
