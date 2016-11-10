import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import { DevTools } from 'containers';

const middleware = [
];

const enhancer = compose(
  applyMiddleware(...middleware),
  DevTools.instrument()
);

const configureStore = (initialState) => {
	const store = createStore(rootReducer, initialState, enhancer);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers/index').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

export default configureStore;
