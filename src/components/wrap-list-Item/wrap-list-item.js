import React from "react";
import { useState } from "react";
import "./wrap-list-item.css";
import Button from "../button";
import ToolTips from "../tool-tips";
// import buttonDownload from "../../img/direct-download 1.png";

import buttonPlay from "../../img/play.svg";
// import buttonPause from "../../img/stop (3).png";

const WrapListItem = ({
  worklog,
  onDelete,
  onEdit,
  onCopy,
  onDownload,
  onFavorite,
  onFinish,
  data,
}) => {
  const { title, info, timeStart, timeStop, allTime, timeNow } = worklog;
  // console.log(worklog);
  const [listHide, setListHide] = useState(true); // скрываем список
  const [btnMoreHide, setBtnMoreHide] = useState(true);
  // const [btnActive, setBtnActive] = useState(false);
  // console.log(timeStop, " в item  ");

  const styles = {
    isLoad: {
      backgroundColor: "red",
      border: "1px solid black",
    },
    default: {
      backgroundColor: "white",
      border: "1px solid black",
    },
    isHide: {
      display: "none",
    },
    defaultForList: {
      display: "flex",
    },
  };
  function timeConvert(time) {
    let h = Math.floor(time / 60 / 60);
    let m = Math.floor(time / 60) - h * 60;
    // let s = Math.floor(time / 60) - m * 60;
    let newTime = h + ":" + m;
    return newTime;
  }
  let start = timeConvert(timeStart);
  let stop = timeConvert(timeStop);
  let all;
  all = timeConvert(allTime);

  return (
    <div
      className="cart-block-wp2"
      onMouseEnter={() => setBtnMoreHide(false)}
      onMouseLeave={() => setBtnMoreHide(true)}
    >
      <div
        className="more-vertical"
        style={btnMoreHide ? styles.isHide : styles.defaultForList}
        onMouseEnter={() => setListHide(false)}
        onMouseLeave={() => setListHide(true)}
      >
        <div className="more-vertical__circle"></div>
        <div className="more-vertical__circle"></div>
      </div>
      {worklog.favorite === true ? (
        <div
          className="more-list "
          onMouseEnter={() => setListHide(false)}
          onMouseLeave={() => setListHide(true)}
          style={listHide ? styles.isHide : styles.defaultForList}
        >
          <span className="more-list__item" onClick={onEdit}>
            Edit
          </span>
          <span className="more-list__item" onClick={onDelete}>
            Delete
          </span>
          <span className="more-list__item" >
            Create favorite worklog
          </span>
        </div>
      ) : (
        <div
          className="more-list "
          onMouseEnter={() => setListHide(false)}
          onMouseLeave={() => setListHide(true)}
          style={listHide ? styles.isHide : styles.defaultForList}
        >
          <span className="more-list__item" onClick={onEdit}>
            Edit
          </span>
          <span className="more-list__item" onClick={onDelete}>
            Delete
          </span>
          <span className="more-list__item">Jira link</span>
          <span className="more-list__item" onClick={onDownload}>
            Download
          </span>
          <span className="more-list__item" onClick={onFavorite}>
            Add to favorite
          </span>
        </div>
      )}
      <div className="cart-block">
        <div className="cart-timing">
          <div className="cart-timing-wrap">
            <span className="cart-timing-wrap--bold">{start}</span>
          </div>
          <span>{stop}</span>
          <div
            className="vertic-line"
            style={worklog.isLoad ? styles.isLoad : styles.default}
          ></div>
        </div>
        <div className="cart-main">
          <div className="cart-info">{info}</div>
          <div className="cart-info"> {timeNow}</div>
          <div className="cart-title">{title}</div>
        </div>
        <div className="cart-time-info">{all}</div>
        <ToolTips
          position="top"
          content="dublicate this worklog"
          style={{ width: "90px" }}
        >
          <Button onClick={onCopy} imgSrc={buttonPlay} />
        </ToolTips>

        {/* <div onClick={onCopy} className="cart-icon">
          <img
            className="cart-icon--pause"
            src={buttonPlay}
            alt="icon"
            //  onClick={onAddedToCart} // отобразить в правом блоке
          />
          {/* <!-- <img className="hide" src="./img/icon-top-menu/stop (3).png"> --> */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default WrapListItem;
