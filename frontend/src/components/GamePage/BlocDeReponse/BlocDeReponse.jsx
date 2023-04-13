import React from "react";

function BlocDeReponse() {
  const bonneReponse = 1970;
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

  const handleClick = () => {};

  const createReponse = () =>
    tableauDeReponse
      .sort((a, b) => a - b)
      .map((ele) => {
        return (
          <button
            className="Reponse-container"
            onClick={() => handleClick()}
            type="button"
          >
            <h3>{ele}</h3>
          </button>
        );
      });

  return (
    // bloc des 4 bulles ou les reponses vont s'afficher.
    <div className="bloc-response">{createReponse()}</div>
  );
}

export default BlocDeReponse;
