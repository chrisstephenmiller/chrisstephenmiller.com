import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom'

import '../css/app.css';

import Background from './background'
import Name from './name'
import Navbar from './navbar';
import Routes from './routes';

const sections = [`about`, `code`, `music`, `contact`]

class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
          <Background sections={sections}/>
          <Name sections={sections} />
          <Navbar sections={sections} />
          <Routes sections={sections} />
        </div>
      </Router>
    );
  }
}

export default App;
