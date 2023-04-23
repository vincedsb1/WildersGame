import React, { useState } from "react";
import musicFile from "./music.mp3";

function Musique() {
  const [isMuted, setIsMuted] = useState(true);
  const handleClickMusicOn = () => {
    setIsMuted((current) => !current);
  };

  return (
    <div>
      <audio src={musicFile} loop autoPlay muted={isMuted}>
        <track kind="captions" />
      </audio>
      <button
        type="button"
        id="Musique"
        className="but"
        onClick={handleClickMusicOn}
        aria-label="Save"
      >
        {isMuted ? (
          <img
            src="../src/assets/Musique/SonOffImg.svg"
            className="MusicOff"
            alt="musicOff"
          />
        ) : (
          <img
            src="../src/assets/Musique/SonOnImg.svg"
            className="MusicOn"
            alt="musicOn"
          />
        )}
      </button>
    </div>
  );
}

export default Musique;
