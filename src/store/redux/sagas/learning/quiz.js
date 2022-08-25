import { QUIZ } from "../../constants/learning/quiz";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  postAnswer,
  getQuizById,
  getScore,
} from "../../../services/QuizService";
import qs from "qs";

import {
  endQuizFailed,
  endQuizSuccess,
  getQuizFailed,
  getQuizSuccess,
  getScoreFailed,
  getScoreSuccess,
} from "../../actions/learning/quiz";

function* getQuizSaga({ id }) {
  const quizReq = yield call(getQuizById, id);
  if (quizReq.status === 200) {
    yield put(getQuizSuccess(quizReq));
  } else {
    yield put(getQuizFailed(quizReq));
  }
}

function* endQuizSaga({ data }) {
  const quizReq = yield call(postAnswer, qs.stringify({ data }));
  if (quizReq.status === 200) {
    yield put(endQuizSuccess(quizReq));
  } else {
    yield put(endQuizFailed(quizReq));
  }
}

function* getScoreSaga({ data }) {
  const getScoreReq = yield call(getScore, qs.stringify({ data }));
  if (getScoreReq.status === 200) {
    yield put(getScoreSuccess(getScoreReq.data));
  } else {
    yield put(getScoreFailed(getScoreReq));
  }
}

function* watchSaga() {
  yield takeLatest(QUIZ.GET_QUIZ, getQuizSaga);
  yield takeLatest(QUIZ.END_QUIZ, endQuizSaga);
  yield takeLatest(QUIZ.GET_SCORE, getScoreSaga);
}

export default watchSaga;
