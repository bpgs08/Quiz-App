export const addQuestionsReducer = (state = {}, { type, payload }) => {
  // console.log(state, "state");
  switch (type) {
    case "GET_NEW_QUESTIONS_ATTEMPT":
      return {
        ...state,
        loading: true,
      };
    case "GET_NEW_QUESTIONS_SUCCESS":
      return {
        ...state,
        questions: payload.questions,
        currentQuestion: payload.currentQuestion,
        currentQuestionTitle: payload.currentQuestionTitle,
        currentQuestionContent: payload.currentQuestionContent,
        loading: false,
      };
    case "GET_NEW_QUESTIONS_FAILURE":
      return {
        ...state,
        error: payload.error,
      };
    case "GET_NEXT_QUESTION_SUCCESS":
      return {
        ...state,
        questions: payload.questions,
        currentQuestion: payload.nextQuestion,
        currentQuestionTitle: payload.questions[payload.nextQuestion]?.category,
        currentQuestionContent:
          payload.questions[payload.nextQuestion]?.question,
        isFinished: payload.isFinished,
        score: payload.score,
        loading: false,
      };
    default:
      return state;
  }
};
