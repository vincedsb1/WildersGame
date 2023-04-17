import React from "react";
import PropTypes from "prop-types";

function Score({ resultat }) {
  return (
    <div>
      <p>{resultat} Pts </p>
    </div>
  );
}
Score.propTypes = {
  resultat: PropTypes.number.isRequired,
};
export default Score;
