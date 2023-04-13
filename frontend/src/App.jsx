import Home from "@components/Home/Home";
import { Route, Routes } from "react-router-dom";
import LeaderBoard from "@components/LeaderBoard/LeaderBoard";
import GamePage from "@components/GamePage/GamePage";
import Countdown from "./components/Countdown/Countdown";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} className="App" />
      <Route path="/countdown" element={<Countdown />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/leaderBoard" element={<LeaderBoard />} />
    </Routes>
  );
}

export default App;
