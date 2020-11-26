import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Playground from "./Playground";

export default function Pages() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/playground">
        <Playground />
      </Route>
    </Switch>
  );
}
