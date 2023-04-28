import React from "react";
import PropTypes from "prop-types";

function SearchInput({ searchIsClicked, setSearchedEL, searchedEl }) {
  function handleChange(e) {
    setSearchedEL(e.target.value);
  }

  return (
    <input
      type="text"
      id={searchIsClicked && "clickedInput"}
      value={searchedEl}
      onChange={handleChange}
    />
  );
}

SearchInput.propTypes = {
  searchIsClicked: PropTypes.bool.isRequired,
  setSearchedEL: PropTypes.func.isRequired,
  searchedEl: PropTypes.string.isRequired,
};

export default SearchInput;
