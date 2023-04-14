import React from "react";
import PropTypes from "prop-types";
import Score from "./Header/Score";
import Timer from "./Header/Timer";
import BlocDeReponse from "./BlocDeReponse/BlocDeReponse";

function GamePage({ title, date, poster }) {
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
        <img src={poster} alt="" />
      </div>

      <h2>{title}</h2>

      <BlocDeReponse date={date} />
    </div>
  );
}
GamePage.propTypes = {
  title: PropTypes.string.isRequired,
  // overview: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,

  poster: PropTypes.string.isRequired,
};

export default GamePage;
