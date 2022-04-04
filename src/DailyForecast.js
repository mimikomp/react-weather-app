import React from "react";
import "./Style/DailyForecast.css";

export default function DailyForecast(props) {
  let WeatherData = {
    day: "Sun",
    maxTemp: "46",
    minTemp: "31",
    icon: "https://openweathermap.org/img/wn/01d@2x.png",
  };
  return (
    <div className="col-2">
      <div className="DailyForecastDate">{props.day}</div>
      <img src={WeatherData.icon} alt="icon1" width="60" />
      <div className="daily-forecast-temperature">
        <span className="daily-forecast-temperature-max">
          {" "}
          {WeatherData.maxTemp}°{" "}
        </span>{" "}
        |
        <span className="daily-forecast-temperature-min">
          {" "}
          {WeatherData.minTemp}°{" "}
        </span>
      </div>
    </div>
  );
}
