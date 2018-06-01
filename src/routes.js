import React, { Component } from 'react';
import './routes.css'
import About from './about';
import Code from './code';
import Music from './music';
import Contact from './contact';

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <About />
        <Code />
        <Music />
        <Contact />
      </div>
    );
  }
}

export default Routes;
