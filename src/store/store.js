import { createStore, compose, applyMiddleware } from 'redux';
import { createHistory } from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';

import posts from '../data/posts';
import comments from '../data/comments';

import rootReducer from '../reducers/index';

// Creating an object for default data

const defaultState = {
    posts,
    comments
};

const history = createHistory()
const store = createStore(rootReducer, defaultState, compose(
    applyMiddleware(routerMiddleware(history))
));

export default store;