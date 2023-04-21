import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function BoutonReponse({
  ele,
  handleClick,
  disableButton,
  bonneReponse,
  release,
}) {
  const [classe, setClasse] = useState("Reponse-container");

  useEffect(() => {
    if (ele === bonneReponse) setClasse("Reponse-container goodAnswer");
  }, [handleClick]);

  useEffect(() => {
    if (ele !== bonneReponse) setClasse("Reponse-container cloudyAnswer");
  }, [handleClick]);

  const handleClicked = (e) => {
    handleClick(e);

    setTimeout(() => {
      if (ele !== bonneReponse) {
        setClasse("Reponse-container wrongAnswer");
      }
    }, 1)
  };

  useEffect(() => {
    setClasse("Reponse-container");
  }, [release]);

  return (
    <button
      type="button"
      className={classe}
      onClick={handleClicked}
      disabled={disableButton}
      id={ele.toString()}
      key={Math.floor(Math.random() * 10000000)}
    >
      {ele}
    </button>
  );
}

BoutonReponse.propTypes = {
  ele: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  disableButton: PropTypes.bool.isRequired,
  bonneReponse: PropTypes.number.isRequired,
  release: PropTypes.string.isRequired,
};

export default BoutonReponse;
