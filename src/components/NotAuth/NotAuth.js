import React, { Component } from "react";
class NotAuth extends Component {
  componentDidMount() {
    if (!this.props.isAuth) {
      // alert("Please Login to continue!");
      setTimeout(() => this.props.history.push("/"), 2000);
    }
  }
  render() {
    return (
      <div>
        <h1>Log in required! Going Back Bye Bye!!</h1>
      </div>
    );
  }
}

export default NotAuth;
