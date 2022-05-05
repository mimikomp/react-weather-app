import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Style/WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import WeatherForecastHour from "./WeatherForecastHour";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [showDailyForecast, setShowDailyForecast] = useState(true);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setDailyForecast(response.data.daily);
    setHourlyForecast(response.data.hourly);
    setLoaded(true);
  }
  function search() {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "90ca9ed08063ead22b7802b62ca127f3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }
  function showForecast(event) {
    event.preventDefault();
    setShowDailyForecast(!showDailyForecast);
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };

  if (loaded && showDailyForecast) {
    return (
      <div className="DailyHourlyForecast">
        <button
          type="button"
          className="DailyForecastButton active"
          onClick={showForecast}
        >
          Daily
        </button>
        <button
          type="button"
          className="HourlyForecastButton"
          onClick={showForecast}
        >
          Hourly
        </button>
        <hr className="mt-1 mb-2" />

        <div className="WeatherForecastDaily">
          <div className="carousel">
            <Carousel
              responsive={responsive}
              swipeable={true}
              autoPlay={false}
              shouldResetAutoplay={false}
              firstAndLastGutter={true}
              partialVisbile={false}
            >
              {dailyForecast.map(function (dailyForecast, index) {
                return (
                  <div className="col ForecastCard" key={index}>
                    <WeatherForecastDay
                      data={dailyForecast}
                      unitFahrenheit={props.unitFahrenheit}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
  if (loaded && !showDailyForecast) {
    return (
      <div className="DailyHourlyForecast">
        <button
          type="button"
          className="HourlyForecastButton active"
          onClick={showForecast}
        >
          Hourly
        </button>
        <button
          type="button"
          className="DailyForecastButton"
          onClick={showForecast}
        >
          Daily
        </button>
        <hr className="mt-1 mb-2" />

        <div className="WeatherForecastHourly">
          <div className="carousel">
            <Carousel
              responsive={responsive}
              swipeable={true}
              autoPlay={false}
              shouldResetAutoplay={false}
            >
              {hourlyForecast.map(function (hourlyForecast, index) {
                return (
                  <div className="col ForecastCard" key={index}>
                    <WeatherForecastHour
                      data={hourlyForecast}
                      unitFahrenheit={props.unitFahrenheit}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
