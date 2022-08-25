import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import { Spinner } from "react-bootstrap";
import { Suspense } from "react";
// import HomePage from "./component/homepage/HomePage";
import Login from "./component/authentication/";
import Register from "./component/authentication/register";
import ForgotPassword from "./component/authentication/Login/ForgotPassword";
import Education from "./component/education";
// import DetailComponent from "./component/DetailComponent";
import EducationDetail from "./component/education/EducationDetail";
import Training from "./component/training";
// import Entertainment from './component/entertainment';
import Profile from "./component/profile";
// import DetailEntertainment from "./component/entertainment/DetailEntertainment";
// import CurriculumVitae from "./component/profile/CurriculumVitae";
import EditProfile from "./component/profile/EditProfile";
import ChangePassword from "./component/profile/ChangePassword";
import Quiz from "./component/quiz";
import TermsCondition from "./component/TermsCondition";
import Privacy from "./component/Privacy";
import Learning from "./component/learning";
import DetailCourse from "./component/profile/DetailCourse";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import HomePages from "./component/Homepage";
import Faq from "./component/faq";
import FaqDetail from "./component/faq/FaqDetail";
import Dashboard from "./component/homepage/Dashboard";
import MyTransaction from "./component/profile/MyTransaction";
import Payment from "./component/Payment";
import PrivateRoute from "./utils/PrivateRoute";
import CourseByCategory from "./component/education/CourseByCategory";
import SearchedCourse from "./component/education/SearchedCourse";
import Score from "./component/quiz/Score";

function App() {
  return (
    <Router>
      <Suspense fallback={"loading..."}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<HomePages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/education" element={<Education />} />
          <Route
            path="/education/category/:category"
            element={<CourseByCategory />}
          />
          <Route
            path="/education/:id"
            element={
              <PrivateRoute>
                <EducationDetail />
              </PrivateRoute>
            }
          />
          <Route path="/training" element={<Training />} />
          {/* <Route path="/training/:id" element={<DetailComponent />} /> */}
          {/* <Route path="/entertainment" element={<Entertainment />} /> */}
          {/* <Route path="/entertainment/:id" element={<DetailEntertainment />} /> */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/changepassword"
            element={
              <PrivateRoute>
                <ChangePassword />
              </PrivateRoute>
            }
          />
          {/* <Route path="/profile/cv" element={<CurriculumVitae />} /> */}
          <Route
            path="/quiz/:quiz_id"
            element={
              <PrivateRoute>
                <Quiz />
              </PrivateRoute>
            }
          />
          <Route
            path="/quiz/finished"
            element={
              <PrivateRoute>
                <Score />
              </PrivateRoute>
            }
          />
          {/* <Route path="/course/review" element={<ReviewAnswer />} /> */}
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route
            path="/learning/:id"
            element={
              <PrivateRoute>
                <Learning />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/detailcourse/:id"
            element={
              <PrivateRoute>
                <DetailCourse />
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/help" element={<FaqDetail />} />
          <Route
            path="/profile/transaction"
            element={
              <PrivateRoute>
                <MyTransaction />
              </PrivateRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <PrivateRoute>
                <Payment />
              </PrivateRoute>
            }
          />
          <Route path="/course-list" element={<SearchedCourse />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
