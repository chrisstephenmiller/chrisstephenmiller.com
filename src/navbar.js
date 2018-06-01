import React, { Component } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom'

const links = [`about`, `code`, `music`, `contact`]

const scrollDown = idx => {
  const scroll = window.innerWidth * (idx + 1)
  window.scrollTo({ top: scroll, left: 0, behavior: `smooth` })
}

class Navbar extends Component {

  componentDidMount = () => {
    const flyIns = [`name`, `links`]
    flyIns.forEach(e => setTimeout(() => document.getElementById(e).classList.remove(`hidden`), 500))
  }

  render() {
    return (
      <div className="navbar">
        <span id="name" className="name hidden">chris stephen miller</span>
        <div id="links" className="links hidden">
          {links.map((link, idx) => {
            return (
              <NavLink key={link}
                to={`/${link}`}
                activeClassName="selected"
                className={`${link}-link`}
                onClick={() => scrollDown(idx)}>
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
