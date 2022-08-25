import { configureStore } from "@reduxjs/toolkit";
import Authentication from "./Authentication";
import CurriculumVitae from "./CurriculumVitae";
import Register from "./Register";
import Quiz from "./Quiz";

export default configureStore({
  reducer: {
    auth: Authentication,
    cv: CurriculumVitae,
    register: Register,
    quiz: Quiz,
  },
});
