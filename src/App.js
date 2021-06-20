import React, { Component } from 'react';
import { Route } from 'react-router';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/PageContent/Home';
import Personal from './Components/PageContent/Personal';
import Projects from './Components/PageContent/Projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "about"
    }
  }

  changePage(pagename) {
    this.setState({
      page: pagename
    })
  }


  render() {
    return (
      <div id="app-container">
        <Navbar current={this.state.page} changePage={(name) => this.changePage(name)}/>
        <Route exact={true} path="/" component={Home} />
        <Route path="/personal" component={Personal} />
        <Route path="/projects" component={Projects} />
      </div>
    );
  }
}

export default App;
