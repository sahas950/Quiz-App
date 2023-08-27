import React, { useState } from "react";

const QuestionBox = ({ question, answers, selected,fc }) => {
  const [answer, setAnswer] = useState(answers);
  const [fcr,setFc]=useState(fc)
  return (
    <div className="questionBox">
      <div className="question ">{question}</div>
      {!fcr? (answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            // setAnswer([text]);
            setFc(true);
            selected(text);
          }}
        >
          {text}
        </button>
      ))
          ) : (answer.map((text, index) => (
            <button
              key={index}
              className="answerBtn1">
              {text}
            </button>
          ))
              )}
    </div>
  );
};

export default QuestionBox;
