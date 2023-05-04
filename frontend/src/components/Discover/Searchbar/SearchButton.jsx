import PropTypes from "prop-types";

function SearchButton({ setSearchIsClicked, searchIsClicked }) {
  const handleClick = () => {
    setSearchIsClicked(!searchIsClicked);
  };

  return (
    <div className="SearchBar">
      <div
        className={searchIsClicked ? "  clicked" : "magnifyingGlass"}
        role="button"
        aria-label="Search Movie"
        tabIndex={0}
        onKeyDown={handleClick}
        onClick={handleClick}
      />
    </div>
  );
}

SearchButton.propTypes = {
  searchIsClicked: PropTypes.bool.isRequired,
  setSearchIsClicked: PropTypes.func.isRequired,
};

export default SearchButton;
