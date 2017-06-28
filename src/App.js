import React, { Component } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Navbar />
        <Hero />
      </div>
    );
  }
}

export default App;
