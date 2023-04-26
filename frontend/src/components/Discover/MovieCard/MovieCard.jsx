import React from "react";
import PropTypes from "prop-types";

function MovieCard({ title, image, overview, date, handleClick }) {
  return (
    <div
      className="MovieCard"
      role="button"
      tabIndex={0}
      onKeyDown={() => handleClick(title, image, overview, date)}
      onClick={() => handleClick(title, image, overview, date)}
    >
      <img src={image} alt="" />
      <p>{title.length > 30 ? `${title.slice(0, 25)}...` : title}</p>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MovieCard;
