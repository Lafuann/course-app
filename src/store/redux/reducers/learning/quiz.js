import { QUIZ } from "../../constants/learning/quiz";

const initialState = {
  status: "",
  quizId: null,
  message: "",
  quiz: null,
  quizTime: 0,
  usedTime: null,
  timeSpent: null,
  score: null,
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case QUIZ.GET_QUIZ:
      return {
        ...state,
        status: "request",
      };
    case QUIZ.GET_QUIZ_SUCCESS:
      return {
        ...state,
        status: "success",
        quiz: action.payload.data,
      };
    case QUIZ.GET_QUIZ_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload.data.message,
      };
    case QUIZ.SET_QUIZ_ID:
      return {
        ...state,
        quizId: action.payload,
      };
    case QUIZ.END_QUIZ:
      return {
        ...state,
        status: "end quiz",
      };
    case QUIZ.END_QUIZ_SUCCESS:
      return {
        ...state,
        status: "quiz ended",
      };
    case QUIZ.END_QUIZ_FAILED:
      return {
        ...state,
        status: "failed end quiz",
      };
    case QUIZ.SET_QUIZ_TIME:
      return {
        ...state,
        quizTime: action.time,
      };
    case QUIZ.SET_QUIZ_TIME_REMAINING:
      return {
        ...state,
        quizTime: action.time,
      };
    case QUIZ.SET_USED_TIME:
      return {
        ...state,
        usedTime: action.time,
      };
    case QUIZ.SET_TIME_SPENT:
      return {
        ...state,
        timeSpent: action.time,
      };
    case QUIZ.GET_SCORE:
      return {
        ...state,
        status: "getting score",
      };
    case QUIZ.GET_SCORE_SUCCESS:
      return {
        ...state,
        status: "get score succes",
        score: action.payload,
      };
    case QUIZ.GET_SCORE_FAILED:
      return {
        ...state,
        status: "get score failed",
      };
    default:
      return state;
  }
};

export default quiz;
