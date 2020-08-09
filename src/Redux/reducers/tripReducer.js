import { CREATE_DATE } from '../actions/actionTypes';

const trip = (state = {}, action) => {
  if (action.type === CREATE_DATE) return action.payload;
  return state;
};

export default trip;
