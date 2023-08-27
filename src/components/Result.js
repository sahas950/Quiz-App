import React from "react";

const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">You scored {score} / 5 correct answers!</div>
    <div className="plbt">
      <center>
      <button className="playBtn" onClick={playAgain}>
        Start Quiz
      </button>
      </center>
      
    </div>
  </div>
);

export default Result;
