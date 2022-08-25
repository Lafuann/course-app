import { USER } from "../../constants/profile/user";

const initialState = {
  status: "",
  message: "",
  user: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER.GET_USER:
      return {
        ...state,
        status: "request",
      };
    case USER.GET_USER_SUCCESS:
      return {
        ...state,
        status: "success",
        user: action.payload,
        message: action.payload.data.message,
      };
    case USER.GET_USER_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload.data.message,
      };
    case USER.CHANGE_PASSWORD:
      return {
        ...state,
        status: "request_change",
      };
    case USER.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        status: "success_change",
        message: action.payload.data.message,
      };
    case USER.CHANGE_PASSWORD_FAILED:
      return {
        ...state,
        status: "failed_change",
        message: action.payload.data.message,
      };
    case USER.CLEAR_MESSAGE:
      return {
        ...state,
        status: initialState.status,
        message: initialState.message,
      };
    default:
      return state;
  }
};

export default user;
