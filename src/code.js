import React, { Component } from 'react';
import './code.css'
import guitars from './guitars.gif'
import jamSession from './session.gif'
import dwellplayd from './dwellplayd.gif'

const projects = [
  { name: `jam-session`, link: "https://github.com/chrisstephenmiller/jam-session", img: jamSession },
  { name: `reverb-react-rainbow`, link: "https://chrisstephenmiller.github.io/react-reverb-rainbow/", img: guitars },
  { name: `dwellplayd`, link: "https://github.com/VCCD/dwellplayd", img: dwellplayd },
]

class Code extends Component {
  render() {
    return (
      <div id="code" className="code route">
        <span className="title text">Applications I have built and/or contributed to:</span>
        <div className="projects">
          {projects.map(project => {
            return (
              <div key={project.name} className="project">
                <a href={project.link} target="_blank" ref="noopener">
                  <img className={`${project.name} embed`} src={project.img} alt={project.name} />
                </a>
                <span className="info">{project.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Code;
