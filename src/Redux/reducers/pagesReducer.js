import { CLICKED_PAGE } from '../actions/actionTypes';

const pages = (state = [], action) => {
  if (action.type === CLICKED_PAGE) return action.payload;
  return state;
};

export default pages;
