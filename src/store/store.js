import { createStore, compose, applyMiddleware } from 'redux';
import createBrowserHistory  from 'history/createBrowserHistory';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import posts from '../data/posts';
import comments from '../data/comments';

import rootReducer from '../reducers/index';

// Creating an object for default data

const defaultState = {
    posts,
    comments
};

const browserHistory = createBrowserHistory();
const historyRouterMiddleware = routerMiddleware(browserHistory)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, defaultState, composeEnhancers(
    applyMiddleware(historyRouterMiddleware)
));

export const history = syncHistoryWithStore(browserHistory, store)

export default store;