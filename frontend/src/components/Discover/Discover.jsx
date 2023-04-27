import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard/MovieCard";
import FilterButton from "./FilterButton/FilterButton";
import MovieDetails from "./MovieDetails/MovieDetails";

function Discover() {
  const [movieList, setMovieList] = useState([]);
  const [displayDetails, setDisplayDetails] = useState(false);
  const [details, setDetails] = useState({
    title: "",
    image: "",
    overview: "",
    date: 0,
  });

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
    <div
      className="mainContainer discoverPage"
      role="button"
      tabIndex={0}
      onKeyDown={() => displayDetails && setDisplayDetails(false)}
      onClick={() => displayDetails && setDisplayDetails(false)}
    >
      <div className="discoverHeader">
        <p>Discover your favorite movies !</p>
      </div>
      <div className="filters">
        {SORT_NAMES.map((el) => (
          <FilterButton key={el} name={el} setsortFunc={setsortFunc} />
        ))}
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
        {movieList.sort(SORT_MAP[sortFunc]).map((ele) => {
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
  );
}

export default Discover;
