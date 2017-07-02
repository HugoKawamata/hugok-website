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

  changePage(pagename) {
    this.setState({
      page: pagename
    })
  }


  render() {
    return (
      <div id="app-container">
        <Navbar current={this.state.page} changePage={(name) => this.changePage(name)}/>
        <MainBody current={this.state.page} />
      </div>
    );
  }
}

export default App;
