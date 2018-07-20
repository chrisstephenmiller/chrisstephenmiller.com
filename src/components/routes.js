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

  componentDidMount = () => {
    this.jumpToSection()
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
