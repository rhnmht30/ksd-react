import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Blog extends Component {
  render() {
    const blogData = this.props.blogData;
    return (
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="card blog__card" style={{ padding: "16px" }}>
          <h6 className="title">{blogData.title}</h6>
          <span className="event_date">{blogData.category}</span>
          <p className="description">
            {String(blogData.details).slice(0, 200)}...
          </p>
          <Link
            to={`blog/view/${blogData._id}`}
            className="btn-more text-center"
          >
            See More
          </Link>
        </div>
      </div>
    );
  }
}
