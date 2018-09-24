import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Travel
          destination="France"
          country="Paris"
          photo="https://media-cdn.tripadvisor.com/media/photo-s/12/f8/66/ce/paris-in-one-day-sightseeing.jpg"
          distance="150km"
        />
      </div>
    );
  }
}

export default App;
