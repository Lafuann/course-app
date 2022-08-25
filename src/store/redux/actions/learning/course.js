import { COURSE } from "../../constants/learning/course";

// action to get all course
export const getAllCourse = () => ({
  type: COURSE.GET_ALL_COURSE,
});

export const getAllCourseSuccess = (payload) => ({
  type: COURSE.GET_ALL_COURSE_SUCCESS,
  payload,
});

export const getAllCourseFailed = (payload) => ({
  type: COURSE.GET_ALL_COURSE_FAILED,
  payload,
});

export const setCourseId = (payload) => ({
  type: COURSE.SET_COURSE_ID,
  payload,
});

// action to get trending course
export const getAllTrendingCourse = () => ({
  type: COURSE.GET_TRENDING_COURSE,
});

export const getAllTrendingCourseSuccess = (payload) => ({
  type: COURSE.GET_TRENDING_COURSE_SUCCESS,
  payload,
});

export const getAllTrendingCourseFailed = (payload) => ({
  type: COURSE.GET_TRENDING_COURSE_FAILED,
  payload,
});

// action to get course by id
export const getAllCourseById = (id) => ({
  type: COURSE.GET_ALL_COURSE_BY_ID,
  id,
});

export const getAllCourseByIdSuccess = (payload) => ({
  type: COURSE.GET_ALL_COURSE_BY_ID_SUCCESS,
  payload,
});

export const getAllCourseByIdFailed = (payload) => ({
  type: COURSE.GET_ALL_COURSE_BY_ID_FAILED,
  payload,
});

//action to get course by user
export const getCourseByUser = (email) => ({
  type: COURSE.GET_COURSE_BY_USER,
  email,
});

export const getCourseByUserSuccess = (payload) => ({
  type: COURSE.GET_COURSE_BY_USER_SUCCESS,
  payload,
});

export const getCourseByUserFailed = (payload) => ({
  type: COURSE.GET_COURSE_BY_USER_FAILED,
  payload,
});

//action to get comment by course
export const getAllCommentByCourse = (id) => ({
  type: COURSE.GET_ALL_COMMENT_BY_COURSE,
  id,
});

export const getAllCommentByCourseSuccess = (payload) => ({
  type: COURSE.GET_ALL_COMMENT_BY_COURSE_SUCCESS,
  payload,
});

export const getAllCommentByCourseFailed = (payload) => ({
  type: COURSE.GET_ALL_COMMENT_BY_COURSE_FAILED,
  payload,
});

// action to post comment
export const postComment = (data) => ({
  type: COURSE.POST_COMMENT,
  data,
});

export const postCommentSuccess = (payload) => ({
  type: COURSE.POST_COMMENT_SUCCESS,
  payload,
});

export const postCommentFailed = (payload) => ({
  type: COURSE.POST_COMMENT_FAILED,
  payload,
});

export const searchCourse = (course) => ({
  type: COURSE.SEARCH_COURSE,
  course,
});

export const searchCourseSuccess = (payload) => ({
  type: COURSE.SEARCH_COURSE_SUCCESS,
  payload,
});

export const searchCourseFailed = (payload) => ({
  type: COURSE.SEARCH_COURSE_FAILED,
  payload,
});

// action to get category by id
export const getCategoryById = (id) => ({
  type: COURSE.GET_CATEGORY_BY_ID,
  id,
});

export const getCategoryByIdSuccess = (payload) => ({
  type: COURSE.GET_CATEGORY_BY_ID_SUCCESS,
  payload,
});

export const getCategoryByIdFailed = (payload) => ({
  type: COURSE.GET_CATEGORY_BY_ID_FAILED,
  payload,
});

// action to get buy course
export const getBuyCourse = (course_id) => ({
  type: COURSE.GET_BUY_COURSE,
  course_id,
});

export const getBuyCourseSuccess = (payload) => ({
  type: COURSE.GET_BUY_COURSE_SUCCESS,
  payload,
});

export const getBuyCourseFailed = (payload) => ({
  type: COURSE.GET_BUY_COURSE_FAILED,
  payload,
});

export const courseHasBeenPaid = () => ({
  type: COURSE.COURSE_HAS_BEEN_PAID,
});

// action to get buy history
export const getBuyHistory = (page) => ({
  type: COURSE.GET_BUY_HISTORY,
  page,
});

export const getBuyHistorySuccess = (payload) => ({
  type: COURSE.GET_BUY_HISTORY_SUCCESS,
  payload,
});

export const getBuyHistoryFailed = (payload) => ({
  type: COURSE.GET_BUY_HISTORY_FAILED,
  payload,
});

// action to get detail score
export const getDetailScore = (email, course_id) => ({
  type: COURSE.GET_DETAIL_SCORE,
  email,
  course_id,
});

export const getDetailScoreSuccess = (payload) => ({
  type: COURSE.GET_DETAIL_SCORE_SUCCESS,
  payload,
});

export const getDetailScoreFailed = (payload) => ({
  type: COURSE.GET_DETAIL_SCORE_FAILED,
  payload,
});

// action to get content course
export const getCourseContent = (id) => ({
  type: COURSE.GET_COURSE_CONTENT,
  id,
});

export const getCourseContentSuccess = (payload) => ({
  type: COURSE.GET_COURSE_CONTENT_SUCCESS,
  payload,
});

export const getCourseContentFailed = (payload) => ({
  type: COURSE.GET_COURSE_CONTENT_FAILED,
  payload,
});

export const clearBuyCourse = () => ({
  type: COURSE.CLEAR_BUY_COURSE,
});

export const sendRating = (data) => ({
  type: COURSE.SEND_RATING,
  data,
});

export const sendRatingSuccess = (payload) => ({
  type: COURSE.SEND_RATING_SUCCESS,
  payload,
});

export const sendRatingFailed = (payload) => ({
  type: COURSE.SEND_RATING_FAILED,
  payload,
});

export const getRating = (id) => ({
  type: COURSE.GET_RATING,
  id,
});

export const getRatingSuccess = (payload) => ({
  type: COURSE.GET_RATING_SUCCESS,
  payload,
});

export const getRatingFailed = (payload) => ({
  type: COURSE.GET_RATING_FAILED,
  payload,
});

export const likeComment = (data) => ({
  type: COURSE.POST_LIKE,
  data,
});

export const likeCommentSuccess = (payload) => ({
  type: COURSE.POST_LIKE_SUCCESS,
  payload,
});

export const likeCommentFailed = (payload) => ({
  type: COURSE.POST_LIKE_FAILED,
  payload,
});

export const dislikeComment = (data) => ({
  type: COURSE.POST_DISLIKE,
  data,
});

export const dislikeCommentSuccess = (payload) => ({
  type: COURSE.POST_DISLIKE_SUCCESS,
  payload,
});

export const dislikeCommentFailed = (payload) => ({
  type: COURSE.POST_DISLIKE_FAILED,
  payload,
});

// reset status
export const resetCourseStatus = () => ({
  type: COURSE.RESET_COURSE_STATUS,
});
