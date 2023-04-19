import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Results from "./Results/Results";
import Restart from "./Restart/Restart";
import Quit from "./Quit/Quit";

function LeaderBoard({ pseudo }) {
  return (
    <div className="mainContainer">
      <div className="leaderBoard">
        <Results pseudo={pseudo} />
        <div className="bouton">
          <Link to="/game">
            <Restart />
          </Link>
          <Link to="/">
            <Quit />
          </Link>
        </div>
      </div>
    </div>
  );
}

LeaderBoard.propTypes = {
  pseudo: PropTypes.string.isRequired,
};

export default LeaderBoard;
