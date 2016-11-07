import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';

const middleware = [
];

const configureStore = (initialState) => {
	const store = createStore(rootReducer, initialState, compose(
			applyMiddleware(...middleware),
			window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

export default configureStore;
