import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import cup from "../../../assets/LeaderBoard/cup.png";

function Results({ pseudo }) {
  let results = JSON.parse(localStorage.getItem("storedResults"));
  if (!results) {
    results = [
      {
        date: "06/04/2023",
        time: "15:26",
        name: "Lucas",
        points: 2,
      },
      {
        date: "02/04/2023",
        time: "13:27",
        name: "Jeremy",
        points: 1,
      },
      {
        date: "03/03/2023",
        time: "09:57",
        name: "Antonin",
        points: 1,
      },
      {
        date: "01/04/2023",
        time: "11:54",
        name: "Marah",
        points: 0,
      },
    ];
  }

  const actualScore = {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().replace(/(.*)\D\d+/, "$1"),
    name: pseudo,
    points: useLocation().state.resultat,
  };

  results.push(actualScore);
  results.sort((a, b) => b.points - a.points);

  localStorage.setItem("storedResults", JSON.stringify(results));
  const storedResults = JSON.parse(localStorage.getItem("storedResults"));

  return (
    <div className="resultsCongratsCupScores">
      <div className="congratulation">
        <h1>Well done {pseudo}!</h1>
      </div>
      <div className="cupImage">
        <img src={cup} alt="cup" />
      </div>
      <div className="results">
        {storedResults
          .filter(
            (el, index, arr) =>
              arr.findIndex((t) => t.name === el.name) === index
          )
          .slice(0, 4)
          .map((el) => {
            return (
              <div className="result">
                <div className="resultNameTime">
                  <div className="resultName">{el.name}</div>
                  <div className="resultTime">
                    {el.date}&ensp;{el.time}
                  </div>
                </div>
                <div className="resultPoints">
                  <p>{el.points}&ensp;pts</p>
                </div>
              </div>
            );
          })}
      </div>
      {results[0].name === pseudo && <Confetti />}
      <br />
    </div>
  );
}

Results.propTypes = {
  pseudo: PropTypes.string.isRequired,
};

export default Results;
