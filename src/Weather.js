import React from "react";
import "./Style/Weather.css";
import DailyForecast from "./DailyForecast";

export default function Weather() {
  let WeatherData = {
    currentTemp: "47",
    date: "Sunday, February 27",
    time: "6:15 PM",
    condition: "Few Clouds",
    feelsLike: "45",
    high: "50",
    low: "42",
    humidity: "43",
    wind: "15",
    sunsetTime: "9:44",
    sunsetAmPm: "PM",
    sunsetUtc: "-5",
    maxTemp: "46",
    minTemp: "31",
  };
  return (
    <div className="Weather">
      <div className="row icon-temp">
        <div className="clearfix weather-temperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt={WeatherData.condition}
            className="main-icon float-left"
          />
          <strong className="current-temp">{WeatherData.currentTemp}</strong>
          <span className="units">
            <a href="/" className="active fahrenheit-link">
              °F
            </a>
            |
            <a href="/" className="celsius-link">
              °C
            </a>
          </span>
        </div>
      </div>
      <div className="WeatherDetails">
        <div className="row details">
          <div className="col-5">
            <ul className="column-1">
              <li>{WeatherData.condition}</li>
              <li>Feels like {WeatherData.feelsLike}°</li>
              <li>
                High {WeatherData.high}° | Low {WeatherData.low}°
              </li>
            </ul>
          </div>
          <div className="col-5">
            <ul className="column-2">
              <li>Humidity: {WeatherData.humidity}%</li>
              <li>Wind: {WeatherData.wind} MPH</li>
              <li>
                Sunset: {WeatherData.sunsetTime}
                {WeatherData.sunsetAmPm} UTC: {WeatherData.sunsetUtc}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="DailyForecast daily-forecast">
        <div className="row">
          <DailyForecast day="Sun" />
          <DailyForecast day="Mon" />
          <DailyForecast day="Tue" />
          <DailyForecast day="Wed" />
          <DailyForecast day="Thur" />
          <DailyForecast day="Fri" />
        </div>
      </div>
    </div>
  );
}
