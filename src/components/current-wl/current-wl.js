import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

import { showModal, stopWorklog, startTimerCounter } from "../../actions";
import "./current-wl.css";
// import buttonStop from "../../img/stop (2).png";
// import buttonPause from "../../img/stop (3).png";
import btnAdd from "../../img/plus.svg";

const CurrentWl = ({
  items,
  onshowModal,
  onStopWorklog,
  onStartTimerCounter,
}) => {
  const [seconds, setSeconds] = useState("00");
  const [min, setMin] = useState("00");
  const [hour, setHour] = useState("00");
  const [timer, setTimer] = useState(true);
  const [statusModal, setStatusModal] = useState("add");

  if (seconds > 59) {
    setMin((min) => +(+min) + 1);
    setSeconds((seconds) => "00");
  }
  if (min > 59) {
    setHour((hour) => +hour + 1);
    setMin((min) => "00");
  }

  useEffect(() => {
    let interval = null;
    if (items.isStarting === true && timer === true) {
      interval = setInterval(() => {
        setSeconds((seconds) => +seconds + 1);
        onStartTimerCounter(seconds);
      }, 1000);
    } else if (!items.isStarting && seconds !== 0) {
      clearInterval(interval);
      setTimer((timer) => (timer = true));
    }
    return () => clearInterval(interval);
  }, [items, seconds, timer, onStartTimerCounter]);

  const handlerClick = () => {
    setTimer((timer) => (timer = false));
    setSeconds("00");
    onshowModal();
    onStopWorklog();
    setStatusModal("edit");
  };

  if (items.length < 1) {
    return (
      <div className="wl">
        <div className="wl-top wl-pd">
          <span className="wl-top-title">Time tracking</span>
          <div className="btn-more">
            <div className="btn-more-item"></div>
            <div className="btn-more-item"></div>
            <div className="btn-more-item"></div>
          </div>
        </div>
        <div className="wl-cart">
          <span className="wl-cart-issue">NEW WORKLOG</span>
          <div className="wl-cart-btns">
            <div className="btn-add btn--hover" onClick={onshowModal}>
              <img src={btnAdd} alt="image3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="wl">
      <div className="wl-top wl-pd">
        <span className="wl-top-title">Time tracking</span>
        <div className="btn-more">
          <div className="btn-more-item"></div>
          <div className="btn-more-item"></div>
          <div className="btn-more-item"></div>
        </div>
      </div>
      <div className="wl-cart">
        <div></div>
        <span className="wl-cart-title">{items.title}</span>
        <span className="wl-cart-issue">{items.info}</span>
        <div className="app">
          <div className="time"></div>
          <div className="row"></div>
        </div>
        <div className="wl-card-timer">
          {hour < 10 && hour != 0 ? "0" + hour : hour}:
          {min < 10 && min != 0 ? "0" + min : min}:
          {seconds < 10 && seconds != 0 ? "0" + seconds : seconds}
        </div>
        <div className="wl-cart-btns">
          {/* ТУТ КНОПКА СТОП  */} {/* ТУТ КНОПКА СТОП  */}{" "}
          {/* ТУТ КНОПКА СТОП  */}
          <div onClick={handlerClick} className="btn btn-stop btn--hover"></div>
          <div
            onClick={() => setTimer((timer) => !timer)}
            className="btn btn-pause btn--hover"
          ></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ activeWorklogs, timeCounter }) => {
  return {
    items: activeWorklogs,
    timeCounter: timeCounter,
  };
};
const mapDispatchToProps = {
  onshowModal: showModal,
  onStopWorklog: stopWorklog,
  onStartTimerCounter: startTimerCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWl);
