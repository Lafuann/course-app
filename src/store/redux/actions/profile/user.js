import { USER } from "../../constants/profile/user";

export const getUser = () => ({
  type: USER.GET_USER,
});

export const getUserSuccess = (payload) => ({
  type: USER.GET_USER_SUCCESS,
  payload,
});

export const getUSerFailed = (payload) => ({
  type: USER.GET_USER_FAILED,
  payload,
});

export const changePassword = (
  old_password,
  new_password,
  password_confirmation
) => ({
  type: USER.CHANGE_PASSWORD,
  old_password,
  new_password,
  password_confirmation,
});

export const changePasswordSuccess = (payload) => ({
  type: USER.CHANGE_PASSWORD_SUCCESS,
  payload,
});

export const changePasswordFailed = (payload) => ({
  type: USER.CHANGE_PASSWORD_FAILED,
  payload,
});

export const clearMessage = () => ({
  type: USER.CLEAR_MESSAGE,
});
