import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="fluid-container" style={{ paddingBottom: "0" }}>
        <div className="container">
          <div className="jumbotron header mt-4">
            <h3 className="title_home">Welcome to college knowledge</h3>
            <p className="desc">
              We always keep you ahead! Learn and Share your experiences with
              us.
            </p>
          </div>

          <div className="row pb-5">
            <div className="col-lg-8 col-sm-12 col-md-8 pt-2">
              <h1 className="title main__title">
                Code with the <span className="highlight">programmers</span>.
              </h1>
              <p className="description">
                You can easily see the live contest and upcoming contest of
                different platform all together here. Take part in coding
                challenges, crack the leaderboard and groom your skills
                Meanwhile, keep taking part in DSC's coding challenges and get
                chance to win some swags and have your name on our website!{" "}
                <br />
                <br />
                Buckle up and Bear Down!
              </p>

              <Link
                to="/upcoming-contests"
                className="btn btn-primary prime_btn"
              >
                Upcoming Contests
              </Link>
              <Link
                to="/ongoing-contests"
                className="btn btn-outline-info sec_btn"
              >
                Ongoing Contests
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 pt-2">
              <img
                className="logo coding-mojo"
                src="./assets/images/hackerrank.png"
                width="100%"
                alt="developer-student-clubs-kiet"
              />
            </div>
          </div>

          <div className="row pb-5">
            <div className="col-lg-4 col-md-4 col-sm-12 pt-2">
              <img
                className="logo"
                src="./assets/images/img.png"
                alt="developer-student-clubs-kiet"
              />
            </div>

            <div className="col-lg-8 col-sm-12 col-md-8 pt-2">
              <h1 className="title main__title">
                Learn <span className="highlight">faster and better</span> than
                ever.
              </h1>
              <p className="description">
                Are you in search of relevant, mobile, self paced and
                personalized content? This need is fulfilled here; where
                students can learn at their own comfort and requirement. So,
                what are you waiting for?
              </p>

              <Link to="/resources" className="btn btn-primary prime_btn">
                Explore Resources
              </Link>
              {/* <a href="#" className="btn btn-outline-info sec_btn">Ongoing Contests</a>  */}
            </div>
          </div>
        </div>
        <div class="about_kiet">
          <div class="container pt-4 pb-4">
            <div class="row">
              <div class="col-md-9 col-sm-12">
                <h5 class="title" style={{ color: "#fff" }}>
                  About us
                </h5>
                <p class="description" style={{ color: "#fff" }}>
                  Developer Student Club KIET is inspired by Google Developers
                  Family. We started our journey in Feb 2019. We try to engage
                  student developers through our hack events, codelabs and
                  meetups. The motive is to create a local ecosystem of
                  programmers & hackers in and around the Campus. The technology
                  awareness is main goal for first few years of the group.
                </p>
                <a
                  href="https://dsckiet.tech"
                  class="btn btn-outline-dark custom_btn"
                  style={{ fontWeight: "400" }}
                >
                  Visit us at dsckiet.tech
                </a>
              </div>
              <div class="col-md-3 col-sm-12 pt-5">
                <img
                  src="./assets/images/dsc.png"
                  class="coding-mojo"
                  width="100%"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
