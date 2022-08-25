import { QUIZ } from "../../constants/learning/quiz";

export const setQuizId = (payload) => ({
  type: QUIZ.SET_QUIZ_ID,
  payload,
});

export const getQuiz = (id) => ({
  type: QUIZ.GET_QUIZ,
  id,
});

export const getQuizSuccess = (payload) => ({
  type: QUIZ.GET_QUIZ_SUCCESS,
  payload,
});

export const getQuizFailed = (payload) => ({
  type: QUIZ.GET_QUIZ_FAILED,
  payload,
});

export const endQuiz = (data) => ({
  type: QUIZ.END_QUIZ,
  data,
});

export const endQuizSuccess = (payload) => ({
  type: QUIZ.END_QUIZ_SUCCESS,
  payload,
});

export const endQuizFailed = (payload) => ({
  type: QUIZ.END_QUIZ_FAILED,
  payload,
});

export const setQuizTime = (time) => ({
  type: QUIZ.SET_QUIZ_TIME,
  time,
});

export const setQuizTimeRemaining = (time) => ({
  type: QUIZ.SET_QUIZ_TIME_REMAINING,
  time,
});

export const setUsedTime = (time) => ({
  type: QUIZ.SET_USED_TIME,
  time,
});

export const setTimeSpent = (time) => ({
  type: QUIZ.SET_TIME_SPENT,
  time,
});

export const getScore = (data) => ({
  type: QUIZ.GET_SCORE,
  data,
});

export const getScoreSuccess = (payload) => ({
  type: QUIZ.GET_SCORE_SUCCESS,
  payload,
});

export const getScoreFailed = (payload) => ({
  type: QUIZ.GET_SCORE_FAILED,
  payload,
});
