import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import BoutonReponse from "./Boutonreponse/BoutonReponse";

function BlocDeReponse({
  bonneReponse,
  handleClick,
  disableButton,
  mode,
  release,
}) {
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
          tab.find((el) => el === MauvaiseReponse) === undefined &&
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
            <BoutonReponse
              ele={ele}
              handleClick={handleClick}
              disableButton={disableButton}
              bonneReponse={bonneReponse}
              release={release}
            />
          );
        })}
    </div>
  );
}

BlocDeReponse.propTypes = {
  bonneReponse: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  disableButton: PropTypes.bool.isRequired,
  mode: PropTypes.number.isRequired,
  release: PropTypes.string.isRequired,
};

export default BlocDeReponse;
