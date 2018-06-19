import React, { Component } from 'react';
import { withRouter } from 'react-router'

import '../css/name.css';

class Name extends Component {

  componentDidMount = () => {
    const name = document.getElementById(`name`).classList
    const root = this.props.history.location.pathname.slice(1) === ''
    if (window.scrollY < window.innerHeight && root) setTimeout(() => name.remove(`hidden`), 500)
    window.addEventListener(`scroll`, () => this.nameHider())
  }

  nameHider = () => {
    const { sections } = this.props
    const name = document.getElementById(`name`).classList
    const sectionHeights = sections.map(section => document.getElementById(section).offsetTop + window.innerHeight)
    window.scrollY >= sectionHeights[0] + 50 && window.scrollY <= sectionHeights[sectionHeights.length - 1] - 100 ? name.add(`hidden`) : name.remove(`hidden`)
  }

  render() {
    return (
      <span id="name" className="hidden">chris stephen miller</span>
    );
  }
}

export default withRouter(Name);
