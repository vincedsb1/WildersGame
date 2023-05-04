import PropTypes from "prop-types";

function SearchButton({
  setSearchIsClicked,
  searchIsClicked,
  sortIsClicked,
  setSortIsClicked,
}) {
  const handleClick = () => {
    if (sortIsClicked) {
      setSearchIsClicked(false);
      setSortIsClicked(false);
    } else setSearchIsClicked(!searchIsClicked);
  };

  return (
    <div className="SearchBar">
      <div
        className={
          searchIsClicked || sortIsClicked ? "  clicked" : "magnifyingGlass"
        }
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
  sortIsClicked: PropTypes.bool.isRequired,
  setSortIsClicked: PropTypes.func.isRequired,
};

export default SearchButton;
