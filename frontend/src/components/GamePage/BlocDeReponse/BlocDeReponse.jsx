import React from "react";
import PropTypes from "prop-types";

function BlocDeReponse({ date }) {
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

  // const handleClick = (e) => {
  //    console.log(e.target.id);
  // };

  const createReponse = () =>
    tableauDeReponse
      .sort((a, b) => a - b)
      .map((ele) => {
        return (
          <button
            className="Reponse-container"
            // onClick={handleClick}
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
};

export default BlocDeReponse;
