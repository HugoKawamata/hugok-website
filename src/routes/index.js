import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import AboutMe from '../pages/AboutMe';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/aboutme" component={AboutMe} />
    </Switch>
  );
}