import { CREATE_SELECTED } from '../actions/actionTypes';

const selected = (state = {}, action) => {
  if (action.type === CREATE_SELECTED) return action.payload;
  return state;
};

export default selected;
