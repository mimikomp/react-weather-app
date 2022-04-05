import React from "react";
import DailyForecast from "./DailyForecast";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import Sunset from "./Sunset";

export default function WeatherInfo(props) {
  return (
    <div className="Weather">
      <div className="Location">
        <h1 className="City">
          {props.info.city}, {props.info.country}
        </h1>
        <h2 className="Date text-uppercase">
          <FormattedDate date={props.info.timestamp} />
        </h2>
        <h3 className="Time">
          Last Updated at:
          <FormattedTime time={props.info.timestamp} />
        </h3>
      </div>
      <div className="row">
        <div className="clearfix WeatherTemperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt={props.info.condition}
            className="WeatherIcon float-left"
          />
          <strong className="CurrentTemp align-middle">
            {Math.round(props.info.temperature)}
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
              <li>{props.info.condition}</li>
              <li>Feels like {Math.round(props.info.feelsLike)}°</li>
              <li>
                High {Math.round(props.info.high)}° | Low{" "}
                {Math.round(props.info.low)}°
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="column-2">
              <li>Humidity: {props.info.humidity}%</li>
              <li>Wind: {Math.round(props.info.wind)} MPH</li>
              <li>
                {" "}
                Sunset:
                <Sunset
                  time={props.info.sunsetTimestamp}
                  timezone={props.info.timezone}
                  localTimestamp={props.info.timestamp}
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
}
