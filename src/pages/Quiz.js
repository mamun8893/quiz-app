import React from "react";
import useAxios from "../hooks/useAxios";

const Quiz = () => {
  const apiUrl =
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
  const { response, error, loading } = useAxios({ url: apiUrl });
  console.log(response);
  return <div>Quiz Question</div>;
};

export default Quiz;
