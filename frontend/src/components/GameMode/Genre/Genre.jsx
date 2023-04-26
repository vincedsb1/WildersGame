import React from 'react';
import PropTypes from "prop-types";

const Genre = ({setRequest}) => {

    const handleGenre = (filterGenre) => {
        setRequest (request + filterGenre);
       };
    
    const filterGenre1 = "&with_original_language=en"
    const filterGenre2 = "&with_original_language=fr"
    const filterGenre3 = "&with_original_language=en&with_genres=28"
    const filterGenre4 = "&with_original_language=en&with_genres=53"
    const filterGenre5 = "&with_original_language=en&with_genres=35"
    const filterGenre6 = "&with_original_language=en&with_genres=878"

    return (
        <div className = "genre">
            <button type="button" id="genre" onClick={() => handleGenre(filterGenre1)}>
            None 🍄
            </button>
            <br />
            <button type="button" id="genre" onClick={() => handleGenre(filterGenre2)}>
            French 🥐
            </button>
            <br />
            <button type="button" id="genre" onClick={() => handleGenre(filterGenre3)}>
            Action 🔥
            </button>
            <br />
            <button type="button" id="genre" onClick={() => handleGenre(filterGenre4)}>
            Thriller 👮
            </button>
            <br />
            <button type="button" id="genre" onClick={() => handleGenre(filterGenre5)}>
            Comedy 😊
            </button>
            <br />
            <button type="button" id="genre" onClick={() => handleGenre(filterGenre6)}>
            Science Fiction 🧟
            </button>
        </div>
    );
};

Genre.propTypes = {
    setRequest: PropTypes.func.isRequired,
  };

export default Genre;