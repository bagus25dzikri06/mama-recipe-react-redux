import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers/index';

const middleware = applyMiddleware(logger, promiseMiddleware);
const store = createStore(rootReducer, middleware);

export default store;