import React, { Component } from 'react';
import './app.css';
import Background from './background'
import Title from './title'
import Navbar from './navbar';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom'

const scrollTo = section => {
  const scroll = window.innerHeight * (section + 1)
  window.scrollTo({ top: scroll, behavior: `smooth` })
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Background />
          <Title />
          <Navbar scrollTo={scrollTo} />
          <Routes scrollTo={scrollTo} />
        </div>
      </Router>
    );
  }
}

export default App;
