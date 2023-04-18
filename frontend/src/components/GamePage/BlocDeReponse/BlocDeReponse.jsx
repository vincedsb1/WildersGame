import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function BlocDeReponse({ date, getMovie, mode }) {
  const bonneReponse = date;
  const minYear = bonneReponse - mode;
  const maxYear = bonneReponse + mode;



  const [tableauDeReponse, setTableauDeReponse] = useState([bonneReponse]);


  useEffect(
    function createResponse() {
      setTableauDeReponse([bonneReponse]);
      const tab = [bonneReponse];
      while (tab.length < 4) {
        const MauvaiseReponse = Math.floor(
          Math.random() * (maxYear - minYear + 1) + minYear
        );
        if (
          tableauDeReponse.find((el) => el === MauvaiseReponse) === undefined &&
          MauvaiseReponse < 2024
        ) {
          tab.push(MauvaiseReponse);
        }
      }
      setTableauDeReponse(tab);
    },
    [bonneReponse]
  );

  return (
    // bloc des 4 bulles ou les reponses vont s'afficher.
    <div className="bloc-response">
      {tableauDeReponse
        .sort((a, b) => a - b)
        .map((ele) => {
          return (
            <button
              disabled={disableButton}
              className="Reponse-container"
              onClick={handleClick}
              type="button"
              id={ele.toString()}
              key={ele}
            >
              {ele}
            </button>
          );
        })}
    </div>
  );
}

BlocDeReponse.propTypes = {
  date: PropTypes.number.isRequired,
  getMovie: PropTypes.func.isRequired,
  mode: PropTypes.number.isRequired,
  bonneReponse: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  disableButton: PropTypes.bool.isRequired,
};

export default BlocDeReponse;
