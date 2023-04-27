import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Results from "./Results/Results";
import Restart from "./Restart/Restart";
import Quit from "./Quit/Quit";

function LeaderBoard({ pseudo, selectedAvatar }) {
  console.info(
    "%c%s",
    "color: #ff0000",
    console.info(`Props selectedAvatar : ${selectedAvatar}`)
  );
  return (
    <div className="mainContainer">
      <div className="leaderBoard">
        <div className="resultContainer">
          <Results pseudo={pseudo} selectedAvatar={selectedAvatar} />
          <div className="endButons">
            <Link to="/game">
              <Restart />
            </Link>
            <Link to="/">
              <Quit />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

LeaderBoard.propTypes = {
  pseudo: PropTypes.string.isRequired,
  selectedAvatar: PropTypes.string.isRequired,
};

export default LeaderBoard;
