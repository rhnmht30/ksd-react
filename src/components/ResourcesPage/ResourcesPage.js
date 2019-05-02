import React, { Component } from "react";
import Resource from "../Resource/Resource";
import axios from "axios";
import * as ROUTES from "./../../utils/Routes";

export default class ResourcesPage extends Component {
  state = {
    resources: [],
    filterByCat: {},
    filterByType: {}
  };

  componentDidMount() {
    this.getAllResources();
  }

  getAllResources = () => {
    const tokenJSON = localStorage.getItem("token");
    if (tokenJSON) {
      const token = JSON.parse(localStorage.getItem("token")).token;
      const bearerToken = `Bearer ${token}`;
      axios
        .get(ROUTES.allResources, {
          headers: {
            Authorization: bearerToken
          }
        })
        .then(res => {
          const filterByCat = {},
            filterByType = {};
          res.data.resources.map(
            resource => (filterByCat[resource.category] = false)
          );
          res.data.resources.map(
            resource => (filterByType[resource.type] = false)
          );
          // console.log(res.data);
          this.setState({
            resources: res.data.resources,
            filterByCat,
            filterByType
          });
          // console.log(this.state.filterOptions);
        });
    }
  };

  renderFilterOptions = value => {
    let filterOptions = "";
    if (value === "category") {
      filterOptions = "filterByCat";
    } else {
      filterOptions = "filterByType";
    }
    const options = Object.keys(this.state[filterOptions]);
    return options.map((option, index) => {
      return (
        <div className="form-check" key={index}>
          <input
            className="form-check-input"
            type="checkbox"
            name={option}
            value={this.state[filterOptions]}
            onChange={e => this.handleFilterChange(e, filterOptions)}
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            {option}
          </label>
        </div>
      );
    });
  };

  handleFilterChange = (e, filterOptions) => {
    const val = e.target.checked;
    const name = e.target.name;
    let updateFilterOptions = Object.assign({}, this.state[filterOptions], {
      [name]: val
    });
    // console.log(e);
    // console.log(val, name);
    // console.log(name, val, this.state[filterOptions], updateFilterOptions);
    // console.log(this.state.filterOptions, this.state.filterOptions[value]);
    this.setState({ [filterOptions]: updateFilterOptions });
  };

  handleSubmit = e => {
    e.preventDefault();

    let { filterByCat, filterByType } = this.state;
    let applyFilter = {
      byCat: [],
      byType: []
    };
    Object.keys(filterByCat).map(option => {
      if (filterByCat[option] === true) {
        applyFilter.byCat.push(option);
      }
      return null;
    });

    Object.keys(filterByType).map(option => {
      if (filterByType[option] === true) {
        applyFilter.byType.push(option);
      }
      return null;
    });

    const token = JSON.parse(localStorage.getItem("token")).token;
    const bearerToken = `Bearer ${token}`;
    // "http://localhost:7002/api/v1/resources"
    axios
      .post(ROUTES.filterBlog, applyFilter, {
        headers: {
          Authorization: bearerToken
        }
      })
      .then(res => {
        if (res.data.message) {
          // console.log("No match!");
          alert("No match found! Try again");
        } else {
          this.setState({ resources: res.data });
        }
      });
  };

  render() {
    const resources = this.state.resources;
    return (
      <div className="fluid-container" style={{ paddingBottom: "0" }}>
        <div className="about_kiet">
          <div className="container pt-4 pb-4">
            <div className="row">
              <div className="col-md-9 col-sm-12">
                <h5 className="title" style={{ color: "#fff" }}>
                  Resources
                </h5>
                <p className="description" style={{ color: "#fff" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iste, pariatur.
                </p>
              </div>
            </div>

            <div className="row">
              {resources
                ? resources.map((resource, index) => (
                    <Resource key={index} resourceData={resource} />
                  ))
                : null}
            </div>

            <br />

            <div className="card p-3">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12">
                    <h6 className="title">Category</h6>
                    {this.renderFilterOptions("category")}
                    <br />
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <h6 className="title">Type</h6>
                    {this.renderFilterOptions("type")}
                    <br />
                  </div>
                  <button type="submit" className="row btn prime_btn">
                    Apply Filter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
