import React, { Component } from 'react';

import '../css/about.css'

class About extends Component {
  render() {
    return (
      <div id="about" className="route">
        <span className="title text">I am a fullstack web developer and audio engineer living in Chicago, making software that encourages interactivity and engagement, especially in creative spaces.</span>
        <br />
        <span className="subtitle text">A lifelong musician... After receiving a B.A. in Music Technology from Northwestern University in 2011, I worked as the director of customer support for <a className="about-info-link" target="_blank" ref="noopener noreferrer" href="https://www.http://wavemachinelabs.com/">WaveMachine Labs</a> Labs and <a className="about-info-link" target="_blank" ref="noopener noreferrer" href="https://www.reverb.com">Reverb.com</a>. These roles exposed me to the business and operational aspects of developing software and, before long, I wanted to build it myself.</span>
        <span className="subtitle text">I began learning to code and in May of 2018 completed a three-month, immersive web-development course through <a className="about-info-link" target="_blank" ref="noopener noreferrer" href="https://www.fullstackacademy.com/software-engineering-immersive#fullstack-experience">Fullstack Academy</a>. I currently specialize in single-page applications using React and Node.JS, but I enjoy learning new technologies and finding the most appropriate tool for the task-at-hand.</span>
      </div>
    );
  }
}

export default About;
