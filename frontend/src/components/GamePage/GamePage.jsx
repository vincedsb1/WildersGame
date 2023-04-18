import React from "react";
import PropTypes from "prop-types";
import Score from "./Header/Score";
import Timer from "./Header/Timer";
import BlocDeReponse from "./BlocDeReponse/BlocDeReponse";

function GamePage({ title, date, poster, getMovie, mode }) {
  return (
    <div className="mainContainer">
      <div className="GamePage">
        <div className="header">
          <div className="navScore">
            <Score />
          </div>
          <div className="navTimer">
            <Timer />
          </div>{" "}
        </div>
        <div className="afficheContainer">
          <img src={poster} alt="" />
        </div>

        <div className="movieTitle">
          <h2>{title}</h2>
        </div>

        <div className="responses">
          <BlocDeReponse date={date} getMovie={getMovie} mode={mode} />
        </div>
      </div>
    </div>
  );
}
GamePage.propTypes = {
  title: PropTypes.string.isRequired,
  getMovie: PropTypes.func.isRequired,
  date: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  mode: PropTypes.number.isRequired,
};

export default GamePage;
