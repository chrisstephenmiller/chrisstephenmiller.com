import React, { Component } from 'react';
import './contact.css'
import linkedin from './linkedin.svg'
import github from './github.png'

class Contact extends Component {
  render() {
    return (
      <div className="contact route">
        <span className="title text">Feel free to reach out via <a id="email" href="mailto:chris.stephen.miller@gmail.com">email</a> or check me out here:</span>
        <div id="contact-info">
          <a href="https://linkedin.com/in/chrisstephenmiller" target="_blank" rel="noopener">
            <img id="linkedin" src={linkedin} />
          </a>
          <a id="resume" href="resume.pdf" target="_blank" rel="noopener">
            Resume
          </a>
          <a href="https://github.com/chrisstephenmiller" target="_blank" rel="noopener">
            <img id="github" src={github} />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
