import PropTypes from "prop-types";
import { useRef } from "react";
import musicFile from "./music1.mp3";


function Musique({ isMuted, setIsMuted, volume, setVolume }) {
  const audioRef = useRef(null);

  const handleClickMusicOn = () => {
    setIsMuted(!isMuted);
  };

  const handleChangeVolume = (e) => {
    setVolume(e.target.value);
  };

  const handleUpdateVolume = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }

  };

  return (
    <div>
      {/* <input id="seekslider" type="range" min="0" max="100" value="0" step="1" /> */}
      <br />
      <input
        id="volumeslider"
        type="range"
        min="0"
        max="1"
        value={volume}
        onChange={handleChangeVolume}
        step="0.01"
      />

      <audio
        ref={audioRef}
        id="where"
        src={musicFile}
        loop
        autoPlay
        onTimeUpdate={handleUpdateVolume}
        muted={isMuted}
      >
        <track kind="captions" />
      </audio>

      <button
        type="button"
        id="Musique"
        className="but"
        onClick={handleMusicOn}
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
Musique.propTypes = {
  isMuted: PropTypes.bool.isRequired,
  setIsMuted: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired,
};

export default Musique;
