import React, { Component } from 'react';
import './app.css';
import chicago from './chicago.jpg'
import Navbar from './navbar';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom'

const blur = (window.scrollY / 10) + 10

const scrollTo = idx => {
  const scroll = window.innerHeight * (idx + 1)
  window.scrollTo({ top: scroll, left: 0, behavior: `smooth` })
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <img src={chicago} alt="chicago" className="chicago" style={{ filter: `blur(${blur}px)` }} />
          <Navbar scrollTo={scrollTo} />
          <Routes scrollTo={scrollTo} />
        </div>
      </Router>
    );
  }
}

export default App;
