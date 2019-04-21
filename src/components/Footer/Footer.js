import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="contactus">
          <div className="container pt-4 pb-4">
            <div className="row">
              <div className="col-md-3 mb-4">
                <h5 className="title" style={{ color: "#444444" }}>
                  Our Content
                </h5>
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/contests">Contests</Link>
                </li>
              </div>

              <div className="col-md-3 mb-4">
                <h5 className="title" style={{ color: "#444444" }}>
                  Contact
                </h5>
                <li>
                  <a
                    href="mailto:dsckiet@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dsckiet@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="http://medium.com/@dsckiet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    medium.com/@dsckiet
                  </a>
                </li>
                <li>
                  <a
                    href="http://facebook.com/dsckiet/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    fb.me/dsckiet
                  </a>
                </li>
                <li>
                  <a
                    href="http://instagram.com/dsckiet/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    instagram.com/dsckiet
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-center"
          style={{
            color: "#fff",
            fontSize: "14px",
            padding: "8px",
            background: "#4C4A78"
          }}
        >
          <p style={{ margin: "0", padding: "0" }}>
            Designed and Developed by DSC KIET
          </p>
        </div>
      </div>
    );
  }
}
