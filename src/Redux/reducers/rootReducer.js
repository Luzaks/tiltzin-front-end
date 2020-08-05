import { combineReducers } from 'redux';
import user from './userReducer';
import loggedIn from './loggedInReducer';

const rootReducer = combineReducers({
  user,
  loggedIn
});

export default rootReducer;
