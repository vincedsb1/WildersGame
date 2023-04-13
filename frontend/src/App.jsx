import Home from "@components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Countdown from "./components/Countdown/Countdown";
import Game from "./components/Game/Game";
import "./fonts.scss";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} className="App" />
      <Route path="/countdown" element={<Countdown />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
