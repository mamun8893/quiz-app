import React from "react";

const QuizItem = ({ option, index }) => {
  console.log(index);
  return (
    <li>
      <label className="start-quiz-item">
        <input
          type="radio"
          name="quiz"
          value="Email Markering"
          className="exp-option-box"
        />
        <span className="exp-number text-uppercase">
          {index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : "D"}
        </span>
        <span className="exp-label">{option}</span>
        <span className="checkmark-border"></span>
      </label>
    </li>
  );
};

export default QuizItem;
