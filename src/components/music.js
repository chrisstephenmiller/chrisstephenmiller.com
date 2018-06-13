import React, { Component } from 'react';

const projects = [
  {
    name: `whysowhite - whysowhite (2013)`,
    link: `180341696`,
    text: `this is a short description, no more than a few lines.`
  },
  {
    name: `the positive vibration high frequency calibration sequencer - whysowhite (2015)`,
    link: `2188654707`,
    text: `this is a medium description. there will be more than a few lines and some details included about the project.`
  },
  {
    name: `Scary Blankets - Mungion (2016)`,
    link: `4001214234`,
    text: `this is a long description. there will be a number of lines, significant details, and extra information. it will take up much more real estate than the other descriptions.`
  },
]

class Music extends Component {
  render() {
    return (
      <div id="music" className="route">
        <span className="title text">Albums I have played on and/or recorded:</span>
        <div className="projects">
          {projects.map(project => {
            return (
              <div key={project.link} className="project">
                <iframe
                  title={project.name}
                  src={`https://bandcamp.com/EmbeddedPlayer/album=${project.link}/size=large/bgcol=ffffff/linkcol=0059b8/minimal=true/`}
                  className={`embed ${project.name}`}
                  allow="autoplay"
                  seamless
                  frameBorder="0"
                />
                <span className="subtitle text">{project.name}</span>
                <span className="info text">{project.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Music;
