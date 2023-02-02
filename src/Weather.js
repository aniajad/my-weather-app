import React from "react";
import from "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    setTemperature(response.data.temperature.current);
    setReady(true);
  }

  if (ready) {
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
        <h1>Bonn</h1>
        <ul>
          <li>Wednesday 21:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png"
              alt="Mostly Cloudy"
            />

            <span className="degrees">Math.round(${temperature})</span>
            <span className="unit">°C</span>
          </div>

          <div className="col-6">
            <ul>
              <li>Feels like: 3°C</li>
              <li>Humidity: 84%</li>
              <li>Wind: 8 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d6adb6d48b0afcb13103tf940oab4e26";
    let query = "Bonn";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then();

    return "Loading...";
  }
}
