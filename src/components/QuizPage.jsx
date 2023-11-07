import { useState } from "react";
import { useParams } from "react-router-dom";
import { quizQuestions } from "./constants/quizquestions";
import "../styles/quizpage.css";
const QuizPage = () => {
  const { test } = useParams();
  const title = quizQuestions[test].title;
  const questions = quizQuestions[test].questions;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <div className="quiz-page-container">
      <div className="quiz-page-title">{title}</div>
      <div className="quiz-page-question">{questions[currentQuestion]}</div>
      <div className="quiz-answers">
        {/* have onclick handlers for these answers */}
        <div onClick={handleClick} className="quiz-answer">
          Very Often
        </div>
        <div className="quiz-answer">Sometimes</div>
        <div className="quiz-answer">Never</div>
      </div>
    </div>
  );
};

export default QuizPage;
