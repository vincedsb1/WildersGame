import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function BoutonReponse({
  ele,
  handleClick,
  disableButton,

  bonneReponse,
}) {
  const [classe, setClasse] = useState("Reponse-container");

  useEffect(() => {
    setClasse("Reponse-container");
  }, [bonneReponse]);

  function handleClass(el) {
    if (el === bonneReponse) {
      setClasse("Reponse-container goodAnswer");
    } else {
      setClasse("Reponse-container wrongAnswer");
    }
  }
  const handleClicked = (e) => {
    handleClick(e);
    handleClass(ele);
  };

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
  ele: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disableButton: PropTypes.bool.isRequired,
  bonneReponse: PropTypes.number.isRequired,
};

export default BoutonReponse;
