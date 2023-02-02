import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      query: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-3">
              <input
                type="submit"
                value="Your city"
                className="btn btn-primary w-100"
              />
            </div>
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.query}</h1>
        <ul>
          <li>Wednesday 21:00</li>
          <li className="text-capitalized">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <span className="degrees">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>

          <div className="col-6">
            <ul>
              <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d6adb6d48b0afcb13103tf940oab4e26";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
