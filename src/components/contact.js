import React, { Component } from 'react';

import '../css/contact.css'

import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.png'

class Contact extends Component {
  render() {
    return (
      <div id ="contact" className="route">
        <span className="title text">Feel free to reach out via <a id="email" href="mailto:chris.stephen.miller@gmail.com">email</a> or learn more here:</span>
        <div id="contact-info">
          <a id="linkedin" href="https://linkedin.com/in/chrisstephenmiller" target="_blank" rel="noopener noreferrer">
            <div className="contact-btn">
              <img src={linkedin} alt="linkedin-logo"/>
            </div>
          </a>
          <a id="resume" href="resume.pdf" target="_blank" rel="noopener noreferrer" download>
            <div className="contact-btn">
              <span>Resume</span>
            </div>
          </a>
          <a id="github" href="https://github.com/chrisstephenmiller" target="_blank" rel="noopener noreferrer">
            <div className="contact-btn">
              <img src={github} alt="github-logo"/>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
