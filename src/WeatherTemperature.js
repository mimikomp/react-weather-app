import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
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
            <a href="/" className="CelsiusLink" onClick={showCelsius}>
              °C
            </a>
          </div>
        </span>
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
            <a href="/" className="FahrenheitLink" onClick={showFahrenheit}>
              °F
            </a>
          </div>
        </span>
      </span>
    );
  }
}
