import { EDIT_PROFILE } from "../../constants/profile/editProfile";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  editProfileFailed,
  editProfileSuccess,
  editPhotoFailed,
  editPhotoSuccess,
} from "../../actions/profile/editProfile";
import { editProfile, editPhoto } from "../../../services/AuthService";

function* editProfileSaga({ data }) {
  let item = new FormData();
  item.append('email', data.email);
  item.append('type', 'Consumer');
  item.append('full_name', data.full_name);
  item.append('date_of_birth', data.date_of_birth);
  item.append('job', data.job);
  item.append('gender', data.gender);
  item.append('phone_number', data.phone_number);
  item.append('phone_country_code', data.phone_country_code);
  item.append('photo', data.photo);
  item.append('address', data.address);
  item.append('city', data.city);
  item.append('country', 'Indonesia');
  item.append('postal_code', data.postal_code);
  item.append('website_url', data.website_url);
  item.append('blog_url', data.blog_url);
  item.append('linkedin_url', data.linkedin_url);
  const editReq = yield call(editProfile, item);
  if (editReq.status === 200) {
    yield put(editProfileSuccess(editReq));
  } else {
    yield put(editProfileFailed(editReq));
  }
}

function* editPhotoSaga(data) {
  const editPhotoReq = yield call(editPhoto, data);
  if(editPhotoReq.status === 200) {
    yield put(editPhotoSuccess(editPhotoReq));
  } else {
    yield put(editPhotoFailed(editPhotoReq));
  }
}

function* watchSaga() {
  yield takeLatest(EDIT_PROFILE.EDIT_PROFILE, editProfileSaga);
  yield takeLatest(EDIT_PROFILE.EDIT_PHOTO, editPhotoSaga);
}

export default watchSaga;
