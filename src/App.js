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
import * as ROUTES from "./utils/Routes";
import axios from "axios";
class App extends Component {
  state = {
    isAuthenticated: false,
    user: null
  };

  componentDidMount() {
    axios
      .get(ROUTES.startHeroku)
      .then(res => console.log("API online on heroku"));
  }

  protectedRoute = () => {
    const token = JSON.parse(localStorage.getItem("token")).token;
    const bearerToken = `Bearer ${token}`;
    axios
      .get(ROUTES.protectedRoute, {
        headers: {
          Authorization: bearerToken
        }
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  handleLogin = userData => {
    axios.post(ROUTES.loginToken, userData).then(res => {
      localStorage.setItem("token", JSON.stringify(res.data));
      this.setState({
        isAuthenticated: true,
        user: userData
      });
    });
  };

  handleLogout = () => {
    this.setState({ isAuthenticated: false, user: null });
    localStorage.removeItem("token");
  };

  render() {
    return (
      <div className="App">
        <Navbar
          isAuth={this.state.isAuthenticated}
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/upcoming-contests" component={UpcomingPage} />
          <Route path="/blogs" component={BlogsPage} />
          <Route path="/admin" component={AdminAuth} />
        </Switch>
        <Footer />
        <button onClick={this.protectedRoute}>Protected</button>
      </div>
    );
  }
}

export default App;
