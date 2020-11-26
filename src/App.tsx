import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Bootstrap grid examples</h1>
          <p className="lead">
            Basic grid layouts to get you familiar with building within the
            Bootstrap grid system.
          </p>
          <p>
            In these examples the <code>.themed-grid-col</code> class is added
            to the columns to add some theming. This is not a class that is
            available in Bootstrap by default.
          </p>

          <h2 className="mt-4">Five grid tiers</h2>
          <p>
            There are five tiers to the Bootstrap grid system, one for each
            range of devices we support. Each tier starts at a minimum viewport
            size and automatically applies to the larger devices unless
            overridden.
          </p>

          <div className="row mb-3">
            <div className="col-4 themed-grid-col">.col-4</div>
            <div className="col-4 themed-grid-col">.col-4</div>
            <div className="col-4 themed-grid-col">.col-4</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
