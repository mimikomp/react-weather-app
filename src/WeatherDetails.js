import React from "react";
import Sunset from "./Sunset";

export default function WeatherDetails(props) {
  if (props.unitFahrenheit) {
    return (
      <div className="WeatherDetails">
        <div className="row Details">
          <div className="col-6">
            <ul className="column-1">
              <li>{props.data.condition}</li>
              <li>Feels like {Math.round(props.data.feelsLike)}°</li>
              <li>
                High {Math.round(props.data.high)}° | Low{" "}
                {Math.round(props.data.low)}°
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="column-2">
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} MPH</li>
              <li>
                {" "}
                Sunset:
                <Sunset
                  time={props.data.sunsetTimestamp}
                  timezone={props.data.timezone}
                  localTimestamp={props.data.timestamp}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherDetails">
        <div className="row Details">
          <div className="col-6">
            <ul className="column-1">
              <li>{props.data.condition}</li>
              <li>
                Feels like {Math.round(((props.data.feelsLike - 32) * 5) / 9)}°
              </li>
              <li>
                High {Math.round(((props.data.high - 32) * 5) / 9)}° | Low{" "}
                {Math.round(((props.data.low - 32) * 5) / 9)}°
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="column-2">
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind * 1.609344)} KM/H</li>
              <li>
                {" "}
                Sunset:
                <Sunset
                  time={props.data.sunsetTimestamp}
                  timezone={props.data.timezone}
                  localTimestamp={props.data.timestamp}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
