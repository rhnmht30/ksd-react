import React, { Component } from "react";
import * as ROUTES from "./../../utils/Routes";
import axios from "axios";
export default class ContactPage extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  handleChange = e => {
    const val = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: val });
  };

  handleSubmit = e => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token")).token;
    const bearerToken = `Bearer ${token}`;
    const payload = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    };
    axios
      .post(ROUTES.contact, payload, {
        headers: {
          Authorization: bearerToken
        }
      })
      .then(res => {
        console.log(res.data.message);
        this.setState({ name: "", email: "", phone: "", message: "" });
      })
      .catch(err => console.log(err));
  };

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
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                      id="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      type="email"
                      className="form-control"
                      id="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Mobile No:</label>
                    <input
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                      type="phone"
                      className="form-control"
                      id="phone"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                      type=""
                      className="form-control"
                      id="message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn prime_btn"
                    onClick={this.handleSubmit}
                  >
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
