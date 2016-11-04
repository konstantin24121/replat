import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import getRoutes from 'config/routes';
import createStore from 'config/store';

const dest = document.getElementById('app');
const store = createStore();

const component = (
  <Router history={browserHistory}>
    {getRoutes()}
  </Router>
);

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  dest
);

