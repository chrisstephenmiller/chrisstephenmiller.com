import React, { Component } from 'react';
import chicagoImg from '../assets/chicago.jpg'
import '../css/background.css'

const filter = () => {
  const chicago = document.getElementById(`chicago`)
  const blur = window.scrollY ** 1.2 / 500
  chicago.setAttribute(`style`, `filter: blur(${blur}px)`)
}

class Background extends Component {
  render() {
    window.addEventListener(`scroll`, () => filter())
    return (
      <div className="background">
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
