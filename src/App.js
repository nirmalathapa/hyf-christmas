import React from "react";

import Clock from "./Clock";
import "./App.css";
import SnowFlake from "./Snowflake";

function App() {
  return (
    <div className="App">
      <div className="background">
        <h1>Hack your Future</h1>
        <h3>2018 Christmas Edition</h3>
        <Clock
          finalTime={Date.parse("Dec 24 2018")}
          message="Merry Christmas!"
        />
        <SnowFlake />
        <Clock
          finalTime={Date.parse("Jan 1 2019")}
          message="Happy New Year 2019!"
        />

        <footer className="footer">
          <p>Background Photo by Daniel Reche from Pexels</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
