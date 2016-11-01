import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import getRoutes from 'config/routes';

const dest = document.getElementById('app');

const component = (
  <Router>
    {getRoutes()}
  </Router>
);

ReactDOM.render(
  <Provider key="provider">
    {component}
  </Provider>,
  dest
);

