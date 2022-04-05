import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import Sunset from "./Sunset";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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

      <div className="IconTemperature">
        <span className="WeatherIcon float-left">
          <WeatherIcon code={props.info.icon} size={100} />
        </span>
        <WeatherTemperature fahrenheit={props.info.temperature} />
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
    </div>
  );
}
