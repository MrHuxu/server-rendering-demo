import { combineReducers, createStore } from 'redux';
import { count } from './reducers/CountReducer';

const rootReducer = combineReducers({
  count
});

export const rootStore = createStore(rootReducer);