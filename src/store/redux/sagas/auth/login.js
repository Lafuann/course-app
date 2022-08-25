import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN } from "../../constants/auth/login";
// import {} from "../../actions/auth/login";
import {
  forgotPassword,
  login,
  loginGoogle,
  logout,
} from "../../../services/AuthService";
import {
  forgotPasswordFailed,
  forgotPasswordSuccess,
  loginFailed,
  loginSuccess,
  loginWithGoogleFailed,
  loginWithGoogleSuccess,
} from "../../actions/auth/login";
import qs from "qs";
import Swal from "sweetalert2";

function* loginSaga({ email, password }) {
  const data = qs.stringify({
    email,
    password,
  });
  try {
    const loginReq = yield call(login, data);
    if (loginReq.data.message === "Incorrect login.") {
      yield put(loginFailed(loginReq.data.message));
    } else if (loginReq.error) {
      yield put(loginFailed(loginReq.error.email));
    } else if (loginReq.status !== 200) {
      yield put(loginFailed(loginReq));
    } else if (loginReq.data.error) {
      yield put(loginFailed(loginReq));
    } else {
      yield put(loginSuccess(loginReq));
      const data = loginReq.data;
      localStorage.setItem("token", data.user.api_token);
    }
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Email Confirmation was Not Accepted!",
      text: "Please Check Your Email!",
    });
  }
}

function* loginWithGoogleSaga({ email, googleId }) {
  const data = qs.stringify({
    email: email,
    google_id: googleId,
    type: "Consumer",
  });
  const loginGoogleReq = yield call(loginGoogle, data);
  if (loginGoogleReq.status === 200) {
    yield put(loginWithGoogleSuccess(loginGoogleReq));
    const user = loginGoogleReq.data.user;
    if (user) {
      localStorage.setItem("token", user.api_token);
    }
  } else {
    yield put(loginWithGoogleFailed(loginGoogleReq));
  }
}

function* forgotPasswordSaga({ email }) {
  const data = qs.stringify({
    email,
  });
  const forgotReq = yield call(forgotPassword, data);
  if (forgotReq.status === 200) {
    yield put(forgotPasswordSuccess(forgotReq));
  } else {
    yield put(forgotPasswordFailed(forgotReq));
  }
}

function* logoutSaga() {
  const logoutReq = yield call(logout);
  return logoutReq;
}

function* watchSaga() {
  yield takeLatest(LOGIN.LOGIN, loginSaga);
  yield takeLatest(LOGIN.LOGOUT, logoutSaga);
  yield takeLatest(LOGIN.LOGIN_WITH_GOOGLE, loginWithGoogleSaga);
  yield takeLatest(LOGIN.FORGOT_PASSWORD, forgotPasswordSaga);
}

export default watchSaga;
