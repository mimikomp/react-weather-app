import React from "react";

import "./Style/App.css";

import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Search />
        <Weather defaultCity="New York" />
      </div>
      <Footer />
    </div>
  );
}
