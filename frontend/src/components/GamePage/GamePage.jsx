import { useState } from "react";
import PropTypes from "prop-types";
import Score from "./Header/Score";
import Timer from "./Header/Timer";
import BlocDeReponse from "./BlocDeReponse/BlocDeReponse";

function GamePage({ title, date, poster, getMovie, mode, release }) {
  const [resultat, setResultat] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const generateNewQuestion = () => {
    getMovie();
    setDisableButton(false);
  };
  const handleClick = (e) => {
    setDisableButton(true);

    if (Number(e.target.id) === date) {
      setResultat(resultat + 1);
    }

    setTimeout(() => {
      generateNewQuestion(e);
    }, 800);
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
          <img src={poster} alt="" key={poster} />
        </div>

        <div className="movieTitle" key={title}>
          <h2>{title.length > 30 ? `${title.slice(0, 30)}...` : title}</h2>
        </div>

        <BlocDeReponse
          bonneReponse={date}
          handleClick={handleClick}
          disableButton={disableButton}
          mode={mode}
          release={release}
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
  release: PropTypes.string.isRequired,
};

export default GamePage;
