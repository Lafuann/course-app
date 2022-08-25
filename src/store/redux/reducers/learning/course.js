import { COURSE } from "../../constants/learning/course";

const initialState = {
  status: "",
  course: {},
  trendingCourse: {},
  message: "",
  courseId: null,
  courseById: {},
  myCourses: {},
  comment: {},
  categoryById: {},
  search: {},
  buyCourse: {},
  detailScore: {},
  courseContent: {},
  courseRating: {},
  likeCommentStatus: "",
};

const course = (state = initialState, action) => {
  switch (action.type) {
    //Get All Course
    case COURSE.GET_ALL_COURSE:
      return {
        ...state,
        status: "request",
      };
    case COURSE.GET_ALL_COURSE_SUCCESS:
      return {
        ...state,
        status: "success",
        course: action.payload,
      };
    case COURSE.GET_ALL_COURSE_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload,
      };

    case COURSE.SET_COURSE_ID:
      return {
        ...state,
        courseId: action.payload,
      };

    //Get Trending Course
    case COURSE.GET_TRENDING_COURSE:
      return {
        ...state,
        status: "request",
      };
    case COURSE.GET_TRENDING_COURSE_SUCCESS:
      return {
        ...state,
        status: "success",
        trendingCourse: action.payload,
      };
    case COURSE.GET_TRENDING_COURSE_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload,
      };

    //Get Course By ID
    case COURSE.GET_ALL_COURSE_BY_ID:
      return {
        ...state,
        status: "request",
      };
    case COURSE.GET_ALL_COURSE_BY_ID_SUCCESS:
      return {
        ...state,
        status: "success",
        courseById: action.payload,
      };
    case COURSE.GET_ALL_COURSE_BY_ID_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload,
      };

    //Get Course By Users
    case COURSE.GET_COURSE_BY_USER:
      return {
        ...state,
        status: "learning_request",
      };
    case COURSE.GET_COURSE_BY_USER_SUCCESS:
      return {
        ...state,
        status: "learning_success",
        myCourses: action.payload.data,
      };
    case COURSE.GET_COURSE_BY_USER_FAILED:
      return {
        ...state,
        status: "learning_failed",
      };

    //Get Comment By Course
    case COURSE.GET_ALL_COMMENT_BY_COURSE:
      return {
        ...state,
        status: "request get comment",
      };
    case COURSE.GET_ALL_COMMENT_BY_COURSE_SUCCESS:
      return {
        ...state,
        status: "get comment success",
        comment: action.payload.data,
      };
    case COURSE.GET_ALL_COMMENT_BY_COURSE_FAILED:
      return {
        ...state,
        status: "get comment failed",
      };

    //Search Course
    case COURSE.SEARCH_COURSE:
      return {
        ...state,
        status: "request",
      };
    case COURSE.SEARCH_COURSE_SUCCESS:
      return {
        ...state,
        status: "search success",
        search: action.payload.data,
      };
    case COURSE.SEARCH_COURSE_FAILED:
      return {
        ...state,
        status: "failed",
      };

    //Get Category By ID
    case COURSE.GET_CATEGORY_BY_ID:
      return {
        ...state,
        status: "request",
      };
    case COURSE.GET_CATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        status: "success",
        categoryById: action.payload,
      };
    case COURSE.GET_CATEGORY_BY_ID_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload,
      };

    //Get BUY COURSE
    case COURSE.GET_BUY_COURSE:
      return {
        ...state,
        status: "request booking",
      };
    case COURSE.GET_BUY_COURSE_SUCCESS:
      return {
        ...state,
        status: "booking success",
        buyCourse: action.payload,
      };
    case COURSE.GET_BUY_COURSE_FAILED:
      return {
        ...state,
        status: "booking failed",
        message: action.payload,
      };
    case COURSE.COURSE_HAS_BEEN_PAID:
      return {
        ...state,
        status: "course has been paid",
      };
    //Get BUY HISTORY
    case COURSE.GET_BUY_HISTORY:
      return {
        ...state,
        status: "request",
        course_id: action.payload,
      };
    case COURSE.GET_BUY_HISTORY_SUCCESS:
      return {
        ...state,
        status: "success",
        buyHistory: action.payload,
      };
    case COURSE.GET_BUY_HISTORY_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload,
      };

    case COURSE.CLEAR_BUY_COURSE:
      return {
        ...state,
        buyCourse: initialState.buyCourse,
      };

    case COURSE.GET_DETAIL_SCORE:
      return {
        ...state,
        status: "request",
      };

    case COURSE.GET_DETAIL_SCORE_SUCCESS:
      return {
        ...state,
        status: "success",
        detailScore: action.payload,
      };
    case COURSE.GET_DETAIL_SCORE_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload,
      };

    case COURSE.GET_COURSE_CONTENT:
      return {
        ...state,
        status: "request",
      };
    case COURSE.GET_COURSE_CONTENT_SUCCESS:
      return {
        ...state,
        status: "success",
        courseContent: action.payload,
      };
    case COURSE.GET_COURSE_CONTENT_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload,
      };
    // post comment
    case COURSE.POST_COMMENT:
      return {
        ...state,
        status: "request",
      };
    case COURSE.POST_COMMENT_SUCCESS:
      return {
        ...state,
        status: "post comment success",
        message: action.payload.data,
      };
    case COURSE.POST_COMMENT_FAILED:
      return {
        ...state,
        status: "post comment failed",
        message: action.payload.data,
      };
    // send rating
    case COURSE.SEND_RATING:
      return {
        ...state,
        status: "request",
      };
    case COURSE.SEND_RATING_SUCCESS:
      return {
        ...state,
        status: "post rating success",
        message: action.payload.data,
      };
    case COURSE.SEND_RATING_FAILED:
      return {
        ...state,
        status: "post rating failed",
        message: action.payload.data,
      };
    // get rating
    case COURSE.GET_RATING:
      return {
        ...state,
        status: "request",
      };
    case COURSE.GET_RATING_SUCCESS:
      return {
        ...state,
        status: "success",
        courseRating: action.payload.data,
      };
    case COURSE.GET_RATING_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload.data,
      };
    // post like
    case COURSE.POST_LIKE:
      return {
        ...state,
        status: "request like comment",
      };
    case COURSE.POST_LIKE_SUCCESS:
      return {
        ...state,
        status: "like comment success",
        likeCommentStatus: action.payload.data.data,
      };
    case COURSE.POST_LIKE_FAILED:
      return {
        ...state,
        status: "like comment failed",
        message: action.payload.data,
      };
    // post dislike
    case COURSE.POST_DISLIKE:
      return {
        ...state,
        status: "request dislike comment",
      };
    case COURSE.POST_DISLIKE_SUCCESS:
      return {
        ...state,
        status: "dislike comment success",
        likeCommentStatus: action.payload.data.data,
      };
    case COURSE.POST_DISLIKE_FAILED:
      return {
        ...state,
        status: "dislike comment failed",
        message: action.payload.data,
      };
    // reset status
    case COURSE.RESET_COURSE_STATUS:
      return {
        ...state,
        status: initialState.status,
      };
    default:
      return state;
  }
};

export default course;
