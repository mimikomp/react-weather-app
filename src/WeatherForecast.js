import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Style/WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import WeatherForecastHour from "./WeatherForecastHour";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setDailyForecast(response.data.daily);
    setHourlyForecast(response.data.hourly);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="DailyHourlyForecast">
        <div className="WeatherForecastDaily">
          <div className="row">
            {dailyForecast.map(function (dailyForecast, index) {
              if (index < 6) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDay
                      data={dailyForecast}
                      unitFahrenheit={props.unitFahrenheit}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div className="WeatherForecastHourly">
          <hr />
          <div className="row">
            {hourlyForecast.map(function (hourlyForecast, index) {
              if (index < 7) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastHour
                      data={hourlyForecast}
                      unitFahrenheit={props.unitFahrenheit}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "90ca9ed08063ead22b7802b62ca127f3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
