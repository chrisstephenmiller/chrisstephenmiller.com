import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id="about" className="route">
        <span className="title text">I am a fullstack web developer and audio engineer living in Chicago, Illinois.</span>
        <br />
        <span className="subtitle text">I am inspired by software that encourages interactivity and engagement, especially in creative spaces.</span>
        <br />
        <span className="subtitle text">After receiving a B.A. in Music Technology, I worked in support for multiple music-focused tech-companies. These roles exposed me to the business and operational aspects of developing software and before long I wanted to build it myself, ultimately completing a three-month, immersive web-development course through Fullstack Academy.</span>
        <br />
        <span className="subtitle text">I currently specialize in the JavaScript-based PERN stack, but enjoy learning new technologies and finding the most appropriate tool for the task-at-hand. I am looking for work, ideally in music or another creative field, where I can help build products that aim to inspire and engage their users.</span>
      </div>
    );
  }
}

export default About;
