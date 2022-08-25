import { CATEGORY } from "../../constants/learning/category";

// function action for get all category
export const getAllCategory = () => ({
  type: CATEGORY.GET_ALL_CATEGORY,
});

export const getAllCategorySuccess = (payload) => ({
  type: CATEGORY.GET_ALL_CATEGORY_SUCCESS,
  payload,
});

export const getAllCategoryFailed = (payload) => ({
  type: CATEGORY.GET_ALL_CATEGORY_FAILED,
  payload,
});


// export const logout = () => ({
//   type: LOGIN.LOGOUT,
// });

// export const logoutSuccess = (payload) => ({
//   type: LOGIN.LOGOUT_SUCCESS,
//   payload,
// });

// export const logoutFailed = (payload) => ({
//   type: LOGIN.LOGOUT_FAILED,
//   payload,
// });
