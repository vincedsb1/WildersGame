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
  const storedResults = JSON.parse(
    localStorage.getItem("storedResults")
  ).filter(
    (el, index, arr) => arr.findIndex((t) => t.name === el.name) === index
  );

  const handleRewardPhrase = () => {
    switch (
      storedResults.indexOf(storedResults.find((el) => el.name === pseudo))
    ) {
      case 0:
        return <h1>Best score {pseudo}!</h1>;
      case 1:
        return <h1>Well done {pseudo}!</h1>;
      case 2:
        return <h1>Well done {pseudo}!</h1>;
      case 3:
        return <h1>Well done {pseudo}!</h1>;
      default:
        return <h1>Try again {pseudo}!</h1>;
    }
  };

  return (
    <div className="resultsCongratsCupScores">
      <div className="congratulation">{handleRewardPhrase()}</div>
      <div className="cupImage">
        <img src={cup} alt="cup" />
      </div>
      <div className="results">
        {storedResults.slice(0, 4).map((el) => {
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
      {results[0].name === pseudo && (
        <Confetti
          numberOfPieces={2000}
          recycle={false}
          tweenDuration={10000}
          initialVelocityY={16}
        />
      )}
      <br />
    </div>
  );
}

Results.propTypes = {
  pseudo: PropTypes.string.isRequired,
};

export default Results;
