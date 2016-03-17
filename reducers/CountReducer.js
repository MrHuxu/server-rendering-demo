import { COUNT_UP, COUNT_DOWN } from '../actions/CountActions';

export function count(state = {}, action) {
  switch (action.type) {
    case COUNT_UP:
      return {
        num: state.num + 1
      };

    case COUNT_DOWN:
      return {
        num: state.num - 1
      };

    default:
      return state;
  };
};