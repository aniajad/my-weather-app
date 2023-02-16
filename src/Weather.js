import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherDetails from "./WeatherDetails";
import "./WeatherDetails.css";
import Forecast from "./Forecast";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      query: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
  }

  function search() {
    const apiKey = "d6adb6d48b0afcb13103tf940oab4e26";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function retrievePosition(position) {
    const apiKey = "d6adb6d48b0afcb13103tf940oab4e26";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function getCurrentCity() {
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-3">
              <input
                type="submit"
                value="Your city"
                className="btn btn-primary w-100"
                onClick={getCurrentCity}
              />
            </div>
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control"
                autoFocus="on"
                onChange={handleChange}
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
        <WeatherDetails data={weatherData} />
        <Forecast query={weatherData.query} />
      </div>
    );
  } else {
    search();
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#8daecf"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
}
