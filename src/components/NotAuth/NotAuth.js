import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class NotAuth extends Component {
  componentDidUpdate() {
    if (this.props.isAuth) {
      const afterAuthRoute = this.props.history.location.state.from.pathname;
      this.props.history.push(afterAuthRoute);
    }
  }

  render() {
    const responseGoogle = response => {
      this.props.onLogin(response.profileObj);
    };
    return (
      <div className="fluid-container" style={{ paddingBottom: "0" }}>
        <div className="container">
          <div
            className="row mt-3"
            style={{ marginRight: "-16px", marginLeft: "-16px" }}
          >
            <div
              className="col-lg-5 col-md-5 col-12"
              style={{ margin: "0", padding: "0" }}
            >
              <img
                src="../assets/images/403-access-forbidden.png"
                width="100%"
                className="contact__image"
                height="100%"
                alt=""
              />
            </div>
            <div className="col-lg-7 col-md-7 col-12 pb-4 mt-5 pt-5">
              <h2 className="title mb-4">
                Please <span className="highlight">login</span> to continue.
              </h2>
              <GoogleLogin
                clientId="950041852674-1sj1geobh1fp6bsed16523b203umdtpu.apps.googleusercontent.com"
                buttonText="Sign in With Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotAuth;
