import React, { Component } from 'react'

import guitars from '../assets/guitars.gif'
import jamSession from '../assets/session.gif'
import dwellplayd from '../assets/dwellplayd.gif'

const projects = [
  {
    name: `jam-session`,
    link: "https://github.com/chrisstephenmiller/jam-session",
    img: jamSession,
    text: `this is a short description, no more than a few lines.`
  },
  {
    name: `reverb-react-rainbow`,
    link: "https://chrisstephenmiller.github.io/react-reverb-rainbow/",
    img: guitars,
    text: `this is a medium description. there will be more than a few lines and some details included about the project.`
  },
  {
    name: `dwellplayd`,
    link: "https://github.com/VCCD/dwellplayd",
    img: dwellplayd,
    text: `this is a long description. there will be a number of lines, significant details, and extra information. it will take up much more real estate than the other descriptions.`
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
                <a href={project.link} target="_blank" ref="noopener">
                  <img className={`${project.name} embed`} src={project.img} alt={project.name} />
                </a>
                <span className="subtitle text">{project.name}</span>
                <span className="info text">{project.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Code;
