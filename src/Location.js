import React from "react";
import "./Style/Location.css";

export default function Location() {
  let WeatherData = {
    city: "New York",
    date: "Sunday, February 27",
    time: "6:15 PM",
  };
  return (
    <div className="Location">
      <h1 className="location">{WeatherData.city}</h1>
      <h2 className="date">{WeatherData.date}</h2>
      <h3 className="update-time">Last Updated at: {WeatherData.time}</h3>
    </div>
  );
}
