import { createStore, applyMiddleware, compose } from 'redux';
// import { DevTools } from 'containers';
const middleware = [
];

let enhancer;
if (__DEVTOOLS__ && __DEVELOPMENT__) {
	const { persistState } = require('redux-devtools');
	const DevTools = require('containers/DevTools').default;
	enhancer = compose(
	  applyMiddleware(...middleware),
	  DevTools.instrument(),
	  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
	);
} else {
	enhancer = applyMiddleware(...middleware);
}

const configureStore = (initialState) => {
	const rootReducer = require('reducers').default;
	const store = createStore(rootReducer, initialState, enhancer);

	if (__DEVELOPMENT__ && module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('reducers', () => {
			const nextRootReducer = require('reducers').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

export default configureStore;
