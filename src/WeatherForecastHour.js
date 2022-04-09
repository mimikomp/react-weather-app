import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastHour(props) {
  function time() {
    let time = new Date(props.data.dt * 1000);
    let hours = time.getHours();
    let amOrPm = "AM";
    if (hours >= 12) {
      amOrPm = "PM";
      hours = hours - 12;
    }
    if (hours === 0) {
      hours = "12";
    }
    return `${hours}${amOrPm}`;
  }
  if (props.unitFahrenheit) {
    return (
      <div>
        <div className="HourlyForecast-time">{time()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
        <div className="HourlyForecast-temperature">
          {Math.round(props.data.temp)}°
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="HourlyForecast-time">{time()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
        <div className="HourlyForecast-temperature">
          {Math.round(((props.data.temp - 32) * 5) / 9)}°
        </div>
      </div>
    );
  }
}
