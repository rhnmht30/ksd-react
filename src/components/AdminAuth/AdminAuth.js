import React, { Component } from "react";
export default class AdminAuth extends Component {
  render() {
    return (
      <div className="fluid-container" style={{ paddingBottom: "0" }}>
        <div class="container">
          <div class="card mt-4">
            <div
              class="row"
              style={{ marginRight: "-16px", marginLeft: "-16px" }}
            >
              <div
                class="col-lg-8 col-md-7 col-12"
                style={{ margin: "0", padding: "0" }}
              >
                <img
                  src="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  width="100%"
                  class="contact__image"
                  height="100%"
                  alt=""
                />
              </div>
              <div class="col-lg-4 col-md-5 col-12 pb-4">
                <h4 class="title mt-4 mb-4">
                  Admin <span class="highlight">Login</span>.
                </h4>
                <form action="/action_page.php">
                  <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" />
                  </div>
                  <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" />
                  </div>

                  <button type="submit" class="btn prime_btn">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}
