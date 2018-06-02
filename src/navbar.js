import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const links = [`about`, `code`, `music`, `contact`]
let sections = []

class Navbar extends Component {

  componentDidMount = () => {

    const flyIns = [`name`, `links`].map(e => document.getElementById(e).classList)
    if (this.props.history.location.pathname === `/`) flyIns.forEach(e => e.add(`hidden`))
    flyIns.forEach(e => setTimeout(() => e.remove(`hidden`), 500))

    sections = links.map(e => document.getElementById(`${e}-link`).classList)

    window.addEventListener(`scroll`, () => this.scrollTracker())
  }

  scrollTracker = () => {
    const scrollPosition = window.scrollY
    const section = window.innerHeight
    sections.forEach((e, idx)=> {
      const lower = section * (idx + 1) - (40 * idx + 15)
      const upper = section * (idx + 2) - (40 * (idx + 1) + 15)
      scrollPosition >= lower && scrollPosition < upper ? e.add(`test`) : e.remove(`test`)
    })
  }

  render() {

    return (
      <div id="navbar">
        <span id="name">chris stephen miller</span>
        <div id="links">
          {links.map((link, idx) => {
            return (
              <Link key={link}
                to={`/${link}`}
                id={`${link}-link`}
                onClick={() => this.props.scrollTo(idx)}>
                {link}
              </Link>
            )
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
