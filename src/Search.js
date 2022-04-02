import React from "react";
import "./Style/Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form">
        <div className="row">
          <input
            type="search"
            placeholder="Type a city..."
            autofocus="on"
            autocomplete="off"
            className="form-control"
          />
          <input type="submit" value="Search" className="search-button" />
          <button className="btn btn-outline-light mb-2" type="submit">
            <svg
              max-width="1.3em"
              height="1.3em"
              viewBox="0 0 16 16"
              className="bi bi-geo-alt"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
