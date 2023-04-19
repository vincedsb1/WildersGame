import React from "react";

function Difficulty({ setMode }) {
  const handleClick = (num) => {
    setMode(num);
  };

  return (
    <div className="difficulty">
      <button type="button" onClick={() => handleClick(20)}>
        Easy 🐣
      </button>
      <br />
      <button type="button" onClick={() => handleClick(10)}>
        Normal 🍵
      </button>
      <br />
      <button type="button" onClick={() => handleClick(5)}>
        Hard 🤖
      </button>
    </div>
  );
}

export default Difficulty;
