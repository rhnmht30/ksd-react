import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Resource extends Component {
  render() {
    const resourceData = this.props.resourceData;
    return (
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="card blog__card" style={{ padding: "16px" }}>
          <h6 className="title">{resourceData.name}</h6>
          <span className="event_date">{resourceData.type}</span>
          <p className="description">{String(resourceData.details)}</p>

          <Link
            to={`resource/view/${resourceData._id}`}
            className="btn-more text-center"
          >
            See More
          </Link>
        </div>
      </div>
    );
  }
}
