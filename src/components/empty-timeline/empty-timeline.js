import React from "react";
import "./empty-timeline.css";

const EmptyTimeline = ({item, emptyWidth}) => {

    const { start, stop  } = item;
    let hourLength = 40;
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
        //   backgroundColor: "red",
          width: `${width}px` ,
        },
        
      };

    return <div
    style={styles.default}
    className="EmptyTimeline"></div>
}
export default EmptyTimeline