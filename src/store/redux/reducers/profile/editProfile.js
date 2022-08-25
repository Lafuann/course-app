import { EDIT_PROFILE } from "../../constants/profile/editProfile";

const initialState = {
  status: "",
  message: "",
};

const editProfile = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE.EDIT_PROFILE:
      return {
        ...state,
        status: "request",
      };
    case EDIT_PROFILE.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        status: "success",
        message: action.payload,
      };
    case EDIT_PROFILE.EDIT_PROFILE_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload,
      };

    case EDIT_PROFILE.EDIT_PHOTO:
      return {
        ...state,
        status: "request",
      };
    case EDIT_PROFILE.EDIT_PHOTO_SUCCESS:
      return {
        ...state,
        status: "success",
        message: action.payload,
      };
    case EDIT_PROFILE.EDIT_PHOTO_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload,
      };
    default:
      return state;
  }
};

export default editProfile;
