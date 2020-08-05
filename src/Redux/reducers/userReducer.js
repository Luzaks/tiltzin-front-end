import { NEW_USER } from '../actions/actionTypes';

const user = (state = [], action) => {
  if (action.type === NEW_USER) return action.payload;
  return state;
};

export default user;
