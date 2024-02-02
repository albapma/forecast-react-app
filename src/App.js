import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Forecast from "./Forecast";

export default function App(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ ready: false });

  function changeCity(event) {
    setCity(event.target.value);
  }

  function submitEvent(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8c78e9e7e9928cd1a2a6f923072c3dec&units=metric`;
    axios.get(url).then(showForecast);
  }

  function showForecast(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000).toDateString(),
      coordinates: response.data.coord,
    });
  }

  if (weather.ready) {
    return (
      <div>
        <div className="Weather">
          <div className="col-6">
            <form id="place" onSubmit={submitEvent}>
              <input
                type="text"
                placeholder="Enter your city"
                id="search"
                onChange={changeCity}
              />
            </form>
          </div>
          <div className="col-6">
            <button type="button" id="searchButton" className="btn btn-primary">
              Search
            </button>
          </div>
          {weather.ready && (
            <div>
              <h1> {weather.city} </h1>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li id="date">
                        Date: <strong>{weather.date} </strong>
                      </li>
                      <li className="text-capitalize" id="weather-description">
                        Description: <strong>{weather.description}</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>
                        Wind:{" "}
                        <span id="wind">
                          <strong> {weather.wind} km/h </strong>
                        </span>
                      </li>
                      <li>
                        Humidity:{" "}
                        <span id="humidity">
                          {" "}
                          <strong> {weather.humidity} % </strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div></div>
                </div>
                <div class="d-flex weather-temperature">
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt={weather.description}
                    id="icon"
                  />
                  <div className="temperature-info">
                    <strong id="degrees">{weather.temp}</strong>
                    <span className="units" id="celsius">
                      °C
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <Forecast coordinates={weather.coordinates} />
        </div>
      </div>
    );
  } else {
    submitEvent({ preventDefault: function () {} });
    return "Loading...";
  }
}
