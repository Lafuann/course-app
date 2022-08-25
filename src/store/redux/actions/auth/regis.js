import { REGIS } from "../../constants/auth/regis";

export const registerNextStep = (step) => ({
  type: REGIS.REGISTER_NEXT_STEP,
  step,
});

export const registerPrevStep = (step) => ({
  type: REGIS.REGISTER_PREV_STEP,
  step,
});

export const regisStep1 = (full_name, email) => ({
  type: REGIS.REGIS_STEP_1,
  full_name,
  email,
});

export const regisStep2 = (password) => ({
  type: REGIS.REGIS_STEP_2,
  password,
});

export const regisStep3 = (phone_number, phone_country_code) => ({
  type: REGIS.REGIS_STEP_3,
  phone_country_code,
  phone_number,
});

export const register = (data) => ({
  type: REGIS.REGISTER,
  data,
});

export const registerSuccess = (payload) => ({
  type: REGIS.REGISTER_SUCCESS,
  payload,
});

export const registerFailed = (payload) => ({
  type: REGIS.REGISTER_FAILED,
  payload,
});

export const registerByGoogle = (email, googleId) => ({
  type: REGIS.REGISTER_BY_GOOGLE,
  email,
  googleId,
});

export const registerByGoogleSuccess = (payload) => ({
  type: REGIS.REGISTER_BY_GOOGLE_SUCCESS,
  payload,
});

export const registerByGoogleFailed = (payload) => ({
  type: REGIS.REGISTER_BY_GOOGLE_FAILED,
  payload,
});
