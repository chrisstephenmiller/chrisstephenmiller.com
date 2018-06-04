import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const links = [`about`, `code`, `music`, `contact`]

class Navbar extends Component {

  componentDidMount = () => {
    setTimeout(() => document.getElementById(`navbar`).classList.remove(`hidden`), 500)
    this.sections = links.map(e => document.getElementById(`${e}-link`).classList)
    window.addEventListener(`scroll`, () => this.sectionScroller())
  }

  sectionScroller = () => {
    this.sections.forEach((e, idx)=> {
      const lower = window.innerHeight * (idx + 1) - (29 * idx + 35)
      const upper = window.innerHeight * (idx + 2) - (29 * (idx + 1) + 5)
      window.scrollY >= lower && window.scrollY < upper ? e.add(`active`) : e.remove(`active`)
    })
  }

  render() {
    return (
      <div id="navbar" className="hidden">
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
    );
  }
}

export default withRouter(Navbar);
