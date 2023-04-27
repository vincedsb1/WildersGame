import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Musique from "../Musique/Musique";

function Countdown({ setGo }) {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count === 0) {
        setGo(true);
        clearInterval(intervalId);
        navigate("/game");
      } else {
        setCount(count - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count, navigate]);

  return (
    <div className="mainContainer">
      {/* <div className="Musique">
          <Musique />
        </div> */}
      <div className="Countdown">
        <div className="Rules">What is the release year ?</div>
        <div className="Countdown-numbers">{count}</div>
        <div className="Circle1" />
        <div className="Circle2" />
        <div className="Ready">Ready ?</div>
      </div>
    </div>
  );
}

Countdown.propTypes = {
  setGo: PropTypes.func.isRequired,
};

export default Countdown;
