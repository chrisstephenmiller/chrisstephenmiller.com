import React, { Component } from 'react';
import './app.css';
import Background from './background'
import Title from './title'
import Navbar from './navbar';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom'

const sections = [`about`, `code`, `music`, `contact`]

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Background />
          <Title />
          <Navbar sections={sections} />
          <Routes sections={sections} />
        </div>
      </Router>
    );
  }
}

export default App;
