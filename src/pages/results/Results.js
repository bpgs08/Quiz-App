import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getQuestions, nextQuestion } from "../../actions/addQuestionsAction";
import Questions from "../../components/Questions";

let Quiz = ({ questions, history }) => {
  useEffect(() => {
    if (!questions) {
      history.push("/");
    }
  }, []);

  return (
    <div>
      <div>results</div>
    </div>
  );
};

const mapStateToProps = ({ addQuestionsReducer }) => {
  return {
    questions: addQuestionsReducer.questions,
  };
};

export default connect(mapStateToProps)(Quiz);
