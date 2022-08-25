import { REGIS } from "../../constants/auth/regis";

const initialState = {
  status: "",
  step: 0,
  email: "",
  type: "Consumer",
  password: "",
  full_name: "",
  phone_number: "",
  phone_country_code: "",
  bio: "",
  message: "",
};

const regis = (state = initialState, action) => {
  switch (action.type) {
    case REGIS.REGISTER_NEXT_STEP:
      return {
        ...state,
        step: action.step,
      };
    case REGIS.REGISTER_PREV_STEP:
      return {
        ...state,
        step: action.step,
      };
    case REGIS.REGIS_STEP_1:
      return {
        ...state,
        full_name: action.full_name,
        email: action.email,
      };
    case REGIS.REGIS_STEP_2:
      return {
        ...state,
        password: action.password,
      };
    case REGIS.REGIS_STEP_3:
      return {
        ...state,
        phone_number: action.phone_number,
        phone_country_code: action.phone_country_code,
      };
    case REGIS.REGISTER:
      return {
        ...state,
        status: "request",
      };
    case REGIS.REGISTER_SUCCESS:
      return {
        ...state,
        status: "success",
        message: action.payload.data.message,
      };
    case REGIS.REGISTER_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload.data.message,
      };
    case REGIS.REGISTER_BY_GOOGLE:
      return {
        ...state,
        status: "google_request",
      };
    case REGIS.REGISTER_BY_GOOGLE_SUCCESS:
      return {
        ...state,
        status: "google_success",
      };
    case REGIS.REGISTER_BY_GOOGLE_FAILED:
      return {
        ...state,
        status: "google_failed",
      };
    default:
      return state;
  }
};

export default regis;
