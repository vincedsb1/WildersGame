import React from "react";
import Score from "./Header/Score";
import Timer from "./Header/Timer";
import BlocDeReponse from "./BlocDeReponse/BlocDeReponse";

function GamePage() {
  return (
    <div className="GamePage">
      <nav>
        <div className="navScore">
          <Score />
        </div>
        <div className="navTimer">
          <Timer />
        </div>{" "}
      </nav>
      <div className="afficheContainer">
        <img
          src="https://image.tmdb.org/t/p/original/ahMxyHMSJXingQr4yJBMzMU9k42.jpg"
          alt=""
        />
      </div>
      <h2>It's a me, mario !</h2>
      <BlocDeReponse />
    </div>
  );
}

export default GamePage;
