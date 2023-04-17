import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Timer() {
  const [secs, setSeconds] = useState(5000);
  const navigate = useNavigate();

  useEffect(() => {
    const sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      } else if (secs === 0) {
        clearInterval(sampleInterval);
        navigate("/leaderBoard");
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  return (
    <div className={secs > 5 ? "timer-violet" : "timer-rouge"}>
      <p>00:{secs < 10 ? `0${secs}` : secs}</p>
    </div>
  );
}

export default Timer;
