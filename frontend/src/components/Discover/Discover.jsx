import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import MovieCard from "./MovieCard/MovieCard";
import FilterButton from "./FilterButton/FilterButton";
import MovieDetails from "./MovieDetails/MovieDetails";
import SearchInput from "./Searchbar/SearchInput";
import SearchButton from "./Searchbar/SearchButton";

function Discover() {
  const [searchIsClicked, setSearchIsClicked] = useState(false);
  const [sortIsClicked, setSortIsClicked] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [displayDetails, setDisplayDetails] = useState(false);
  const [details, setDetails] = useState({
    title: "",
    image: "",
    overview: "",
    date: 0,
  });
  const [searchedEl, setSearchedEL] = useState("");

  const SORT_MAP = {
    Populars: (a, b) => b.popularity - a.popularity,
    "Most Recent": (a, b) =>
      new Date(b.release_date) - new Date(a.release_date),
    "Most Votes": (a, b) => b.vote_count - a.vote_count,
  };
  const SORT_NAMES = Object.keys(SORT_MAP);
  const [sortFunc, setsortFunc] = useState("Populars");

  const getMovieList = () => {
    const tempArr = [];
    for (let i = 1; i < 6; i += 1) {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=f3754ed904627a678defd47c619260ea&with_original_language=en&sort_by=vote_count.desc&include_adult=false&language=fr&page=${i}&adult=false`
        )
        .then((response) => {
          tempArr.push(...response.data.results);
          setMovieList(tempArr);
        })
        .catch((err) => {
          console.warn(err.message);
        });
    }
  };
  useEffect(() => {
    getMovieList();
  }, []);

  console.info(movieList);

  const handleClick = (title, image, overview, date) => {
    setDisplayDetails(!displayDetails);
    setDetails({ title, image, overview, date });
  };

  return (
    <div className="mainContainer">
      <div
        className=" discoverPage"
        role="button"
        tabIndex={0}
        onKeyDown={() => displayDetails && setDisplayDetails(false)}
        onClick={() => displayDetails && setDisplayDetails(false)}
      >
        <div className="discoverHeader">
          <NavLink to="/">
            <p className="retour">↩</p>
          </NavLink>
          <p>Discover your favorite movies !</p>
        </div>
        <div className="filters">
          <div className={searchIsClicked ? "sortingBox hidden" : "sortingBox"}>
            <button
              onClick={() => setSortIsClicked(!sortIsClicked)}
              type="button"
              className={sortIsClicked ? "none" : ""}
            >
              Sort
            </button>
            <div className="sortList" id={sortIsClicked && "clickedSortInput"}>
              {SORT_NAMES.map((el) => (
                <FilterButton
                  key={el}
                  name={el}
                  setsortFunc={setsortFunc}
                  searchIsClicked={searchIsClicked}
                />
              ))}
            </div>
          </div>

          <SearchButton
            setSearchIsClicked={setSearchIsClicked}
            searchIsClicked={searchIsClicked}
            sortIsClicked={sortIsClicked}
            setSortIsClicked={setSortIsClicked}
          />
          <SearchInput
            searchIsClicked={searchIsClicked}
            searchedEl={searchedEl}
            setSearchedEL={setSearchedEL}
          />
        </div>
        {displayDetails && (
          <MovieDetails
            title={details.title}
            image={details.image}
            overview={details.overview}
            date={details.date}
          />
        )}
        <div className="movieList">
          {movieList
            .filter((el) =>
              el.original_title.toLowerCase().includes(searchedEl.toLowerCase())
            )
            .sort(SORT_MAP[sortFunc])
            .map((ele) => {
              return (
                <MovieCard
                  title={ele.original_title}
                  image={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`}
                  date={ele.release_date}
                  overview={ele.overview}
                  handleClick={handleClick}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Discover;
