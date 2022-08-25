import { call, put, takeLatest } from "redux-saga/effects";
import { CATEGORY } from "../../constants/learning/category";
// import {} from "../../actions/auth/login";
import { getAllCategory } from "../../../services/CourseService";
import {
  getAllCategoryFailed,
  getAllCategorySuccess,
} from "../../actions/learning/category";

function* categorySaga() {
  const categoryReq = yield call(getAllCategory);
  if (categoryReq.status === 200) {
    yield put(getAllCategorySuccess(categoryReq));
  } else {
    yield put(getAllCategoryFailed(categoryReq));
  }
}

function* watchSaga() {
  yield takeLatest(CATEGORY.GET_ALL_CATEGORY, categorySaga);
}

export default watchSaga;
