import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "d6adb6d48b0afcb13103tf940oab4e26";
  let query = props.query;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-Day">Thu</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt="Clear sky"
          />
          <div className="Forecast-temp">
            <strong>19°</strong> 10°
          </div>
        </div>
      </div>
    </div>
  );
}
