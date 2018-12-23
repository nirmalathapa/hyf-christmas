import React from "react";
import CountDown from "./CountDown";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <CountDown
        currentTime={this.state.date}
        finalTime={this.props.finalTime}
        message={this.props.message}
      />
    );
  }
}

export default Clock;
