import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import UpcomingPage from "./components/UpcomingPage/UpcomingPage";
import BlogsPage from "./components/BlogsPage/BlogsPage";
import AdminAuth from "./components/AdminAuth/AdminAuth";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/upcoming-contests" component={UpcomingPage} />
        <Route path="/blogs" component={BlogsPage} />
        <Route path="/admin" component={AdminAuth} />
      </div>
    );
  }
}

export default App;
