import React from "react";
import PropTypes from "prop-types";

function FilterButton({ name, setsortFunc }) {
  return (
    <button
      className="FilterButton"
      type="button"
      onClick={() => setsortFunc(name)}
    >
      {name}
    </button>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
  setsortFunc: PropTypes.func.isRequired,
};

export default FilterButton;
