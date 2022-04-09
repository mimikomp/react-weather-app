import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  if (props.unitFahrenheit) {
    return (
      <div>
        <div className="DailyForecast-day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
        <div className="DailyForecast-temperatures">
          <span className="DailyForecast-temperature-max">
            {" "}
            {Math.round(props.data.temp.max)}°{" "}
          </span>{" "}
          |
          <span className="DailyForecast-temperature-min">
            {" "}
            {Math.round(props.data.temp.min)}°{" "}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="DailyForecast-day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
        <div className="DailyForecast-temperatures">
          <span className="DailyForecast-temperature-max">
            {" "}
            {Math.round(((props.data.temp.max - 32) * 5) / 9)}°{" "}
          </span>{" "}
          |
          <span className="DailyForecast-temperature-min">
            {" "}
            {Math.round(((props.data.temp.min - 32) * 5) / 9)}°{" "}
          </span>
        </div>
      </div>
    );
  }
}
