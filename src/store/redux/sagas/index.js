import { all } from "redux-saga/effects";

import login from "./auth/login";
import regis from "./auth/regis";
import user from "./profile/user";
import editProfile from "./profile/editProfile";
import course from "./learning/course";
import category from "./learning/category";
import quiz from "./learning/quiz";

const auth = [login(), regis()];
const profile = [user(), editProfile()];
const learning = [course(), category(), quiz()];

function* rootSaga() {
  yield all([...auth, ...profile, ...learning]);
}

export default rootSaga;
