import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import getRoutes from 'config/routes';
import createStore from 'config/store';

const store = createStore();

export default class Root extends React.Component {
	renderRouter = () => (
		<Router history={browserHistory}>
			{getRoutes()}
		</Router>
	);

	render() {
		return (
			<Provider store={store} key="provider">
				{this.renderRouter()}
			</Provider>
		)
	}
}
