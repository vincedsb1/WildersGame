import React from "react";
import "./BlocDeReponse.scss";

function BlocDeReponse() {
  const bonneReponse = 2015;
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

  const createReponse = () =>
    tableauDeReponse
      .sort((a, b) => a - b)
      .map((ele) => {
        return (
          <div className="Reponse-container">
            <h3>{ele}</h3>
          </div>
        );
      });

  return (
    // bloc des 4 bulles ou les reponses vont s'afficher.
    <div className="bloc-response">{createReponse()}</div>
  );
}

export default BlocDeReponse;
