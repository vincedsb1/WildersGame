import React from "react";
import PropTypes from "prop-types";

function Difficulty({ setMode }) {
  const handleClick = (num) => {
    setMode(num);
  };

  return (
    <div className="difficultyTitle">
      <p>Choose your level</p>
      <div className="difficulty">
        <button type="button" id="difficulty" onClick={() => handleClick(20)}>
          Easy 🐣
        </button>
        <br />
        <button type="button" id="difficulty" onClick={() => handleClick(10)}>
          Normal 🍵
        </button>
        <br />
        <button type="button" id="difficulty" onClick={() => handleClick(5)}>
          Hard 🤖
        </button>
      </div>
    </div>
  );
}

Difficulty.propTypes = {
  setMode: PropTypes.func.isRequired,
};

export default Difficulty;
