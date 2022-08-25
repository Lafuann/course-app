/*eslint-disable*/
import { LOGIN } from "../../constants/auth/login";

const initialState = {
  status: "",
  user: {},
  message: "",
  error: "",
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.LOGIN:
      return {
        ...state,
        status: "request",
      };
    case LOGIN.LOGIN_SUCCESS:
      return {
        ...state,
        status: "success",
        user: action.payload,
      };
    case LOGIN.LOGIN_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload,
      };
    case LOGIN.LOGOUT:
      return {
        ...state,
        status: "logged out",
        user: initialState.user,
      };
    case LOGIN.RESET_STATUS:
      return {
        ...state,
        status: "success logout",
      };
    case LOGIN.LOGIN_WITH_GOOGLE:
      return {
        ...state,
        status: "google_request",
      };
    case LOGIN.LOGIN_WITH_GOOGLE_SUCCESS:
      return {
        ...state,
        status: "google_success",
        user: action.payload,
      };
    case LOGIN.LOGIN_WITH_GOOGLE_FAILED:
      return {
        ...state,
        status: "google_failed",
      };
    case LOGIN.FORGOT_PASSWORD:
      return {
        ...state,
        status: "request_forgot",
      };
    case LOGIN.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        status: "success_forgot",
        message: action.payload.data.message,
      };
    case LOGIN.FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        status: "failed_forgot",
      };
    default:
      return state;
  }
};

export default login;
