import React from "react";
import "./cart-day.css";
import { connect } from "react-redux";
import WrapListItem from "../wrap-list-Item";
import {
  fetchworklogs,
  worklogAddedToCart,
  worklogRemoved,
  edToEditWorklog,
  worklogCopy,
  worklogDownload,
  worklogFavorite,
} from "../../actions";
// import btnDownload from "../../img/direct-download 1.png";
import Timeline from '../timeline';
const CartDay = ({
  day,
  worklogList,
  onDelete,
  onEdit,
  onCopy,
  onDownload,
  onFavorite,
}) => {
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
  // let todayDate = nowDate.d + "." + nowDate.m + "." + nowDate.y;
  // console.log(todayDate, " Эищем дату ");
  return (
    <div className="cart-day">
      <div className="cart">
        <div className="cart-content">
          {Object.keys(worklogList[day]).map((worklog) => (
     
            <WrapListItem
              key={worklogList[day][worklog].id}
              id={worklogList[day][worklog].id}
              data={day}
              worklog={worklogList[day][worklog]}
              //  onAddedToCart={() => onAddedToCart(worklogList[day][worklog].id, day)}

              onDelete={() => onDelete(worklogList[day][worklog].id, day)}
              onCopy={() => onCopy(worklogList[day][worklog].id, day, nowDate)}


              onEdit={() => onEdit(worklogList[day][worklog].id, day)}
              onDownload={() => onDownload(worklog.id)}
              onFavorite={() => onFavorite(worklogList[day][worklog].id, day)}
            />
          ))}
        </div>
      </div>
      {/* <Timeline /> */}
    </div>
  );
};
const mapStateToProps = ({
  worklogs,
  seconds,
  loading,
  error,
  showFavoriteList,
  favorites,
  modalIsOpen,
}) => {
  return {
    worklogs,
    seconds,
    loading,
    error,
    modalIsOpen,
    showFavoriteList,
    favorites,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { worklogstoreService } = ownProps;
  return {
    fetchworklogs: fetchworklogs(worklogstoreService, dispatch),
    onAddedToCart: (id) => dispatch(worklogAddedToCart(id)),
    onDelete: (id, data) => dispatch(worklogRemoved(id, data)),

    onCopy: (id, data, worklogDate) => dispatch(worklogCopy(id, data, worklogDate)),

    onDownload: (id) => dispatch(worklogDownload(id)),
    onFavorite: (id, data) => dispatch(worklogFavorite(id, data)),
    onEdit: (id, data) => dispatch(edToEditWorklog(id, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDay);
