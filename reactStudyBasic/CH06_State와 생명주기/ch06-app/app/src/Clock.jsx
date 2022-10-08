import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      age: 25,
    };
  }

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    return (
      <div>
        <h1>hello World</h1>
        <h2>It is{this.state.date.toLocaleTimeString()} </h2>
      </div>
    );
  }
}
