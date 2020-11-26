import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/Nav";
import Pages from "./pages/Pages";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />

          <hr />

          <Pages />
        </div>
      </Router>
    );
  }
}

export default App;
