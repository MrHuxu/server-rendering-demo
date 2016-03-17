import { combineReducers, createStore } from 'redux';
import { count } from './reducers/CountReducer';

const rootReducer = combineReducers({
  count
});

var initState = (typeof window === 'undefined') ? {} : JSON.parse(unescape(window.__REDUX_INIT_STATE__));

export const rootStore = createStore(rootReducer, initState);