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
      .then(res => this.setState({ blogs: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="fluid-container" style={{ paddingBottom: "0" }}>
        <div class="about_kiet">
          <div class="container pt-4 pb-4">
            <div class="row">
              <div class="col-md-9 col-sm-12">
                <h5 class="title" style={{ color: "#fff" }}>
                  Blogs
                </h5>
                <p class="description" style={{ color: "#fff" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iste, pariatur.
                </p>
              </div>
            </div>

            <div class="row">
              <Blog />
              <Blog />
              <Blog />
            </div>

            <br />

            <div class="card p-3">
              <div class="row">
                <div class="col-lg-6 col-sm-6 col-12">
                  <h6 class="title">Category</h6>
                  <form action="">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label class="form-check-label" for="defaultCheck1">
                        Web Development
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label class="form-check-label" for="defaultCheck1">
                        Android Development
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label class="form-check-label" for="defaultCheck1">
                        Machine Learning
                      </label>
                    </div>
                  </form>
                  <br />
                </div>
                <button class="row btn prime_btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
