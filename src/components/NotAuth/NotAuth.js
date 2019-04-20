import React, { Component } from "react";
class NotAuth extends Component {
  componentDidMount() {
    if (!this.props.isAuth) {
      alert("Please Login to continue!");
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <h1>Log in required!</h1>
      </div>
    );
  }
}

export default NotAuth;
