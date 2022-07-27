import React, { Component } from "react";

export default class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.id, "componentDidMount() called");
  }

  componentDidUpdate() {
    console.log(this.props.id, "componentDidUpdare() called");
  }

  componentWillUnmount() {
    console.log(this.props.id, "componentWillUnmount() called");
  }

  render() {
    return (
      <>
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">{this.props.header}</h4>

          <p className="mb-0">{this.props.message}</p>

          <hr />
        </div>
      </>
    );
  }
}
