import React from "react";

function GamePage() {
  return (
    <div className="GamePage">
      <nav>
        <div className="navScore">0 pts</div>
        <div className="navTimer">00:19</div>{" "}
      </nav>
      <div className="afficheContainer">
        <img
          src="https://image.tmdb.org/t/p/original/ahMxyHMSJXingQr4yJBMzMU9k42.jpg"
          alt=""
        />
      </div>
      <h2>It's a me, mario !</h2>
    </div>
  );
}

export default GamePage;
