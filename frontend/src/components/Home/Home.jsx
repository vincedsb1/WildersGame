import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";
import StartButton from "./StartButton/StartButton";
import fanion from "../../assets/Home/fanion.svg";
import catchphrase from "../../assets/Home/catchphrase.svg";

function Home() {
  return (
    <div className="background-class">
      <div className="mainContainer">
        <div className="popcornBackground">
          <div className="mainTop">
            <div className="mainTitle">
              <h1>Wilder</h1>
              <h1>&nbsp;&nbsp;Game</h1>
            </div>

            <div className="boiteFanion">
              <img className="fanion" src={fanion} alt="fanion" />
              <img
                className="catchphrase"
                src={catchphrase}
                alt="catchphrase"
              />
            </div>
          </div>
          <div className="startButton">
            <NavLink to="/gameMode">
              <StartButton />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
