import PropTypes from "prop-types";

function BlocDeReponse({ bonneReponse, handleClick, disableButton }) {
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
      });

  return (
    // bloc des 4 bulles ou les reponses vont s'afficher.
    <div className="bloc-response">{createReponse()}</div>
  );
}

BlocDeReponse.propTypes = {
  bonneReponse: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  disableButton: PropTypes.bool.isRequired,
};

export default BlocDeReponse;
