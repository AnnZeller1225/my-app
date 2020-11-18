import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./timeline.css";
import TimelineItem from "../timeline-item";
import EmptyTimeline from "../empty-timeline";
import { v4 as uuidv4 } from "uuid";

const Timeline = ({ timelineList }) => {
  let width = "700px";
  let prev = {
    id: 1,
    start: "28800",
    stop: "32800",
    status: "загружен",
  };

  return (
    <div className="t-wrap">
      <div className="timeline-w">
        {timelineList["12-02-2020"].map((el) => {
          // if ()
          if (prev.starting === true ) {
            return (
              <TimelineItem
                id={prev.id}
                key={prev.id}
                start={prev.start}
                stop={prev.stop}
                item={prev}
                //   onDelete={() => onDelete(wl.id)}
              />
            );
            
          } else if (prev.stop === el.start || prev.start === "28800" ){
            // console.log(" идут друг за дружкой");
            console.log(" отображаем  ", prev,);
            prev = el;
            return (
              <TimelineItem
                id={el.id}
                key={el.id}
                start={el.start}
                stop={el.stop}
                item={el}
                //   onDelete={() => onDelete(wl.id)}
              />
            );
          }  else {
            
            prev = el;
            prev.starting = true;
            console.log(" пустое время  ", prev,);
            
            
            return (
              <EmptyTimeline
                item={el}
                start={el.start}
                stop={el.stop}
                key={el.id}
              />
            );
          }
        })}
      </div>

      <div className="times">
       
      <div className="times-el">07:00</div>
      <div className="times-el">08:00</div>
      <div className="times-el">09:00</div>
      <div className="times-el">10:00</div>
      <div className="times-el">11:00</div>
      <div className="times-el">12:00</div>

      <div className="times-el">13:00</div>
      <div className="times-el">14:00</div>
      <div className="times-el">15:00</div>
      <div className="times-el">16:00</div>
      <div className="times-el">17:00</div>
      <div className="times-el">18:00</div>
      <div className="times-el">19:00</div>
      <div className="times-el">20:00</div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ timelineList }) => {
  return { timelineList };
};
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       onAddedToCart: (id) => dispatch(worklogAddedToCart(id)),
//     };
//   };

export default connect(mapStateToProps, null)(Timeline);
