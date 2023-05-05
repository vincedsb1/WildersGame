import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Timer({ resultat }) {
  const [secs, setSeconds] = useState(40);
  const navigate = useNavigate();

  useEffect(() => {
    const sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      } else if (secs === 0) {
        clearInterval(sampleInterval);
        navigate("/leaderBoard", { state: { resultat } });
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  }, [secs]);

  return (
    <div className={secs > 5 ? "timer-violet" : "timer-rouge"}>
      <p>00:{secs < 10 ? `0${secs}` : secs}</p>
    </div>
  );
}

Timer.propTypes = {
  resultat: PropTypes.number.isRequired,
};

export default Timer;
