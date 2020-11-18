import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import "./tool-tip.css";
import btnClose from "../../img/x.svg";

const ToolTip = ({ toolTip }) => {
  const [listHide, setListHide] = useState(false);
  // console.log(toolTip);
  const styles = {
    isHide: {
      display: "none",
    },
    defaultForList: {
      display: "flex",
    },
  };
  if (toolTip.importance) {
    return (
      <div
        style={listHide ? styles.isHide : styles.defaultForList}
        className="tool-tip"
      >
        <div className="tool-tip__ind"></div>
        <div onClick={() => setListHide(true)} className="tool-tip__close">
          <img src={btnClose} alt="close-icon" />
        </div>
        <div className="tool-tip__text">{toolTip.message}</div>
      </div>
    );
  }
  else {
    return (<div></div>)
  }
};
const mapStateToProps = ({ toolTip }) => {
  return {
    toolTip: toolTip,
  };
};

export default connect(mapStateToProps, null)(ToolTip);
