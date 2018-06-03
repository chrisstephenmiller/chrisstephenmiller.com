import React, { Component } from 'react';
import './routes.css'

class Music extends Component {
  render() {
    return (
      <div className="music route">
        <span className="title text">This is where I write about music.</span>
        <iframe 
        src="https://bandcamp.com/EmbeddedPlayer/album=2188654707/size=large/bgcol=ffffff/linkcol=5eff00/minimal=true/transparent=true/"
        id="iframe"
        allow="autoplay"
        />
      </div>
    )
  }
}

export default Music;
