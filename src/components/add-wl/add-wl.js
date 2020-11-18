import React, { useState } from "react";
import { connect } from "react-redux";
import "./add-wl.css";
import { addNewWorklog, editingWorklog, showModal } from "../../actions";
import btnClose from "../../img/x.svg";
import btnOk from "../../img/Vector (Stroke).svg";

const AddWl = ({ statusModal, editWorklog, dispatch }) => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [planingTime, setPlaningTime] = useState("");
  
   let date = new Date();
    let nowDate = {
      y: date.getFullYear(),
      m: +(date.getMonth() + 1),
      d: date.getDate(),
      h: date.getHours(),
      min: date.getMinutes(),
      s: date.getSeconds(),
      ms: date.getMilliseconds(),
    };
    let todayDate = nowDate.d + "." + nowDate.m + "." + nowDate.y;
    let seconds = nowDate.h * 60 * 60 + nowDate.min * 60;
    // let startTime = nowDate.

  if ( (editWorklog.length > 0 && statusModal === "edit" )|| statusModal === "edit" ) {
    console.log(' мы тутоньки ');

    return (
      <div className="new-wl-box">
        <div className="new-wl-wrap">
          <div className="app">
            <div className="time"></div>
            <div className="row"></div>
          </div>
          <div className="new-wl__title">
            <span>Edit worklog</span>
          </div>
          <div className="new-wl">
            <div className="new-wl-content">
              <div className="progress-time">
                <div className="slidecontainer"></div>
              </div>
              <div className="new-wl-form">
                <div className="new-wl-form-item">
                  <span className="new-wl-form__title">Edit worklog name</span>
                  <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    placeholder={editWorklog[0].title}
                    className="new-wl-input new-wl-input__issue"
                  />
                </div>
                <div className="new-wl-form-item">
                  <span className="new-wl-form__title">Issue</span>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={editWorklog[0].info}
                    className="new-wl-input new-wl-input__name"
                  />
                </div>
                <div className="new-wl-form-item">
                  <input
                    type="text"
                    value={planingTime}
                    placeholder="потраченное время для этой задачи"
                    onChange={(e) => setPlaningTime(e.target.value)}
                    // placeholder="enter the worklog name"
                    className="new-wl-input new-wl-input__name"
                  />
                </div>
              </div>
              <div className="btn-block">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(editingWorklog(value, title, 
                      planingTime,
                      editWorklog[0].favorite ? editWorklog[0].favorite : null
                      ));
                    dispatch(showModal(true));
                    setValue("");
                    setTitle("");
                    setPlaningTime("");
                  }}
                  className="btn-item btn-ok"
                >
                  <img src={btnOk} alt="btn-icon" />
                </div>
                <div
                  className="btn-item btn-close"
                  onClick={() => dispatch(showModal(false))}
                >
                  <img src={btnClose} alt="btn-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } 
    
    else {
    return (
      <div className="new-wl-box">
        <div className="new-wl-wrap">
          <div className="app">
            <div className="time"></div>
            <div className="row"></div>
          </div>
          <div className="new-wl__title">
            <span>New worklog</span>
          </div>
          <div className="new-wl">
            <div className="new-wl-content">
              <div className="progress-time">
                <div className="slidecontainer"></div>
              </div>
              <div className="new-wl-form">
                <div className="new-wl-form-item">
                  <span className="new-wl-form__title">New worklog name</span>
                  <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    placeholder="enter the issue name"
                    className="new-wl-input new-wl-input__issue"
                  />
                </div>
                <div className="new-wl-form-item">
                  <span className="new-wl-form__title">Issue</span>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="enter the worklog name"
                    className="new-wl-input new-wl-input__name"
                  />
                </div>
                <div className="new-wl-form-item">
                  <input
                    type="text"
                    value={planingTime}
                    placeholder="планируемое время для этой задачи"
                    onChange={(e) => setPlaningTime(e.target.value)}
                    className="new-wl-input new-wl-input__name"
                  />
                </div>
              </div>
              <div className="btn-block">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(addNewWorklog(value, title, planingTime, seconds, todayDate));
                    dispatch(showModal(true));
                    setValue("");
                    setTitle("");
                    setPlaningTime("");
                  }}
                  className="btn-item btn-ok"
                >
                  <img src={btnOk} alt="btn-icon" />
                </div>
                <div
                  className="btn-item btn-close"
                  onClick={() => dispatch(showModal(false))
                  }
                >
                  <img src={btnClose} alt="btn-icon" />
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
function mapStateToProps({ activeWorklogs,statusModal, editWorklog }) {
  return {
    activeWorklogs: activeWorklogs,
    statusModal: statusModal,
    editWorklog: editWorklog,
  };
}
export default connect(mapStateToProps)(AddWl);
  // useEffect(() => {
  //   let date = new Date()
  //   let nowDate = {
  //     y: date.getFullYear(),
  //     m: +(date.getMonth() + 1),
  //     d: date.getDate(),
  //     h: date.getHours(),
  //     min: date.getMinutes(),
  //     s: date.getSeconds(),
  //     ms: date.getMilliseconds(),
  //   };
    
  //   setSecond(nowDate.h * 3600 + nowDate.min * 60);
  // }, [second]);