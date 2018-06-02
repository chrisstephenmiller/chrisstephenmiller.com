import React, { Component } from 'react';
import './app.css';
import Background from './background'
import Navbar from './navbar';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom'

const scrollTo = idx => {
  const scroll = window.innerHeight * (idx + 1)
  window.scrollTo({ top: scroll, left: 0, behavior: `smooth` })
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Background />
          <Navbar scrollTo={scrollTo} />
          <Routes scrollTo={scrollTo} />
        </div>
      </Router>
    );
  }
}

export default App;
