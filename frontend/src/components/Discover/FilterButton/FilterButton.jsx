import React from "react";
import PropTypes from "prop-types";

function FilterButton({ name, setsortFunc, searchIsClicked }) {
  return (
    <button
      className={searchIsClicked ? "FilterButton hidden" : "FilterButton"}
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
  searchIsClicked: PropTypes.bool.isRequired,
};

export default FilterButton;
