import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getQuestions, nextQuestion } from "../../actions/addQuestionsAction";
import Questions from "../../components/Questions";

let Quiz = ({
  getQuestions,
  nextQuestion,
  questions,
  currentQuestion,
  currentQuestionContent,
  currentQuestionTitle,
  isFinished,
  score,
}) => {
  useEffect(() => {
    console.log("here");
  }, []);

  if (!questions) {
    getQuestions();
  }

  let submitAnswer = (e) => {
    console.log(score);
    nextQuestion(e.target.value, currentQuestion, questions, score);
  };

  return (
    <div>
      {!isFinished ? (
        <Questions
          questions={questions}
          currentQuestion={currentQuestion}
          currentQuestionContent={currentQuestionContent}
          currentQuestionTitle={currentQuestionTitle}
          submitAnswer={submitAnswer}
          score={score}
        />
      ) : (
        <div>results</div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  getQuestions,
  nextQuestion,
};

const mapStateToProps = ({ addQuestionsReducer }) => {
  return {
    questions: addQuestionsReducer.questions,
    currentQuestion: addQuestionsReducer.currentQuestion,
    currentQuestionTitle: addQuestionsReducer.currentQuestionTitle,
    currentQuestionContent: addQuestionsReducer.currentQuestionContent,
    isFinished: addQuestionsReducer.isFinished,
    score: addQuestionsReducer.score,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
