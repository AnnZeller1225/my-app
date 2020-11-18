import React from "react";
import "./cart-top.css";
import Button from "../button";
import ToolTips from "../tool-tips";
import btnDownload from "../../img/direct-download 1.png";

const CartTop = ({day}) => {
let dateProp = day.split('.');
dateProp = dateProp.reverse();


function getWeekDay(date) {
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()];
}
function getMonth(date) {
  
  let month = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', ];
   return month[date.getMonth()];
}

let date = new Date(Number(dateProp[0]), Number(dateProp[1] - 1), Number(dateProp[2]) ) // 3 января 2014 года
let daysN = getWeekDay(date);
let month = getMonth(date);


  return (
    <div className="cart-top cart-top__pd">
 
       <div className="cart-top__data-today">
        <span className="cart-top__data-today--bold">{daysN}, </span>
        <span>{month} {date.getDate()}</span>
      </div>
      <div className="cart-time-wrap">
        <div className="cart-time">
          <span className="cart-time__gray">06.02.00</span>
          <progress max="100" value="25">
            <span id="value"></span>
          </progress>
        </div>
        <ToolTips
      position="top"
      content="Add worklogs to Jira"
      style={{ width: '90px' }}
    >
         <Button imgSrc={btnDownload} className="cart-time-downl"/>
    </ToolTips>
        
        <div className="cart-time-downl">
          <img src={btnDownload} alt="icon" />
        </div> 
      </div>
      
    </div>
  );
};
export default CartTop;