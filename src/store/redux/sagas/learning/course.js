import { call, put, takeLatest, delay, takeEvery } from "redux-saga/effects";
import { COURSE } from "../../constants/learning/course";
import {
  getAllCourse,
  getTrendingCourse,
  getCourseById,
  getCourseByUser,
  getCommentByCourse,
  searchCourse,
  getCategoryById,
  buyCourse,
  buyHistory,
  getDetailScore,
  getCourseContent,
  sendComment,
  sendRating,
  getRating,
  postLikeComment,
  deleteLikeComment,
} from "../../../services/CourseService";

import {
  getAllCourseFailed,
  getAllCourseSuccess,
  getAllTrendingCourseFailed,
  getAllTrendingCourseSuccess,
  getAllCourseByIdSuccess,
  getAllCourseByIdFailed,
  getCourseByUserFailed,
  getCourseByUserSuccess,
  getAllCommentByCourseFailed,
  getAllCommentByCourseSuccess,
  searchCourseSuccess,
  searchCourseFailed,
  getCategoryByIdSuccess,
  getCategoryByIdFailed,
  getBuyCourseSuccess,
  getBuyCourseFailed,
  getBuyHistorySuccess,
  getBuyHistoryFailed,
  getDetailScoreSuccess,
  getDetailScoreFailed,
  getCourseContentSuccess,
  getCourseContentFailed,
  postCommentSuccess,
  postCommentFailed,
  sendRatingSuccess,
  sendRatingFailed,
  getRatingSuccess,
  getRatingFailed,
  likeCommentSuccess,
  likeCommentFailed,
  dislikeCommentSuccess,
  dislikeCommentFailed,
  resetCourseStatus,
  courseHasBeenPaid,
} from "../../actions/learning/course";

import qs from "qs";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

function* courseSaga() {
  const courseReq = yield call(getAllCourse);
  if (courseReq.status === 200) {
    yield put(getAllCourseSuccess(courseReq));
  } else {
    yield put(getAllCourseFailed(courseReq));
  }
}

function* trendingCourseSaga() {
  const trendingCourseReq = yield call(getTrendingCourse);
  if (trendingCourseReq.status === 200) {
    yield put(getAllTrendingCourseSuccess(trendingCourseReq));
  } else {
    yield put(getAllTrendingCourseFailed(trendingCourseReq));
  }
}

function* courseByIdSaga({ id }) {
  const courseByIdReq = yield call(getCourseById, id);
  if (courseByIdReq.status === 200) {
    yield put(getAllCourseByIdSuccess(courseByIdReq));
  } else {
    yield put(getAllCourseByIdFailed(courseByIdReq));
  }
}

function* getCourseByUserSaga({ email }) {
  const getCourseReq = yield call(getCourseByUser, email);
  if (getCourseReq.status === 200) {
    yield put(getCourseByUserSuccess(getCourseReq));
  } else {
    yield put(getCourseByUserFailed(getCourseReq));
  }
}

function* getCommentByCourseSaga({ id }) {
  const getCommentReq = yield call(getCommentByCourse, id);
  if (getCommentReq.status === 200) {
    yield put(getAllCommentByCourseSuccess(getCommentReq));
  } else {
    yield put(getAllCommentByCourseFailed(getCommentReq));
  }
}

function* sendCommentSaga({ data }) {
  const sendCommentReq = yield call(sendComment, qs.stringify({ data }));
  if (sendCommentReq.status === 200) {
    yield put(postCommentSuccess(sendCommentReq));
  } else {
    yield put(postCommentFailed(sendCommentReq));
    Swal.fire({
      icon: "error",
      text: "Something went wrong. Please try again.",
    });
  }
}

function* searchCourseSaga({ course }) {
  const searchCourseReq = yield call(searchCourse, course);
  if (searchCourseReq.status === 200) {
    yield put(searchCourseSuccess(searchCourseReq));
  } else {
    yield put(searchCourseFailed(searchCourseReq));
  }
}

function* categoryByIdSaga({ id }) {
  const categoryByIdReq = yield call(getCategoryById, id);
  if (categoryByIdReq.status === 200) {
    yield put(getCategoryByIdSuccess(categoryByIdReq));
  } else {
    yield put(getCategoryByIdFailed(categoryByIdReq));
  }
}

