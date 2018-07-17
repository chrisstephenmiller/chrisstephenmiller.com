import React, { Component } from 'react';

import '../css/about.css'

class About extends Component {
  render() {
    return (
      <div id="about" className="route">
        <span className="title text">I am a fullstack web developer and audio engineer living in Chicago, Illinois.</span>

        <span className="subtitle text">A lifelong musician, I grew up playing multiple instruments, and as a teenager I bought a four-track tape recorder. I discovered a love for recording and production, one that truly flourished when I started utilizing computers. After receiving a Bachelor of Arts in Music Technology from Northwestern University in 2011, I worked as the director of customer support for <a className="about-info-link" target="_blank" rel="noopener noreferrer" href="http://www.wavemachinelabs.com/">WaveMachine Labs</a> and <a className="about-info-link" target="_blank" rel="noopener noreferrer" href="https://www.reverb.com">Reverb.com</a>. These roles exposed me to the business and operational aspects of developing software and, before long, I wanted to make it myself.</span>

        <span className="subtitle text">I began to code on my own and eventually, in May of 2018, I completed a three-month, immersive web development course through <a className="about-info-link" target="_blank" rel="noopener noreferrer" href="https://www.fullstackacademy.com/software-engineering-immersive#fullstack-experience">Fullstack Academy</a>. It was one of the most challenging, rewarding, and inspiring experiences of my life and it amplified my eagerness to continue learning and creating. Since graduating I have developed or contributed to multiple projects, some of which incorporate music, with a focus on interactivity and collaboration. My current specialty is building single-page applications using React and Node, but I enjoy learning new technologies and finding the most appropriate tool or framework for the task-at-hand.</span>
      </div>
    );
  }
}

export default About;
