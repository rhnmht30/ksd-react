import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import UpcomingPage from "./components/UpcomingPage/UpcomingPage";
import BlogsPage from "./components/BlogsPage/BlogsPage";
import AdminAuth from "./components/AdminAuth/AdminAuth";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/upcoming-contests" component={UpcomingPage} />
          <Route path="/blogs" component={BlogsPage} />
          <Route path="/admin" component={AdminAuth} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
