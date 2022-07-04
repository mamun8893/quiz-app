import React from "react";
import useAxios from "../hooks/useAxios";

const Quiz = () => {
  const apiUrl =
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
  const { response, error, loading } = useAxios({ url: apiUrl });
  console.log(response);
  return (
    <div className="quiz-container">
      <div className="quiz-top-area text-center">
        <div className="quiz-countdown text-center ul-li">
          <ul>
            <li className="hours">
              <span className="count-down-number">1</span>
              <span className="count-unit">Hours</span>
            </li>
            <li className="minutes">
              <span className="count-down-number">30</span>
              <span className="count-unit">Min</span>
            </li>
            <li className="seconds">
              <span className="count-down-number">05</span>
              <span className="count-unit">Sec</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="quiz-main-area">
        <div className="quiz-title text-center">
          <span>Question 1</span>
          <h2>Start Quiz</h2>
          <p>
            User interface design.One Awesome Flat Ui Kit in Psd format. The
            pack ... Quiz App is a mobile UI kit created using Sketch and
            Photoshop, aimed to help you kick start your next mobile quiz or
            trivia project
          </p>
        </div>
        <div className="quiz-option-selector clearfix">
          <ul>
            <li>
              <label className="start-quiz-item">
                <input
                  type="radio"
                  name="quiz"
                  value="Email Markering"
                  className="exp-option-box"
                />
                <span className="exp-number text-uppercase">A</span>
                <span className="exp-label">Email Markering</span>
                <span className="checkmark-border"></span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="quiz"
                  value="Font Developer"
                  className="exp-option-box"
                />
                <span className="exp-number text-uppercase">b</span>
                <span className="exp-label">Font Developer</span>
                <span className="checkmark-border"></span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="quiz"
                  value="Digital Marketing"
                  className="exp-option-box"
                />
                <span className="exp-number text-uppercase">c</span>
                <span className="exp-label">Digital Marketing</span>
                <span className="checkmark-border"></span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="quiz"
                  value="SEO"
                  className="exp-option-box"
                />
                <span className="exp-number text-uppercase">d</span>
                <span className="exp-label">SEO </span>
                <span className="checkmark-border"></span>
              </label>
            </li>
          </ul>
        </div>
        <div className="quiz-next-prev-btn">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