function* buyCourseSaga({ course_id }) {
  try {
    const buyCourseReq = yield call(buyCourse, qs.stringify({ course_id }));
    if (buyCourseReq.status === 200) {
      yield put(getBuyCourseSuccess(buyCourseReq));
    } else if (!buyCourseReq) {
      yield put(getBuyCourseFailed(buyCourseReq));
    }
  } catch (err) {
    yield put(courseHasBeenPaid());
  }
}

function* buyHistorySaga(data) {
  const buyHistoryReq = yield call(buyHistory, data.page);
  if (buyHistoryReq.status === 200) {
    yield put(getBuyHistorySuccess(buyHistoryReq));
  } else {
    yield put(getBuyHistoryFailed(buyHistoryReq));
  }
}

function* getDetailScoreSaga({ email, course_id }) {
  const data = {
    email: email,
    course_id: course_id,
  };
  const detailScoreReq = yield call(getDetailScore, data);
  if (detailScoreReq.status === 200) {
    yield put(getDetailScoreSuccess(detailScoreReq));
  } else yield put(getDetailScoreFailed(detailScoreReq));
}

function* getCourseContentSaga({ id }) {
  const courseContentReq = yield call(getCourseContent, id);
  if (courseContentReq.status === 200) {
    yield put(getCourseContentSuccess(courseContentReq));
  } else {
    yield put(getCourseContentFailed(courseContentReq));
  }
}

function* sendRatingSaga({ data }) {
  const ratingReq = yield call(sendRating, qs.stringify({ data }));
  if (ratingReq.status === 200) {
    yield put(sendRatingSuccess(ratingReq));
  } else {
    yield put(sendRatingFailed(ratingReq));
  }
}

function* getRatingSaga({ id }) {
  const ratingReq = yield call(getRating, id);
  if (ratingReq.status === 200) {
    yield put(getRatingSuccess(ratingReq));
  } else {
    yield put(getRatingFailed(ratingReq));
  }
}

function* likeCommentSaga({ data }) {
  const likeReq = yield call(postLikeComment, qs.stringify({ data }));
  if (likeReq.status === 200) {
    yield put(likeCommentSuccess(likeReq));
  } else {
    yield put(likeCommentFailed(likeReq));
  }
}

function* dislikeCommentSaga({ data }) {
  const dislikeReq = yield call(deleteLikeComment, data);
  if (dislikeReq.status === 200) {
    yield put(dislikeCommentSuccess(dislikeReq));
  } else {
    yield put(dislikeCommentFailed(dislikeReq));
  }
}

function* watchSaga() {
  yield takeLatest(COURSE.GET_ALL_COURSE, courseSaga);
  yield takeLatest(COURSE.GET_TRENDING_COURSE, trendingCourseSaga);
  yield takeLatest(COURSE.GET_ALL_COURSE_BY_ID, courseByIdSaga);
  yield takeLatest(COURSE.GET_COURSE_BY_USER, getCourseByUserSaga);
  yield takeLatest(COURSE.GET_ALL_COMMENT_BY_COURSE, getCommentByCourseSaga);
  yield takeLatest(COURSE.SEARCH_COURSE, searchCourseSaga);
  yield takeLatest(COURSE.GET_CATEGORY_BY_ID, categoryByIdSaga);
  yield takeLatest(COURSE.GET_BUY_COURSE, buyCourseSaga);
  yield takeEvery(COURSE.GET_BUY_HISTORY, buyHistorySaga);
  yield takeLatest(COURSE.GET_DETAIL_SCORE, getDetailScoreSaga);
  yield takeLatest(COURSE.GET_COURSE_CONTENT, getCourseContentSaga);
  yield takeLatest(COURSE.POST_COMMENT, sendCommentSaga);
  yield takeLatest(COURSE.SEND_RATING, sendRatingSaga);
  yield takeLatest(COURSE.GET_RATING, getRatingSaga);
  yield takeLatest(COURSE.POST_LIKE, likeCommentSaga);
  yield takeLatest(COURSE.POST_DISLIKE, dislikeCommentSaga);
}

export default watchSaga;
