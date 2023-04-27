import PropTypes from "prop-types";
import musicFile from "./music1.mp3";

function Musique({ isMuted, setIsMuted }) {
  const handleMusicOn = () => {
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
  setIsMuted: PropTypes.func.isRequired,
  isMuted: PropTypes.func.isRequired,
};

export default Musique;
