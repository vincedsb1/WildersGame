import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./Home.scss";
import StartButton from "./StartButton/StartButton";
import popcorn from "../../assets/Home/popcorn.svg";
import fanion from "../../assets/Home/fanion.svg";
import catchphrase from "../../assets/Home/catchphrase.svg";

function Home() {
  return (
    <div>
      <h1>Wilder</h1>
      <h1>&nbsp;&nbsp;Game</h1>
      <div className="boiteFanion">
        <img className="fanion" src={fanion} alt="fanion" />
        <img className="catchphrase" src={catchphrase} alt="catchphrase" />
      </div>
      <div className="popcorn">
        <img src={popcorn} alt="" />
      </div>
      <div>
        <Link to="/countdown">
            <StartButton />
        </Link>
      </div>
    </div>
  );
}

export default Home;
