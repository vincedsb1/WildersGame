import React from "react";
import PropTypes from "prop-types";

function Pseudo({ setPseudo, pseudo }) {
  const handleChange = (event) => {
    setPseudo(event.target.value);
  };

  const handleClickPseudo = () => {
    setPseudo("");
  };

  return (
    <div className="pseudo">
      <p>Your name</p>
      <input
        type="text"
        maxLength="16"
        value={pseudo}
        onChange={handleChange}
        className={pseudo === "joueur" ? "generic" : "custom"}
        onClick={handleClickPseudo}
      />
    </div>
  );
}

Pseudo.propTypes = {
  setPseudo: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
};

export default Pseudo;
