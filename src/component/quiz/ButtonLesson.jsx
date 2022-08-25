import { createBrowserHistory } from "history";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCourseByUser } from "../../store/redux/actions/learning/course";


const ButtonLesson = ({ listLesson, lessonByCourse, count, lesson_id }) => {
  const history = createBrowserHistory();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user.user);
  const [user, setUser] = useState([])
  
  const handleToNextLesson = (id) => {
    navigate(`/learning/${id}`);
    history.go(0);
  };

  useEffect(() => {
    if (dataUser.status === 200) {
      setUser(dataUser?.data.user);
    }
  }, [dataUser]);

  useEffect(() => {
    if (user) {
      dispatch(getCourseByUser(user.email));
    }
  }, [user]);


  const checkFinish = () => {
    for (let row = 0; row < listLesson.length; row++) {
      for (let col = 0; col < lessonByCourse.length; col++) {
        if (
          listLesson[count].id === lessonByCourse[col].id &&
          lessonByCourse[col].status_assessment !== 0
        ) {
          return true;
        }
      }
    }
  };

  const checkWait = () => {
    for (let row = 0; row < listLesson.length; row++) {
      for (let col = 0; col < lessonByCourse.length; col++) {
        if (
          listLesson[count].id === lessonByCourse[col].id &&
          lessonByCourse[col].status_assessment === 0
        ) {
          return true;
        }
      }
    }
  };

  return (
    <>
      {checkFinish() && !checkWait() ? (
        <button className="profile btn btn-secondary-green w-150 h-500">
          Finished
        </button>
      ) : !checkWait() ? (
        <button
          onClick={() => handleToNextLesson(lesson_id)}
          className="profile btn btn-secondary-purple w-150 h-500"
        >
          Start
        </button>
      ) : (
        <div className="label label-secondary-yellow w-150 h-500">Wait</div>
      )}

      {/* {checkWait() ?
          <button
            className="profile btn btn-secondary-purple w-150 h-500"
          >
            Wait 
          </button>
          :
          null
      } */}
    </>
  );
};

export default ButtonLesson;
