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
      <div className="WeatherTemperature">
        <div className="TemperatureUnits">
          <div className="CurrentTemp">{Math.round(props.fahrenheit)}</div>
          <div className="Units">
            <div className="row UnitsRow gx-0">
              <span href="/" className="FahrenheitLink active">
                °F
              </span>
              <a href="/" className="CelsiusLink" onClick={updateUnit}>
                °C
              </a>
            </div>
          </div>
        </div>
        <div className="WeatherDetailsForecast">
          <WeatherDetails data={props.data} unitFahrenheit={unitFahrenheit} />
          <WeatherForecast
            coordinates={props.data.coordinates}
            unitFahrenheit={unitFahrenheit}
          />
          <hr className="mt-2 mb-1" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="TemperatureUnits">
          <div className="CurrentTemp">{Math.round(convertToCelsius())}</div>
          <div className="Units">
            <div className="row UnitsRow">
              <span href="/" className="CelsiusLink active">
                °C
              </span>
              <a href="/" className="FahrenheitLink" onClick={updateUnit}>
                °F
              </a>
            </div>
          </div>
        </div>
        <div className="WeatherDetailsForecast">
          <WeatherDetails data={props.data} unitFahrenheit={unitFahrenheit} />
          <WeatherForecast
            coordinates={props.data.coordinates}
            unitFahrenheit={unitFahrenheit}
          />
          <hr className="mt-2 mb-1" />
        </div>
      </div>
    );
  }
}
