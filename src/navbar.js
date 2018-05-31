import React, { Component } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom'

const links = [`about`, `code`, `music`, `contact`]

const scrollDown = () => {
  const scroll = window.innerWidth * .35
  window.scrollTo({top: scroll, left: 0, behavior: `smooth`})
}

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <span className="name">chris stephen miller</span>
        <div className="links">
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
