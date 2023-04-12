import React, { useState, useEffect } from "react";

function Timer() {
  const [secs, setSeconds] = useState(20);

  useEffect(() => {
    const sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      } else if (secs === 0) {
        clearInterval(sampleInterval);
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  return (
    <div className="timer">
      <p>00:{secs < 10 ? `0${secs}` : secs}</p>
    </div>
  );
}

export default Timer;
