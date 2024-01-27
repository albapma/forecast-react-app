import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDate();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-2">
            <div className="day">{forecast[0].dt}</div>
            <div class="d-flex weather-temperature">
              <img
                src={`http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`}
                id="icon"
              />{" "}
            </div>{" "}
            <div className="temperatures">
              <span className="Temperature-max">
                {Math.round(forecast[0].temp.max)}
              </span>
              <span className="Temperature-min">
                {" "}
                {Math.round(forecast[0].temp.min)}
              </span>
            </div>
          </div>
          <div className="col-2">
            <div className="day">Thursday</div>
            <div class="d-flex weather-temperature">
              <img
                src={`http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`}
                id="icon"
              />{" "}
            </div>{" "}
            <div className="temperatures">
              <span className="Temperature-max">22</span>
              <span className="Temperature-min"> 15</span>
            </div>
          </div>
          <div className="col-2">
            <div className="day">Thursday</div>
            <div class="d-flex weather-temperature">
              <img
                src={`http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`}
                id="icon"
              />{" "}
            </div>{" "}
            <div className="temperatures">
              <span className="Temperature-max">22</span>
              <span className="Temperature-min"> 15</span>
            </div>
          </div>
          <div className="col-2">
            <div className="day">Thursday</div>
            <div class="d-flex weather-temperature">
              <img
                src={`http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`}
                id="icon"
              />{" "}
            </div>{" "}
            <div className="temperatures">
              <span className="Temperature-max">22</span>
              <span className="Temperature-min"> 15</span>
            </div>
          </div>
          <div className="col-2">
            <div className="day">Thursday</div>
            <div class="d-flex weather-temperature">
              <img
                src={`http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`}
                id="icon"
              />{" "}
            </div>{" "}
            <div className="temperatures">
              <span className="Temperature-max">22</span>
              <span className="Temperature-min"> 15</span>
            </div>
          </div>
          <div className="col-2">
            <div className="day">Thursday</div>
            <div class="d-flex weather-temperature">
              <img
                src={`http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`}
                id="icon"
              />{" "}
            </div>{" "}
            <div className="temperatures">
              <span className="Temperature-max">22</span>
              <span className="Temperature-min"> 15</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=8c78e9e7e9928cd1a2a6f923072c3dec&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
