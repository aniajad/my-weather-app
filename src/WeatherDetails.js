import React from "react";
import "./WeatherDetails.css";
import Date from "./Date";
import TemperatureUnits from "./TemperatureUnits";
import FeelsLike from "./FeelsLike";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <h1>{props.data.query}</h1>
      <ul>
        <li>
          Last updated:
          <Date date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-4">
          <img src={props.data.iconUrl} alt={props.data.description} />
        </div>
        <div className="col-4">
          <TemperatureUnits celsius={props.data.temperature} />
        </div>

        <div className="col-4">
          <ul>
            <li>
              <FeelsLike celsius={props.data.feelsLike} />
            </li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
