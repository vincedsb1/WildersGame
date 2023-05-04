import PropTypes from "prop-types";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import musicFile from "./musicTest.mp3";
import MusicOnImg from "../../assets/Musique/SonOnImg.svg";
import MusicOffImg from "../../assets/Musique/SonOffImg.svg";
// MUSICGOOD
function Musique({ isMuted, setIsMuted, volume, setVolume }) {
  const audioRef = useRef(null);

  const handleMusicOn = () => {
    setIsMuted(!isMuted);
  };

  const handleChangeVolume = (e) => {
    setVolume(Number(e.target.value));
  };

  const handleUpdateVolume = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  const loc = useLocation();
  const chemin = loc.pathname;
  if (chemin === "/gameMode") {
    return (
      <div className="contenerMusique">
        <div className="Musique">
          <br />

          <div className="audioBlock">
            <input
              className={isMuted ? "hidden" : undefined}
              id="volumeslider"
              type="range"
              min="0"
              max="1"
              value={volume}
              onChange={handleChangeVolume}
              step="0.01"
            />

            <img
              src={isMuted ? MusicOffImg : MusicOnImg}
              className={isMuted ? "MusicOff" : "MusicOn"}
              alt={isMuted ? "musicOff" : "musicOn"}
              onClick={handleMusicOn}
              // onKeyDown={handleMusicOn}
              role="presentation"
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
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="Musique">
      <div className={Musique && "hiddenMusique"}>
        <br />
        <div className="audioBlock">
          <input
            className={isMuted ? "hidden" : undefined}
            id="volumeslider"
            type="range"
            min="0"
            max="1"
            value={volume}
            onChange={handleChangeVolume}
            step="0.01"
          />

          <img
            src={isMuted ? MusicOffImg : MusicOnImg}
            className={isMuted ? "MusicOff" : "MusicOn"}
            alt={isMuted ? "musicOff" : "musicOn"}
            onClick={handleMusicOn}
            // onKeyDown={handleMusicOn}
            role="presentation"
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
        </div>
      </div>
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
