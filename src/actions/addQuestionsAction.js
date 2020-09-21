import axios from "axios";

const GET_NEW_QUESTIONS_ATTEMPT = "GET_NEW_QUESTIONS_ATTEMPT";
const GET_NEW_QUESTIONS_SUCCESS = "GET_NEW_QUESTIONS_SUCCESS";
const GET_NEW_QUESTIONS_FAILURE = "GET_NEW_QUESTIONS_FAILURE";

const GET_NEXT_QUESTION_SUCCESS = "GET_NEXT_QUESTION_SUCCESS";

const RESET_GAME_SUCCESS = "RESET_GAME_SUCCESS";

export const getQuestions = () => {
  const endpoint =
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
  return (dispatch) => {
    return axios
      .get(endpoint)
      .then((response) => {
        dispatch({
          type: GET_NEW_QUESTIONS_ATTEMPT,
          payload: {
            loading: true,
          },
        });
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: GET_NEW_QUESTIONS_SUCCESS,
          payload: {
            questions: data.results,
            currentQuestion: 0,
            currentQuestionTitle: data.results[0].category,
            currentQuestionContent: data.results[0].question,
            loading: false,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: GET_NEW_QUESTIONS_FAILURE,
          payload: {
            error: "Error: Failed to fetch",
            loading: false,
          },
        });
      });
  };
};

export const nextQuestion = (answer, currentQuestion, questions, score) => {
  const isCorrect = answer === questions[currentQuestion].correct_answer;
  const newQuestions = questions;
  newQuestions[currentQuestion].isCorrect = isCorrect;
  let newScore = score;
  if (isCorrect) {
    if (newScore >= 0) {
      newScore = newScore + 1;
    } else {
      newScore = 1;
    }
  }
  return (dispatch) => {
    dispatch({
      type: GET_NEXT_QUESTION_SUCCESS,
      payload: {
        isCorrect: isCorrect,
        currentQuestion: currentQuestion,
        questions: newQuestions,
        nextQuestion: currentQuestion + 1,
        score: newScore,
      },
    });
  };
};

export const resetGame = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_GAME_SUCCESS,
      payload: {
        loading: true,
        currentQuestion: 0,
        questions: [],
        score: 0,
      },
    });
  };
};
