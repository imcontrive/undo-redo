import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ActiveProject from "./components/ActiveProject";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <div className="container">
          <Switch>
            <Route path={`/activeProject/:id`} component={ActiveProject} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
