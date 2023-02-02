import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bonn" />
        <footer>
          Open Source on{" "}
          <a
            href="https://github.com/aniajad/my-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          by Anna Jadczyszyn
        </footer>
      </div>
    </div>
  );
}

export default App;
