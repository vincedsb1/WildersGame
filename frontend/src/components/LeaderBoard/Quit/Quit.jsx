import React from "react";
import PropTypes from "prop-types";

function Quit({ clearState }) {
  return (
    <div className="restart">
      <button type="button" id="restart" onClick={() => clearState()}>
        Quit
      </button>
    </div>
  );
}

Quit.propTypes = {
  clearState: PropTypes.func.isRequired,
};

export default Quit;
