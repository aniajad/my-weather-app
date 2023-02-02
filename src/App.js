import React from "react";
import Weather from "./Weather.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <footer>
        Open Source on{" "}
        <a
          href="https://github.com/aniajad/my-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        by Anna JAdczyszyn
      </footer>
    </div>
  );
}

export default App;
