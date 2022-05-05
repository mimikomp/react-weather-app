import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Location">
        <h1 className="City">
          {props.info.city}, {props.info.country}
        </h1>
        <h2 className="Date">
          <FormattedDate date={props.info.timestamp} />
        </h2>
        <h3 className="Time">
          Last Updated at:
          <FormattedTime time={props.info.timestamp} />
        </h3>
      </div>

      <div className="Weather">
        <div className="WeatherIcon">
          <WeatherIcon code={props.info.icon} size={100} />
        </div>
        <WeatherTemperature
          data={props.info}
          fahrenheit={props.info.temperature}
        />
      </div>
    </div>
  );
}
