/*eslint-disable*/
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setTimeSpent,
  setUsedTime,
} from "../store/redux/actions/learning/quiz";
import QuizService from "../store/services/QuizService";

const CountdownComponent = ({ modal, timeUp, setTimeUp }) => {
  const { quiz_id } = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [time, setTime] = useState(0);
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00:00:00");
  const [currentTime, setCurrentTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const usedTime = useSelector((state) => state.quiz.usedTime);

  const getUsedTime = () => {
    const seconds = Math.floor((usedTime / 1000) % 60);
    const minutes = Math.floor((usedTime / 1000 / 60) % 60);
    const hours = Math.floor((usedTime / 1000 / 60 / 60) % 24);
    return { hours, minutes, seconds };
  };
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    if (total === 0) {
      setTimeUp(true);
    }
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const totalTimer = (e) => {
    let { total } = getTimeRemaining(e);
    setCurrentTime(total);
  };

  const resetTimer = (e) => {
    totalTimer(e);
  };

  const getInitalTime = () => {
    let initialTime = new Date();
    initialTime.setSeconds(initialTime.getSeconds() + time);
    return initialTime;
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    setRemainingTime(total);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + time);
    return deadline;
  };

  useEffect(() => {
    QuizService.getQuizById(quiz_id).then((res) => {
      res.data.map((quiz) => {
        setTime(quiz.quiz.time);
      });
    });
  }, []);
  useEffect(() => {
    if (time === 0) {
      QuizService.getQuizById(quiz_id).then((res) => {
        res.data.map((quiz) => {
          setTime(quiz.quiz.time);
          // setQuizTime(quiz.quiz?.time * 1000);
        });
      });
    }
  }, [time]);

  useEffect(() => {
    if (time > 0) {
      setShow(true);
    }
  });

  useEffect(() => {
    if (modal === false || timeUp === true) {
      if (currentTime && remainingTime) {
        dispatch(setUsedTime(currentTime - remainingTime));
      }
    }
  }, [currentTime, remainingTime]);

  useEffect(() => {
    let { hours, minutes, seconds } = getUsedTime();
    dispatch(
      setTimeSpent(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      )
    );
  }, [usedTime]);

  useEffect(() => {
    if (time > 0) {
      resetTimer(getInitalTime());
    }
  });

  useEffect(() => {
    if (time > 0) {
      clearTimer(getDeadTime());
    }
  }, [time]);

  return (
    <div>
      {show === true ? (
        <div className="countdown-quiz">{timer}</div>
      ) : (
        <div className="countdown-quiz">00:00:00</div>
      )}
    </div>
  );
};

export default CountdownComponent;
