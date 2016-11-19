import 'babel-polyfill';
import 'config/logger';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';

import Root from './Root';

import createStore from 'config/store';

const dest = document.getElementById('app');
const store = createStore();

ReactDOM.render(
	<AppContainer>
		<Root store={store} history={browserHistory}/>
	</AppContainer>, dest
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./Root').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp store={store} history={browserHistory}/>
      </AppContainer>,
      dest
    );
  })
}
