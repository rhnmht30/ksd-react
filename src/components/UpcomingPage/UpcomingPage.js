import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default class UpcomingPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="fluid-container" style={{ paddingBottom: "0" }}>
          <div class="about_kiet">
            <div class="container pt-4 pb-4">
              <div class="row">
                <div class="col-md-9 col-sm-12">
                  <h5 class="title" style={{ color: "#fff" }}>
                    Upcoming Contests
                  </h5>
                  <p class="description" style={{ color: "#fff" }}>
                    Here you can check all the upcoming coding contests!
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4 col-sm-6 col-12">
                  <div class="card blog__card" style={{ padding: "16px" }}>
                    <h6 class="title">
                      Lorem ipsum dolor sit amet consectetur.
                    </h6>
                    <span class="event_date">hackerrank</span>
                    <span class="event_duration">duration</span>
                    <p class="description">
                      <b>Start Date</b>: Apr 18th 2019
                      <br style={{ marginBottom: "8px" }} />
                      <b>End Date</b>: Apr 18th 2019
                    </p>
                    <a class="btn-more text-center">See More</a>
                  </div>
                </div>

                <div class="col-lg-4 col-sm-6 col-12">
                  <div class="card blog__card" style={{ padding: "16px" }}>
                    <h6 class="title">
                      Lorem ipsum dolor sit amet consectetur.
                    </h6>
                    <span class="event_date">hackerrank</span>
                    <span class="event_duration">duration</span>
                    <p class="description">
                      <b>Start Date</b>: Apr 18th 2019
                      <br style={{ marginBottom: "8px" }} />
                      <b>End Date</b>: Apr 18th 2019
                    </p>
                    <a class="btn-more text-center">See More</a>
                  </div>
                </div>

                <div class="col-lg-4 col-sm-6 col-12">
                  <div class="card blog__card" style={{ padding: "16px" }}>
                    <h6 class="title">
                      Lorem ipsum dolor sit amet consectetur.
                    </h6>
                    <span class="event_date">hackerrank</span>
                    <span class="event_duration">duration</span>
                    <p class="description">
                      <b>Start Date</b>: Apr 18th 2019
                      <br style={{ marginBottom: "8px" }} />
                      <b>End Date</b>: Apr 18th 2019
                    </p>
                    <a href="#" class="btn-more text-center">
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
