import React from "react";

import "./Style/App.css";

import Search from "./Search";
import Location from "./Location";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Search />
        <Location />
        <Weather />
      </div>
      <Footer />
    </div>
  );
}
