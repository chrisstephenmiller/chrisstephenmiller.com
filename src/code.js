import React, { Component } from 'react';
import './code.css'
import guitars from './guitars.gif'
import jamSession from './session.gif'
import dwellplayd from './dwellplayd.gif'



class Code extends Component {
  render() {
    return (
      <div className="code route">
        <span className="title text">This is where I write about code.</span>
        <div className="projects">
          <img className="jam-session embed" src={jamSession} alt="jam-session"/>
          <img className="guitars embed" src={guitars} alt="guitars"/>
          <img className="dwellplayd embed" src={dwellplayd} alt="dwellplayd"/>
        </div>
      </div>
    );
  }
}

export default Code;
