import React, { Component } from "react";

export default class ContactPage extends Component {
  render() {
    return (
      <div className="fluid-container" style={{ paddingBottom: "0" }}>
        <div className="container">
          <div className="card mt-4">
            <div
              className="row"
              style={{ marginRight: "-16px", marginLeft: "-16px" }}
            >
              <div
                className="col-lg-8 col-md-7 col-12"
                style={{ margin: "0", padding: "0" }}
              >
                <img
                  src="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  width="100%"
                  className="contact__image"
                  height="100%"
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-md-5 col-12 pb-4">
                <h4 className="title mt-4 mb-4">
                  Get in <span className="highlight">Touch</span>.
                </h4>
                <form action="/action_page.php">
                  <div className="form-group">
                    <label for="name">Name:</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label for="phone">Mobile No:</label>
                    <input type="phone" className="form-control" id="phone" />
                  </div>
                  <div className="form-group">
                    <label for="message">Message:</label>
                    <textarea type="" className="form-control" id="message" />
                  </div>
                  <button type="submit" className="btn prime_btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="featured">
          <div className="container pt-4 pb-4">
            <p className="description" style={{ color: "#444444" }}>
              If you have any doubts mail us at dsckiet@gmail.com or contact the
              DSC Core Team Members in the campus.
              <br />
              <br />
              Aakash - 8791431819
              <br />
              Ritwick - 8218290235
            </p>
          </div>
        </div>
      </div>
    );
  }
}
