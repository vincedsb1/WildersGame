import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import cup from "../../../assets/LeaderBoard/cup.png";

function Results({ pseudo }) {
  const results = [
    {
      date: "2023/04/06",
      time: "15:26",
      name: "Lucas",
      points: 2,
    },
    {
      date: "2023/04/02",
      time: "13:27",
      name: "Jeremy",
      points: 1,
    },
    {
      date: "2023/03/03",
      time: "09:57",
      name: "Antonin",
      points: 1,
    },
    {
      date: "2023/04/01",
      time: "11:54",
      name: "Marah",
      points: 0,
    },
  ];

  const location = useLocation();
  const currentDate = new Date();
  const currentDateString = currentDate.toLocaleDateString();
  const currentTimeString = currentDate.toLocaleTimeString();

  const actualScore = {
    date: currentDateString,
    time: currentTimeString.replace(/(.*)\D\d+/, "$1"),
    name: pseudo,
    points: location.state.resultat,
  };

  results.push(actualScore);

  const bestScore = results.sort((a, b) => (a.points < b.points ? 1 : -1));

  const [bestScoreReached, setBestScoreReached] = useState(false);

  if (bestScore[0].name === pseudo && !bestScoreReached) {
    setBestScoreReached(true);
  }

  return (
    <div className="resultsCongratsCupScores">
      <div className="congratulation">
        <h1>Well done {pseudo}!</h1>
      </div>
      <div className="cupImage">
        <img src={cup} alt="cup" />
      </div>
      <div className="results">
        <div className="result" id="top1">
          <div className="resultNameTime" id="top1NameTime">
            <div className="resultName">{bestScore[0].name}</div>
            <div className="resultTime" id="top1Time">
              {bestScore[0].date}&ensp;{bestScore[0].time}
            </div>
          </div>
          <div className="resultPoints" id="top1Points">
            <p>{bestScore[0].points}&ensp;pts</p>
          </div>
        </div>

        <div className="result">
          <div className="resultNameTime">
            <div className="resultName">{bestScore[1].name}</div>
            <div className="resultTime">
              {bestScore[1].date}&ensp;{bestScore[1].time}
            </div>
          </div>
          <div className="resultPoints">
            <p>{bestScore[1].points}&ensp;pts</p>
          </div>
        </div>

        <div className="result">
          <div className="resultNameTime">
            <div className="resultName">{bestScore[2].name}</div>
            <div className="resultTime">
              {bestScore[2].date}&ensp;{bestScore[2].time}
            </div>
          </div>
          <div className="resultPoints">
            <p>{bestScore[2].points}&ensp;pts</p>
          </div>
        </div>

        <div className="result">
          <div className="resultNameTime">
            <div className="resultName">{bestScore[3].name}</div>
            <div className="resultTime">
              {bestScore[3].date}&ensp;{bestScore[3].time}
            </div>
          </div>
          <div className="resultPoints">
            <p>{bestScore[3].points}&ensp;pts</p>
          </div>
        </div>
      </div>
      {bestScoreReached && <Confetti />}
      <br />
    </div>
  );
}

Results.propTypes = {
  pseudo: PropTypes.string.isRequired,
};

export default Results;
