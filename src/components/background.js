import React, { Component } from 'react';
import chicagoImg from '../assets/chicago.jpg'
import '../css/background.css'

const filter = () => {
  const chicago = document.getElementById(`chicago`)
  const blur = window.scrollY ** 1.2 / 500
  chicago.setAttribute(`style`, `filter: blur(${blur}px)`)
}

const scrollOpacity = () => {
  const opacity = Math.min(window.scrollY / window.innerHeight, .75)
  document.getElementById(`overlay`).setAttribute(`style`, `opacity: ${opacity}; background: linear-gradient(#${colors[0]}, #${colors[1]}, #${colors[2]})`)
}

const colors = `000000-e28904-95190c-610345-107e7d-044b7f`.split(`-`)

const setColors = () => {
  document.getElementById(`overlay`).setAttribute(`style`, `background: linear-gradient(#${colors[0]}, #${colors[1]}, #${colors[2]})`)
  document.getElementById(`about`).setAttribute(`style`, `background: linear-gradient(#${colors[2]}, #${colors[3]}, #${colors[4]})`)
  document.getElementById(`code`).setAttribute(`style`, `background: linear-gradient(#${colors[4]}, #${colors[5]}, #${colors[1]})`)
  document.getElementById(`music`).setAttribute(`style`, `background: linear-gradient(#${colors[1]}, #${colors[2]}, #${colors[3]})`)
  document.getElementById(`contact`).setAttribute(`style`, `background: linear-gradient(#${colors[3]}, #${colors[4]}, #${colors[5]})`)
}

class Background extends Component {

  componentDidMount = () => {
    setColors()
  }

  render() {
    window.addEventListener(`scroll`, () => filter())
    window.addEventListener(`scroll`, () => scrollOpacity())
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
