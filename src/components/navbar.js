import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import '../css/navbar.css';

class Navbar extends Component {

  scrollToSection = idx => {
    const sectionTops = this.props.sections.map(section => document.getElementById(section).offsetTop + window.innerHeight)
    window.scrollTo({ top: sectionTops[idx], behavior: `smooth` })
  }

  navHighlight = () => {
    const sectionTops = this.props.sections.map(section => document.getElementById(section).offsetTop + window.innerHeight)
    this.props.sections.forEach((e, idx) => {
      const navLink = document.getElementById(`${e}-link`).classList
      const lower = sectionTops[idx] - (29 * (idx + 1) + 5)
      const upper = sectionTops[idx + 1] ? sectionTops[idx + 1] - (29 * (idx + 1) + 5) : Infinity
      window.scrollY >= lower && window.scrollY < upper ? navLink.add(`active`) : navLink.remove(`active`)
    })
  }

  componentDidMount = () => {
    setTimeout(() => document.getElementById(`navbar`).classList.remove(`hidden`), 500)
    window.addEventListener(`scroll`, () => this.navHighlight())
  }

  render() {
    return (
      <div id="navbar" className="hidden">
        {this.props.sections.map((link, idx) => {
          return (
            <Link key={link}
              to={`/${link}`}
              id={`${link}-link`}
              onClick={() => this.scrollToSection(idx)}>
              {link}
            </Link>
          )
        })}
      </div>
    );
  }
}

export default withRouter(Navbar);
