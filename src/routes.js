import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './routes.css'
import About from './about';

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Route path='/' component={About} />
      </div>
    );
  }
}

export default Routes;
