import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';

const middleware = [
];

const configureStore = (initialState) => {
	const store = createStore(rootReducer, initialState, compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

	return store;
};

export default configureStore;
