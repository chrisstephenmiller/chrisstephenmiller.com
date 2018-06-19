import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Route path={`${process.env.PUBLIC_URL}/`} component={App} />
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
