import React, { Component } from 'react';
import './app.css';
import Background from './background'
import Title from './title'
import Navbar from './navbar';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom'

const sections = [`about`, `code`, `music`, `contact`]

const scrollToSection = idx => {
  const sectionHeights = sections.map(section => document.getElementById(section).clientHeight)
  const scrollDistance = () => {
    let height = 0;
    sectionHeights.forEach((sectionHeight, section) => {
      if (idx >= section) height += sectionHeight
    })
    return height
  }
  window.scrollTo({ top: scrollDistance(), behavior: `smooth` })
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Background />
          <Title />
          <Navbar scrollToSection={scrollToSection} />
          <Routes scrollToSection={scrollToSection} sections={sections} />
        </div>
      </Router>
    );
  }
}

export default App;
