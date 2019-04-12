import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{
            boxShadow: "2px 0px 6px #707070",
            background: "#fff!important"
          }}
        >
          <div className="container">
            <Link to="/" className="navbar-brand" style={{ fontWeight: "700" }}>
              college knowledge
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav mr-auto nav justify-content-end custom_nav"
                style={{ width: "100%" }}
              >
                <li className="nav-item">
                  <NavLink
                    to="/"
                    exact
                    activeClassName="active"
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/blogs"
                    activeClassName="active"
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Contests
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink
                      className="dropdown-item"
                      to="/upcoming-contests"
                      activeClassName="active"
                    >
                      Upcoming Contests
                    </NavLink>
                    <div className="dropdown-divider" />
                    <NavLink
                      className="dropdown-item"
                      to="/ongoing-contests"
                      activeClassName="active"
                    >
                      Ongoing Contests
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/resources"
                    activeClassName="active"
                  >
                    Resources
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/contact"
                    activeClassName="active"
                  >
                    Contact
                  </NavLink>
                </li>
                <button
                  className="btn prime_btn"
                  style={{ background: "#fff", color: "#707070" }}
                >
                  <i className="fab fa-google" style={{ color: "#F02200" }} />{" "}
                  Sign in with Google
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
