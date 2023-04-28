import React from "react";
import PropTypes from "prop-types";

function Genre({ setRequest, request, handleClickGenreClass }) {
  const handleGenre = (filterGenre) => {
    setRequest(request + filterGenre);
    handleClickGenreClass();
  };

  const genres = [
    { name: "None 🍄", link: "&with_original_language=en" },
    { name: "French 🥐", link: "&with_original_language=fr" },
    { name: "Action 🔥", link: "&with_original_language=en&with_genres=28" },
    { name: "Thriller 👮", link: "&with_original_language=en&with_genres=53" },
    { name: "Comedy 😊", link: "&with_original_language=en&with_genres=35" },
    {
      name: "Science Fiction 🧟",
      link: "&with_original_language=en&with_genres=878",
    },
  ];

  return (
    <div className="genre">
      {genres.map((genre) => (
        <button
          key={genre.name}
          type="button"
          id="genre"
          onClick={() => handleGenre(genre.link)}
        >
          {genre.name}
        </button>
      ))}
      <br />
    </div>
  );
}

Genre.propTypes = {
  setRequest: PropTypes.func.isRequired,
  request: PropTypes.string.isRequired,
  handleClickGenreClass: PropTypes.func.isRequired,
};

export default Genre;
