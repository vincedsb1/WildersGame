import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Countdown() {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count === 0) {
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

export default Countdown;
