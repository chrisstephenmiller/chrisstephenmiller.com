import React, { Component } from 'react';
import './routes.css'

const albums = [
  { name: `whysowhite`, link: `180341696` },
  { name: `pvhfcs`, link: `2188654707` },
  { name: `scary-blankets`, link: `4001214234` },
]

class Music extends Component {
  render() {
    return (
      <div className="music route">
        <span className="title text">These are albums I recorded.</span>
        <div className="albums">
          {albums.map(album => {
            return (
              <div>
                <iframe
                  src={`https://bandcamp.com/EmbeddedPlayer/album=${album.link}/size=large/bgcol=ffffff/linkcol=5eff00/minimal=true/`}
                  key={album.name}
                  className={`album ${album.name}`}
                  allow="autoplay"
                  seamless
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Music;