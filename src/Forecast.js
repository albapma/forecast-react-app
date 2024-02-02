import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function day(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map((forecastDay, index) => {
            if (index > 0 && index <= 6) {
              return (
                <div className="col-2">
                  <div className="day">{day(forecastDay.dt)}</div>
                  <div class="d-flex weather-temperature">
                    <img
                      src={`http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png`}
                      id="icon"
                    />
                  </div>
                  <div className="temperatures">
                    <span className="Temperature-max">
                      {Math.round(forecastDay.temp.max)}°C
                    </span>{" "}
                    <span className="Temperature-min">
                      {Math.round(forecastDay.temp.min)}°C
                    </span>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
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
