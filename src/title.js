import React, { Component } from 'react';
import './title.css';
import { withRouter } from 'react-router'

class Title extends Component {

  componentDidMount = () => {
    const name = document.getElementById(`name`).classList
    if (window.scrollY < 150) setTimeout(() => name.remove(`hidden`), 500)
    window.addEventListener(`scroll`, () => this.nameHider())
  }

  nameHider = () => {
    const name = document.getElementById(`name`).classList
    window.scrollY >= window.innerHeight - 100 ? name.add(`hidden`) : name.remove(`hidden`)
  }

  render() {
    return (
      <div id="title">
        <span id="name"  className="hidden">chris stephen miller</span>
      </div>
    );
  }
}

export default withRouter(Title);
