import React from "react";
import "./TemperatureUnits.css";

export default function TemperatureUnits(props) {
  return (
    <div className="TemperatureUnits">
      <span className="degrees">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
