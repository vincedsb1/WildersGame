import React, { useState } from "react";
import PropTypes from "prop-types";
import Score from "./Header/Score";
import Timer from "./Header/Timer";
import BlocDeReponse from "./BlocDeReponse/BlocDeReponse";

function GamePage({ title, date, poster, getMovie }) {
  const [resultat, setResultat] = useState(0);

  return (
    <div className="GamePage">
      <nav>
        <div className="navScore">
          <Score resultat={resultat} />
        </div>
        <div className="navTimer">
          <Timer />
        </div>{" "}
      </nav>
      <div className="afficheContainer">
        <img src={poster} alt="" />
      </div>

      <h2>{title}</h2>

      <div className="reponse">
        <BlocDeReponse
          date={date}
          setResultat={setResultat}
          resultat={resultat}
          getMovie={getMovie}
        />
      </div>
    </div>
  );
}
GamePage.propTypes = {
  title: PropTypes.string.isRequired,
  // overview: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  getMovie: PropTypes.func.isRequired,
  poster: PropTypes.string.isRequired,
};

export default GamePage;
