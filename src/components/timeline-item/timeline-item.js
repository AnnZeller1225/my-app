import React from "react";
import "./timeline-item.css";

const TimelineItem = ({ item, exist }) => {
  const { start, stop,  } = item;
  console.log(exist, " это exist ");
  let hourLength = 68;
  let minLength = hourLength / 60; // 1мин 5px  // 2часа 600зч

  let diff = stop - start;
  let getWidth = (sec) => {
    // 600 px за вводимые секунды(2часа)
    let px = (minLength / 60) * sec;
    return px;
  };
//   console.log(getWidth(diff), " вычисляемая длина px");
  let width = getWidth(diff);
  const styles = {
    isEmpty: {
      backgroundColor: "#fff",
       width: `${width}px` ,
    //    border: "1px solid red",
    },
    default: {
      backgroundColor: "#f8e5f7",
      width: `${width}px` ,
    },
    
  };

  return (
    <div className="time-min"
    style={exist ? styles.isEmpty : styles.default} 
    >
    </div>
  );
};
export default TimelineItem;

// const WrapListItem = ({
//     worklog,
//     onDelete,
//     onEdit,
//     onCopy,
//     onDownload,
//     onFavorite,
//     onFinish,
//     data,
//   }) => {
//     const { title, info, timeStart, timeStop, allTime, timeNow } = worklog;
