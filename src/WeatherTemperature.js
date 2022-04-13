import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";

export default function WeatherTemperature(props) {
  const [unitFahrenheit, setUnitFahrenheit] = useState(true);

  function updateUnit(event) {
    event.preventDefault();
    setUnitFahrenheit(!unitFahrenheit);
  }

  function convertToCelsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unitFahrenheit) {
    return (
      <span className="WeatherTemperature">
        <span className="CurrentTemp align-middle">
          {Math.round(props.fahrenheit)}
        </span>

        <span className="Units align-middle">
          <div className="row UnitsRow">
            <span href="/" className="active FahrenheitLink">
              °F
            </span>
            <a href="/" className="CelsiusLink" onClick={updateUnit}>
              °C
            </a>
          </div>
        </span>
        <div className="WeatherDetails">
          <WeatherDetails data={props.data} unitFahrenheit={unitFahrenheit} />
          <WeatherForecast
            coordinates={props.data.coordinates}
            unitFahrenheit={unitFahrenheit}
          />
          <hr className="mt-2 mb-2" />
        </div>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="CurrentTemp align-middle">
          {Math.round(convertToCelsius())}
        </span>

        <span className="Units align-middle">
          <div className="row UnitsRow">
            <span href="/" className="active CelsiusLink">
              °C
            </span>
            <a href="/" className="FahrenheitLink" onClick={updateUnit}>
              °F
            </a>
          </div>
        </span>
        <div className="WeatherDetails">
          <WeatherDetails data={props.data} unitFahrenheit={unitFahrenheit} />
          <WeatherForecast
            coordinates={props.data.coordinates}
            unitFahrenheit={unitFahrenheit}
          />
          <hr className="mt-2 mb-2" />
        </div>
      </span>
    );
  }
}
