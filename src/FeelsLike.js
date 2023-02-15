import React from "react";
import "./FeelsLike.css";

export default function FeelsLike(props) {
  return (
    <div className="FeelsLike">
      <span className="degrees">Feels like: {Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </div>
  );
}
