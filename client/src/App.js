import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>"test"</div>
        <Switch>
          <Route path="/login" component={LoginForm} />
        </Switch>
      </Router>
    );
  }
}
