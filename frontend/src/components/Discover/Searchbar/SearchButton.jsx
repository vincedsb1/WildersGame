import PropTypes from "prop-types";

function SearchButton({ setSearchIsClicked, searchIsClicked }) {
  return (
    <div className="SearchBar">
      <div
        className="magnifyingGlass"
        role="button"
        aria-label="Search Movie"
        tabIndex={0}
        onKeyDown={() => setSearchIsClicked(!searchIsClicked)}
        onClick={() => setSearchIsClicked(!searchIsClicked)}
      />
    </div>
  );
}

SearchButton.propTypes = {
  searchIsClicked: PropTypes.bool.isRequired,
  setSearchIsClicked: PropTypes.func.isRequired,
};

export default SearchButton;
