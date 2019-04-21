import React, { Component } from "react";
import Blog from "../Blog/Blog";
import axios from "axios";
import * as ROUTES from "./../../utils/Routes";

export default class BlogsPage extends Component {
  state = {
    blogs: [],
    filterOptions: {}
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
      .then(res => {
        const filterOptions = {};
        res.data.blogs.map(blog => (filterOptions[blog.category] = false));
        this.setState({ blogs: res.data.blogs, filterOptions });
      });
  };

  renderFilterOptions = () => {
    const options = Object.keys(this.state.filterOptions);
    return options.map((option, index) => {
      return (
        <div className="form-check" key={index}>
          <input
            className="form-check-input"
            type="checkbox"
            name={option}
            value={this.state.filterOptions[option]}
            onChange={this.handleFilterChange}
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            {option}
          </label>
        </div>
      );
    });
  };

  handleFilterChange = e => {
    const val = e.target.checked;
    const name = e.target.name;
    let updateFilterOptions = Object.assign({}, this.state.filterOptions, {
      [name]: val
    });
    this.setState({ filterOptions: updateFilterOptions });
  };

  handleSubmit = e => {
    e.preventDefault();
    let filterOptions = this.state.filterOptions;
    let applyFilter = [];
    Object.keys(filterOptions).map(option => {
      if (filterOptions[option] === true) {
        applyFilter.push(option);
      }
      return null;
    });
    const token = JSON.parse(localStorage.getItem("token")).token;
    const bearerToken = `Bearer ${token}`;
    axios
      .post(ROUTES.filterBlog, applyFilter, {
        headers: {
          Authorization: bearerToken
        }
      })
      .then(res => this.setState({ blogs: res.data }));
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
                  <form onSubmit={this.handleSubmit}>
                    {this.renderFilterOptions()}
                    <button type="submit" className="row btn prime_btn">
                      Apply Filter
                    </button>
                  </form>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
