import React, { Component } from "react";

import "./App.css";
import SnowFlake from "./Snowflake";

class App extends Component {
  constructor() {
    super();
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
    this.calculateRemainingDays = this.calculateRemainingDays.bind(this);
  }
  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateRemainingDays(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateRemainingDays() {
    let endDate = Date.parse("Dec 24 2018");
    let currentDate = Date.now();
    let remainingTime = endDate - currentDate;
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    let seconds = Math.floor((remainingTime / 1000) % 60);
    return {
      days: days,
      hours: hours,
      min: minutes,
      sec: seconds
    };
  }
  stop() {
    clearInterval(this.interval);
  }
  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;
    return (
      <div className="App">
        <div className="background">
          <h1>Hack your Future</h1>
          <h3>2018 Christmas Edition</h3>
          <span className="col">
            <strong>{this.addLeadingZeros(countDown.days)}</strong>
            Days
          </span>
          <span className="col">
            <strong> {this.addLeadingZeros(countDown.hours)}</strong>
            hours
          </span>
          <span className="col">
            <strong>{this.addLeadingZeros(countDown.min)}</strong>
            minutes
          </span>
          <span>
            <strong>{this.addLeadingZeros(countDown.sec)}</strong>
            seconds
          </span>
          <SnowFlake />
          <footer className="footer">
            <p>Background Photo by Daniel Reche from Pexels</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
