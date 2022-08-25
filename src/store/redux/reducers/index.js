import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import login from "./auth/login";
import quiz from "./learning/quiz";
import regis from "./auth/regis";
import user from "./profile/user";
import course from "./learning/course";
import category from "./learning/category";
import editProfile from "./profile/editProfile";

// persist
const persistLogin = {
  key: "login",
  whiteList: ["user"],
  storage: storage,
};

const persistRegis = {
  key: "regis",
  storage: storage,
};

const persistQuiz = {
  key: "quiz",
  whiteList: ["quizId"],
  storage: storage,
};

const persistUser = {
  key: "user",
  whiteList: ["user"],
  storage: storage,
};

// persisted
const persistedLogin = persistReducer(persistLogin, login);
const persistedQuiz = persistReducer(persistQuiz, quiz);
const persistedRegis = persistReducer(persistRegis, regis);
const persistedUser = persistReducer(persistUser, user);

const auth = {
  login: persistedLogin,
  regis: persistedRegis,
};

const learning = {
  quiz: persistedQuiz,
  course,
  category,
};

const profile = {
  user: persistedUser,
  editProfile,
};

export default combineReducers({
  ...auth,
  ...learning,
  ...profile,
});
