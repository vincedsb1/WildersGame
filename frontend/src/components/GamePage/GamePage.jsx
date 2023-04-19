import { useState } from "react";
import PropTypes from "prop-types";
import Score from "./Header/Score";
import Timer from "./Header/Timer";
import BlocDeReponse from "./BlocDeReponse/BlocDeReponse";

function GamePage({ title, date, poster, getMovie, mode }) {
  const [resultat, setResultat] = useState(0);

  const [disableButton, setDisableButton] = useState(false);

  console.info(date);
  console.info(title);

  const generateNewQuestion = (e) => {
    getMovie();
    e.target.className = "Reponse-container";
    setDisableButton(false);
  };
  const handleClick = (e) => {
    setDisableButton(true);

    if (Number(e.target.id) === date) {
      setResultat(resultat + 1);
    }

    setTimeout(() => {
      generateNewQuestion(e);
      console.info("timeout");
    }, 1500);
  };

  return (
    <div className="mainContainer">
      <div className="GamePage">
        <div className="header">
          <div className="navScore">
            <Score resultat={resultat} />
          </div>
          <div className="navTimer">
            <Timer resultat={resultat} />
          </div>{" "}
        </div>
        <div className="afficheContainer">
          <img src={poster} alt="" />
        </div>

        <div className="movieTitle">
          <h2>{title}</h2>
        </div>

        <BlocDeReponse
          bonneReponse={date}
          handleClick={handleClick}
          disableButton={disableButton}
          mode={mode}
        />
      </div>
    </div>
  );
}

GamePage.propTypes = {
  title: PropTypes.string.isRequired,
  getMovie: PropTypes.func.isRequired,
  date: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  mode: PropTypes.number.isRequired,
};

export default GamePage;
