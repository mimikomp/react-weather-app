import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
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
        <WeatherTemperature
          data={props.info}
          fahrenheit={props.info.temperature}
        />
      </div>
    </div>
  );
}
