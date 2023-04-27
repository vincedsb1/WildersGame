import musicFile from "./music1.mp3";

function Musique() {
  return (
    <div>
      <audio>
        <source src={musicFile} type="audio/mpeg" />
        <track kind="captions" />
      </audio>

      <div id="player-container">
        <div id="play-pause" className="play">
          Play
        </div>
      </div>
    </div>
  );
}
export default Musique;
