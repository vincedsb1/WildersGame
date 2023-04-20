import React, { useState } from "react";
import musicFile from "./music.mp3";

function Music() {
  const audio = new Audio(musicFile);
  const [MusicOn, setMusicOn] = useState();

  const handleClickMusicOn = () => {
    if (MusicOn) {
      audio.pause();
    } else {
      audio.play();
    }
    
    setMusicOn(!MusicOn);
  };



  return (
    <div>
      <button
        type="button"
        id="Music"
        className={MusicOn ? "MusicOn" : "MusicOff"}
        onClick={handleClickMusicOn}
        aria-label="Save"
      />
    </div>
  );
}

export default Music;
