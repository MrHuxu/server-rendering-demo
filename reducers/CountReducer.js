import { COUNT_UP, COUNT_DOWN } from '../actions/CountActions';

export function count(state = {
  count: 10
}, action) {
  switch (action.type) {
    case COUNT_UP:
      return {
        count: state.count + 1
      };

    case COUNT_DOWN:
      return {
        count: state.count - 1
      };

    default:
      return state;
  };
};