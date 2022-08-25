import { USER } from "../../constants/profile/user";
import { call, put, takeLatest } from "redux-saga/effects";
import { getUser } from "../../../services/AuthService";
import {
  changePasswordFailed,
  changePasswordSuccess,
  getUSerFailed,
  getUserSuccess,
} from "../../actions/profile/user";
import { changePassword } from "../../../services/AuthService";
import qs from "qs";

function* getUserSaga() {
  const getUserReq = yield call(getUser);
  if (getUserReq.status === 200) {
    yield put(getUserSuccess(getUserReq));
  } else {
    yield put(getUSerFailed(getUserReq));
  }
}

function* changePasswordSaga({
  old_password,
  new_password,
  password_confirmation,
}) {
  const req = qs.stringify({
    old_password: old_password,
    new_password: new_password,
    password_confirmation: password_confirmation,
  });
  const changeReq = yield call(changePassword, req);
  if (changeReq.data.message === "Please retry again") {
    yield put(changePasswordFailed(changeReq));
  } else if (changeReq.status === 200) {
    yield put(changePasswordSuccess(changeReq));
  } else {
    yield put(changePasswordFailed(changeReq));
  }
}

function* watchSaga() {
  yield takeLatest(USER.GET_USER, getUserSaga);
  yield takeLatest(USER.CHANGE_PASSWORD, changePasswordSaga);
}

export default watchSaga;
