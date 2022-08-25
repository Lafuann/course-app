import { CATEGORY } from "../../constants/learning/category";

const initialState = {
  status: "",
  category: {},
  message: "",
  // categoryId: null,
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY.GET_ALL_CATEGORY:
      return {
        ...state,
        status: "request",
      };
    case CATEGORY.GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        status: "success",
        category: action.payload,
      };
    case CATEGORY.GET_ALL_CATEGORY_FAILED:
      return {
        ...state,
        status: "failed",
        message: action.payload,
      };
    // case CATEGORY.SET_CATEGORY_ID:
    //   return {
    //     ...state,
    //     categoryId: action.payload,
    //   };
    default:
      return state;
  }
};

export default category;
