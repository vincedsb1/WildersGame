import React from "react";
import PropTypes from "prop-types";

function MovieDetails({ title, image, overview, date }) {
  return (
    <div>
      {title} {image} {overview} {date}
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
