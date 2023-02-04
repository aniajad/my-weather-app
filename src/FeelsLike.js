import React, { useState } from "react";

export default function FeelsLike(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="FeelsLike">
        <span className="degrees">Feels like: {Math.round(props.celsius)}</span>
        <span className="units">
          °C|{" "}
          <a href="/" onClick={convertFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="FeelsLike">
        <span>Feels like: {Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={convertCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
