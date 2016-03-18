import { combineReducers } from 'redux';
import { count } from './CountReducer';

const rootReducer = combineReducers({
  count
});

export default rootReducer;