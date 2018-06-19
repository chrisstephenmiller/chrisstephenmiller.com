import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
            <Route exact path={`${process.env.PUBLIC_URL}/about`} component={App} />
            <Route exact path={`${process.env.PUBLIC_URL}/code`} component={App} />
            <Route exact path={`${process.env.PUBLIC_URL}/music`} component={App} />
            <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={App} />
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
