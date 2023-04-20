import React, { useState, useRef, useEffect } from "react";
import musicFile from "./music.mp3";

function Music() {
  const [MusicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  const handleClickMusicOn = () => {
    if (MusicOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setMusicOn(!MusicOn);
  };

  useEffect(() => {
    audioRef.current = new Audio(musicFile);
    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);
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
