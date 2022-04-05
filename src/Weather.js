import React, { useState } from "react";
import axios from "axios";
import "./Style/Weather.css";
import DailyForecast from "./DailyForecast";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import Sunset from "./Sunset";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      timestamp: new Date(response.data.dt * 1000),
      condition: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      maxTemp: "46",
      minTemp: "31",
      sunsetTimestamp: response.data.sys.sunset,
      timezone: response.data.timezone,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Location">
          <h1 className="City">
            {weatherData.city}, {weatherData.country}
          </h1>
          <h2 className="Date text-uppercase">
            <FormattedDate date={weatherData.timestamp} />
          </h2>
          <h3 className="Time">
            Last Updated at:
            <FormattedTime time={weatherData.timestamp} />
          </h3>
        </div>
        <div className="row">
          <div className="clearfix WeatherTemperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt={weatherData.condition}
              className="WeatherIcon float-left"
            />
            <strong className="CurrentTemp align-middle">
              {Math.round(weatherData.temperature)}
            </strong>
            <span className="Units align-middle">
              <div className="row UnitsRow">
                <a href="/" className="active FahrenheitLink">
                  °F
                </a>
                <a href="/" className="CelsiusLink">
                  °C
                </a>
              </div>
            </span>
          </div>
        </div>
        <div className="WeatherDetails">
          <div className="row Details">
            <div className="col-6">
              <ul className="column-1">
                <li>{weatherData.condition}</li>
                <li>Feels like {Math.round(weatherData.feelsLike)}°</li>
                <li>
                  High {Math.round(weatherData.high)}° | Low{" "}
                  {Math.round(weatherData.low)}°
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="column-2">
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} MPH</li>
                <li>
                  {" "}
                  Sunset:
                  <Sunset
                    time={weatherData.sunsetTimestamp}
                    timezone={weatherData.timezone}
                    localTimestamp={weatherData.timestamp}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="DailyForecastWeek daily-forecast">
          <hr />
          <div className="row">
            <DailyForecast day={0} />
            <DailyForecast day={1} />
            <DailyForecast day={2} />
            <DailyForecast day={3} />
            <DailyForecast day={4} />
            <DailyForecast day={5} />
          </div>
          <hr />
        </div>
      </div>
    );
  } else {
    let apiKey = "24fdddb47fb7d6dc033e94d25b05d649";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
