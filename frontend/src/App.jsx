import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Discover from "@components/Discover/Discover";
import Home from "./components/Home/Home";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import GamePage from "./components/GamePage/GamePage";
import Countdown from "./components/Countdown/Countdown";
import GameMode from "./components/GameMode/GameMode";
import "./App.scss";
import AvatarGallery from "./components/GameMode/Avatar/AvatarGallery";

function App() {
  const [movie, setMovie] = useState({ title: "", overview: "" });

  function rdmNum(num) {
    return Math.floor(Math.random() * num) + 1;
  }

  const getMovie = () => {
    console.info("getmovie");
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f3754ed904627a678defd47c619260ea&with_original_language=en&sort_by=vote_count.desc&include_adult=false&language=fr&page=${rdmNum(
          30
        )}&adult=false`
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
  const [isMuted, setIsMuted] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home />} className="App" />
      <Route
        path="/GameMode"
        element={
          <GameMode
            setMode={setMode}
            setPseudo={setPseudo}
            setIsMuted={setIsMuted}
            isMuted={isMuted}
          />
        }
      />
      <Route
        path="/countdown"
        element={<Countdown setIsMuted={setIsMuted} isMuted={isMuted} />}
      />
      <Route path="/avatargallery" element={<AvatarGallery />} />
      <Route
        path="/game"
        element={
          <GamePage
            title={movie.title}
            // overwiew={overview}

            date={Number(new Date(`${movie.release_date}`).getFullYear())}
            release={movie.release_date}
            poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            getMovie={getMovie}
            mode={mode}
            setIsMuted={setIsMuted}
            isMuted={isMuted}
          />
        }
      />
      <Route path="/leaderBoard" element={<LeaderBoard pseudo={pseudo} />} />
      <Route path="/discover" element={<Discover />} className="App" />
    </Routes>
  );
}

export default App;
