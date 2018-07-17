import React, { Component } from 'react';
import chicagoImg from '../assets/chicago.jpg'
import '../css/background.css'

const filter = () => {
  const chicago = document.getElementById(`chicago`)
  const blur = (window.scrollY + 500) ** 1.05 / 500
  chicago.setAttribute(`style`, `filter: blur(${blur}px)`)
}

const backgroundOpacity = () => {
  const opacity = Math.min(window.scrollY / window.innerHeight, .70)
  document.getElementById(`overlay`).setAttribute(`style`, `background: linear-gradient(rgb(${colors[4]}, ${opacity}), rgb(${colors[0]}, ${opacity}))`)
  document.getElementById(`about`).setAttribute(`style`, `background: linear-gradient(rgb(${colors[0]}, ${opacity}), rgb(${colors[1]}, ${opacity}))`)
  document.getElementById(`code`).setAttribute(`style`, `background: linear-gradient(rgb(${colors[1]}, ${opacity}), rgb(${colors[2]}, ${opacity}))`)
  document.getElementById(`music`).setAttribute(`style`, `background: linear-gradient(rgb(${colors[2]}, ${opacity}), rgb(${colors[3]}, ${opacity}))`)
  document.getElementById(`contact`).setAttribute(`style`, `background: linear-gradient(rgb(${colors[3]}, ${opacity}), rgb(${colors[4]}, ${opacity}))`)
}

const colors = [`229, 111, 0`, `200, 81, 0`, `199, 0, 101`, `99, 0, 190`, `0, 92, 189`]

class Background extends Component {

  render() {
    window.addEventListener(`scroll`, () => filter())
    window.addEventListener(`scroll`, () => backgroundOpacity())
    return (
      <div className="background">
        <div id="overlay">
        </div>
        <img
          src={chicagoImg}
          alt="chicago"
          id="chicago"
        />
      </div>
    );
  }
}

export default Background;
