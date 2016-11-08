import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';

const dest = document.getElementById('app');

ReactDOM.render(
	<AppContainer>
		<Root />
	</AppContainer>, dest);

if (module.hot) {
  module.hot.accept('./Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./Root').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      dest
    );
  })
}
