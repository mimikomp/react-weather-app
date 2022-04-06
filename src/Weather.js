import React, { useState } from "react";
import axios from "axios";
import "./Style/Weather.css";
import "./Style/WeatherInfo.css";
import WeatherInfo from "./WeatherInfo";
import DailyForecast from "./DailyForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      timestamp: new Date(response.data.dt * 1000),
      condition: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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
  function search() {
    let apiKey = "24fdddb47fb7d6dc033e94d25b05d649";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
    event.target.reset();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherData">
        <div className="Search">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="row justify-content-start">
              <div className="col-7 form-column">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  autoFocus="on"
                  className="form-control"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3 search-column">
                <input type="submit" value="Search" className="search-button" />
              </div>
              <div className="col-2 current-column">
                <button className="btn btn-outline-light" type="submit">
                  <svg
                    max-width="1.3em"
                    height="1.3em"
                    viewBox="0 0 16 16"
                    className="bi bi-geo-alt"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo info={weatherData} />
        <hr />
        <DailyForecast coordinates={weatherData.coordinates} />
        <hr />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
