import React, { Component } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import MainBody from './Components/MainBody';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "about"
    }
  }


  render() {
    return (
      <div id="app-container">
        <Navbar current={this.state.page} />
        <MainBody current={this.state.page} />
      </div>
    );
  }
}

export default App;
