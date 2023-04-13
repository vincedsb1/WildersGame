import Home from "@components/Home/Home";
import "./fonts.scss";
// import axios from "axios";
// import { useState } from "react";

function App() {
  // const [movie, setMovie] = useState({ title: "", overview: "" });
  // function rdmNum(num) {
  //   return Math.floor(Math.random() * num);
  // }

  // const getMovie = () => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=f3754ed904627a678defd47c619260ea&language=fr&page=${rdmNum(
  //         100
  //       )}&adult=false`
  //     )
  //     .then((response) =>
  //       setMovie(response.data.results[rdmNum(response.data.results.length)])
  //     )

  //     .catch((err) => {
  //       console.warn(err.message);
  //     });
  // };

  // const { title } = movie;
  // const alt = movie.title;
  // const { overview } = movie;
  // const date = new Date(`${movie.release_date}`).getFullYear();
  // const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <div className="App">
      <Home />
    </div>
  );
}
export default App;
