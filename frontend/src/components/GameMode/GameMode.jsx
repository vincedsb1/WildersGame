import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Pseudo from "./Pseudo/Pseudo";
import Difficulty from "./Difficulty/Difficulty";
import Musique from "../Musique/Musique";
import AvatarGallery from "./Avatar/AvatarGallery";
import AvatarPlaceholder from "../../assets/GameMode/AvatarPlaceholder.svg";

function GameMode({ setMode, setPseudo, setIsMuted, isMuted }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mainContainer">
      <div className="gameMode">
        <div className="Musique">
          <Musique />
        </div>
        <div className="mainTitleModeContainer">
          <div className="mainTitleMode">
            <h1 className="h1GameMode" id="tilted">
              Wilder
            </h1>
            <h1 className="h1GameMode">&nbsp;&nbsp;Game</h1>
          </div>
        </div>{" "}
        <div className="avatarPseudo">
          <div
            className="avatarButton"
            onClick={handleClick}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                // handle "Enter" key press
                handleClick();
              }
            }}
            role="button"
            tabIndex="0"
          >
            {selectedAvatar ? (
              <img src={selectedAvatar} alt="Selected Avatar" />
            ) : (
              <img
                className="AvatarPlaceholder"
                id="AvatarPlaceholder"
                src={AvatarPlaceholder}
                alt="AvatarPlaceholder"
              />
            )}
            {isOpen && <AvatarGallery setSelectedAvatar={setSelectedAvatar} />}
          </div>
          <div className="pseudo">
            <Pseudo setPseudo={setPseudo} />
          </div>
        </div>
        <div className="difficultyContainer">
          <Link to="/countdown">
            <Difficulty setMode={setMode} />
          </Link>
        </div>
      </div>
    </div>
  );
}

GameMode.propTypes = {
  setMode: PropTypes.func.isRequired,
  setPseudo: PropTypes.func.isRequired,
  isMuted: PropTypes.bool.isRequired,
  setIsMuted: PropTypes.func.isRequired,
};

export default GameMode;
