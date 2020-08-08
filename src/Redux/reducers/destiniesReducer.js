import { CREATE_DESTINY } from '../actions/actionTypes';

const destinies = (state = [], action) => {
  if (action.type === CREATE_DESTINY) return action.payload;
  return state;
};

export default destinies;