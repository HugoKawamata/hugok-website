import React, { Component } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Panels from './Components/Panels';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Navbar />
        <Hero />
        <Panels />
      </div>
    );
  }
}

export default App;
