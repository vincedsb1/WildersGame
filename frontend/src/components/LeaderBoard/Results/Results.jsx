import React from "react";
import PropTypes from "prop-types";
import cup from "../../../assets/LeaderBoard/cup.png";

function Results({ pseudo }) {
  const results = [
    {
      date: "2023/04/06",
      time: "15:26",
      name: "Lucas",
      points: 15,
    },
    {
      date: "2023/04/02",
      time: "13:27",
      name: "Jeremy",
      points: 1452,
    },
    {
      date: "2023/03/03",
      time: "09:57",
      name: "Antonin",
      points: 11,
    },
    {
      date: "2023/04/01",
      time: "11:54",
      name: "Marah",
      points: 5,
    },
  ];

  const bestScore = results.sort((a, b) => (a.points < b.points ? 1 : -1));

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
    </div>
  );
}

Results.propTypes = {
  pseudo: PropTypes.string.isRequired,
};

export default Results;
