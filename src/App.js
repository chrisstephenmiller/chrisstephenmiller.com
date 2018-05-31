import React, { Component } from 'react';
import './app.css';
import chicago from './chicago.jpg'
import Navbar from './navbar';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <img src={chicago} alt="chicago" className="chicago" />
          <Navbar />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
