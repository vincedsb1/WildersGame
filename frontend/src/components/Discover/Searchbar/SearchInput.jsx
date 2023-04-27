import React from "react";
import PropTypes from "prop-types";

function SearchInput({ searchIsClicked }) {
  return <input type="text" id={searchIsClicked && "clickedInput"} />;
}

SearchInput.propTypes = {
  searchIsClicked: PropTypes.bool.isRequired,
};

export default SearchInput;
