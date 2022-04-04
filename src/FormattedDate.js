import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];
  let ordinalNumber =
    (date >= 4 && date <= 20) || (date >= 24 && date <= 30)
      ? "TH"
      : ["ST", "ND", "RD"][(date % 10) - 1];
  return (
    <div>
      {day} {month}, {date}
      {ordinalNumber}
    </div>
  );
}
