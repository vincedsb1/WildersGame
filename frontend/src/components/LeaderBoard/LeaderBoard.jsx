import React from "react";
import { Link } from "react-router-dom";
import Results from "./Results/Results";
import Restart from "./Restart/Restart";

function LeaderBoard() {
  return (
    <div className="leaderBoard">
      <Results />
      <Link to="/">
        <Restart />
      </Link>
      
    </div>
  );
}

export default LeaderBoard;
