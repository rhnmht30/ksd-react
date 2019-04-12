import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div class="col-lg-4 col-sm-6 col-12">
        <div class="card blog__card" style={{ padding: "16px" }}>
          <h6 class="title">Lorem ipsum dolor sit amet consectetur.</h6>
          <span class="event_date">web development</span>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            qui eligendi aperiam! Harum doloribus omnis totam magnam alias nisi,
            praesentium iusto vitae quia! Doloribus asperiores enim dolores odit
            quasi labore!
          </p>
          <a href="https://dsckiet.tech" class="btn-more text-center">
            See More
          </a>
        </div>
      </div>
    );
  }
}
