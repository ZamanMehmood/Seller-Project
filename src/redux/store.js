// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import UserReducer from './reducers/user';
// const thunkMiddleware = require('redux-thunk').default;
// const mainReducer = combineReducers({
//     user: UserReducer,
// });
// const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));
// export default store;


import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';

const middlewares = [thunk];   // To use more middlewares just import the middleware and add in this array seperated by comma
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))
export const store = createStore(
    rootReducer,
    composedEnhancers
    )
export default store 