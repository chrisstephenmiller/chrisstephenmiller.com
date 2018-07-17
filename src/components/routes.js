import React, { Component } from 'react';
import { withRouter } from 'react-router'

import '../css/routes.css'
import '../css/projects.css'

import About from './about';
import Code from './code';
import Music from './music';
import Contact from './contact';

class Routes extends Component {

  jumpToSection = () => {
    const { history, sections } = this.props
    const sectionHeights = sections.map(section => document.getElementById(section).offsetTop + window.innerHeight)
    const sectionPath = sections.indexOf(history.location.pathname.slice(1))
    if (sectionPath > -1) window.scrollTo({ top: sectionHeights[sectionPath] })
  }

  // scrollOpacity = () => {
  //   const opacity = Math.min(window.scrollY / window.innerHeight, .80)
  //   document.getElementById(`routes`).setAttribute(`style`, `opacity: ${opacity}`)
  // }

  componentDidMount = () => {
    this.jumpToSection()
    // window.addEventListener(`scroll`, () => this.scrollOpacity())
  }

  render() {
    return (
      <div id="routes">
        <About />
        <Code />
        <Music />
        <Contact />
      </div>
    );
  }
}

export default withRouter(Routes);
