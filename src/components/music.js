import React, { Component } from 'react';

const projects = [
  {
    name: `whysowhite - whysowhite (2013)`,
    link: `180341696`,
    text: `recorded and mixed by chris stephen miller
additional recording by steve rashid
mastered by tom tierney
artwork by devin soisson
    
big nick — vocals 
charlie moonbeam — vocals 
d-pop fantastic — vocals, congas 
dngr — lead guitar 
uncle funk — rhythm guitar 
custom sumberg — bass 
fatphlams levine — drums 
brahmz — percussion 
the shef — keys, vocals`
  },
  {
    name: `the positive vibration high frequency calibration sequencer - whysowhite (2015)`,
    link: `2188654707`,
    text: `recorded and mixed by chris stephen miller
mastered by rick fritz
artwork by dav yendler
    
nick mcmillan — vocals, percussion
davis haines — vocals, percussion
charles haines — vocals
chris miller — guitar, keys
sean carolan — bass
andrew abramowitz — drums
sam taylor — guitar
charlie dwyer — guitar
hannah shefsky — keys, vocals
sir jove — vocals`
  },
  {
    name: `scary blankets - mungion (2016)`,
    link: `4001214234`,
    text: `recorded and mixed by chris stephen miller
additional recording by matt jordan
mastered by rick fritz 
artwork by russell moore and tiffany vedua 
        
justin reckamp — guitar, vox
joe re — organ, synth, piano, vox
sean carolan — upright, electric bass, vox
david collum — drums, percussion, vox`
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
                {project.text.split(`\n`).map(line => <span className="info text">{line}</span>)}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Music;
