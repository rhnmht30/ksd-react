import React, { Component } from "react";

export default class Contests extends Component {
  render() {
    const { contestInfo } = this.props;
    return (
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="card blog__card" style={{ padding: "16px" }}>
          <h6 className="title">{contestInfo.Name}</h6>
          <span className="event_date">{contestInfo.Platform}</span>
          {contestInfo.Duration ? (
            <span className="event_duration">{contestInfo.Duration}</span>
          ) : null}

          <p className="description">
            {contestInfo.StartTime ? (
              <span>
                <b>Start Date</b>
                {":"}
                <span> {String(contestInfo.StartTime)}</span>
              </span>
            ) : null}
            {/* <br style={{ marginBottom: "8px" }} /> */}
            {contestInfo.EndTime ? (
              <span>
                <b>End Date</b>
                {":"}
                <span> {String(contestInfo.EndTime)}</span>
              </span>
            ) : null}
          </p>
          <a
            href={contestInfo.url}
            className="btn-more text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            See More
          </a>
        </div>
      </div>
    );
  }
}
