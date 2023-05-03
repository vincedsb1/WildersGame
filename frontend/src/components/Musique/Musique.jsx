import PropTypes from "prop-types";
import { useRef } from "react";
import musicFileMp3 from "./music1.mp3";
import musicFileOgg from "./music1.ogg";
import musicFileWav from "./music1.wav";

// chnager la source des balaise audio
function Musique({ isMuted, setIsMuted, volume, setVolume }) {
  const audioRef = useRef(null);

  const handleMusicOn = () => {
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
      <br />

      <div className="audioBlock">
        <input
          className={isMuted && "hidden"}
          id="volumeslider"
          type="range"
          min="0"
          max="1"
          value={volume}
          onChange={handleChangeVolume}
          step="0.01"
        />

        <img
          src={
            isMuted
              ? "../src/assets/Musique/SonOffImg.svg"
              : "../src/assets/Musique/SonOnImg.svg"
          }
          className={isMuted ? "MusicOff" : "MusicOn"}
          alt={isMuted ? "musicOff" : "musicOn"}
          onClick={handleMusicOn}
          // onKeyDown={handleMusicOn}
          role="presentation"
        />
        <audio
          ref={audioRef}
          id="where"
          // src={musicFile}
          loop
          autoPlay
          onTimeUpdate={handleUpdateVolume}
          muted={isMuted}
        >
          <source src={musicFileMp3} type="audio/mp3" />
          <source src={musicFileOgg} type="audio/ogg" />
          <source src={musicFileWav} type="audio/wav" />
          <track kind="captions" />
        </audio>
      </div>
    </div>
  );
}
Musique.propTypes = {
  isMuted: PropTypes.bool.isRequired,
  setIsMuted: PropTypes.func.isRequired,
  volume: PropTypes.string.isRequired,
  setVolume: PropTypes.func.isRequired,
};

export default Musique;
