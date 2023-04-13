import React from "react";
import PropTypes from "prop-types";
import Score from "./Header/Score";
import Timer from "./Header/Timer";

function GamePage({ title, date, getMovie }) {
  return (
    <div className="GamePage">
      <nav>
        <div className="navScore">
          <Score />
        </div>
        <div className="navTimer">
          <Timer />
        </div>{" "}
      </nav>
      <div className="afficheContainer">
        <img
          src="https://image.tmdb.org/t/p/original/ahMxyHMSJXingQr4yJBMzMU9k42.jpg"
          alt=""
        />
      </div>
      <h2>It's a me, mario !</h2>
      <button type="button" onClick={getMovie}>
        {" "}
        {/* TEST BOUTON */}
        TEST
      </button>
      <p>
        {title}
        {date}
      </p>{" "}
      {/* TEST BOUTON */}
    </div>
  );
}
GamePage.propTypes = {
  title: PropTypes.string.isRequired,
  // overview: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  getMovie: PropTypes.func.isRequired,
};

export default GamePage;
