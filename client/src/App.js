import React, { Component } from 'react'
import './App.scss'
import Navbar from './Navbar'
import Home from './Home'
import History from './History'
import Settings from './Settings'
import Report from './Report'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
