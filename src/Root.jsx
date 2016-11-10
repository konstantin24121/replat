import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { DevTools } from 'containers';

import getRoutes from 'config/routes';

const renderDevTools = () => {
  if (__DEVELOPMENT__) {
    return <DevTools />
  }
  return null;
}

export default class Root extends React.Component {
	render() {
		const { store, history } = this.props;
		const routes = getRoutes();
		return (
			<Provider store={store} key="provider">
				<div>
					<Router
						/* Когда не работал  HMR и кидал ошибку
						https://github.com/ReactTraining/react-router/issues/2704#issuecomment-256611906
						фараону помогло */
						key={Math.random()}
						history={history}
						routes={routes}
					/>
					{renderDevTools()}
				</div>
			</Provider>
		)
	}
}
