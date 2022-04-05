import axios from "axios";
import React from "react";
import "./Style/DailyForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiKey = "af769be7365d5beaa284c2fd49ab6ea1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  let WeatherData = {
    day: "Sun",
    maxTemp: "46",
    minTemp: "31",
  };
  return (
    <div className="col-2 DailyForecast">
      <div className="DailyForecast-day">{WeatherData.day}</div>
      <WeatherIcon code="02d" size={40} />

      <div className="DailyForecast-temperatures">
        <span className="DailyForecast-temperature-max">
          {" "}
          {WeatherData.maxTemp}°{" "}
        </span>{" "}
        |
        <span className="DailyForecast-temperature-min">
          {" "}
          {WeatherData.minTemp}°{" "}
        </span>
      </div>
    </div>
  );
}
