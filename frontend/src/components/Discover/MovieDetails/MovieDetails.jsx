import React from "react";
import PropTypes from "prop-types";

function MovieDetails({ title, image, overview, date }) {
  return (
    <div className="MovieDetails">
      <h1>{title.length > 19 ? `${title.slice(0, 16)}...` : title}</h1>
      <p className="datePara">{date.slice(0, 4)}</p>
      <img src={image} alt="" />
      <div className="descPara">
        <p>
          {overview.length > 400 ? `${overview.slice(0, 400)}...` : overview}
        </p>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MovieDetails;
