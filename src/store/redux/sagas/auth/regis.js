import { call, put, takeLatest } from "redux-saga/effects";
import { REGIS } from "../../constants/auth/regis";

import {
  registerSuccess,
  registerFailed,
  registerByGoogleSuccess,
  registerByGoogleFailed,
} from "../../actions/auth/regis";

import qs from "qs";
import { regisGoogle, register } from "../../../services/AuthService";

function* registerSaga(data) {
  const req = qs.stringify({
    email: data.data.email,
    type: "Consumer",
    password: data.data.password,
    date_of_birth: data.data.date_of_birth,
    full_name: data.data.full_name,
    phone_number: data.data.phone_number,
    phone_country_code: data.data.phone_country_code,
    // role_id: null,
    gender: data.data.gender,
    bio: "",
  });
  const registerReq = yield call(register, req);
  if (registerReq.status === 200) {
    yield put(registerSuccess(registerReq));
  } else {
    yield put(registerFailed(registerReq));
  }
}

function* registerByGoogleSaga({ email, googleId }) {
  const data = qs.stringify({
    email: email,
    google_id: googleId,
    type: "Consumer",
  });
  const registerByGoogleReq = yield call(regisGoogle, data);
  if (registerByGoogleReq.status === 200) {
    yield put(registerByGoogleSuccess(registerByGoogleReq));
  } else {
    yield put(registerByGoogleFailed(registerByGoogleReq));
  }
}

function* watchSaga() {
  yield takeLatest(REGIS.REGISTER, registerSaga);
  yield takeLatest(REGIS.REGISTER_BY_GOOGLE, registerByGoogleSaga);
}

export default watchSaga;
