/* @flow */
import React from "react";
import { Route } from "react-router";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Personal from "./screens/Personal";
import Projects from "./screens/Projects";

type Props = {||};

function App(props: Props) {
  return (
    <div id="app-container">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/personal" component={Personal} />
      <Route path="/projects" component={Projects} />
    </div>
  );
}

export default App;
