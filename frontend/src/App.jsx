import Home from "@components/Home/Home";
import axios from "axios";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LeaderBoard from "@components/LeaderBoard/LeaderBoard";
import GamePage from "@components/GamePage/GamePage";
import Countdown from "./components/Countdown/Countdown";
import "./App.scss";

function App() {
  const [movie, setMovie] = useState({ title: "", overview: "" });

  function rdmNum(num) {
    return Math.floor(Math.random() * num);
  }

  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f3754ed904627a678defd47c619260ea&language=fr&page=${rdmNum(
          100
        )}&adult=false`
      )
      .then((response) =>
        setMovie(response.data.results[rdmNum(response.data.results.length)])
      )

      .catch((err) => {
        console.warn(err.message);
      });
  };

  const { title } = movie;
  // const { overview } = movie;
  const date = new Date(`${movie.release_date}`).getFullYear();
  const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <Routes>
      <Route path="/" element={<Home />} className="App" />
      <Route path="/countdown" element={<Countdown />} />
      <Route
        path="/game"
        element={
          <GamePage
            title={title}
            // overwiew={overview}
            date={date}
            poster={poster}
            getMovie={getMovie}
            useState={useState}
          />
        }
      />
      <Route path="/leaderBoard" element={<LeaderBoard />} />
    </Routes>
  );
}

export default App;
