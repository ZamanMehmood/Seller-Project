import { createStore, applyMiddleware, combineReducers } from 'redux';
import UserReducer from './reducers/user';
const thunkMiddleware = require('redux-thunk').default;
const mainReducer = combineReducers({
    user: UserReducer,
});
const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));
export default store;