import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Homepage} />
      </div>
    );
  }
}

export default App;
