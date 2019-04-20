import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import ContestsPage from "./components/ContestsPage/ContestsPage";
import BlogsPage from "./components/BlogsPage/BlogsPage";
import AdminAuth from "./components/AdminAuth/AdminAuth";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotAuth from "./components/NotAuth/NotAuth";
import * as ROUTES from "./utils/Routes";
import axios from "axios";

const ProtectedRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    isAuth={isAuth}
    {...rest}
    render={props =>
      isAuth === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/notAuth", state: { from: props.location } }}
        />
      )
    }
  />
);
class App extends Component {
  state = {
    isAuthenticated: false,
    user: null
  };

  componentDidMount() {
    axios.get(ROUTES.startHeroku).then(res => {
      this.protectedRoute();
      console.log("API online on heroku");
    });
  }

  protectedRoute = () => {
    const tokenJSON = localStorage.getItem("token");
    if (tokenJSON) {
      const token = JSON.parse(tokenJSON).token;
      const bearerToken = `Bearer ${token}`;
      axios
        .get(ROUTES.protectedRoute, {
          headers: {
            Authorization: bearerToken
          }
        })
        .then(res => this.setState({ isAuthenticated: true, user: res.data }))
        .catch(err => console.log(err));
    } else {
      console.log("not Logged in");
    }
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
          <Route
            path="/contests/:id"
            render={({ match }) => <ContestsPage match={match} />}
          />
          <Route path="/contests" component={ContestsPage} />
          <ProtectedRoute
            isAuth={this.state.isAuthenticated}
            path="/blogs"
            component={BlogsPage}
          />
          <ProtectedRoute path="/admin" component={AdminAuth} />
          <Route
            path="/notAuth"
            render={({ history }) => (
              <NotAuth isAuth={this.state.isAuthenticated} history={history} />
            )}
          />
        </Switch>
        <Footer />
        <button onClick={this.protectedRoute}>Protected</button>
      </div>
    );
  }
}

export default App;
