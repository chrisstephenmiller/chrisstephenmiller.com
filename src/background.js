import React, { Component } from 'react';
import './app.css';
import chicago from './chicago.jpg'
import Navbar from './navbar';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom'

const filter = () => {
  const chicago = document.getElementById(`chicago`)
  const ratio = window.scrollY / 500 + 1
  chicago && chicago.setAttribute(`style`, `filter: blur(${ratio}px); opacity: ${1/ratio}`)
}

class Background extends Component {
  render() {
    window.addEventListener(`scroll`, () => filter())
    return (
        <div className="background">
          <img src={chicago} alt="chicago" id="chicago" />
        </div>
    );
  }
}

export default Background;
