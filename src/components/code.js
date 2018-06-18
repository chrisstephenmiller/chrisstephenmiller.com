import React, { Component } from 'react'

import guitars from '../assets/guitars.gif'
import jamSession from '../assets/session.gif'
import dwellplayd from '../assets/dwellplayd.gif'
import github from '../assets/github.png'

const projects = [
  {
    name: `Jam.Sockets`,
    link: `http://www.jamsockets.com`,
    github: `https://github.com/chrisstephenmiller/jam-session`,
    img: jamSession,
    text: `Jam.Sockets is a web app that provides a platform for users to componse and perform music simultaneously.
    
Built with: 

— React
— Redux
— Node.JS
— Express
— Socket.IO
— WebAudio/WebMIDI

`
  },
  {
    name: `Reverb Rainbow`,
    link: `https://chrisstephenmiller.github.io/react-reverb-rainbow/`,
    github: `https://github.com/chrisstephenmiller/react-reverb-rainbow`,
    img: guitars,
    text: `Reverb Rainbow is a front-end interface designed to bring a more colorful browing experience to Reverb.com's electric guitar colletion.
        
Built with: 

— React
— Node.JS
— Express
— Sequelize
— PostgreSQL

`
  },
  {
    name: `dwellplayd`,
    link: `http://www.dwellplayd.com`,
    github: `https://github.com/VCCD/dwellplayd`,
    img: dwellplayd,
    text: `dwellplayd is a mobile app designed to gamify and incentivize completing communal tasks in a shared living space.
    
Built with: 

— React Native
— Redux
— Node.JS
— Express
— Sequelize
— PostgreSQL

`
  },
]

class Code extends Component {
  render() {
    return (
      <div id="code" className="route">
        <span className="title text">Applications I have built and/or contributed to:</span>
        <div className="projects">
          {projects.map(project => {
            return (
              <div key={project.name} className="project">
                <a href={project.link} target="_blank" ref="noopener noreferrer">
                  <img className={`${project.name} embed`} src={project.img} alt={project.name} />
                </a>
                <span className="subtitle text">{project.name}</span>
                <span className="info text">{project.text}</span>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <div className="contact-btn">
                  <img src={github} alt="github-logo"/>
                </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Code;
