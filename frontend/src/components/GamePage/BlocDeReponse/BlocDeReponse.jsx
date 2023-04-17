import React from "react";
import PropTypes from "prop-types";

function BlocDeReponse({ date, getMovie, setResultat, resultat }) {
  const bonneReponse = date;
  const minYear = bonneReponse - 20;
  const maxYear = bonneReponse + 20;

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

  const handleClick = (e) => {
    if (Number(e.target.id) === bonneReponse) {
      e.target.style.background = "green";
      setResultat(resultat + 1);
    } else {
      e.target.style.background = "red";
    }

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
    
    <div className="bloc-response">{createReponse()}</div>
  );
}

BlocDeReponse.propTypes = {
  getMovie: PropTypes.func.isRequired,
  setResultat: PropTypes.func.isRequired,
  date: PropTypes.number.isRequired,
  resultat: PropTypes.number.isRequired,
};

export default BlocDeReponse;
