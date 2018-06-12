import React, { Component } from 'react';
import './routes.css'
import About from './about';
import Code from './code';
import Music from './music';
import Contact from './contact';
import { withRouter } from 'react-router'

const scrollOpacity = () => {
  const routes = document.getElementById(`routes`)
  const opacity = () => {
    const value = window.scrollY / window.innerHeight
    return value < .8 ? value : .8
  }
  routes.setAttribute(`style`, `opacity: ${opacity()}`)
}

class Routes extends Component {

  jumpToSection = idx => {
    const sectionHeights = this.props.sections.map(section => document.getElementById(section).offsetTop + window.innerHeight)
    window.scrollTo({ top: sectionHeights[idx] })
  }

  componentDidMount = () => {
    const { history, sections } = this.props
    const sectionPath = sections.indexOf(history.location.pathname.slice(1))
    if (sectionPath > -1) this.jumpToSection(sectionPath)
    window.addEventListener(`scroll`, () => scrollOpacity())
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
