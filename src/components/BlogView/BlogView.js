import React, { Component } from "react";
import axios from "axios";
import * as ROUTES from "./../../utils/Routes";
import PostOptions from "../PostOptions/PostOptions";

export default class BlogView extends Component {
  _isMounted = false;

  state = {
    blogData: {},
    comments: [],
    totalLikes: 0,
    totalComments: 0
  };

  componentDidMount() {
    this._isMounted = true;
    const token = JSON.parse(localStorage.getItem("token")).token;
    const bearerToken = `Bearer ${token}`;
    axios
      .get(ROUTES.viewBlog + this.props.match.params.id, {
        headers: {
          Authorization: bearerToken
        }
      })
      .then(res => {
        this.setState({
          blogData: res.data.blogs,
          comments: res.data.comments,
          totalLikes: res.data.totalLikes,
          totalComments: res.data.totalComments
        });
      })
      .catch(err => console.log(err));
  }
  componentDidUpdate() {
    const token = JSON.parse(localStorage.getItem("token")).token;
    const bearerToken = `Bearer ${token}`;
    axios
      .get(ROUTES.viewBlog + this.props.match.params.id, {
        headers: {
          Authorization: bearerToken
        }
      })
      .then(res => {
        // console.log(res.data.comments, this._isMounted);
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
    const blogData = this.state.blogData;
    return (
      <div>
        <div className="fluid-container" style={{ paddingBottom: "0" }}>
          <div>
            <div className="container pt-4 pb-4">
              <h4 className="title" style={{ color: "#444444" }}>
                {blogData.title}
              </h4>
              <div className="row mt-4">
                <div className="col-sm-12 col-lg-5 col-md-4 col-12">
                  <img
                    width="100%"
                    style={{
                      marginBottom: "16px",
                      border: "2px solid #fff",
                      padding: "1px",
                      boxShadow: "0 2px 4px gray",
                      borderRadius: "4px"
                    }}
                    alt=""
                    src={blogData.img ? blogData.img.url : null}
                  />
                </div>
                <div className="col-sm-12 col-lg-7 col-md-8 col-12">
                  <p
                    className="description"
                    style={{
                      color: "#000000",
                      marginTop: "0",
                      paddingTop: "0"
                    }}
                  >
                    {blogData.details ? String(blogData.details) : null}
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
          pageType="blogs"
          totalLikes={this.state.totalLikes}
          totalComments={this.state.totalComments}
          comments={this.state.comments}
        />
      </div>
    );
  }
}
