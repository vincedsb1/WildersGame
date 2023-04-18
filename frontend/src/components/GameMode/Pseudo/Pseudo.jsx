import React from "react";
import PropTypes from "prop-types";

function Pseudo({ setPseudo }) {
  const handleChange = (event) => {
    setPseudo(event.target.value);
  };


  return (
    <div className="pseudo">
      <p>Your name</p>
      <br />
      <input type="text" maxLength="16" onChange={handleChange} />
    </div>
  );
}

Pseudo.propTypes = {
  setPseudo: PropTypes.func.isRequired,
};


export default Pseudo;
