import React, { Component } from "react";

export default class Comment extends Component {
  render() {
    const { comment } = this.props;
    const dateUnformatted = comment.date;
    const d = new Date(dateUnformatted);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const formattedDate = `${
      months[d.getMonth()]
    } ${d.getDate()}, ${d.getFullYear()}`;

    return (
      <div className="list-contacts">
        <div className="showing-contacts">
          <ol className="contact-list">
            <li className="contact-list-item">
              <div
                className="contact-avatar"
                style={{ backgroundImage: `url(${comment.user.img})` }}
              />
              <div className="contact-details">
                <h5>{comment.user.name}</h5>
                <span>{formattedDate}</span>
                <p>{comment.comment}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}
