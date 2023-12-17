import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState("");
  let [forecast, setForecast] = useState("");
  function changeCity(event) {
    setCity(event.target.value);
  }
  function SubmitEvent(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8c78e9e7e9928cd1a2a6f923072c3dec&units=metric`;
    axios.get(url).then(showForecast);
    function showForecast(response) {
      setForecast(
        <div className="row">
          <div> City {city.trim()} </div>
          <div className="col-6">
            <ul>
              <li id="date"></li>
              <li className="text-capitalize" id="weather-description">
                {response.data.weather[0].description}{" "}
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Wind: <span id="wind"> {response.data.wind} km/h</span>
              </li>
              <li>
                Humidity:{" "}
                <span id="humidity"> {response.data.main.humidity} % </span>
              </li>
            </ul>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
            id="icon"
          />
          <div class="temperature-info">
            <strong id="degrees">{Math.round(response.data.main.temp)} </strong>
            <span class="units" id="celsius">
              °C{" "}
            </span>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <div className="Weather">
        <div className="col-6">
          <form id="place" onSubmit={SubmitEvent}>
            <input
              type="text"
              placeholder="Enter your city"
              id="search"
              onChange={changeCity}
            />
          </form>
        </div>
        <div className="col-6">
          <button type="button" id="searchButton" class="btn btn-primary">
            Search
          </button>

          <button type="button" id="current" class="btn btn-secondary">
            Current
          </button>
        </div>
        <div> {forecast}</div>
      </div>
    </div>
  );
}
