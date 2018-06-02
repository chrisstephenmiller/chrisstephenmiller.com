import React, { Component } from 'react';
// import './app.css';
import chicago from './chicago.jpg'

const filter = () => {
  const chicago = document.getElementById(`chicago`)
  const blur = window.scrollY ** 1.1 / 500
  const opacity = 1 / (window.scrollY ** 1.2 / window.innerHeight + .9) + .1
  console.log(blur)
  chicago.setAttribute(`style`, `filter: blur(${blur}px); opacity: ${opacity}`)
}

class Background extends Component {
  render() {
    window.addEventListener(`scroll`, () => filter())
    return (
      <div className="background">
        <img
          src={chicago}
          alt="chicago"
          id="chicago" />
      </div>
    );
  }
}

export default Background;
