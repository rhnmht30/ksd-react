import React, { Component } from "react";
import Blog from "../Blog/Blog";
import axios from "axios";
import * as ROUTES from "./../../utils/Routes";

export default class BlogsPage extends Component {
  state = {
    blogs: null
  };

  componentDidMount() {
    this.getAllBlogs();
  }

  getAllBlogs = () => {
    const token = JSON.parse(localStorage.getItem("token")).token;
    const bearerToken = `Bearer ${token}`;
    axios
      .get(ROUTES.allBlogs, {
        headers: {
          Authorization: bearerToken
        }
      })
      .then(res => this.setState({ blogs: res.data.blogs }))
      .catch(err => console.log(err));
  };

  render() {
    const blogs = this.state.blogs;
    return (
      <div className="fluid-container" style={{ paddingBottom: "0" }}>
        <div className="about_kiet">
          <div className="container pt-4 pb-4">
            <div className="row">
              <div className="col-md-9 col-sm-12">
                <h5 className="title" style={{ color: "#fff" }}>
                  Blogs
                </h5>
                <p className="description" style={{ color: "#fff" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iste, pariatur.
                </p>
              </div>
            </div>

            <div className="row">
              {blogs
                ? blogs.map((blog, index) => (
                    <Blog key={index} blogData={blog} />
                  ))
                : null}
            </div>

            <br />

            <div className="card p-3">
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-12">
                  <h6 className="title">Category</h6>
                  <form action="">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        Web Development
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        Android Development
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        Machine Learning
                      </label>
                    </div>
                  </form>
                  <br />
                </div>
                <button className="row btn prime_btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
