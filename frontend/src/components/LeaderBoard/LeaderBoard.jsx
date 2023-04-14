import React from "react";
import { Link } from "react-router-dom";
import Results from "./Results/Results";
import Restart from "./Restart/Restart";
import Quit from "./Quit/Quit";

function LeaderBoard() {
  return (
    <div className="leaderBoard">
      <Results />
      <div className="bouton">
        <Link to="/game">
          <Restart />
        </Link>
        <Link to="/">
          <Quit />
        </Link>
      </div>
    </div>
  );
}

export default LeaderBoard;
