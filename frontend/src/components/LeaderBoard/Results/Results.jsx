import React from "react";
import cup from "../../../assets/LeaderBoard/cup.png";

function Results() {
  return (
    <div className="results">
      <br />
      <h1>Best score !</h1>
      <br />
      <img src={cup} alt="cup" />
      <br />
      <div>
        <div className="result1">
          <p>2023/04/06&ensp;15:26</p>
          <p>&ensp;15 pts</p>
        </div>
        <div className="result2">
          <p>2023/04/02&ensp;13:27</p>
          <p>&ensp;14 pts</p>
        </div>
        <div className="result3">
          <p>2023/03/03&ensp;09:57</p>
          <p>&ensp;11 pts</p>
        </div>
        <div className="result4">
          <p>2023/04/01&ensp;11:54</p>
          <p>&ensp;05 pts</p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Results;
