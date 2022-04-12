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

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setDailyForecast(response.data.daily);
    setHourlyForecast(response.data.hourly);
    setLoaded(true);
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  if (loaded) {
    return (
      <div className="DailyHourlyForecast">
        <div className="WeatherForecastDaily">
          <div className="carousel">
            <Carousel
              responsive={responsive}
              swipeable={true}
              autoPlay={false}
              shouldResetAutoplay={false}
            >
              {dailyForecast.map(function (dailyForecast, index) {
                return (
                  <div className="col" key={index}>
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
        <div className="WeatherForecastHourly">
          <hr />
          <div className="carousel">
            <Carousel
              responsive={responsive}
              swipeable={true}
              autoPlay={false}
              shouldResetAutoplay={false}
            >
              {hourlyForecast.map(function (hourlyForecast, index) {
                return (
                  <div className="col" key={index}>
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
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "af769be7365d5beaa284c2fd49ab6ea1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
