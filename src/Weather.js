import React, { useState } from "react";
import axios from "axios";
import "./Style/Weather.css";
import "./Style/WeatherInfo.css";
import WeatherInfo from "./WeatherInfo";

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
      sunsetTimestamp: response.data.sys.sunset,
      timezone: response.data.timezone,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    event.target.reset();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "90ca9ed08063ead22b7802b62ca127f3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function showPosition(response) {
    let currentLatitude = response.coords.latitude;
    let currentLongitude = response.coords.longitude;
    let apiKey = "8eb93b89891fb21bdbabdfea05d34bf5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  function WeatherBackground() {
    let conditionCode = weatherData.icon;
    let weatherCondtionImage = {
      "01d": "/img/01d.gif",
      "01n": "/img/01n.gif",
      "02d": "/img/02-3d.gif",
      "02n": "/img/02-3-4n.gif",
      "03d": "/img/02-3d.gif",
      "03n": "/img/02-3-4n.gif",
      "04d": "/img/04d.gif",
      "04n": "/img/02-3-4n.gif",
      "09d": "/img/09-10d.gif",
      "09n": "/img/09-10n.gif",
      "10d": "/img/09-10d.gif",
      "10n": "/img/09-10n.gif",
      "11d": "/img/11d-n.gif",
      "11n": "/img/11d-n.gif",
      "13d": "/img/13d.gif",
      "13n": "/img/13n.gif",
      "50d": "/img/50d.gif",
      "50n": "/img/50n.gif",
    };

    let backgroundImage = weatherCondtionImage[conditionCode];
    let weatherBackground = {
      backgroundImage: `url(${backgroundImage})`,
      width: "100%",
      height: "auto",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return weatherBackground;
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherData" style={WeatherBackground()}>
        <div className="Search">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="row justify-content-start gx-0">
              <div className="col-7 form-column ">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  autoFocus="on"
                  className="form-control"
                  onChange={handleCityChange}
                />
              </div>

              <div className="col-3 search-column">
                <input type="submit" value="SEARCH" className="search-button" />
              </div>

              <div className="col-2 current-column currentLocation">
                <button
                  className="btn btn-outline-light current-button"
                  type="submit"
                  onClick={getCurrentPosition}
                >
                  <svg
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
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
