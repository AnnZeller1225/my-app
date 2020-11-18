import React, { useState } from "react";
import "./calendar.css";
// import CldDay from '../calendar-today';
const Calendar = () => {
  let date = new Date();
  var month = Number(date.getMonth() + 1);
  var arr = [
    { month: "January", days: 30 },
    { month: "February", days: 30 },
    { month: "March", days: 31 },
    { month: "April", days: 30 },
    { month: "May", days: 30 },
    { month: "Juny", days: 31 },
    { month: "July", days: 30 },
    { month: "August", days: 31 },
    { month: "October", days: 31 },
    { month: "November", days: 3 },
    { month: "December", days: 31 },
  ];
  const [cld, setCld] = useState(false);
  const styles = {
    default: {
      display: "flex",
      flexDirection: "column",
    },
    isHide: {
      display: "none",
    },
  };
 let days = arr[[month - 2][0]];
// let d = days.days;
//  console.log(days, " выбранный календарный день ");
  return (
    <div>
      <div className="data-today" onClick={() => setCld(!cld)}>
        <span className="data-today__item">{date.getDate() + " " + days.month}</span>
      </div>
      <div
        className="calendar-wrap"
        style={cld ? styles.default : styles.isHide}
      >
        {/* <span className="calendar-title">{arr[month - 1]}</span> */}
        <div className="calendar">
          <div className="calendar-item">S</div>
          <div className="calendar-item">M</div>
          <div className="calendar-item">T</div>
          <div className="calendar-item">W</div>
          <div className="calendar-item">T</div>
          <div className="calendar-item">F</div>
          <div className="calendar-item">S</div>
          <div className="calendar-item">29</div>
          <div className="calendar-item">30</div>
          <div className="calendar-item">31</div>
          <div className="calendar-item">1</div>
          <div className="calendar-item">2</div>
          <div className="calendar-item">3</div>
          <div className="calendar-item">4</div>
          <div className="calendar-item">5</div>
          <div className="calendar-item">6</div>
          <div className="calendar-item">7</div>
          <div className="calendar-item">8</div>
          <div className="calendar-item">9</div>
          <div className="calendar-item">10</div>
          <div className="calendar-item">11</div>
          <div className="calendar-item">12</div>
          <div className="calendar-item">13</div>
          <div className="calendar-item">14</div>
          <div className="calendar-item">15</div>
          <div className="calendar-item">16</div>
          <div className="calendar-item">17</div>
          <div className="calendar-item">18</div>
          <div className="calendar-item">19</div>
          <div className="calendar-item">20</div>
          <div className="calendar-item">21</div>
          <div className="calendar-item">22</div>
          <div className="calendar-item">23</div>
          <div className="calendar-item">24</div>
          <div className="calendar-item">25</div>
          <div className="calendar-item">26</div>
          <div className="calendar-item">27</div>
          <div className="calendar-item">28</div>
          <div className="calendar-item">29</div>
          <div className="calendar-item">30</div>
          <div className="calendar-item">31</div>
          <div className="calendar-item">1</div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
