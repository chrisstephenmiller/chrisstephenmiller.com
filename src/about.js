import React, { Component } from 'react';
import './routes.css'

class About extends Component {
  render() {
    return (
      <div className="about route">
        <span className="title text">I am a web-developer and fullstack engineer living in Chicago, Illinois.</span>
        <span className="detail text">My passion is building interactive and engaging software that encouarges creativity and collaboration.</span>
        <span className="detail text">Music has always been a significant presence in my life. I grew up playing multiple instruments and, as a teenager, began producing music using computers. After studying Music Technology at Northwestern University, I managed customer support teams for multiple music/audio tech companies, where I developed a desire to build software. I incorporate music in many of my programming projects and enjoy inventing innovative tools for musical creation.</span>
      </div>
    );
  }
}

export default About;
