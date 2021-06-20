/* @flow */
import React, { Component } from "react";
import { Route } from "react-router";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Personal from "./screens/Personal";
import Projects from "./screens/Projects";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "about",
    };
  }

  changePage(pagename) {
    this.setState({
      page: pagename,
    });
  }

  render() {
    return (
      <div id="app-container">
        <Navbar
          current={this.state.page}
          changePage={(name) => this.changePage(name)}
        />
        <Route exact path="/" component={Home} />
        <Route path="/personal" component={Personal} />
        <Route path="/projects" component={Projects} />
      </div>
    );
  }
}

export default App;
