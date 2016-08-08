import { combineReducers, createStore } from 'redux';
import reducers from './reducers';

export function customCreateStore(initState) {
  var rootReducer = reducers;
  return createStore(rootReducer, initState);
};