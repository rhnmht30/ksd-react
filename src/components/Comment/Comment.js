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
                <h3>{comment.user.name}</h3>
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

// _id: "5cba022e33b0ba2312102928"
// ​
// comment: "GOOD"
// ​
// date: "2019-04-28T12:20:11.644Z"
// ​
// for: "5cba0214196c0c2312b7868c"
// ​
// user: {…}
// ​​
// __v: 0
// ​​
// _id: "5cb878da9540fc4776c4ca61"
// ​​
// email: "asdwer"
// ​​
// googleID: "12345"
// ​​
// img: "google.com"
// ​​
// name: "keshav"
// ​​
// role: "admin"
