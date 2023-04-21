import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Pseudo from "./Pseudo/Pseudo";
import Difficulty from "./Difficulty/Difficulty";
import Musique from "../Musique/Musique";

function GameMode({ setMode, setPseudo }) {
  return (
    <div className="mainContainer">
      <div className="gameMode">
        <div className="maintTitleModeContainer">
          <div className="mainTitleMode">
            <h1 className="h1GameMode" id="tilted">
              Wilder
            </h1>
            <h1 className="h1GameMode">&nbsp;&nbsp;Game</h1>
          </div>
        </div>{" "}
        <div className="Musique">
          <Musique />
        </div>
        <div className="pseudo">
          <Pseudo setPseudo={setPseudo} />
        </div>
        <div className="difficultyContainer">
          <div className="difficultyContainer">
            <Link to="/countdown">
              <Difficulty setMode={setMode} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

GameMode.propTypes = {
  setMode: PropTypes.func.isRequired,
  setPseudo: PropTypes.func.isRequired,
};

export default GameMode;
