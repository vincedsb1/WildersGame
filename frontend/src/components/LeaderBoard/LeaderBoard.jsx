import React from "react";
import Results from "./Results/Results";
import Restart from "./Restart/Restart";
import "./LeaderBoard.scss";

function LeaderBoard() {
  return (
    <div className="leaderBoard">
      <Results />
      <Restart />
    </div>
  );
}

export default LeaderBoard;
