import { CREATE_TRIP } from '../actions/actionTypes';

const created = (state = {}, action) => {
  if (action.type === CREATE_TRIP) return action.payload;
  return state;
};

export default created;
