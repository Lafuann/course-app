import { LOGIN } from "../../constants/auth/login";

// function action
export const login = (email, password) => ({
  type: LOGIN.LOGIN,
  email,
  password,
});

export const loginSuccess = (payload) => ({
  type: LOGIN.LOGIN_SUCCESS,
  payload,
});

export const loginFailed = (payload) => ({
  type: LOGIN.LOGIN_FAILED,
  payload,
});

export const logout = () => ({
  type: LOGIN.LOGOUT,
});

export const loginWithGoogle = (email, googleId) => ({
  type: LOGIN.LOGIN_WITH_GOOGLE,
  email,
  googleId,
});

export const loginWithGoogleSuccess = (payload) => ({
  type: LOGIN.LOGIN_WITH_GOOGLE_SUCCESS,
  payload,
});

export const loginWithGoogleFailed = (payload) => ({
  type: LOGIN.LOGIN_WITH_GOOGLE_FAILED,
  payload,
});

export const forgotPassword = (email) => ({
  type: LOGIN.FORGOT_PASSWORD,
  email,
});

export const forgotPasswordSuccess = (payload) => ({
  type: LOGIN.FORGOT_PASSWORD_SUCCESS,
  payload,
});

export const forgotPasswordFailed = (payload) => ({
  type: LOGIN.FORGOT_PASSWORD_FAILED,
  payload,
});

export const resetStatus = () => ({
  type: LOGIN.RESET_STATUS,
});
