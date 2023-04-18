import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Pseudo from "./Pseudo/Pseudo";
import Difficulty from "./Difficulty/Difficulty";

function GameMode({ setMode }) {
  return (
    <div className="gameMode">
      <h1>Wilder</h1>
      <h1>&nbsp;&nbsp;Game</h1>
      <Pseudo />
      <Link to="/countdown">
        <Difficulty setMode={setMode} />
      </Link>
    </div>
  );
}

GameMode.propTypes = {
  setMode: PropTypes.func.isRequired,
};

export default GameMode;
