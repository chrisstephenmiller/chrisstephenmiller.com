import React, { Component } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom'

const links = [`about`, `code`, `music`, `contact`]

const scrollDown = () => {
  const scroll = window.innerWidth * .35
  window.scrollTo({top: scroll, left: 0, behavior: `smooth`})
}

class Navbar extends Component {

  componentDidMount = () => {
    setTimeout(() => document.getElementById(`name`).classList.remove(`hidden`), 500)
    setTimeout(() => document.getElementById(`links`).classList.remove(`hidden`), 500)
  }

  render() {
    return (
      <div className="navbar">
        <span id="name" className="name hidden">chris stephen miller</span>
        <div id="links" className="links hidden">
          {links.map(link => {
            return (
              <NavLink key={link}
                to={`/${link}`}
                activeClassName="selected"
                className={`${link}-link`}
                onClick={scrollDown}>
                {link}
              </NavLink>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Navbar;
