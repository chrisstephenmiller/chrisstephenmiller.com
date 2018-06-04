import React, { Component } from 'react';
import './routes.css'

const albums = [
  { name: `whysowhite - whysowhite (2013)`, link: `180341696` },
  { name: `the positive vibration high frequency calibration sequencer - whysowhite (2015)`, link: `2188654707` },
  { name: `Scary Blankets - Mungion (2016)`, link: `4001214234` },
]

class Music extends Component {
  render() {
    return (
      <div className="music route">
        <span className="title text">These are albums I have played on and/or recorded.</span>
        <div className="albums">
          {albums.map(album => {
            return (
              <div key={album.link} className="album">
                <iframe
                  title={album.name}
                  src={`https://bandcamp.com/EmbeddedPlayer/album=${album.link}/size=large/bgcol=ffffff/linkcol=0059b8/minimal=true/`}
                  className={`embed ${album.name}`}
                  allow="autoplay"
                  seamless
                  frameBorder="0"
                />
                <span className="info">{album.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Music;