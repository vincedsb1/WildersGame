import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard/MovieCard";

function Discover() {
  const [movieList, setMovieList] = useState([]);

  const getMovieList = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f3754ed904627a678defd47c619260ea&with_original_language=en&sort_by=vote_count.desc&include_adult=false&language=fr&page=1&adult=false`
      )
      .then((response) => setMovieList(response.data.results))
      .catch((err) => {
        console.warn(err.message);
      });
  };
  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className="mainContainer discoverPage">
      <div className="discoverHeader">
        <p>Discover your favorite movies !</p>
      </div>
      {movieList.map((ele) => {
        return (
          <MovieCard
            title={ele.original_title}
            image={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`}
            date={ele.release_date}
            key={ele.original_title}
          />
        );
      })}
    </div>
  );
}

export default Discover;
