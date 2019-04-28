import React, { Component } from "react";
import axios from "axios";
import * as ROUTES from "./../../utils/Routes";
import PostOptions from "../PostOptions/PostOptions";

export default class ResourceView extends Component {
  _isMounted = false;
  state = {
    resourceData: {},
    comments: [],
    totalLikes: 0,
    totalComments: 0
  };

  componentDidMount() {
    this._isMounted = true;
    const token = JSON.parse(localStorage.getItem("token")).token;
    const bearerToken = `Bearer ${token}`;
    // "http://localhost:7000/api/v1/resources/view/5cbc726f7337fe48c1892ff9"

    axios
      .get(ROUTES.viewResource + this.props.match.params.id, {
        headers: {
          Authorization: bearerToken
        }
      })
      .then(res => {
        this.setState({
          resourceData: res.data.resources,
          comments: res.data.comments,
          totalLikes: res.data.totalLikes,
          totalComments: res.data.totalComments
        });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    this._isMounted = true;
    const token = JSON.parse(localStorage.getItem("token")).token;
    const bearerToken = `Bearer ${token}`;
    // "http://localhost:7000/api/v1/resources/view/5cbc726f7337fe48c1892ff9"

    axios
      .get(ROUTES.viewResource + this.props.match.params.id, {
        headers: {
          Authorization: bearerToken
        }
      })
      .then(res => {
        if (this._isMounted === true) {
          this.setState({
            comments: res.data.comments,
            totalLikes: res.data.totalLikes,
            totalComments: res.data.totalComments
          });
        }
      })
      .catch(err => console.log(err));
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const resourceData = this.state.resourceData;
    return (
      <div>
        <div className="fluid-container" style={{ paddingBottom: "0" }}>
          <div className="about_section">
            <div className="container pt-4 pb-4">
              <h4 className="title" style={{ color: "#444444" }}>
                {resourceData ? resourceData.name : null}
              </h4>
              <div className="row mt-4">
                <div className="col-sm-12 col-lg-5 col-md-4 col-12">
                  <img
                    width="100%"
                    style={{
                      marginBottom: "16px",
                      border: "2px solid gray",
                      padding: "8px",
                      boxShadow: "0 2px 4px gray",
                      borderRadius: "4px"
                    }}
                    alt=""
                    src={resourceData.img ? resourceData.img.url : null}
                  />
                </div>
                <div className="col-sm-12 col-lg-7 col-md-8 col-12">
                  <p
                    className="description"
                    style={{
                      color: "#444444",
                      fontWeight: "700",
                      marginTop: "0",
                      paddingTop: "0"
                    }}
                  >
                    {resourceData.details ? String(resourceData.details) : null}
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PostOptions
          id={this.props.match.params.id}
          pageType="resources"
          totalLikes={this.state.totalLikes}
          totalComments={this.state.totalComments}
          comments={this.state.comments}
        />
      </div>
    );
  }
}
