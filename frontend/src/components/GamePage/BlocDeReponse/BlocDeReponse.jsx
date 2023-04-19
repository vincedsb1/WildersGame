import React from "react";
import PropTypes from "prop-types";

function BlocDeReponse({ date, getMovie, mode }) {
  const bonneReponse = date;
  const minYear = bonneReponse - mode;
  const maxYear = bonneReponse + mode;

  const tableauDeReponse = [bonneReponse];

  while (tableauDeReponse.length < 4) {
    const MauvaiseReponse = Math.floor(
      Math.random() * (maxYear - minYear + 1) + minYear
    );
    if (
      tableauDeReponse.find((el) => el === MauvaiseReponse) === undefined &&
      MauvaiseReponse < 2024
    ) {
      tableauDeReponse.push(MauvaiseReponse);
    }
  }

  // function delay(time) {
  //  return new Promise((resolve) => setTimeout(resolve, time));
  // }

  const handleClick = (e) => {
    if (Number(e.target.id) === bonneReponse) {
      e.target.style.background = "green";
    } else {
      e.target.style.background = "red";
    }
    // delay(1000).then(() => getMovie());
    return getMovie();
  };

  const createReponse = () =>
    tableauDeReponse
      .sort((a, b) => a - b)
      .map((ele) => {
        return (
          <button
            className="Reponse-container"
            onClick={handleClick}
            type="button"
            id={ele.toString()}
            key={ele}
          >
            {ele}
          </button>
        );
      });

  return (
    // bloc des 4 bulles ou les reponses vont s'afficher.
    <div className="bloc-response">{createReponse()}</div>
  );
}

BlocDeReponse.propTypes = {
  date: PropTypes.number.isRequired,
  getMovie: PropTypes.func.isRequired,
};

export default BlocDeReponse;
