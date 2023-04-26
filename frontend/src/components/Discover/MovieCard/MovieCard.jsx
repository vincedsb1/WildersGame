import React from "react";
import PropTypes from "prop-types";

function MovieCard({ title, image }) {
  return (
    <div className="MovieCard">
      <img src={image} alt="" />
      <p>{title.length > 30 ? `${title.slice(0, 25)}...` : title}</p>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MovieCard;
