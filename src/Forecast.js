import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div className="day">Thursday</div>
          <div class="d-flex weather-temperature">
            <img
              src={`http://openweathermap.org/img/wn/${props.code}@2x.png`}
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
              src={`http://openweathermap.org/img/wn/${props.code}@2x.png`}
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
              src={`http://openweathermap.org/img/wn/${props.code}@2x.png`}
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
              src={`http://openweathermap.org/img/wn/${props.code}@2x.png`}
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
              src={`http://openweathermap.org/img/wn/${props.code}@2x.png`}
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
              src={`http://openweathermap.org/img/wn/${props.code}@2x.png`}
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
}
