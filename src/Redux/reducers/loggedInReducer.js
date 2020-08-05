import { LOGGED_USER } from '../actions/actionTypes';

const loggedIn = (state = [], action) => {
  console.log(action);
  if (action.type === LOGGED_USER) return action.payload;
  return state;
};

export default loggedIn;
