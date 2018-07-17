import React, { Component } from 'react';
import chicagoImg from '../assets/chicago.jpg'
import '../css/background.css'

const blur = () => {
  const chicago = document.getElementById(`chicago`)
  const blur = (window.scrollY + 500) ** 1.05 / 500
  chicago.setAttribute(`style`, `filter: blur(${blur}px)`)
}

const colorOpacity = sections => {
  const colors = [`4, 75, 127`, `226, 137, 4`, `149, 25, 12`, `97, 3, 69`, `16, 126, 125`]
  const opacity = Math.min(window.scrollY / (1.5 * window.innerHeight), .70)
  sections.forEach((section, idx) => document.getElementById(section).setAttribute(`style`, `background: linear-gradient(rgb(${colors[idx]}, ${opacity}), rgb(${colors[(idx + 1) % colors.length]}, ${opacity}))`))
}


class Background extends Component {

  render() {
    const sections = [`overlay`, ...this.props.sections]
    window.addEventListener(`scroll`, blur)
    window.addEventListener(`scroll`, () => colorOpacity(sections))
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
