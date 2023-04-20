import Home from "@components/Home/Home";
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LeaderBoard from "@components/LeaderBoard/LeaderBoard";
import GamePage from "@components/GamePage/GamePage";
import Countdown from "./components/Countdown/Countdown";
import GameMode from "./components/GameMode/GameMode";
import "./App.scss";

function App() {
  const [movie, setMovie] = useState({ title: "", overview: "" });

  function rdmNum(num) {
    return Math.floor(Math.random() * num);
  }

  const getMovie = () => {
    console.info("getmovie");
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f3754ed904627a678defd47c619260ea&language=fr&page=${
          rdmNum(100) + 1
        }`
      )
      .then((response) =>
        setMovie(response.data.results[rdmNum(response.data.results.length)])
      )

      .catch((err) => {
        console.warn(err.message);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  const [mode, setMode] = useState(20);
  const [pseudo, setPseudo] = useState("joueur");

  return (
    <Routes>
      <Route path="/" element={<Home />} className="App" />
      <Route
        path="/GameMode"
        element={<GameMode setMode={setMode} setPseudo={setPseudo} />}
      />
      <Route path="/countdown" element={<Countdown />} />
      <Route
        path="/game"
        element={
          <GamePage
            title={movie.title}
            // overwiew={overview}

            date={Number(new Date(`${movie.release_date}`).getFullYear())}
            release={movie.release_date}
            poster={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            getMovie={getMovie}
            mode={mode}
          />
        }
      />
      <Route path="/leaderBoard" element={<LeaderBoard pseudo={pseudo} />} />
    </Routes>
  );
}

export default App;
