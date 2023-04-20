import React, { useState } from "react";
//  import audioFile from "./SOUND.mp3";

function Music() {
  const [MusicOn, setMusicOn] = useState();
  const handleClickMusicOn = () => {
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
