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
import Musique from "./components/Musique/Musique";


import AvatarGallery from "./components/GameMode/Avatar/AvatarGallery";

function App() {
  const [movie, setMovie] = useState({ title: "", overview: "" });
  // const [selectedAvatar, setSelectedAvatar] = useState(null);

  const [request, setRequest] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=f3754ed904627a678defd47c619260ea&sort_by=vote_count.desc&include_adult=false&language=fr&adult=false`
  );

  const clearState = () => {
    setRequest(
      `https://api.themoviedb.org/3/discover/movie?api_key=f3754ed904627a678defd47c619260ea&sort_by=vote_count.desc&include_adult=false&language=fr&adult=false`
    );
  };

  const [go, setGo] = useState(false);

  function rdmNum(num) {
    return Math.floor(Math.random() * num) + 1;
  }

  const getMovie = () => {
    console.info("getmovie");
    axios
      .get(`${request}&page=${rdmNum(50)}`)
      .then((response) =>
        setMovie(
          response.data.results[rdmNum(response.data.results.length) - 1]
        )
      )

      .catch((err) => {
        console.warn(err.message);
      });
  };

  useEffect(() => {
    getMovie();
  }, [go]);

  const [mode, setMode] = useState(20);
  const [pseudo, setPseudo] = useState("joueur");

  const [isMuted, setIsMuted] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(
    "/src/assets/GameMode/AvatarPlaceholder.svg"
  );

  console.info(go);
  // ne pas supprimer //

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
            setRequest={setRequest}
            request={request}
            setSelectedAvatar={setSelectedAvatar}
            selectedAvatar={selectedAvatar}
          />
        }
      />
      <Route
        path="/countdown"
        element={
          <Countdown setIsMuted={setIsMuted} isMuted={isMuted} setGo={setGo} />
        }
      />
      <Route
        path="/avatargallery"
        element={<AvatarGallery selectedAvatar={selectedAvatar} />}
      />
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
            request={request}
          />
        }
      />

      <Route path="/leaderBoard" element={<LeaderBoard pseudo={pseudo} />} />
      

      <Route
        path="/leaderBoard"
        element={
          <LeaderBoard pseudo={pseudo} selectedAvatar={selectedAvatar} clearState={clearState}/>
        }
      />
<Route path="/discover" element={<Discover />} className="App" />
    </Routes>

  );
}

export default App;
