import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class NotAuth extends Component {
  componentDidMount() {
    if (!this.props.isAuth) {
      // alert("Please Login to continue!");
      setTimeout(() => this.props.history.push("/"), 2000);
    }
  }

  render() {
    const responseGoogle = response => {
      this.props.onLogin(response.profileObj);
    };
    return (
      <div class="fluid-container" style={{ paddingBottom: "0" }}>
        <div class="container">
          <div
            class="row mt-3"
            style={{ marginRight: "-16px", marginLeft: "-16px" }}
          >
            <div
              class="col-lg-5 col-md-5 col-12"
              style={{ margin: "0", padding: "0" }}
            >
              <img
                src="../assets/images/403-access-forbidden.png"
                width="100%"
                class="contact__image"
                height="100%"
                alt=""
              />
            </div>
            <div class="col-lg-7 col-md-7 col-12 pb-4 mt-5 pt-5">
              <h2 class="title mb-4">
                Please <span class="highlight">login</span> to continue.
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
