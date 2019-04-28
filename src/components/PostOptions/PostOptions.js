import React, { Component } from "react";
import "./PostOptions.css";
import Comment from "../Comment/Comment";
import * as ROUTES from "./../../utils/Routes";
import axios from "axios";

export default class PostOptions extends Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    // const val = e.target.checked;
    // const name = e.target.name;
    // let updateFilterOptions = Object.assign({}, this.state.filterOptions, {
    //   [name]: val
    // });
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token")).token;
    const bearerToken = `Bearer ${token}`;
    let url = "";
    if (this.props.pageType === "blogs") {
      url = ROUTES.commentBlog;
    } else {
      url = ROUTES.commentResource;
    }
    const payload = {
      comment: this.state.comment
    };
    axios
      .post(url + this.props.id, payload, {
        headers: {
          Authorization: bearerToken
        }
      })
      .then(res => {
        console.log(res.data.message);
        this.setState({ comment: "" });
      })
      .catch(err => console.log(err));
  };

  handleLikeClick = e => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token")).token;
    const bearerToken = `Bearer ${token}`;
    let url = "";
    if (this.props.pageType === "blogs") {
      url = ROUTES.likeBlog;
    } else {
      url = ROUTES.likeResource;
    }

    axios
      .get(url + this.props.id, {
        headers: {
          Authorization: bearerToken
        }
      })
      .then(res => {
        console.log(res.data.message);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { comments } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-unstyled">
              <li className="options-list">
                <button
                  className="btn btn-outline-danger"
                  onClick={this.handleLikeClick}
                >
                  <i className="fa fa-thumbs-up" /> {this.props.totalLikes}
                </button>
              </li>
              <li className="options-list">
                <button className="btn btn-outline-warning">
                  <i className="fa fa-comment" /> {this.props.totalComments}
                </button>
              </li>
              {/* <li className="options-list">
                <button className="btn btn-outline-info">
                  <i className="fa fa-share-alt" />
                </button>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1>Leave a comment !</h1>
            <form action="/action_page.php">
              <div className="form-group">
                <label htmlFor="message">Comment:</label>
                <textarea
                  type=""
                  className="form-control"
                  id="message"
                  value={this.state.comment}
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn prime_btn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {comments.length > 0 ? (
              <h2 style={{ marginTop: "20px" }}>Recent comments !</h2>
            ) : null}
            {comments
              ? comments.map(comment => (
                  <Comment key={comment._id} comment={comment} />
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
}
