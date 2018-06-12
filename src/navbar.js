import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Navbar extends Component {

  scrollToSection = idx => {
    const sectionTops = this.props.sections.map(section => document.getElementById(section).offsetTop + window.innerHeight)
    window.scrollTo({ top: sectionTops[idx], behavior: `smooth` })
  }

  componentDidMount = () => {
    setTimeout(() => document.getElementById(`navbar`).classList.remove(`hidden`), 500)
    window.addEventListener(`scroll`, () => this.navHighlight())
  }

  navHighlight = () => {
    const { sections } = this.props
    const sectionTops = this.props.sections.map(section => document.getElementById(section).offsetTop + window.innerHeight)
    const sectionLinks = sections.map(e => document.getElementById(`${e}-link`).classList)
    sectionLinks.forEach((e, idx) => {
      const lower = sectionTops[idx] - (29 * (idx + 1) + 5)
      const upper = sectionTops[idx + 1] ? sectionTops[idx + 1] - (29 * (idx + 1) + 5) : Infinity
      window.scrollY >= lower && window.scrollY < upper ? e.add(`active`) : e.remove(`active`)
    })
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
