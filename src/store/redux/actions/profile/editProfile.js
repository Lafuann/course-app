import { EDIT_PROFILE } from "../../constants/profile/editProfile";

export const editProfile = (data) => ({
  type: EDIT_PROFILE.EDIT_PROFILE,
  data,
});

export const editProfileSuccess = (payload) => ({
  type: EDIT_PROFILE.EDIT_PROFILE_SUCCESS,
  payload,
});

export const editProfileFailed = (payload) => ({
  type: EDIT_PROFILE.EDIT_PROFILE_FAILED,
  payload,
});

export const editPhoto = (data) => ({
  type: EDIT_PROFILE.EDIT_PHOTO,
  data,
});

export const editPhotoSuccess = (payload) => ({
  type: EDIT_PROFILE.EDIT_PHOTO_SUCCESS,
  payload,
});

export const editPhotoFailed = (payload) => ({
  type: EDIT_PROFILE.EDIT_PHOTO_FAILED,
  payload,
});


