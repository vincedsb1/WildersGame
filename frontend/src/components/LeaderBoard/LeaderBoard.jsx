import React from "react";
import Results from "./Results/Results";
import Restart from "./Restart/Restart";

function LeaderBoard() {
  return (
    <div className="leaderBoard">
      <Results />
      <Restart />
    </div>
  );
}

export default LeaderBoard;
