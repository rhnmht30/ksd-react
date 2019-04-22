import React, { Component } from "react";
import Resource from "../Resource/Resource";
import axios from "axios";
import * as ROUTES from "./../../utils/Routes";

export default class ResourcesPage extends Component {
  state = {
    resources: [],
    filterOptions: {
      category: {},
      type: {}
    }
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
          const filterOptions = {
            category: {},
            type: {}
          };
          res.data.resources.map(
            resource => (filterOptions["category"][resource.category] = false)
          );
          res.data.resources.map(
            resource => (filterOptions["type"][resource.type] = false)
          );
          console.log(res.data);
          this.setState({ resources: res.data.resources, filterOptions });
        });
    }
  };

  renderFilterOptions = value => {
    const options = Object.keys(this.state.filterOptions[value]);
    return options.map((option, index) => {
      return (
        <div className="form-check" key={index}>
          <input
            className="form-check-input"
            type="checkbox"
            name={option}
            value={this.state.filterOptions[value][option]}
            onChange={() => this.handleFilterChange(value)}
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            {option}
          </label>
        </div>
      );
    });
  };

  handleFilterChange = (e, value) => {
    const val = e.target.checked;
    const name = e.target.name;
    let updateFilterOptions = Object.assign(
      {},
      this.state.filterOptions[value],
      {
        [name]: val
      }
    );
    console.log(updateFilterOptions);
    // this.setState({ filterOptions: updateFilterOptions });
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
              <div className="row">
                <form onSubmit={this.handleSubmit}>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <h6 className="title">Category</h6>
                    {this.renderFilterOptions("category")}
                    <br />
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <h6 className="title">Type</h6>
                    {this.renderFilterOptions("type")}
                    <button type="submit" className="row btn prime_btn">
                      Apply Filter
                    </button>
                    <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
