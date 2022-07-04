import React, { useEffect, useState } from "react";
import QuizItem from "../component/QuizItem";
import useAxios from "../hooks/useAxios";

const Quiz = () => {
  const apiUrl =
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
  const { response, error, loading } = useAxios({ url: apiUrl });

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);
  const [questionItem, setQuestionItem] = useState([]);

  useEffect(() => {
    if (response?.results) {
      const SingleQuestion = response.results[questionIndex];
      const allOptions = [...SingleQuestion.incorrect_answers];
      const correctAnswer = SingleQuestion.correct_answer;
      allOptions.push(correctAnswer);
      allOptions.sort(() => Math.random() - 1);
      setOptions(allOptions);
      setQuestionItem(SingleQuestion);
    }
  }, [questionIndex, response]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
          <p>{questionItem.question}</p>
        </div>
        <div className="quiz-option-selector clearfix">
          <ul>
            {options.map((option, index) => (
              <QuizItem option={option} index={index} key={index} />
            ))}

            {/* <li>
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
            </li> */}
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
