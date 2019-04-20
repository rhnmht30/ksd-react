import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default class Navbar extends Component {
  render() {
    const responseGoogle = response => {
      this.props.onLogin(response.profileObj);
    };
    const logout = () => {
      this.props.onLogout();
    };
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
                  <NavLink
                    className="nav-link"
                    to="/contests"
                    activeClassName="active"
                  >
                    Contests
                  </NavLink>
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
                {!this.props.isAuth ? (
                  <GoogleLogin
                    clientId="950041852674-1sj1geobh1fp6bsed16523b203umdtpu.apps.googleusercontent.com"
                    buttonText="Sign in With Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                  />
                ) : (
                  <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
