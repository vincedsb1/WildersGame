import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Pseudo from "./Pseudo/Pseudo";
import Difficulty from "./Difficulty/Difficulty";
import Genre from "./Genre/Genre";
import AvatarGallery from "./Avatar/AvatarGallery";
import AvatarPlaceholder from "../../assets/GameMode/AvatarPlaceholder.svg";

function GameMode({
  setMode,
  setPseudo,
  pseudo,
  setRequest,
  request,
  setSelectedAvatar,
  selectedAvatar,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [genreClass, setGenreClass] = useState("genreContainer");
  const [diffClass, setDiffClass] = useState("difficultyContainerHidden");

  const handleClickGenreClass = () => {
    setGenreClass("genreContainerHidden");
    setDiffClass("difficultyContainer");
  };

  return (
    <div className="mainContainer">
      <div className="gameMode">
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
            <img
              src={selectedAvatar || AvatarPlaceholder}
              alt="Selected Avatar"
            />

            {isOpen && (
              <AvatarGallery
                setSelectedAvatar={setSelectedAvatar}
                selectedAvatar={selectedAvatar}
              />
            )}
          </div>
          <div className="pseudo">
            <Pseudo setPseudo={setPseudo} pseudo={pseudo} />
          </div>
        </div>
        <div className={genreClass}>
          <Genre
            setRequest={setRequest}
            request={request}
            handleClickGenreClass={handleClickGenreClass}
          />
        </div>
        <div className={diffClass}>
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
  pseudo: PropTypes.string.isRequired,
  setRequest: PropTypes.func.isRequired,
  request: PropTypes.string.isRequired,
  selectedAvatar: PropTypes.string.isRequired,
  setSelectedAvatar: PropTypes.func.isRequired,
};

export default GameMode;
