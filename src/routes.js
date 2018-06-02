import React, { Component } from 'react';
import './routes.css'
import About from './about';
import Code from './code';
import Music from './music';
import Contact from './contact';
import { withRouter } from 'react-router'

class Routes extends Component {

  componentDidMount = () => {
    const links = [`about`, `code`, `music`, `contact`]
    const section = this.props.history.location.pathname.slice(1)
    const idx = links.indexOf(section)
    if (idx > -1) this.props.scrollTo(idx)
  }

  render() {
    return (
      <div className="routes">
        <About />
        <Code />
        <Music />
        <Contact />
      </div>
    );
  }
}

export default withRouter(Routes);
