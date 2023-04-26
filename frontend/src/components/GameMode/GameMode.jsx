import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Pseudo from "./Pseudo/Pseudo";
import Difficulty from "./Difficulty/Difficulty";
import Period from "./Period/Period";
import Genre from "./Genre/Genre";
import Musique from "../Musique/Musique";
import AvatarGallery from "./Avatar/AvatarGallery";
import AvatarPlaceholder from "../../assets/GameMode/AvatarPlaceholder.svg";

function GameMode({
  setMode,
  setPseudo,
  setIsMuted,
  isMuted,
  setRequest,
  request,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [genreClass, setGenreClass] = useState("genreContainer");
  const [levelClass, setLevelClass] = useState("levelContainerHidden");
  const [diffClass, setDiffClass] = useState("difficultyContainerHidden");
  const [perClass, setPerClass] = useState("periodContainerHidden");

  const handleClickGenreClass = () => {
    setGenreClass("genreContainerHidden");
    setLevelClass("levelContainer");
  };

  const handleClickDiffClass = () => {
    setLevelClass("levelContainerHidden");
    setDiffClass("difficultyContainer");
    setPerClass("periodContainerHidden");
  };

  const handleClickPerClass = () => {
    setLevelClass("levelContainerHidden");
    setPerClass("periodContainer");
    setDiffClass("difficultyContainerHidden");
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
        <div className={genreClass}>
          <Genre
            setRequest={setRequest}
            request={request}
            handleClickGenreClass={handleClickGenreClass}
          />
        </div>
        <div className={levelClass}>
          <button
            type="button"
            id="level"
            onClick={() => handleClickDiffClass()}
          >
            Difficulty
          </button>
          <button
            type="button"
            id="level"
            onClick={() => handleClickPerClass()}
          >
            Period
          </button>
        </div>
        <div className={diffClass}>
          <Link to="/countdown">
            <Difficulty setMode={setMode} />
          </Link>
        </div>
        <div className={perClass}>
          <Link to="/countdown">
            <Period setRequest={setRequest} request={request} />
          </Link>
        </div>
      </div>
    </div>
  );
}

GameMode.propTypes = {
  setMode: PropTypes.func.isRequired,
  setPseudo: PropTypes.func.isRequired,
  setRequest: PropTypes.func.isRequired,
  request: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
  setIsMuted: PropTypes.func.isRequired,
};

export default GameMode;
