import { CREATE_TRIPS } from '../actions/actionTypes';

const trips = (state = [], action) => {
  if (action.type === CREATE_TRIPS) return action.payload;
  return state;
};

export default trips;
