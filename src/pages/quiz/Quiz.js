import React from "react";
import { connect } from "react-redux";
import { getQuestions, nextQuestion } from "../../actions/addQuestionsAction";
import Questions from "../../components/Questions";
import Loading from "../../components/Loading";

let Quiz = ({
  getQuestions,
  nextQuestion,
  questions,
  currentQuestion,
  currentQuestionContent,
  currentQuestionTitle,
  score,
  history,
}) => {
  if (!questions?.length > 0) {
    getQuestions();
  }

  let submitAnswer = (e) => {
    nextQuestion(e.target.value, currentQuestion, questions, score);
    if (currentQuestion === 9) {
      history.push("/results");
    }
  };

  return (
    <div>
      {currentQuestion <= 9 ? (
        <Questions
          questions={questions}
          currentQuestion={currentQuestion}
          currentQuestionContent={currentQuestionContent}
          currentQuestionTitle={currentQuestionTitle}
          submitAnswer={submitAnswer}
          score={score}
        />
      ) : (
        <Loading>Loading...</Loading>
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
    score: addQuestionsReducer.score,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
